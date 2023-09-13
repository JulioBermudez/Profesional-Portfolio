$(".custom-container-picture-drops").ripples({
  dropRadius: 25,
  perturbance: 0.05,
  resolution: 500,
  interactive: true,
});



const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("movement2", entry.isIntersecting)
  });
})

observer.observe(document.getElementById("divAbout"));
observer.observe(document.getElementById("divSkills"));
observer.observe(document.getElementById("divPortfolio"));
observer.observe(document.getElementById("contact"));

const observer1 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      $(".picMovmnt").addClass("movement");
      $(".artclMovmnt").addClass("movement1");
      $("#divAbout").addClass("movement2");
      $("#divSkills").addClass("movement3");
      
      movement();
      movementBar();
    }
  });
});
//I use javaScrip here because is not working with jQuery
observer1.observe(document.querySelector(".picMovmnt"));
observer1.observe(document.querySelector(".artclMovmnt"));
observer1.observe(document.querySelector(".skills"));
// observer1.observe(document.querySelector("#num0"));
// observer1.observe(document.querySelector("#divAbout"));
// observer1.observe(document.querySelector("#divSkills"));

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
// Bar movement
function movementBar() {
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
}
// Watch resume Button
$("#btnResume").click((e) => {
  e.preventDefault();
  window.location.href =
    "./assets/others/Resume Julio Bermudez Web Developer.pdf"; 
});
// Delay needed to download resume
$("#btnDownload").click(() => {
//   var delay = 5000;
// window.setTimeout(function(){$('#btnDownload')[0].click();},delay);
// return
})



