import React from "react";
import map from "lodash/map";
import random from "lodash/random";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as S from "./index.styled";
import { useModalContext } from "../../../providers/modal";
import { useFetchRedditQuery } from "../../../graphql/queries/reddit";
import { FullScreenModal } from "../../full-screen-modal";

interface AboutProps {
  id: string;
  enterLeft: boolean;
}

const technologies = [
  "TypeScript",
  "React",
  "GraphQL",
  "C#",
  "Flutter",
  "Dart",
  "Firebase",
];

const paragraphs = [
  `G'day, I'm Jaiden and it is nice to see a visitor around here. 
    If you're wondering a bit about me then let's continue.`,
  `Originally I was completing my bachelors in microbiology and
    immunology with computer science as a side elective I was vaguely
    interested in. Well, as you may have guessed, I switched halfway
    through my degree to end up majoring in computer science as I
    discovered my passion for it. This is where I learnt that I love
    building and playing around with things through a digital medium`,
  `I'm thoroughly enjoying my time in the industry and strive to
    constantly learn and better myself. I'll usually come up with
    some projects to help me tinker around with new technologies for
    things that I could use. A few of the technologies I have been
    working with recently are:`,
];

const PluginLink = (
  <S.Link
    href="https://www.npmjs.com/package/fetch-reddit-plugin"
    target="_blank"
  >
    here
  </S.Link>
);

const getTextBox = (title?: string, postedBy?: string) => {
  if (!title) return <></>;

  return (
    <div>
      <p>{title}</p>
      {postedBy && (
        <span>
          <i>- u/{postedBy}</i>
        </span>
      )}
    </div>
  );
};

export const AboutSection: React.FC<AboutProps> = ({ id, enterLeft }) => {
  const {
    allRedditPost: { edges },
  } = useFetchRedditQuery();
  const [, modalHandlers] = useModalContext();
  const onClose = () => modalHandlers.setDisplay(false);
  const onClickHandler = () => {
    const post = edges[random(0, edges.length - 1)].node;
    const image = getImage(post.remoteImage as IGatsbyImageData);

    if (!image) return;

    const PostModal = (
      <FullScreenModal
        stackedElement={getTextBox(
          post.title ?? undefined,
          post.postedBy ?? undefined
        )}
        onClose={onClose}
      >
        <GatsbyImage
          image={image}
          alt="hi"
          imgStyle={{ objectFit: "contain" }}
          style={{ height: "100%", width: "100%" }}
        />
      </FullScreenModal>
    );
    modalHandlers.setChild(PostModal, true);
  };

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
            {map(paragraphs, para => (
              <S.BodyParagraph>{para}</S.BodyParagraph>
            ))}
            <S.TechnologyList>
              {map(technologies, tech => (
                <S.TechnologyListItem>{tech}</S.TechnologyListItem>
              ))}
            </S.TechnologyList>
          </S.Body>
          <S.Footer>
            Here&apos;s a quick little package I came up with for this site. You
            can check the package out {PluginLink} or feel free to press the
            button!
            <S.ShowcaseButton onClick={onClickHandler}>
              Don&apos;t Press!
            </S.ShowcaseButton>
          </S.Footer>
        </S.Container>
      </S.StyledReactScrollContainer>
    </S.Section>
  );
};
