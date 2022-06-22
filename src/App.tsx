import {gql, useQuery} from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";


const GET_LESSONS_QUERY = gql`
      query MyQuery {
       lessons {
        id
        slug
        title
        teacher {
         name
         bio
         avatarURL
        }
       }
      }
`


interface Lesson {
  id: string;
  slug: string;
  title: string;
}


function App() {
  /* useEffect(() => {
    fetch('https://api-sa-east-1.graphcms.com/v2/cl4otgzsr12sw01xk6s856616/master', {
      method: 'POST', 
      body: `query MyQuery {
              lessons {
                id
                slug
                title
                teacher {
                  name
                  bio
                  avatarURL
                }
              }
            }`
    })
  }, [])*/

  /*useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY,
    }).then(response => {
      console.log(response.data)
    })
  }, [])*/

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  console.log(data);

  return (
    <div className="">
      <h1 className="text-5xl font-bold text-violet-500">Hello, Ignite Lab!</h1>
      {/* <h1 className="title">Hello, Ignite Lab!</h1> */}
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App

/*
CMS = Content Management System

wordpress -> traz tanto o painel de ADMIN tanto quanto a parte visual do front-end (temas)
Headless CMS (GraphCMS): Painel de ADMIN (dados forncidos atraves de uma API REST ou GraphQL)

React que consome essa API do CMS

query / mutation

query = buscar dados
mutation = criar, alterar ou deletar dados
*/