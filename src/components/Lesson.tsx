import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";


import "../styles/lesson.css";


interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{ slug: string }>()

    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE '•' d 'de' MMMM '•' k'h'mm ", {
        locale: ptBR,
    })

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="a-lesson group">
            <span className="span-lesson-date">{availableDateFormatted}</span>

            <div className={classNames('div-lesson', {
                'isActiveLesson-div-lesson': isActiveLesson && isLessonAvailable,
            })}>
                <header className="header-lesson">
                    {isLessonAvailable ? (
                        <span className={classNames("span-lesson-conteudo", {
                            'isActiveLesson-span-lesson-conteudo': isActiveLesson && isLessonAvailable,
                        })}>
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className={classNames("span-lesson-conteudo-nao-liberado", {
                            'isActiveLesson-span-lesson-conteudo-nao-liberado': isActiveLesson,
                        })}>
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}
                    <span className={classNames("span-lesson-ao-vivo", {
                            'isActiveLesson-span-lesson-ao-vivo': isActiveLesson && isLessonAvailable,
                        })}>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
                    </span>
                </header>

                <strong className={classNames("strong-lesson", {
                    'isActiveLesson-strong-lesson': isActiveLesson && isLessonAvailable,
                })}>
                            {props.title}
                </strong>
            </div>
        </Link>
    );
}
