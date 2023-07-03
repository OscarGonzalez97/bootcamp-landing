import { gql } from "@apollo/client";
import client from "../apollo-client";

export const fetchAllCurso = async () => {
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

export const fetchCursoBySlug = async (slug) => {
  try {
    const { data } = await client.query({
      query: gql`
        query($slug: String) {
          allCurso(where: { slug: { current: { eq: $slug } } }) {
            _id
            titulo
            descripcion
            slug {
              current
            }
            imagen {
              asset {
                url
              }
            }
            modulos {
              _id
              titulo
            }
            publishedAt
          }
        }
      `,
      variables: {
        slug: slug,
      },
    });

    if (data && data.allCurso.length > 0) {
      return data.allCurso[0]; // Return the first curso with the matching slug
    } else {
      return null; // No curso found with the provided slug
    }
  } catch (error) {
    console.error("Error fetching curso by slug:", error);
    return null;
  }
};