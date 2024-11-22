function onCmdSubmit(event) {
    const responsesEl = document.getElementById("responses")
    const responses = new Map([
        ["help", "goto &lt;page>"]
    ])

    if (event.key === "Enter") {
        const cmd = event.target.value
        if (responses.has(cmd)) {
            responsesEl.innerHTML += `<p>${responses.get(cmd)}</p>`
        }
        else {
            responsesEl.innerHTML += `<p>unrecognized command. use 'help'.</p>`
        }
    }
}