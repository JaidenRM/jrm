import React from "react";
import map from "lodash/map";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useProjectsQuery } from "../../../graphql/queries/projects";

export const ProjectSection: React.FC = () => {
  const data = useProjectsQuery();

  return (
    <>
      {map(data.allMdx.nodes, (proj, idx) => (
        <div key={idx}>
          <h1>{proj.frontmatter?.name}</h1>
          <h3>Status: {proj.frontmatter?.status}</h3>
          <h4>{proj.frontmatter?.tags?.join(", ")}</h4>
          {map(proj.frontmatter?.images, imgData => {
            if (imgData) {
              const image = getImage(imgData as IGatsbyImageData);
              return image && <GatsbyImage alt="text" image={image} />;
            }
            return <></>;
          })}
          <MDXRenderer>{proj.body}</MDXRenderer>
        </div>
      ))}
    </>
  );
};
