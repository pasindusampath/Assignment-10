const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
document.getElementById("display").focus();

buttons.forEach((itm) => {
  itm.addEventListener("click", (e) => {
    switch (itm.value) {
      case "AC":
        display.value = "";
        break;
      case "DE":
        display.value = display.value.slice(0, -1);
        break;
      case "=":
        try {
          display.value = eval(display.value);
        } catch {
          alert("Error Calculation!");
          display.value = "";
        }
        break;
      default:
        display.value += itm.value;
    }
  });
});

buttons.forEach((itm) => {
  itm.addEventListener("keypress", (e) => {
    switch (itm.value) {
      case "Backspace":
        display.value = display.value.slice(0, -1);
        break;
      case "Enter":
        try {
          display.value = eval(display.value);
        } catch {
          alert("Error Calculation!");
          display.value = "";
        }
        break;
      default:
        display.value += itm.value;
    }
  });
});
