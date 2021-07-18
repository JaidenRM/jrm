import React from "react";
import map from "lodash/map";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useExperiencesQuery } from "../../../graphql/queries/experiences";

export const ExperienceSection: React.FC = () => {
  const data = useExperiencesQuery();

  return (
    <>
      {map(data.allMdx.nodes, (exp, idx) => (
        <div key={idx}>
          <h1>{exp.frontmatter?.company}</h1>
          <h3>{exp.frontmatter?.job}</h3>
          <h4>
            {exp.frontmatter?.startDate} - {exp.frontmatter?.endDate}
          </h4>
          <MDXRenderer>{exp.body}</MDXRenderer>
        </div>
      ))}
    </>
  );
};
