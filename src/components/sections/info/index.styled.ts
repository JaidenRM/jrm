import styled from "styled-components"

export const InfoContainer = styled.div<{ isLightBg?: boolean }>`
  color: #fff;
  background: ${({ isLightBg }) => (isLightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 100%;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div<{ isImgStart?: boolean }>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ isImgStart }) =>
    isImgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ isImgStart }) =>
      isImgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1<{ isLightText?: boolean }>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ isLightText }) => (isLightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subheading = styled.p<{ isDarkText?: boolean }>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ isDarkText }) => (isDarkText ? "#010606" : "#fff")};
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImageWrapper = styled.div`
  max-width: 555px;
  height: 100%;
`

export const StyledImg = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
