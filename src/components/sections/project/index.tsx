import React, { useEffect, useState } from "react";
import map from "lodash/map";
import join from "lodash/join";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { faFolder, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { useProjectsQuery } from "../../../graphql/queries/projects";
import { StackedCarousel } from "../../stacked-carousel";
import * as S from "./index.styled";
import { setInitialStateForAllFlipCards } from "../../../utils/flip-card";
import { ActionProps } from "../../flip-card";

interface ProjectProps {
  id: string;
  enterLeft: boolean;
}

export const ProjectSection: React.FC<ProjectProps> = ({ enterLeft, id }) => {
  const data = useProjectsQuery();
  const [flipCardStates, setFlipCardStates] = useState(
    setInitialStateForAllFlipCards(data.allMdx.nodes)
  );

  useEffect(() => {
    setFlipCardStates(setInitialStateForAllFlipCards(data.allMdx.nodes));
  }, [data]);

  return (
    <S.ProjectsSection id={id}>
      <S.StyledReactScrollContainer
        scrollOptions={{ id: "hero", durationMs: 500, offset: -120 }}
        scrollAnimOptions={{
          direction: enterLeft ? "left" : "right",
          delay: 200,
          duration: 2000,
          fraction: 0.1,
          big: true,
        }}
      >
        <S.CardsContainer>
          {map(data.allMdx.nodes, (proj, idx) => {
            const images = map(proj.frontmatter?.images, imgData => {
              if (imgData) {
                const image = getImage(imgData as IGatsbyImageData);
                return (
                  image && (
                    <GatsbyImage
                      alt="Pictures related to this project"
                      image={image}
                      imgStyle={{ objectFit: "contain" }}
                      style={{ height: "100%", width: "100%" }}
                      key={`${idx}gatsbyImage`}
                    />
                  )
                );
              }
              return <></>;
            });

            const extraActions: ActionProps[] = [];
            const url = proj.frontmatter?.url;
            const repo = proj.frontmatter?.repo;

            if (url)
              extraActions.push({
                icon: faGlobeAsia,
                href: url,
              });

            if (repo)
              extraActions.push({
                icon: faFolder,
                href: repo,
              });

            return (
              <S.FlexedFlipCard
                key={idx}
                flippedClassName="flipped-card"
                isFlipped={!!flipCardStates[idx]}
                extraActions={extraActions}
                onFlip={() =>
                  setFlipCardStates(prev => ({
                    ...prev,
                    [idx]: !prev[idx],
                  }))
                }
                hasInteractivity
              >
                <S.FrontCard>
                  <S.MainHeader>{proj.frontmatter?.name}</S.MainHeader>
                  <S.Subheader>Status: {proj.frontmatter?.status}</S.Subheader>
                  <S.Tags>{join(proj.frontmatter?.tags, ", ")}</S.Tags>
                </S.FrontCard>
                <S.BackCard>
                  <S.MainHeader>{proj.frontmatter?.name}</S.MainHeader>
                  <S.Subheader>Status: {proj.frontmatter?.status}</S.Subheader>
                  <S.Tags>{join(proj.frontmatter?.tags, ", ")}</S.Tags>
                  <StackedCarousel visibleItems={3}>{images}</StackedCarousel>
                  <S.Body>
                    <MDXRenderer>{proj.body}</MDXRenderer>
                  </S.Body>
                </S.BackCard>
              </S.FlexedFlipCard>
            );
          })}
        </S.CardsContainer>
      </S.StyledReactScrollContainer>
    </S.ProjectsSection>
  );
};
