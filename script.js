document.querySelectorAll('.home-bar a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80, // Adjust the offset value
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.home-bar a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80, // Adjust the offset value
            behavior: 'smooth'
        });
    });
});

document.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("div.section-container");
    let navLinks = document.querySelectorAll(".home-bar ul li a");

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100; // Adjust based on header height
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove("active"));
            document.querySelector(`.home-bar ul li a[href="#${id}"]`).classList.add("active");
        }
    });
});