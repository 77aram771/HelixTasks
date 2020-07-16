let items = document.querySelectorAll('li');

items.forEach(function (li) {

    li.addEventListener("mouseover", function () {
        li.setAttribute("style", "background-color:blue;");
    }, false);
    li.addEventListener("mouseout", function () {
        li.setAttribute("style", "background-color:grey;")
    }, false);

});
