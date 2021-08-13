import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import isString from "lodash/isString";
import * as S from "./index.styled";
import * as SBtn from "../shared/buttons.styled";

interface ScrollToOptions {
  id: string;
  durationMs: number;
  offset?: number;
}

type AnimationDirection =
  | "bottom-left"
  | "bottom-right"
  | "down"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "up";

// Copying properties from package for Fade
interface FadeScrollAnimationOptions {
  cascade?: boolean;
  damping?: number;
  delay?: number;
  duration?: number;
  fraction?: number;
  triggerOnce?: boolean;
  big?: boolean;
  direction?: AnimationDirection;
  reverse?: boolean;
}

interface ReactScrollContainerProps {
  className?: string;
  buttonLabel?: string | IconProp;
  scrollOptions: ScrollToOptions;
  scrollAnimOptions?: FadeScrollAnimationOptions;
}

export const ReactScrollContainer: React.FC<ReactScrollContainerProps> = ({
  className,
  children,
  buttonLabel = faAngleDoubleUp,
  scrollOptions,
  scrollAnimOptions = {
    direction: "left",
    delay: 500,
    duration: 1500,
  },
}) => {
  /*
   * Issue: Repeating animations cause an error when used with `fraction` so need to set triggerOnce
   * Link: https://github.com/morellodev/react-awesome-reveal/issues/68
   */
  return (
    <S.FadeContainer className={className} {...scrollAnimOptions} triggerOnce>
      <>
        <S.ChildWrapper>{children}</S.ChildWrapper>
        <S.ButtonWrapper>
          <SBtn.PrimaryLinkScrollButton
            to={scrollOptions.id}
            duration={scrollOptions.durationMs}
            offset={scrollOptions.offset}
            smooth
            spy
          >
            {isString(buttonLabel) ? (
              buttonLabel
            ) : (
              <FontAwesomeIcon icon={buttonLabel} size="2x" />
            )}
          </SBtn.PrimaryLinkScrollButton>
        </S.ButtonWrapper>
      </>
    </S.FadeContainer>
  );
};
