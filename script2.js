var preload = document.querySelector("#PreLoad");
window.addEventListener("onload", closePreload);
setTimeout(closePreload, 1500);
function closePreload() {
  preload.style.display = "none";
  console.log("successful");
}
