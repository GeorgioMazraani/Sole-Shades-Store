let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = "1";
    setTimeout(showSlides, 2500);
}

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const sinceText = document.querySelector(".since-text");
    const logo = document.querySelector(".logo");

    if (window.scrollY > 50) {
        header.style.padding = "5px 10px";
        logo.style.width = "120px";
        sinceText.style.fontSize = "12px";
    } else {
        header.style.padding = "10px 20px";
        logo.style.width = "150px";
        sinceText.style.fontSize = "16px";
    }
});

window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
});
function scrollToContact() {
    const contactSection = document.getElementById("contact");
    window.scrollTo({
        top: contactSection.offsetTop - 50,
        behavior: 'smooth'
    });
}
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = "-100px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});