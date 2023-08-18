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
    }
  });
});
//I use javaScrip here because is not working with jQuery
observer.observe(document.querySelector(".picMovmnt"));
observer.observe(document.querySelector(".artclMovmnt"));
observer.observe(document.querySelector(".skills"));

// Numbers Counter
for (let i = 0; i < 8; i++) {
  
  
}
// let myNum = document.querySelector(`#num${1}`);
// let targetCount = 95 //myNum.dataset.count;
// let initCount =  0//+myNum.innerText;
// let speed = 1;

// let updateNumber = () => {
//   initCount = initCount + speed;
//   $(".movement-bar").css("width", initCount + "%");
//   myNum.innerText = initCount;
//   if (initCount < targetCount) {
//     setTimeout(() => {
//       updateNumber();
//     }, 30);
//   }
// };
//-------------------------

//  updateNumber();

$(()=>{
  for (let i = 0; i < 8; i++) {
    let value = $(`#num${i}`).data("count");    
    let iniValue = 0
    let numSpeed = 1
    let count = () => {
      iniValue = iniValue + numSpeed
      $(`#num${i}`).text(iniValue);
      if (iniValue < value) {
        setTimeout(()=>{
          count()
        }, 30)
      }
    }
    count()
  }
})

