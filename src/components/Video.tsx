import { LogoRocketseat } from "./LogoRocketseat";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning, Image } from "phosphor-react";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { gql, useQuery } from "@apollo/client";


import '@vime/core/themes/light.css';
import '@vime/core/themes/default.css';


import '../styles/video.css';


const GET_LESSON_BY_SLUG_QUERY = gql`
    query GetLessonBySlug ($slug: String) {
        lesson(where: {slug: $slug}) {
            title
            videoId
            description
            teacher {
                avatarURL
                bio
                name
            }
        }
    }
`
interface GetLessonBySlugResponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string;
        }
    }
}

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
        variables: {
            slug: props.lessonSlug,
        }
    })

    // console.log(data)
    if(!data) {
        return (
            <div className="container-video">
                <p>Carregando...</p>
            </div>
        )
    }

    return (
        <div className="container-video">
            <div className="div-video">
                <div className="representacao-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId}/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="div-video-2">
                <div className="info-div-video">
                    <div className="descrition-div-video">
                        <h1 className="h1-video">{data.lesson.title}</h1>
                        <p className="p-video">{data.lesson.description}</p>
                        <div className="div-professor-video">
                            <img
                                className="img-professor-video"
                                src={data.lesson.teacher.avatarURL}
                                alt="Professor da aula"
                            />
                            <div className="div-dados-professor-video">
                                <strong className="strong-professor-name-video">
                                    {data.lesson.teacher.name}
                                </strong>
                                <span className="span-bio-professor-video">
                                    {data.lesson.teacher.bio}   
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="button-div-video">
                        <a href="#" className="a-discord-button-video button-video">
                            <DiscordLogo size="24" />
                            Comunidade no discord
                        </a>
                        <a href="#" className="a-desafio-button-video button-video">
                            <Lightning size="24" />
                            Acesse o desafio
                        </a>
                    </div>
                </div>

                <div className="wallpaper-div-video">
                    <a href="#" className="a-card-video">
                        <div className="div-card-video-1 div-card-video-geral">
                            <FileArrowDown size={40} />
                        </div>

                        <div className="div-card-video-2">
                            <strong className="strong-card-video">
                                Material complementar
                            </strong>
                            <p className="p-card-video">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>

                        <div className="div-card-video-3 div-card-video-geral">
                            <CaretRight size={24} />
                        </div>
                    </a>
                    <a href="#" className="a-card-video">
                        <div className="div-card-video-1 div-card-video-geral">
                            <Image size={40} />
                        </div>

                        <div className="div-card-video-2">
                            <strong className="strong-card-video">
                                Wallpapers exclusivos
                            </strong>
                            <p className="p-card-video">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>

                        <div className="div-card-video-3 div-card-video-geral">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
            <div className="div-footer">
                <LogoRocketseat />
                <div className="div-text-footer">
                    <p className="p-footer p-footer-1">
                        Rocketseat - Todos os direitos reservados
                    </p>
                    <p className="p-footer p-footer-2">
                        Políticas de privacidade
                    </p>
                </div>
            </div>
        </div>
    )
}