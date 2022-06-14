const canary = {
    highlightAll: (id) => {
        var elements = document.getElementsByTagName(id);
        
    },
    highlight: (el) => {
        var text = el.innerText;
        var mode = el.getAttribute("code-lang");
        
        text = text.replace(/(<|>)/, "<span class=\"html-tag-quote\">$1</span>");
    }
}