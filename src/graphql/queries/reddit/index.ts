import { graphql, useStaticQuery } from "gatsby";
import { FetchRedditQuery } from "../../../../graphql-types";

export const useFetchRedditQuery = (): FetchRedditQuery => {
  return useStaticQuery<FetchRedditQuery>(graphql`
    query FetchReddit {
      allRedditPost {
        edges {
          node {
            createdTimestampUtc
            downVotes
            id
            img {
              height
              url
              width
            }
            postedBy
            title
            upVotes
            url
            remoteImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
};
