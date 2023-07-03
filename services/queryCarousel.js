import { gql } from "@apollo/client";
import client from "../apollo-client";

const fetchCarouselImages = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query {
          allBootcampRealizado {
            imagen {
              asset {
                url
              }
            }
          }
        }
      `,
    });

    // console.log("Query result:", data);

    return data;
  } catch (error) {
    console.error("Error fetching carousel images:", error);
    return null;
  }
};

export default fetchCarouselImages;
