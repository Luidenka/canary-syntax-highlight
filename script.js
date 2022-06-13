const canary = {
    highlightAll: (el) => {
        var text = el.innerText;

        text = text.replace(/(#.*)/gm, "<span class=\"highlight-comment\">$1</span>")
        .replace(/([0-9])/gm, "<span class=\"highlight-number\">$1</span>")

        el.innerHTML = text.replace(/\n/gm, "<br>");
    }
}