import { gql } from "@apollo/client";
import client from "../apollo-client";

const fetchAllCurso = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query {
          allCurso {
            _id
            titulo
           
          }
        }
      `,
    });
    
    return data;
  } catch (error) {
    console.error("Error fetching allCurso:", error);
    return null;
  }
};

export default fetchAllCurso;
