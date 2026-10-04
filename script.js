document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // Scroll reveal animation
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });


    // Current year in footer
    const year = new Date().getFullYear();
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.innerHTML =
            `© ${year} Vishnu S — B.Tech IT Student & Web Developer`;
    }

});