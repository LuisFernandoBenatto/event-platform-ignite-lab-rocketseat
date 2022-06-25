import { gql } from "@apollo/client";
import { IconReact } from "../components/IconReact";
import { Logo } from "../components/Logo";
import { LogoRocketseat } from "../components/LogoRocketseat";


import '../styles/subscribe.css';

const a = gql`
    mutation CreateSubscriber($name: String!, $email: String!) {
        createSubscriber(data: {name: $name, email: $email}) {
            id
        }
    }
`


export function Subscribe () {
    // const largura = window.screen.width;
    // console.log(largura)
    // const refreshPage = () => { 
    //     window.location.reload(); 
    // }

    return (
        <div className="div-imagem-fundo">
            <div className="div-subscribe">
                <div className="div-text-subscribe">
                    <Logo />
                    <h1 className="h1-subscribe">
                        Construa uma 
                        <strong className="strong-subscribe"> aplicação completa</strong>
                        , do zero, com 
                        <strong className="strong-subscribe"> React JS</strong> 
                    </h1>
                    <p className="p-subscribe">
                        Em apenas uma semana você vai dominar na prática uma das
                        tecnologias mais utilizadas e com alta demanda para 
                        acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="z-0 left-[25%] top-2 absolute mx-auto animate-spin-slow iconeReact">
                    <IconReact />
                </div> 
                <div className="div-box-subscribe">
                    <strong className="strong-subscribe-box-title">Inscreva-se gratuitamente</strong> 
                    <form action="" className="form-box-subscribe">
                        <input 
                            type="text" 
                            className="input-subscribe" 
                            name="" 
                            id="" 
                            placeholder="Seu nome completo" 
                        />
                        <input 
                            type="email" 
                            className="input-subscribe" 
                            name="" 
                            id="" 
                            placeholder="Digite seu email" 
                        />
                        <button 
                            className="button-box-subscribe bg-green-500"
                            type="submit"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src="/src/assets/code-mockup.png" className="img-subscribe" alt="Imagem representativa" />
            <div className="div-subscribe-footer">
                <LogoRocketseat />
                <div className="div-subscribe-text-footer">
                    <p className="p-subscribe-footer p-footer-1">
                        Rocketseat - Todos os direitos reservados
                    </p>
                    <p className="p-subscribe-footer p-footer-2">
                        Políticas de privacidade
                    </p>
                </div>
            </div>
        </div>
    )
}