import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


import '../styles/event.css';


// interface Params {
//     slug: string;
// }

export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="div-event">
            <Header />
            <main className="main-event">
                { slug 
                    ? <Video lessonSlug={slug}/> 
                    : <div className="sem-video"></div>
                }
                <Sidebar />
            </main>
        </div>
    )
}