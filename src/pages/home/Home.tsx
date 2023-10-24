import './Home.css'
import { useState } from "react"

function Home() {
    const [isLogged, setIsLogged] = useState(false)

    return (
        <>
            {
                isLogged ? (
                    <div style={{
                        width: "100vw",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <div>
                            <div style={{
                                 width: "80vw",
                                 display: "flex",
                                 flexDirection: "column",
                                 alignItems: "center"
                            }}>
                                <h2>Seja Bem Vinde!</h2>
                                <p>Expresse aqui seus pensamentos e opniões</p>
                            </div>
        
                            <div style={{
                                 width: "80vw",
                                 display: "flex",
                                 flexDirection: "column",
                                 alignItems: "center"
                            }}>
                                <img 
                                    src="https://i.pinimg.com/originals/5f/be/16/5fbe1685b1f7d617361fdb63e0c94a7e.gif"
                                    alt="Imagem da Página Home" 
                                    width="400px"
                                />
                            </div>
                        </div>
                    </div>
                ) : (

                    <button onClick={() => setIsLogged(true)}>Entrar</button>

                )
            }
        </>
    )
}

export default Home