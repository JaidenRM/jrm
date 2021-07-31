import React from "react";
import map from "lodash/map";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useProjectsQuery } from "../../../graphql/queries/projects";
import { StackedCarousel } from "../../stacked-carousel";
import * as S from "./index.styled";

export const ProjectSection: React.FC = () => {
  const data = useProjectsQuery();

  return (
    <S.CardsContainer>
      {map(data.allMdx.nodes, (proj, idx) => {
        const images = map(proj.frontmatter?.images, imgData => {
          if (imgData) {
            const image = getImage(imgData as IGatsbyImageData);
            return (
              image && (
                <GatsbyImage
                  alt="text"
                  image={image}
                  imgStyle={{ objectFit: "contain" }}
                  style={{ height: "100%", width: "100%" }}
                />
              )
            );
          }
          return <></>;
        });

        return (
          <S.FlexedFlipCard key={idx} flippedClassName="flipped-card">
            <S.FrontCard>
              <h1>{proj.frontmatter?.name}</h1>
              <h3>Status: {proj.frontmatter?.status}</h3>
              <h4>{proj.frontmatter?.tags?.join(", ")}</h4>
            </S.FrontCard>
            <S.BackCard>
              <h1>{proj.frontmatter?.name}</h1>
              <h3>Status: {proj.frontmatter?.status}</h3>
              <h4>{proj.frontmatter?.tags?.join(", ")}</h4>
              <StackedCarousel visibleItems={3}>{images}</StackedCarousel>
              <MDXRenderer>{proj.body}</MDXRenderer>
            </S.BackCard>
          </S.FlexedFlipCard>
        );
      })}
    </S.CardsContainer>
  );
};
