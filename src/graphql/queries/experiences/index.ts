import { graphql, useStaticQuery } from "gatsby";
import { ExperiencesQuery } from "../../../../graphql-types";

export const useExperiencesQuery = (): ExperiencesQuery => {
  return useStaticQuery<ExperiencesQuery>(graphql`
    query Experiences {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/experience/" } }
        sort: { order: DESC, fields: frontmatter___startDate }
      ) {
        nodes {
          frontmatter {
            startDate(formatString: "MMM, YYYY")
            endDate(formatString: "MMM, YYYY")
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
