// drop down list
function myFunction(x) {
  x.classList.toggle("change");
  console.log(x);
  var click = document.getElementById("one");

  if (click.style.display != "block") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

// the dark them
let icon = document.querySelector("#icon");
var service = document.querySelector(".services");
var P2service_card = document.querySelectorAll(".P2service_Card");
var compterInfo_TEXT = document.querySelectorAll("dl");

icon.addEventListener("click", modeChange);
var Service_P_Color = "";
var comText = "";
function modeChange() {
  if (service.style.backgroundColor != "rgb(14, 13, 20)") {
    (service.style.backgroundColor = "rgb(14, 13, 20)"),
      P2service_card.forEach((x) => {
        x.style.backgroundColor = "rgb(14, 13, 20)";
      });
    compterInfo_TEXT.forEach((x) => {
      x.style.color = "white";
    });
    Service_P_Color = "rgb(14, 13, 20)";
    comText = "white";
  } else {
    (service.style.backgroundColor = "rgb(255,255,255)"),
      P2service_card.forEach((x) => {
        x.style.backgroundColor = "rgb(255, 255, 255)";
      });
    compterInfo_TEXT.forEach((x) => {
      x.style.color = "black";
    });
    Service_P_Color = "rgb(255,255,255)";
    comText = "black";
  }

  window.sessionStorage.setItem(
    "KEY",
    JSON.stringify({ BACKcolor_Keeper: Service_P_Color })
  );
  window.sessionStorage.setItem(
    "KEY2",
    JSON.stringify({ textColo_Keeper: comText })
  );
}
// let red = JSON.parse(window.localStorage.getItem('KEY'))
//  service.style.backgroundColor = `${red.color_Keeper}`

service.style.backgroundColor = `${
  JSON.parse(window.sessionStorage.getItem("KEY")).BACKcolor_Keeper
}`;
P2service_card.forEach((x) => {
  x.style.backgroundColor = `${
    JSON.parse(window.sessionStorage.getItem("KEY")).BACKcolor_Keeper
  }`;
});

compterInfo_TEXT.forEach((x) => {
  x.style.color = `${
    JSON.parse(window.sessionStorage.getItem("KEY2")).textColo_Keeper
  }`;
});
