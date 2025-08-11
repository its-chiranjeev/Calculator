let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let buttonsArray = Array.from(buttons);
let string = "";

buttonsArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnText = e.target.textContent;

    if (btnText === "AC") {
      string = "";
      display.value = string;
    } else if (btnText === "⌫") {
      string = string.slice(0, -1);
      display.value = string;
    } else if (btnText === "=") {
      try {
        string = string
          .replace(/÷/g, "/")
          .replace(/×/g, "*")
          .replace(/−/g, "-");
        display.value = eval(string);
        string = display.value;
      } catch (error) {
        display.value = "Error";
        string = "";
      }
    } else {
      string += btnText;
      display.value = string;
    }
  });
});
