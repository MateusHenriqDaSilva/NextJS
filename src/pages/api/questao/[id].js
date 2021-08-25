export default function questao(req, res) {
    if (req.method === "GET") {
        const id = req.query.id
        res.status(200).json({
            id: id,
            enunciado: 'Qual é a sua cor preferida?',
            respostas: [
                'Branca', 'vermelha', 'Amarela', 'Verde'
            ]
        })
    } else {
        req.status(405).send()
    }
}