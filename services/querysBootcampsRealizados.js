import { gql } from "@apollo/client";
import client from "../apollo-client";

export const fetchAllBootcampRealizado = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query {
          allBootcampRealizado {
            _id
            fechaDesde
            fechaHasta
            curso {
              titulo
              descripcion
            }
            imagen{
              asset {
                url
              }
            }
          }
        }
      `,
    });

    return data;
  } catch (error) {
    console.error("Error fetching allBootcampRealizado:", error);
    return null;
  }
};


export const fetchBootcampRealizadoBySlug = async (slug) => {
  try {
    const { data } = await client.query({
      query: gql`
        query($id: ID!) {
          BootcampRealizado(id : $id) {
            _id
            fechaDesde
            fechaHasta
            curso {
              titulo
              descripcion
            }
            imagen{
              asset {
                url
              }
            }
            proyectos{
              titulo
              descripcion
              imagen{
                asset {
                  url
                }
              }
            }
          }
        }
      `,
      variables: {
        id: slug,
      },
    });

    return data;

  } catch (error) {
    console.error("Error fetching bootcamp realizado by id:", error);
    return null;
  }
};
