import { graphql, useStaticQuery } from "gatsby";
import { ExperiencesQuery } from "../../../../graphql-types";

export const useExperiencesQuery = (): ExperiencesQuery => {
  return useStaticQuery<ExperiencesQuery>(graphql`
    query Experiences {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/experience/" } }
        sort: { order: ASC, fields: frontmatter___startDate }
      ) {
        nodes {
          frontmatter {
            startDate
            endDate
            company
            job
            website
          }
          body
        }
      }
    }
  `);
};
