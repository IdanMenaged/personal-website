function onCmdSubmit(event) {
    const responsesEl = document.getElementById("responses")

    if (event.key === "Enter") {
        const [cmd, ...params] = event.target.value.split(' ')
        const funcName = toCamelCase(`handle-${cmd}`)  // capitalise first letter of cmd
        if (typeof window[funcName] === "function") {
            responsesEl.innerHTML += `<p>${window[funcName]([params])}</p>`
        }
        else {
            responsesEl.innerHTML += `<p>unrecognized command. use 'help'.</p>`
        }

        event.target.value = ""  // clear console
        event.target.scrollIntoView() // scroll down
    }
}

function toCamelCase(s) {
    return s
        .replace(/([-_][a-z])/gi, (match) => match.toUpperCase()
            .replace('-', '')
            .replace('_', '')
        );
}

function handleHelp() {
    return "goto &lt;page> go to a page<br>" +
        "list-pages list all pages<br>" +
        "quit go back to neocities.org<br>" +
        "home go back to home page"
}

function handleGoto(page) {
    window.location.href = `pages/${page}/${page}.html`
    return "loading..."
}

function handleListPages() {
    return "languages"
}

function handleEasteregg() {
    return "well well well look who's looking for secrets. hopefully you haven't found everything i've hidden here " +
        "yet..."
}

function handleQuit() {
    window.location.href = "https://www.neocities.org"
    return "loading..."
}

function handleHome() {
    window.location.href = "index.html"
    return "loading..."
}