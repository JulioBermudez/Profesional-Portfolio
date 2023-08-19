$(".custom-container-picture-drops").ripples({
  dropRadius: 20,
  perturbance: 0.03,
  resolution: 600,
  interactive: true,
});

const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      $(".picMovmnt").addClass("movement");
      $(".artclMovmnt").addClass("movement1");
      movement();
      movementBar()
    }
  });
});
//I use javaScrip here because is not working with jQuery
observer.observe(document.querySelector(".picMovmnt"));
observer.observe(document.querySelector(".artclMovmnt"));
observer.observe(document.querySelector(".skills"));
observer.observe(document.querySelector("#num0"));

// Numbers Counter
for (let i = 0; i < 8; i++) {}

function movement() {
  for (let i = 0; i < 8; i++) {
    let value = $(`#num${i}`).data("count");
    let iniValue = 0;
    let numSpeed = 2;
    let count = () => {
      iniValue = iniValue + numSpeed;
      $(`#num${i}`).text(iniValue);
      if (iniValue < value) {
        setTimeout(() => {
          count();
        }, 30);
      }
    };
    count();
  }
}

function movementBar() {
  // for (let i = 0; i < 8; i++) {
  let value0 = $(`#num0`).data("count");
  let value1 = $(`#num1`).data("count");
  let value2 = $(`#num2`).data("count");
  let value3 = $(`#num3`).data("count");
  let value4 = $(`#num4`).data("count");
  let value5 = $(`#num5`).data("count");
  let value6 = $(`#num6`).data("count");
  let value7 = $(`#num7`).data("count");
  let iniValue = 0;
  let numSpeed = 2;
  let countBar = () => {
    iniValue = iniValue + numSpeed;

    console.log(iniValue);
    if (iniValue < value0) {
      $("#bar0").css("width", `${iniValue}%`);
      if (iniValue < value1) {
        $("#bar1").css("width", `${iniValue}%`);
      }
      if (iniValue < value2) {
        $("#bar2").css("width", `${iniValue}%`);
      }
      if (iniValue < value3) {
        $("#bar3").css("width", `${iniValue}%`);
      }
      if (iniValue < value4) {
        $("#bar4").css("width", `${iniValue}%`);
      }
      if (iniValue < value5) {
        $("#bar5").css("width", `${iniValue}%`);
      }
      if (iniValue < value6) {
        $("#bar6").css("width", `${iniValue}%`);
      }
      if (iniValue < value7) {
        $("#bar7").css("width", `${iniValue}%`);
      }

      setTimeout(() => {
        countBar();
      }, 30);
    }
  };
  countBar();
  // }
}



// Testing Field

$('#image').animate('tile', {
  "duration": 3000,
  "rows": 12,
  "cols": 8,
  "effect": "rotate flipX flyToLeft flyToUp",
  "fillMode": "forwards"
});