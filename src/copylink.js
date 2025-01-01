const toastLinks = document.getElementsByClassName("showToast");

Array.from(toastLinks).forEach((link) => {
    link.addEventListener("click", function (evt) {
        var toastElement = document.getElementById("linkToast");
        var toast = new bootstrap.Toast(toastElement); // Create a new toast instance
        toast.show(); // Show the toast

        navigator.clipboard.writeText(
            "https://jpt-gross.github.io/ult-cs-study-guide/html-css.html" +
                evt.target.getAttribute("href")
        );
    });
});

// function copyhref(evt) {
//     evt.preventDefault();

//         .then(
//             () => {
//                 evt.target.firstElementChild.innerHTML = "&#x2705;";
//             },
//             () => {
//                 document.querySelectorAll(childSpan)[0].innerHTML = "&#x274C;";
//             }
//         );
// }

// function revertSymbol(evt) {
//     evt.target.firstElementChild.innerHTML = "&#x1F517;";
// }
