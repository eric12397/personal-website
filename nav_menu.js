const menuBtn = document.getElementById("active");
const navWrapper = document.querySelector(".nav-wrapper");
const navWrapper_ul = document.querySelector(".nav-wrapper ul");

menuBtn.addEventListener('change', function () {
  if (this.checked) {
    navWrapper_ul.classList.remove("hide");
  } else {
    navWrapper_ul.classList.add("hide")
  }
})

navWrapper.addEventListener('click', function () {
  if (menuBtn.checked) {
    menuBtn.checked = false;
    navWrapper_ul.classList.add("hide")
  }
})