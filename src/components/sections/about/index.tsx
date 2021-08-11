import React from "react";
import map from "lodash/map";
import * as S from "./index.styled";

interface AboutProps {
  id: string;
  enterLeft: boolean;
}

export const AboutSection: React.FC<AboutProps> = ({ id, enterLeft }) => {
  const technologies = [
    "TypeScript",
    "React",
    "GraphQL",
    "C#",
    "Flutter",
    "Dart",
    "Firebase",
  ];

  return (
    <S.Section id={id}>
      <S.StyledReactScrollContainer
        scrollOptions={{ id: "hero", durationMs: 500, offset: -120 }}
        scrollAnimOptions={{
          direction: enterLeft ? "left" : "right",
          delay: 200,
          duration: 1000,
          fraction: 0.5,
          big: true,
        }}
      >
        <S.Container>
          <S.MainHeader>This be me</S.MainHeader>
          <S.Body>
            <S.BodyParagraph>
              G&apos;day, I&apos;m Jaiden and it is nice to see a visitor around
              here. If you&apos;re wondering a bit about me then let&apos;s
              continue.
            </S.BodyParagraph>
            <S.BodyParagraph>
              Originally I was completing my bachelors in microbiology and
              immunology with computer science as a side elective I was vaguely
              interested in. Well, as you may have guessed, I switched halfway
              through my degree to end up majoring in computer science as I
              discovered my passion for it. This is where I learnt that I love
              building and playing around with things through a digital medium
            </S.BodyParagraph>
            <S.BodyParagraph>
              I&apos;m thoroughly enjoying my time in the industry and strive to
              constantly learn and better myself. I&apos;ll usually come up with
              some projects to help me tinker around with new technologies for
              things that I could use. A few of the technologies I have been
              working with recently are:
            </S.BodyParagraph>
            <S.TechnologyList>
              {map(technologies, tech => (
                <S.TechnologyListItem>{tech}</S.TechnologyListItem>
              ))}
            </S.TechnologyList>
          </S.Body>
        </S.Container>
      </S.StyledReactScrollContainer>
    </S.Section>
  );
};
