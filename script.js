const canary = {
    highlightAll: (el) => {
        var text = el.innerText;

        text = text.replace(/(#.*)/gm, "<span class=\"highlight-comment\">$1</span>")
        .replace(/([0-9])/gm, "<em>$1</em>")

        var without_comments = text.replace(/<span class="highlight-comment">/gm, "");

        console.log(without_comments);

        text = without_comments.replace(/\b(and|as|assert|break|class|continue|def|del|elif|else|except|False|finally|for|from|global|if|import|in|is|lambda|None|nonlocal|notor|pass|raise|return|True|try|while|with|yield)\b/gm,
        "<span class=\"highlight-kw\">$1</span>");

        el.innerHTML = text.replace(/\n/gm, "<br>");
    }
}