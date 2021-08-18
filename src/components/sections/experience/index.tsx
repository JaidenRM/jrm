import React, { useEffect, useState } from "react";
import map from "lodash/map";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as S from "./index.styled";
import { useExperiencesQuery } from "../../../graphql/queries/experiences";

interface ExperienceProps {
  id: string;
  enterLeft: boolean;
}

export const ExperienceSection: React.FC<ExperienceProps> = ({
  enterLeft,
  id,
}) => {
  const data = useExperiencesQuery();
  const [flippedCard, setFlippedCard] = useState(0);

  useEffect(() => {
    setFlippedCard(0);
  }, [data]);

  return (
    <S.ExperienceSection id={id}>
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
          {map(data.allMdx.nodes, (exp, idx) => (
            <S.FlexedFlipCard
              key={idx}
              isFlipped={idx === flippedCard}
              onFlip={() => setFlippedCard(idx)}
              flippedClassName="flipped-card"
              order={idx + 1}
            >
              <S.FrontCard>
                <h1>{exp.frontmatter?.company}</h1>
                <h3>{exp.frontmatter?.job}</h3>
                <h4>
                  {exp.frontmatter?.startDate} -{" "}
                  {exp.frontmatter?.endDate || "Present"}
                </h4>
              </S.FrontCard>
              <S.BackCard>
                <h1>{exp.frontmatter?.company}</h1>
                <h3>{exp.frontmatter?.job}</h3>
                <h4>
                  {exp.frontmatter?.startDate} -{" "}
                  {exp.frontmatter?.endDate || "Present"}
                </h4>
                <MDXRenderer>{exp.body}</MDXRenderer>
              </S.BackCard>
            </S.FlexedFlipCard>
          ))}
        </S.CardsContainer>
      </S.StyledReactScrollContainer>
    </S.ExperienceSection>
  );
};
