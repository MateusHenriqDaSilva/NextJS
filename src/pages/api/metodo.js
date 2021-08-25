export default (req, res) => {
    if (req.method === "GET") {
        res.status(200).json({ nome: "Mateus Henrique" })
    } else {
        res.status(200).json({ nome: "Maria Silva" })
    }


}