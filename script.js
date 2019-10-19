(function() {
  // invocation

  askName();
  smoothScrollLinks();
  scalingDiplom();
  initSlider();

  ///asking user of his name

  function askName() {
    let name = prompt("Доброго дня! Як Вас звати?") || "Name";
    let names = [...document.querySelectorAll(".name")];
    names.forEach(el => (el.innerHTML = name));
  }

  ////smoothScroll

  function smoothScrollLinks() {
    [...document.querySelectorAll('a[href^="#"]')].forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  }

  ///scaling diplom on click

  function scalingDiplom() {
    let img = document.querySelector(".diplom__img");

    img.addEventListener("click", function() {
      img.classList.toggle("scaled");
    });
  }

  ///show adding to diplom оn click

  function initSlider() {
    let showSliderEl = document.querySelector(".slider");
    let slider = document.querySelector(".slides-container");
    let slides = [...slider.querySelectorAll(".slides")];

    let timerId;

    showSliderEl.addEventListener("click", function() {
      slider.classList.remove("hide");
      timerId = setInterval(changeSlide, 3000);
    });

    function changeSlide() {
      slides.forEach(slide => slide.classList.toggle("showSlide"));
    }

    slider.addEventListener("click", () => {
      slider.classList.add("hide");
      clearInterval(timerId);
    });
  }
})();
