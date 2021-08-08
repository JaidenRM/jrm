import { useStaticQuery, graphql } from "gatsby";
import { HeroBgImageQuery } from "../../../../graphql-types";

export const useHeroBgImageQuery = (): HeroBgImageQuery => {
  return useStaticQuery<HeroBgImageQuery>(
    graphql`
      query HeroBgImage {
        placeholderImage: file(relativePath: { eq: "melb-cafe.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  );
};
