const openDetails = document.querySelectorAll(".heading");
const openImg = document.querySelectorAll(".open");
const closeImg = document.querySelectorAll(".close");

for (let i = 0; i < openDetails.length; i++) {
  openDetails[i].addEventListener("click", function (e) {
    // console.log(e.target());
    let details = openDetails[i].nextElementSibling;
    if (details.classList.contains("hide")) {
      details.classList.remove("hide");
      openImg[i].classList.add("hide");
      closeImg[i].classList.remove("hide");
    } else {
      details.classList.add("hide");
      openImg[i].classList.remove("hide");
      closeImg[i].classList.add("hide");
    }
  });
}
