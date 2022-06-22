import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Lesson } from "../components/Lesson";
import { Video } from "../components/Video";

import '../styles/event.css';

export function Event() {
    return (
        <div className="div-event">
            <Header />
            <main className="main-event">
                <Video />
                <Sidebar />
            </main>
        </div>
    )
}