document.addEventListener("DOMContentLoaded", function () {

    // Membuat kursor
    const cursor = document.createElement("div");
    const cursorOutline = document.createElement("div");

    cursor.className = "cursor";
    cursorOutline.className = "cursor-outline";

    document.body.appendChild(cursor);
    document.body.appendChild(cursorOutline);

    // Mengikuti mouse
    document.addEventListener("mousemove", function(e) {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        cursorOutline.style.left = e.clientX + "px";
        cursorOutline.style.top = e.clientY + "px";

    });

    // Efek hover
    const elements = document.querySelectorAll(
        "a, button, input, textarea, .card"
    );

    elements.forEach(element => {

        element.addEventListener("mouseenter", function() {
            cursorOutline.classList.add("active");
        });

        element.addEventListener("mouseleave", function() {
            cursorOutline.classList.remove("active");
        });

    });

    // Efek klik
    document.addEventListener("mousedown", function() {
        cursorOutline.classList.add("click");
    });

    document.addEventListener("mouseup", function() {
        cursorOutline.classList.remove("click");
    });

});