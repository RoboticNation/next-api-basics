export default function handler(req, res) {
    // let name = req.query.name
    let { name } = req.query
    if (req.method == "GET") {
        return res.send("GET")
    } else if (req.method == "POST") {
        return res.send("POST")
    }
    return res.send("unsupported req method")
}