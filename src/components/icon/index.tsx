import { IconProp as FAIconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import isString from "lodash/isString";
import * as S from "./index.styled";

type IconType = string | FAIconProp;
interface IconProps {
  icon: IconType;
  href?: string;
  size?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  size = "48px",
  href,
  className,
}) => {
  let Element;

  if (isString(icon)) Element = <S.SvgIcon src={icon} />;
  else Element = <S.FAIcon icon={icon} />;

  return (
    <S.IconWrapper iconSize={size} className={className}>
      {href && (
        <S.IconLink href={href} target="_blank">
          {Element}
        </S.IconLink>
      )}
      {!href && Element}
    </S.IconWrapper>
  );
};
