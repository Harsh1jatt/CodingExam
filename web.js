let questions = [
    // HTML
    {
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Tool Markup Language"
        ]
    },
    {
        question: "Who is the father of HTML?",
        answer: "Tim Berners-Lee",
        options: [
            "Tim Berners-Lee",
            "Charles Babbage",
            "Larry Page",
            "Jeff Bezos"
        ]
    },
    {
        question: "Which of the following is used to create a hyperlink in HTML?",
        answer: "&lt;a href=''",
        options: [
            "&lt;a href=''",
            "link",
            "hyperlink",
            "anchor"
        ]
    },
    {
        question: "Which element is used to represent the largest heading?",
        answer: "h1",
        options: [
            "h6",
            "heading",
            "h1",
            "h3"
        ]
    },
    {
        question: "Which attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answer: "alt",
        options: [
            "alt",
            "src",
            "href",
            "text"
        ]
    },
    {
        question: "Which tag is used to define a list item in an ordered or unordered list?",
        answer: "li",
        options: [
            "li",
            "ul",
            "ol",
            "item"
        ]
    },
    {
        question: "Which attribute is used to uniquely identify an element in HTML?",
        answer: "id",
        options: [
            "id",
            "class",
            "name",
            "identity"
        ]
    },
    {
        question: "Which element is used to create a drop-down list in HTML forms?",
        answer: "select",
        options: [
            "select",
            "option",
            "dropdown",
            "list"
        ]
    },
    {
        question: "How can you make a numbered list in HTML?",
        answer: "ol",
        options: [
            "ul",
            "ol",
            "li",
            "dl"
        ]
    },
    {
        question: "Which HTML element is used to define a footer for a document or section?",
        answer: "footer",
        options: [
            "footer",
            "bottom",
            "end",
            "down"
        ]
    },
    {
        question: "Which HTML attribute is used to specify an inline style for an element?",
        answer: "style",
        options: [
            "style",
            "styles",
            "font",
            "class"
        ]
    },
    {
        question: "What does the br tag do in HTML?",
        answer: "Inserts a line break",
        options: [
            "Inserts a line break",
            "Boldens text",
            "Creates a new paragraph",
            "Breaks a link"
        ]
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answer: "br",
        options: [
            "break",
            "lb",
            "br",
            "newline"
        ]
    },
    {
        question: "How do you create an unordered list in HTML?",
        answer: "ul",
        options: [
            "ol",
            "ul",
            "list",
            "item"
        ]
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        answer: "title",
        options: [
            "meta",
            "head",
            "title",
            "header"
        ]
    },
    {
        question: "Which tag is used to define a hyperlink?",
        answer: "a",
        options: [
            "hyper",
            "link",
            "a",
            "href"
        ]
    },
    {
        question: "Which tag is used to create a table in HTML?",
        answer: "table",
        options: [
            "table",
            "tr",
            "td",
            "tab"
        ]
    },
    {
        question: "Which tag is used to create a row in a table?",
        answer: "tr",
        options: [
            "row",
            "td",
            "th",
            "tr"
        ]
    },
    {
        question: "Which HTML element is used for creating a form?",
        answer: "form",
        options: [
            "form",
            "input",
            "button",
            "text"
        ]
    },
    {
        question: "Which HTML element is used to display a scalar measurement within a known range?",
        answer: "meter",
        options: [
            "meter",
            "progress",
            "gauge",
            "range"
        ]
    },
    {
        question: "What is the purpose of the caption element in a table?",
        answer: "To define the title of the table",
        options: [
            "To define the title of the table",
            "To add a description to the table",
            "To define column headers",
            "To add a note to the table"
        ]
    },
    {
        question: "How do you define a form input that allows the user to select a file to upload?",
        answer: "input type='file'",
        options: [
            "input type='file'",
            "input type='submit'",
            "input type='button'",
            "input type='text'"
        ]
    },
    {
        question: "Which HTML attribute is used to specify a URL for a form submission?",
        answer: "action",
        options: [
            "action",
            "method",
            "href",
            "src"
        ]
    },
    {
        question: "What is the correct syntax to create an email link?",
        answer: "&lt;a href='mailto:example@example.com'Email&lt;/a&gt;",
        options: [
            "&lt;a href='mailto:example@example.com'Email&lt;/a&gt;",
            "&lt;a href='email'example@example.com&lt;/a&gt;",
            "mailexample@example.com/mail",
            "&lt;a href='emailto:example@example.com'Email&lt;/a&gt;"
        ]
    },
    {
        question: "Which of the following elements is used to create a dropdown list?",
        answer: "select",
        options: [
            "dropdown",
            "select",
            "option",
            "input"
        ]
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        options: [
            "Colorful Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets"
        ]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answer: "style",
        options: [
            "style",
            "css",
            "script",
            "link"
        ]
    },
    {
        question: "Which is the correct CSS syntax?",
        answer: "body {color: black;}",
        options: [
            "{body:color=black;}",
            "body:color=black;",
            "body {color: black;}",
            "{body;color:black;}"
        ]
    },
    {
        question: "How do you insert a comment in a CSS file?",
        answer: "/* this is a comment */",
        options: [
            "/* this is a comment */",
            "// this is a comment",
            "&lt;!-- this is a comment--&gt;",
            "# this is a comment"
        ]
    },
    {
        question: "Which property is used to change the background color in CSS?",
        answer: "background-color",
        options: [
            "color",
            "bgcolor",
            "background-color",
            "bg-color"
        ]
    },
    {
        question: "How do you select an element with a specific ID in CSS?",
        answer: "#id",
        options: [
            "#id",
            ".id",
            "id",
            "*id"
        ]
    },
    {
        question: "How do you select all elements with a specific class in CSS?",
        answer: ".class",
        options: [
            "#class",
            ".class",
            "class",
            "*class"
        ]
    },
    {
        question: "Which CSS property controls the text size?",
        answer: "font-size",
        options: [
            "text-size",
            "font-style",
            "font-size",
            "text-style"
        ]
    },
    {
        question: "Which CSS property is used to change the font of an element?",
        answer: "font-family",
        options: [
            "font-style",
            "font-weight",
            "font-size",
            "font-family"
        ]
    },
    {
        question: "How do you center-align text in CSS?",
        answer: "text-align: center;",
        options: [
            "align: center;",
            "text-align: center;",
            "center-text: center;",
            "text-center: center;"
        ]
    },
    {
        question: "Which CSS property is used to set the space between the border and the content of an element?",
        answer: "padding",
        options: [
            "padding",
            "margin",
            "border",
            "spacing"
        ]
    },
    {
        question: "How do you apply a style to multiple classes in CSS?",
        answer: ".class1, .class2 { ... }",
        options: [
            ".class1 .class2 { ... }",
            ".class1  .class2 { ... }",
            ".class1 + .class2 { ... }",
            ".class1, .class2 { ... }"
        ]
    },
    {
        question: "Which CSS property is used to set the display type of an element?",
        answer: "display",
        options: [
            "display",
            "type",
            "visibility",
            "layout"
        ]
    },
    {
        question: "How do you add a border to an element in CSS?",
        answer: "border: 1px solid black;",
        options: [
            "border-color: black;",
            "border: 1px solid black;",
            "border-style: solid;",
            "border-width: 1px;"
        ]
    },
    {
        question: "What does the z-index property in CSS control?",
        answer: "The stacking order of elements",
        options: [
            "The stacking order of elements",
            "The size of an element",
            "The opacity of an element",
            "The position of an element"
        ]
    },
    {
        question: "How do you apply a CSS class to an HTML element?",
        answer: "element class='class-name'",
        options: [
            "element class='class-name'",
            "element id='class-name'",
            "element style='class-name'",
            "element className='class-name'"
        ]
    },
    {
        question: "Which property is used to change the width of an element in CSS?",
        answer: "width",
        options: [
            "size",
            "length",
            "height",
            "width"
        ]
    },
    {
        question: "How do you set the margin of an element to 10 pixels in CSS?",
        answer: "margin: 10px;",
        options: [
            "margin: 10;",
            "margin: 10px;",
            "margin-width: 10px;",
            "margin-size: 10px;"
        ]
    },
    {
        question: "Which property is used to control the visibility of an element in CSS?",
        answer: "visibility",
        options: [
            "visibility",
            "display",
            "opacity",
            "position"
        ]
    },
    {
        question: "How do you set the height of an element to 50% of its container's height?",
        answer: "height: 50%;",
        options: [
            "height: 50px;",
            "height: 50vh;",
            "height: 50%;",
            "height: 50em;"
        ]
    },
    {
        question: "What is the default value of the 'position' property in CSS?",
        answer: "static",
        options: [
            "static",
            "relative",
            "absolute",
            "fixed"
        ]
    },
    {
        question: "How do you apply styles to an HTML element with the ID 'header' in CSS?",
        answer: "#header { ... }",
        options: [
            ".header { ... }",
            "#header { ... }",
            "header { ... }",
            "*header { ... }"
        ]
    },
    {
        question: "How do you make a CSS rule apply to all paragraphs in a document?",
        answer: "p { ... }",
        options: [
            "p { ... }",
            ".p { ... }",
            "#p { ... }",
            "paragraph { ... }"
        ]
    },
    {
        question: "What does the CSS 'float' property do?",
        answer: "It allows elements to be positioned horizontally next to each other",
        options: [
            "It positions elements vertically",
            "It allows elements to be positioned horizontally next to each other",
            "It controls the visibility of elements",
            "It adjusts the size of elements"
        ]
    },
    {
        question: "Which CSS property is used to set the font color of an element?",
        answer: "color",
        options: [
            "color",
            "text-color",
            "font-color",
            "background-color"
        ]
    },
    {
        question: "How do you apply a CSS style to the first child element of a parent element?",
        answer: ":first-child",
        options: [
            ":nth-child(1)",
            ":first-child",
            ":child(1)",
            ":first"
        ]
    },
    {
        question: "Which property is used to specify the space between lines of text?",
        answer: "line-height",
        options: [
            "line-height",
            "letter-spacing",
            "word-spacing",
            "text-spacing"
        ]
    },
    {
        question: "How do you make text bold using CSS?",
        answer: "font-weight: bold;",
        options: [
            "text-weight: bold;",
            "font-style: bold;",
            "font-weight: bold;",
            "text-style: bold;"
        ]
    },
    {
        question: "What is the CSS property to change the font style to italic?",
        answer: "font-style: italic;",
        options: [
            "font-style: italic;",
            "text-style: italic;",
            "font-weight: italic;",
            "font-decoration: italic;"
        ]
    },
    {
        question: "Which CSS property is used to align text to the center?",
        answer: "text-align: center;",
        options: [
            "text-center: center;",
            "text-align: center;",
            "align-text: center;",
            "center-text: center;"
        ]
    },
    {
        question: "How do you apply a border radius to an element in CSS?",
        answer: "border-radius: 10px;",
        options: [
            "border-radius: 10;",
            "radius: 10px;",
            "border-radius: 10px;",
            "border-corner: 10px;"
        ]
    },

    
 {
        question: "Which HTML element is used to define emphasized text?",
        answer: "em",
        options: [
            "em",
            "strong",
            "i",
            "b"
        ]
    },
    {
        question: "What does the b tag in HTML do?",
        answer: "Makes the text bold",
        options: [
            "Makes the text bold",
            "Makes the text italic",
            "Creates a line break",
            "Adds a border"
        ]
    },
    {
        question: "Which HTML attribute is used to open a link in a new tab?",
        answer: "target='_blank'",
        options: [
            "target='_new'",
            "target='_blank'",
            "target='_tab'",
            "open='_new'"
        ]
    },
    {
        question: "Which HTML tag is used to create a text area?",
        answer: "textarea",
        options: [
            "textarea",
            "input",
            "text",
            "field"
        ]
    },
    {
        question: "Which HTML element is used to define important text?",
        answer: "strong",
        options: [
            "b",
            "em",
            "strong",
            "i"
        ]
    },
    {
        question: "How do you specify a comment in HTML?",
        answer: "&lt;!-- Comment --&gt;",
        options: [
            "&lt;!-- Comment --&gt;",
            "// Comment",
            "/* Comment */",
            "# Comment"
        ]
    },
    {
        question: "Which HTML element is used to define a navigation link?",
        answer: "nav",
        options: [
            "nav",
            "a",
            "href",
            "link"
        ]
    },
    {
        question: "Which tag is used to define a cell in a table?",
        answer: "td",
        options: [
            "tr",
            "td",
            "th",
            "cell"
        ]
    },
    {
        question: "Which HTML element is used to define a header for a section?",
        answer: "header",
        options: [
            "header",
            "heading",
            "section",
            "nav"
        ]
    },
    {
        question: "Which attribute is used to specify the URL of an image in HTML?",
        answer: "src",
        options: [
            "src",
            "href",
            "link",
            "url"
        ]
    },
    {
        question: "Which tag is used to create a definition list in HTML?",
        answer: "dl",
        options: [
            "dl",
            "dd",
            "dt",
            "list"
        ]
    },
    {
        question: "Which HTML element is used to display a progress bar?",
        answer: "progress",
        options: [
            "progress",
            "meter",
            "gauge",
            "range"
        ]
    },
    {
        question: "Which attribute specifies the language of an HTML document?",
        answer: "lang",
        options: [
            "lang",
            "xml:lang",
            "dir",
            "locale"
        ]
    },
    {
        question: "Which HTML element defines a section in a document?",
        answer: "section",
        options: [
            "section",
            "article",
            "div",
            "header"
        ]
    },
    {
        question: "Which HTML element is used to embed a video?",
        answer: "video",
        options: [
            "video",
            "embed",
            "object",
            "iframe"
        ]
    },
    {
        question: "What is the correct HTML for adding a background color?",
        answer: "body style='background-color:yellow;'",
        options: [
            "body style='background-color:yellow;'",
            "background='yellow'",
            "body bg='yellow'",
            "style='background-color:yellow;'"
        ]
    },
    {
        question: "Which HTML element is used to specify a term in a description list?",
        answer: "dt",
        options: [
            "dt",
            "dl",
            "dd",
            "li"
        ]
    },
    {
        question: "What is the purpose of the &lt;small&gt; tag in HTML?",
        answer: "To display smaller text",
        options: [
            "To display smaller text",
            "To emphasize text",
            "To add a subtitle",
            "To highlight text"
        ]
    },
    {
        question: "Which CSS property is used to control the text alignment?",
        answer: "text-align",
        options: [
            "text-align",
            "vertical-align",
            "align-content",
            "justify-content"
        ]
    },
    {
        question: "Which CSS property is used to set the color of the text?",
        answer: "color",
        options: [
            "color",
            "fontcolor",
            "font-color",
            "background-color"
            ]
        },

        // HTML
    {
        question: "Which HTML element is used to include external CSS files?",
        answer: "link",
        options: [
            "link",
            "style",
            "script",
            "css"
        ]
    },
    {
        question: "Which HTML element is used to include JavaScript files?",
        answer: "script",
        options: [
            "script",
            "link",
            "js",
            "code"
        ]
    },
    {
        question: "Which HTML element is used to display a horizontal line?",
        answer: "hr",
        options: [
            "hr",
            "line",
            "horizontal",
            "break"
        ]
    },
    {
        question: "Which tag is used to define a cell that spans multiple columns in a table?",
        answer: "colspan",
        options: [
            "colspan",
            "rowspan",
            "span",
            "cellspan"
        ]
    },
    {
        question: "Which HTML element is used to create a tooltip?",
        answer: "title",
        options: [
            "title",
            "tooltip",
            "alt",
            "hint"
        ]
    },
    {
        question: "Which attribute is used to define a default value for a form input?",
        answer: "value",
        options: [
            "value",
            "default",
            "initial",
            "placeholder"
        ]
    },
    {
        question: "Which HTML tag is used to define a citation?",
        answer: "cite",
        options: [
            "cite",
            "reference",
            "quote",
            "citation"
        ]
    },
    {
        question: "What is the purpose of the &lt;iframe&gt; tag in HTML?",
        answer: "To embed another document within the current document",
        options: [
            "To create a hyperlink",
            "To display a video",
            "To embed another document within the current document",
            "To create a form"
        ]
    },
    {
        question: "Which HTML attribute is used to provide a fallback image if the primary image fails to load?",
        answer: "srcset",
        options: [
            "srcset",
            "fallback",
            "data-src",
            "src"
        ]
    },
    {
        question: "Which HTML tag is used to create a definition description?",
        answer: "dd",
        options: [
            "dd",
            "dt",
            "dl",
            "def"
        ]
    },
    {
        question: "What does the HTML &lt;noscript&gt; tag do?",
        answer: "Defines an alternate content for users who have disabled scripts",
        options: [
            "Defines an alternate content for users who have disabled scripts",
            "Displays a script error message",
            "Hides content from all users",
            "Defines a script"
        ]
    },
    {
        question: "Which HTML element is used to define a navigation menu?",
        answer: "nav",
        options: [
            "nav",
            "menu",
            "ul",
            "ol"
        ]
    },
    {
        question: "Which HTML element is used to define a container for navigation links?",
        answer: "nav",
        options: [
            "nav",
            "section",
            "div",
            "footer"
        ]
    },
    {
        question: "What is the purpose of the &lt;bdi&gt; tag in HTML?",
        answer: "Isolates a span of text that might be formatted differently",
        options: [
            "Isolates a span of text that might be formatted differently",
            "Defines bidirectional text",
            "Boldens text",
            "Defines a description list"
        ]
    },
    {
        question: "Which HTML tag is used to define a block of code?",
        answer: "pre",
        options: [
            "pre",
            "code",
            "block",
            "text"
        ]
    },
    {
        question: "What does the &lt;mark&gt; tag do in HTML?",
        answer: "Highlights text",
        options: [
            "Highlights text",
            "Adds a background color",
            "Boldens text",
            "Italicizes text"
        ]
    },
    {
        question: "Which HTML element is used to create an interactive form control?",
        answer: "button",
        options: [
            "button",
            "input",
            "select",
            "textarea"
        ]
    },
    {
        question: "What is the purpose of the &lt;output&gt; tag in HTML?",
        answer: "Represents the result of a calculation or user action",
        options: [
            "Represents the result of a calculation or user action",
            "Defines output data for a form",
            "Creates an output file",
            "Displays an output message"
        ]
    },
    {
        question: "Which HTML element is used to define a metadata block?",
        answer: "meta",
        options: [
            "meta",
            "header",
            "section",
            "script"
        ]
    },
    {
        question: "What is the purpose of the &lt;aside&gt; tag in HTML?",
        answer: "Defines content aside from the content it is placed in",
        options: [
            "Defines content aside from the content it is placed in",
            "Defines a block of text",
            "Defines a list of items",
            "Defines an additional content"
        ]
    },
    {
        question: "Which HTML element is used to define a date or time?",
        answer: "time",
        options: [
            "time",
            "date",
            "datetime",
            "timestamp"
        ]
    },
    {
        question: "What does the &lt;address&gt; tag in HTML define?",
        answer: "Contact information for the author or owner of a document",
        options: [
            "Contact information for the author or owner of a document",
            "A geographical address",
            "A mailing address",
            "An email address"
        ]
    },

    // CSS
    {
        question: "Which CSS property is used to control the spacing between characters?",
        answer: "letter-spacing",
        options: [
            "letter-spacing",
            "word-spacing",
            "line-height",
            "text-spacing"
        ]
    },
    {
        question: "What is the default value of the 'display' property in CSS?",
        answer: "block",
        options: [
            "block",
            "inline",
            "flex",
            "grid"
        ]
    },
];
