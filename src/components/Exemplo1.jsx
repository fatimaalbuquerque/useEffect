import { useState, useEffect } from 'react'

export function Exemplo1() {
    const [numero, setNumero] = useState(0)
    // useEffect é um efeito colateral onde um hook será executado sempre que a página for carregada ou sempre que um estado for alterado
    useEffect(() => {
        // aq é pra aparecer qd a pagina recarregar
        alert("A página carregou!")
    }, [numero]) //aq pra quando o estado mudar

    return(
        <section>
            <h2>Exemplo 1</h2>
            <div>
                <p>Número: {numero}</p>
                <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
            </div>
        </section>
    )
}