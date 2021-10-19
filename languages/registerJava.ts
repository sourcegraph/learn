import Prism from 'prismjs'

type PrismJs = typeof Prism

// This export is expanded from https://github.com/fictoan/fictoan-react/blob/master/src/components/CodeBlock/prismjs-components/prism-java.js
const registerJava = (Prism: PrismJs): void => {
    // Copied from https://raw.githubusercontent.com/PrismJS/prism/master/components/prism-java.js
    (function (Prism) {

        const keywords = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;

        // full package (optional) + parent classes (optional)
        const classNamePrefix = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source

        // based on the java naming conventions
        const className = {
            pattern: new RegExp(classNamePrefix + /[A-Z](?:[\dA-Z_]*[a-z]\w*)?\b/.source),
            lookbehind: true,
            inside: {
                'namespace': {
                    pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                    inside: {
                        'punctuation': /\./
                    }
                },
                'punctuation': /\./
            }
        };

        Prism.languages.java = Prism.languages.extend('clike', {
            'class-name': [
                className,
                {
                    // variables and parameters
                    // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
                    pattern: new RegExp(classNamePrefix + /[A-Z]\w*(?=\s+\w+\s*[(),;=])/.source),
                    lookbehind: true,
                    inside: className.inside
                }
            ],
            'keyword': keywords,
            'function': [
                {
                    pattern: /(::\s*)[_a-z]\w*/,
                    lookbehind: true
                }
            ],
            'number': /\b0b[01][01_]*l?\b|\b0x(?:\.[\d+_a-fp-]+|[\d_a-f]+(?:\.[\d+_a-fp-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
            'operator': {
                pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[:?~]|[!%&*+/<=>^|-]=?)/m,
                lookbehind: true
            }
        });

        Prism.languages.insertBefore('java', 'string', {
            'triple-quoted-string': {
                // http://openjdk.java.net/jeps/355#Description
                pattern: /"""[\t ]*[\n\r](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
                greedy: true,
                alias: 'string'
            }
        });

        Prism.languages.insertBefore('java', 'class-name', {
            'annotation': {
                pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
                lookbehind: true,
                alias: 'punctuation'
            },
            'generics': {
                pattern: /<(?:[\s\w,.?]|&(?!&)|<(?:[\s\w,.?]|&(?!&)|<(?:[\s\w,.?]|&(?!&)|<(?:[\s\w,.?]|&(?!&))*>)*>)*>)*>/,
                inside: {
                    'class-name': className,
                    'keyword': keywords,
                    'punctuation': /[(),.:<>]/,
                    'operator': /[&?|]/
                }
            },
            'namespace': {
                pattern: new RegExp(
                    /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/
                        .source.replace(/<keyword>/g, () => keywords.source )),
                lookbehind: true,
                inside: {
                    'punctuation': /\./,
                }
            }
        });
    }(Prism))
}

export default registerJava
