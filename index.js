function onCmdSubmit(event) {
    const responsesEl = document.getElementById("responses")
    const responses = new Map([
        ["help", "goto &lt;page>"],
        ["goto", "site is still under construction. no pages are added yet"],
        ["easteregg", "well well well look who's looking at the code. hopefully you haven't found all the little" +
        "secrets here..."],
    ])

    if (event.key === "Enter") {
        const [cmd, ...params] = event.target.value.split(' ')
        if (responses.has(cmd)) {
            responsesEl.innerHTML += `<p>${responses.get(cmd)}</p>`
        }
        else {
            responsesEl.innerHTML += `<p>unrecognized command. use 'help'.</p>`
        }
    }
}