import { Header } from './components/Header'
import { Exemplo1 } from './components/Exemplo1'
import { Exemplo2 } from './components/Exemplo2'

export function App() {
  return(
    // fragment (<>) é um elemento fake, nn aparece no html, só oq contém nele
    // useEffect é um efeito colateral onde um hook será executado sempre que a página for carregada ou sempre que um estado for alterado
    <>
      <Header />

      <main>
        <Exemplo1 />
        <Exemplo2 />
      </main>
    </>
  )
}