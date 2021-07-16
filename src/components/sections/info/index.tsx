import React from "react"
import * as SBtn from "../../shared/buttons.styled"
import * as S from "./index.styled"

export interface InfoDataProps {
  id: string
  isLightBg?: boolean
  isLightText?: boolean
  isLightTextDesc?: boolean
  topLine?: string
  heading?: string
  subheading?: string
  buttonLabel?: string
  isImgStart?: boolean
  imgSrc?: string
  alt?: string
  isDark?: boolean
  isPrimary?: boolean
  isDarkText?: boolean
}

export const InfoSection: React.FC<InfoDataProps> = ({
  id,
  isLightBg,
  isLightText,
  isLightTextDesc,
  isImgStart,
  topLine,
  heading,
  subheading,
  buttonLabel,
  imgSrc,
  alt,
  isDark,
  isPrimary,
  isDarkText,
}) => {
  return (
    <S.InfoContainer
      id={id}
      data-sal="slide-right"
      data-sal-delay="100"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <S.InfoWrapper>
        <S.InfoRow isImgStart={isImgStart}>
          <S.Column1>
            <S.TextWrapper>
              <S.TopLine>{topLine}</S.TopLine>
              <S.Heading isLightText={isLightText}>{heading}</S.Heading>
              <S.Subheading isDarkText={isDarkText}>{subheading}</S.Subheading>
              <S.ButtonWrapper>
                <SBtn.PrimaryButton
                  to="hero"
                  duration={500}
                  smooth
                  spy
                  isPrimary={isPrimary}
                  isDark={isDark}
                >
                  {buttonLabel}
                </SBtn.PrimaryButton>
              </S.ButtonWrapper>
            </S.TextWrapper>
          </S.Column1>
          <S.Column2>
            <S.ImageWrapper>
              <S.StyledImg src={imgSrc} alt={alt} />
            </S.ImageWrapper>
          </S.Column2>
        </S.InfoRow>
      </S.InfoWrapper>
    </S.InfoContainer>
  )
}
