const menuBtn = document.getElementById("active");
const navWrapper = document.querySelector(".nav-wrapper");

navWrapper.addEventListener('click', function () {
  if (menuBtn.checked) {
    menuBtn.checked = false;
  }
})