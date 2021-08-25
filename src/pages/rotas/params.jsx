import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Param() {
    const router = useRouter()
    console.log(router)
    return (
        <div>
            <h1>Rotas Params: {router.query.id} {router.query.nome} </h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}