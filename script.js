const canary = {
    highlightAll: (el) => {
        var text = el.innerText;
        var lexer = new Lexer(text);

        console.log(lexer.generate_tokens());
    }
}

const python_keywords = [
    "and", "as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "False",
    "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "None", "nonlocal", "not",
    "or", "pass", "raise", "return", "True", "try", "while", "with", "yield"
];

const python_builtins = [
    "abs", "all", "any", "ascii", "bin", "bool", "bytearray", "bytes", "callable", "chr", "classmethod",
    "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format",
    "forzenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance",
    "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open",
    "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted",
    "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"
];

class Lexer {
    constructor(text) {
        this.text = text;
        this.pos = 0;
    }

    #advance() {
        if (this.text.length < this.pos) {
            this.current = this.text[this.pos];
            this.pos += 1;
        }
        else this.current = null;
    }

    generate_tokens() {
        var tokens = [];

        while (this.current != null) {
            if (this.current.includes("1234567890")) {
                tokens.push(this.#generate_number());
            } else if (this.current.includes("qwertyuiopasdfghjklzxcvbnm_QWERTYUIOPASDFGHJKLZXCVBNM")) {
                tokens.push(this.#generate_identifier());
            } else if (this.current == '"') {
                tokens.push(this.#generate_string());
            }
            else this.#advance();
        }

        return tokens;
    }

    #generate_number() {
        var num_str = this.current;
        this.#advance();

        while (this.current != null && this.current.includes("1234567890.j")) {
            num_str += this.current;
            this.#advance();
        }

        return {"number": num_str};
    }

    #generate_identifier() {
        var id_str = this.current;
        this.#advance();

        while (this.current != null && this.current.includes("qwertyuiopasdfghjklzxcvbnm_QWERTYUIOPASDFGHJKLZXCVBNM\
        1234567890")) {
            id_str += this.current;
            this.#advance();
        }

        if (id_str.includes(python_keywords)) {
            return {"keyword": id_str};
        } else if (id_str.includes(python_builtins)) {
            return {"function": id_str};
        }
        return {"identifier": id_str};
    }

    #generate_string() {
        var str = this.current;
        this.#advance();

        while (this.current != null && this.current != '"') {
            str += this.current;
            this.#advance();
        }

        return {"string": str};
    }
}