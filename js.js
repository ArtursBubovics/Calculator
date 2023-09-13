let calculatorButtonsValue = document.getElementById("calculator-buttons");
let display = document.getElementById("display");
let startValueIsActive = true;
let value = "";
let firstBracketIsActive = true;

const firstMaxDisplayLength = 9;
const secondMaxDisplayLength = 19;

calculatorButtonsValue.addEventListener("click", function (event) {
    let clickedElement = event.target;

    if (clickedElement.classList.contains("btn")) {

        let buttonValue = clickedElement.textContent;

        if (buttonValue == "C") {
            if (display.innerHTML.length < firstMaxDisplayLength) {
                display.innerHTML = 0;

                startValueIsActive = true;

                value = "";

                firstBracketIsActive = true;

            } else {
                display.innerHTML = 0;

                startValueIsActive = true;

                value = "";

                firstBracketIsActive = true;

                display.classList.remove("calculator__value--small");
            }


        } else if (buttonValue == "()") {
            if (value.length < secondMaxDisplayLength) {
                if (firstBracketIsActive) {
                    const lastChar = value.charAt(value.length - 1);
                    if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/" || lastChar == ".") {
                        value += "(";
                        display.innerHTML = value;
                        firstBracketIsActive = false;
                    } else {
                        alert("Incorrect format!");
                    }

                } else {
                    const lastChar = value.charAt(value.length - 1);
                    if (lastChar != "(") {
                        value += ")";
                        display.innerHTML = value;
                        firstBracketIsActive = true;
                    } else {
                        alert("Incorrect format!");
                    }
                }
            } else {
                alert("Incorrect format!");
            }

        } else if (buttonValue == "←") {
            const lastChar = value.charAt(value.length - 1);

            if (value.length <= firstMaxDisplayLength) {
                display.classList.remove("calculator__value--small");
                console.log(display.innerHTML.length);
            }

            if (lastChar != "(" && lastChar != ")") {
                if (value.length <= 1) {
                    if (display.textContent != 0) {
                        display.innerHTML = 0;
                        value = "";
                        startValueIsActive = true;
                    }
                } else {
                    display.innerHTML = value.slice(0, -1);
                    value = value.slice(0, -1);
                }
            } else {
                if (lastChar == "(") {
                    firstBracketIsActive = true;
                    display.innerHTML = value.slice(0, -1);
                    value = value.slice(0, -1);
                } else {
                    firstBracketIsActive = false;
                    display.innerHTML = value.slice(0, -1);
                    value = value.slice(0, -1);
                }

            }

        } else if (buttonValue == "=") {
            const lastChar = value.charAt(value.length - 1);
            if (lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/" && lastChar != ".") {
                try {
                    const result = eval(display.innerHTML);
                    display.innerHTML = result;
                    value = result.toString();
                } catch (error) {
                    display.innerHTML = "Error";
                }
            } else {
                alert("Incorrect format!");
            }

        } else {
            if (value.length < secondMaxDisplayLength) {
                if (startValueIsActive) {
                    if (buttonValue != "+" && buttonValue != "-" && buttonValue != "*" && buttonValue != "/" && buttonValue != "." && buttonValue != "()") {
                        if (buttonValue != 0) {
                            display.innerHTML = buttonValue;
                            value += buttonValue;
                            if (display.innerHTML.length < firstMaxDisplayLength) {
                                display.classList.remove("calculator__value--small");
                            } else {
                                display.classList.add("calculator__value--small");
                            }
                            startValueIsActive = false;
                        }
                    }

                } else {

                    const lastChar = value.charAt(value.length - 1);
                    if ((lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/" && lastChar != ".") ||
                        (buttonValue != "+" && buttonValue != "-" && buttonValue != "*" && buttonValue != "/" && buttonValue != ".")) {
                        display.innerHTML += buttonValue;
                        value += buttonValue;
                        if (display.innerHTML.length < firstMaxDisplayLength) {
                            display.classList.remove("calculator__value--small");
                        } else {
                            display.classList.add("calculator__value--small");
                        }
                    } else {
                        value = value.slice(0, -1) + buttonValue;
                        display.innerHTML = value;
                        if (display.innerHTML.length < firstMaxDisplayLength) {
                            display.classList.remove("calculator__value--small");
                        } else {
                            display.classList.add("calculator__value--small");
                        }
                    }

                }

            } else {
                alert("Incorrect format!");
            }
        }
    }
})