import { graphql, useStaticQuery } from "gatsby";
import { ProjectsQuery } from "../../../../graphql-types";

export const useProjectsQuery = (): ProjectsQuery => {
  return useStaticQuery<ProjectsQuery>(graphql`
    query Projects {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/project/" } }
        sort: { order: ASC, fields: frontmatter___date }
      ) {
        nodes {
          frontmatter {
            date
            name
            status
            repo
            url
            tags
            images {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          body
        }
      }
    }
  `);
};
