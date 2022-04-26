   function UpperCase() {
       let text = document.querySelector("textarea").value;
       document.querySelector("textarea").value =
           text.toUpperCase();
    }
    function LowerCase() {
        let text = document.querySelector("textarea").value;
        document.querySelector("textarea").value =
            text.toLowerCase()
    }
    function ProperCase() {
        let text = document.querySelector("textarea").value;
        let formattedText = text.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
        document.querySelector("textarea").value = formattedText
    }
    function SentenceCase(){
        let text = document.querySelector("textarea").value;
        let formattedText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
        document.querySelector("textarea").value = formattedText;
        }
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    // Start file download
    function Save(){
        let text = document.querySelector("textarea").value;
        let filename = "text.txt";
        download(filename, text);
    }