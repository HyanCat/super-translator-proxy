const express = require("express")
const translate = require("google-translate-api")

const app = express()

app.get("/api/translate", function (request, response) {
    const query = request.query["query"]
    const from = request.query["from"]
    const to = request.query["to"]

    translate(query, {
            from,
            to,
        })
        .then(r => {
            response.send(r)
        })
        .catch(e => {
            console.error(e)
            response.send(e)
        })
})

app.listen(3000, function () {
    console.log("App listening on port 3000!")
})
