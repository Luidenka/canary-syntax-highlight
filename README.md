# Canary Syntax Highlight


![Version](https://img.shields.io/badge/version-v0.1-orange)

The Canary code editor is a code editor for Javascript/Python. It features line numbers, auto close braces and much more.

## Usage

1. Include all JavaScript and CSS Files in header\
Link for js: `https://combinatronics.com/Luidenka/canary-syntax-highlight/main/script.js`  
Link for CSS: `https://combinatronics.com/Luidenka/canary-syntax-highlight/main/style.css`

2. Add a script function call: `canary.highlight(element, mode);`

3. Your code has been highlighted!

Example HTML Code:
```html
<!DOCTYPE html>

<head>
    <title>Random Editor</title>
    <link rel="stylesheet" href="https://combinatronics.com/Luidenka/canary-syntax-highlight/main/style.css">
    <script src="https://combinatronics.com/Luidenka/canary-syntax-highlight/main/script.js"></script>
</head>

<body>
    <div id="code">
        n = int(input('Type a number, and its factorial will be printed: '))
        
        if n < 0:
            raise ValueError('You must enter a non-negative integer')

        factorial = 1
        for i in range(2, n + 1):
            factorial *= i

        print(factorial)
    </div>
    <script>canary.highlight(document.getElementById('code'), "python");</script>
</body>
```

## Contributing

If you find this project interesting, feel free to pull a request. Or if you found a bug, open an issue and I'll fix it as soon as possible.

## The Canary Team

Founder: @Luidenka