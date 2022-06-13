const canary = {
    highlightAll: (el) => {
        var text = el.innerText;

        text.replace(/(#.*)/gm, "<span class=\"highlight-comment\">$1</span>")
        .replace(/([0-9]*)/gm, "<em class=\"highlight-number\">$1</em>")

        el.innerHTML = text;
    }
}