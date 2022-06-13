const canary = {
    highlightAll: (el) => {
        var text = el.innerText;

        text.replace(/(#.*)/gm, "<span class=\"highlight-comment\">$1</span>")
        .replace(/([0-9])/gm, "<em>$1</em>")

        console.log(text);

        el.innerHTML = text.replace(/\n/gm, "<br>");
    }
}