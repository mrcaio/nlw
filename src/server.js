require('express')()

.get("/", (req, res) => {
    return res.send("Hi from NLW")
})

.get("/study", (req, res) => {
    return res.send("Página Study")
})

.listen(5000)
