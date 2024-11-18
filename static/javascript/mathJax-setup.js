window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ["\\[", "\\]"],]
    },
    startup: {
        ready: () => {
            // Function to iterate over all pre and code elements
            // if they contain TeX/LaTeX code for maths as defined
            // by the markers in tex settings above then copy their
            // textContent before them and remove the element from
            // the DOM. 

            // get pre and code elements
            var prelist = document.getElementsByTagName("pre");
            var codelist = document.getElementsByTagName("code");
            // get delimiters for inline and display math
            var inline = MathJax.config.tex.inlineMath;
            var display = MathJax.config.tex.displayMath;
            // start building  a RegExp for each of these math types
            var inlineRegexList = [];
            var displayRegexList = [];
            for (i = 0; i < inline.length; i++) {
                // https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
                delimLEsc = inline[i][0].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                //alert(delimLEsc);
                delimREsc = inline[i][1].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                inlineRegexList.push("(" + delimLEsc + ")((.|[\\r\\n\\t])*?)(" + delimREsc + ")");
            };
            for (i = 0; i < display.length; i++) {
                // https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
                delimLEsc = display[i][0].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                //alert(delimLEsc);
                delimREsc = display[i][1].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                displayRegexList.push("(" + delimLEsc + ")((.|[\\r\\n\\t])*?)(" + delimREsc + ")");
            };
            inlineRegExp = new RegExp(inlineRegexList.join("|"));
            displayRegExp = new RegExp(displayRegexList.join("|"));

            // Now process the page in MathJax
            MathJax.startup.defaultReady();
        }
    }
};