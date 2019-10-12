(function () {

    // invocation

    askName();
    smoothScrollLinks();
    scalingDiplom();
    showSlides();

    ///asking user of his name

    function askName() {
        let name = prompt("Доброго дня! Як Вас звати?", "Лох") || "Name";
        let names = [...document.querySelectorAll(".name")];
        names.forEach((el) => el.innerHTML = name)
    }

    ////smoothScroll

    function smoothScrollLinks() {
        [...document.querySelectorAll('a[href^="#"]')].forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    ///scaling diplom on click

    function scalingDiplom() {
        let img = document.querySelector(".diplom__img");

        img.addEventListener("click", function () {
            img.classList.toggle("scaled");
        })
    }

    ///show adding to diplom at click

    function showSlides() {
        let initSlider = document.querySelector(".slider");
        let slider = document.querySelector(".slideshow-container");
        let slides = [...slider.querySelectorAll(".mySlides")];

        initSlider.addEventListener("click", function () {
            slider.classList.remove("hide");
            setInterval(showAuto, 3000);
        })

        function showAuto() {
            slides.forEach((slide) => slide.classList.toggle("showSlide"));
        }
        slider.addEventListener("click", () => slider.classList.add("hide"))
    }


})();