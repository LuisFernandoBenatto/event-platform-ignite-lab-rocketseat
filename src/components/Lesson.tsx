import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from "react-router-dom";


import "../styles/lesson.css";


interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE '•' d 'de' MMMM '•' k'h'mm ", {
        locale: ptBR,
    })

    return (
        <Link to={`/event/lesson/${props.slug}`} className="a-lesson group">
            <span className="span-lesson-date">{availableDateFormatted}</span>

            <div className="div-lesson">
                <header className="header-lesson">
                    {isLessonAvailable ? (
                        <span className="span-lesson-conteudo">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="span-lesson-conteudo-nao-liberado">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}
                    <span className="span-lesson-ao-vivo">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
                    </span>
                </header>

                <strong className="strong-lesson">{props.title}</strong>
            </div>
        </Link>
    );
}
