// import { gql, useQuery } from '@apollo/client';
import { Lesson } from './Lesson';
import { useGetLessonsQuery } from '../graphql/generated';


import '../styles/sidebar.css';


// const GET_LESSONS_QUERY = gql`
//     query MyQuery {
//         lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
//             id
//             lessonType
//             availableAt
//             title
//             slug
//         }
//     }
// `

// interface GetLessonsQueryResponse {
//     lessons: {
//         id: string
//         title: string
//         slug: string
//         availableAt: string
//         lessonType: 'live' | 'class'
//     }[]
// }

export function Sidebar() {
    const { data } = useGetLessonsQuery()

    // console.log(data)

    return (
        <aside className="aside-sidebar">
            <span className="span-sidebar">
                Cronograma de aulas
            </span>
            <div className="div-sidebar">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}