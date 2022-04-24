window.addEventListener("load", function () {
    const left = document.querySelector(".nav-left");
    const Off_btn = document.querySelector(".off-btn");
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", function () {
        left.style.display = "none";
        Off_btn.style.display = "block";
    });
    Off_btn.addEventListener("click", function () {
        left.style.display = "block";
        Off_btn.style.display = "none";
    });
});
