import React from "react";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { useHeroBgImageQuery } from "../../../graphql/queries/hero";
import BackgroundImage from "gatsby-background-image";

interface GBIProps {
  id: string;
  className?: string;
}

export const GatsbyBackgroundImage: React.FC<GBIProps> = ({
  children,
  className,
  id,
}) => {
  const placeholderImage = useHeroBgImageQuery();
  const imageData =
    placeholderImage.placeholderImage?.childImageSharp?.gatsbyImageData;
  const image = getImage(imageData);

  // Use like this:
  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage
      Tag="section"
      id={id}
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
      className={className}
    >
      {children}
    </BackgroundImage>
  );
};
