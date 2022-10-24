import React from "react"

function NotFound() {
    return (
        <>
            <div>
                <h1 style={{ color: "#000", textAlign: "center", marginTop: "22vh" }}>Página não encontrada...</h1>
                <a href="/" style={{ textDecoration: "none" }}>
                    <h1 style={{ color: "#000", textAlign: "center", marginTop: "12vh" }}>Clique aqui para retornar para a página principal</h1>
                </a>
            </div>
        </>
    )
}

export default NotFound