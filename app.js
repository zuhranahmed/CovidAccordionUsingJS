const openDetails = document.querySelectorAll(".heading");
const openImg = document.querySelectorAll(".open");

for (let i = 0; i < openDetails.length; i++) {
  openDetails[i].addEventListener("click", function (e) {
    // console.log(e.target());
    let details = openDetails[i].nextElementSibling;
    if (details.classList.contains("hide")) {
      details.classList.remove("hide");
    } else {
      details.classList.add("hide");
    }
  });
}
