function copyhref(evt) {
    evt.preventDefault();
    navigator.clipboard
        .writeText(
            "https://jpt-gross.github.io/ult-cs-study-guide/html-css.html" +
                evt.target.getAttribute("href")
        )
        .then(
            () => {
                evt.target.firstElementChild.innerHTML = "&#x2705;";
            },
            () => {
                document.querySelectorAll(childSpan)[0].innerHTML = "&#x274C;";
            }
        );
}

function revertSymbol(evt) {
    evt.target.firstElementChild.innerHTML = "&#x1f4cb;";
}
