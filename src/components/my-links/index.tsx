import React from "react";
import map from "lodash/map";
import * as S from "./index.styled";
import Gmail from "../../images/logos/gmail.svg";
import StylishGithub from "../../images/logos/stylish-github.svg";
import LinkedIn from "../../images/logos/linked-in.svg";

interface MyLinksProps {
  isVertical?: boolean;
  size?: string;
}

interface LinkProps {
  src: string;
  linkTo: string;
}

const links: LinkProps[] = [
  {
    src: LinkedIn,
    linkTo: "https://au.linkedin.com/in/jaiden-muscat-3441981a0",
  },
  { src: StylishGithub, linkTo: "https://github.com/JaidenRM" },
  { src: Gmail, linkTo: "mailto:jaidenreecemuscat@gmail.com" },
];

export const MyLinks: React.FC<MyLinksProps> = ({
  isVertical,
  size = "48px",
}) => {
  return (
    <S.Container isVertical={isVertical}>
      {map(links, (link, idx) => (
        <S.IconLinks href={link.linkTo} key={idx}>
          <S.Icon size={size} src={link.src} />
        </S.IconLinks>
      ))}
    </S.Container>
  );
};
