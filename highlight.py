python_keywords = (
    "and", "as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "False",
    "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "None", "nonlocal", "not",
    "or", "pass", "raise", "return", "True", "try", "while", "with", "yield"
)

python_builtins = (
    "abs", "all", "any", "ascii", "bin", "bool", "bytearray", "bytes", "callable", "chr", "classmethod",
    "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format",
    "forzenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance",
    "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open",
    "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted",
    "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"
)

class Lexer:
    def __init__(self, text) -> None:
        self.text = iter(text)

    def __advance(self) -> None:
        try: self.current = next(self.text)
        except StopIteration: self.current = None

    def generate_tokens(self) -> None:
        tokens = []
        while self.current != None:
            if self.current in "1234567890": tokens.append(self.__generate_number())
            elif self.current in "+-*/%&|^<>=!~": tokens.append({"operator": self.current})
            elif self.current in "qwertyuiopasdfghjklzxcvbnm_": tokens.append(self.__generate_identifier())
            elif self.current == '"': tokens.append(self.__generate_string())

        return tokens

    def __generate_number(self):
        num_str = self.current
        self.__advance()

        while self.current != None and self.current in "1234567890.j":
            num_str += self.current
            self.__advance()

        return {"number": num_str}

    def __generate_identifier(self):
        id = self.current
        self.__advance()

        while self.current != None and self.current in "1234567890qwertyuiopasdfghjklzxcvbnm_":
            id += self.current
            self.__advance()

        if id in python_keywords:
            return {"keyword": id}
        elif id in python_builtins:
            return {"builtin": id}
        return {"identifier": id}

    def __generate_string(self):
        id = self.current
        self.__advance()

        while self.current != None and self.current != '"':
            id += self.current
            self.__advance()

        return {"string": id}