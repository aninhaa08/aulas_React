import { Link } from 'react-router-dom'

function Home() {

    return(
        <>
            <h1>Home</h1>
            <Link to={"/conteudo"}>Ver conteúdo</Link>
        </>
    )
}

export default Home