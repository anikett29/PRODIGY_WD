window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 80) {
        header.style.backgroundColor = "#555";
    } else {
        header.style.backgroundColor = "#333";
    }
});