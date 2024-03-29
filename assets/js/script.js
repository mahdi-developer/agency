document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll(".brand-info");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      perPage: 3,
      perMove: 1,
      gap: '30px',
      pagianation: false,
      arrows: false,
      breakpoints: {
        991: {
          height: '525px',
          focus: 'center',
          trimSpace: true,
          perPage: 1,
          padding: '40px',
          pagianation: true,
          gap: '30px',
          autoWidth: true,
          arrows: false,
        },
        575: {
          perPage: 1,
          height: '287px',
          arrows: false,
          gap: '30px',
        },
      },
    });

    splide.mount();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll(".boost");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      perPage: 4,
      perMove: 1,
      gap: '30px',
      pagianation: false,
      arrows: false,
      breakpoints: {
        991: {
          height: '525px',
          trimSpace: true,
          perPage: 2,
          padding: '30px',
          pagianation: true,
          gap: '30px',
        },
        575: {
          perPage: 1,
          height: '365px',
        },
      },
    });

    splide.mount();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#strategizeSlider", {
    focus: 0.64,
    trimSpace: false,
    perPage: 5,
    perMove: 5,
    gap: "45px",
    updateOnMove: true,
    pagination: false,
    speed: 1000,
    breakpoints: {
      1399: {
        trimSpace: true,
        perPage: 3,
        perMove: 2,
        padding: '30px',
        pagianation: true,
        gap: '30px',
      },
      991: {
        trimSpace: true,
        perPage: 2,
        perMove: 2,
        padding: '30px',
        pagianation: true,
        gap: '30px',
      },
      575: {
        perPage: 2,
        perMove: 2,
        height: '283px',
        gap: '12px',
      },
    },
  });
  var bar = splide.root.querySelector(".my-slider-progress-bar");
  splide.on("mounted move", function () {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
  });
  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll(".help");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      perPage: 3,
      perMove: 1,
      gap: '30px',
      pagianation: false,
      arrows: false,
      breakpoints: {
        1199: {
          height: '525px',
          focus: 'center',
          trimSpace: true,
          perPage: 2,
          padding: '40px',
          gap: '30px',
          arrows: false,
        },
        991: {
          height: '525px',
          focus: 'center',
          trimSpace: true,
          perPage: 1,
          padding: '40px',
          pagianation: true,
          gap: '30px',
          autoWidth: true,
          arrows: false,
        },
        575: {
          perPage: 1,
          height: '330px',
          arrows: false,
          gap: '30px',
        },
      },
    });

    splide.mount();
  });
});