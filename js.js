let calculatorButtonsValue = document.getElementById("calculator-buttons");
let display = document.getElementById("display");
let startValueIsActive = true;
let value = "";
let firstBracketIsActive = true;

const maxDisplayLength = 9;

calculatorButtonsValue.addEventListener("click", function (event) {
    let clickedElement = event.target;



    // Проверяем, является ли элемент кнопкой (или можно добавить другие условия)
    if (clickedElement.classList.contains("btn")) {
        // Получаем значение кнопки
        let buttonValue = clickedElement.textContent;





        if (buttonValue == "C") {
            if (display.innerHTML.length < maxDisplayLength) {
                display.innerHTML = 0;

                startValueIsActive = true;
                console.log("1 startValueIsActive consolelog " + startValueIsActive);

                value = "";

                firstBracketIsActive = true;

            } else {
                display.innerHTML = 0;

                startValueIsActive = true;
                console.log("1 startValueIsActive consolelog " + startValueIsActive);

                value = "";

                firstBracketIsActive = true;

                display.classList.remove("calculator__value--small");
                console.log(display.innerHTML.length);
            }


        } else if (buttonValue == "()") {
            if (firstBracketIsActive) {
                const lastChar = value.charAt(value.length - 1);
                if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/" || lastChar == ".") {
                    value += "(";
                    display.innerHTML = value;
                    firstBracketIsActive = false;
                    console.log("1 firstBracketIsActive consolelog " + firstBracketIsActive);
                } else {
                    alert("Incorrect format!");
                }

            } else {
                const lastChar = value.charAt(value.length - 1);
                if (lastChar != "(") {
                    value += ")";
                    display.innerHTML = value;
                    firstBracketIsActive = true;
                    console.log("2 firstBracketIsActive consolelog " + firstBracketIsActive);
                } else {
                    alert("Incorrect format!");
                }
            }

        } else if (buttonValue == "←") {
            const lastChar = value.charAt(value.length - 1); //тут может быть ошибка

            console.log("value.length " + value.length);

            if (value.length <= maxDisplayLength) {
                display.classList.remove("calculator__value--small");
                console.log(display.innerHTML.length);
            }

            if (lastChar != "(" && lastChar != ")") {
                if (value.length <= 1) {
                    if (display.textContent != 0) {
                        display.innerHTML = 0;
                        value = "";
                        console.log("1 consolelog " + value);
                        startValueIsActive = true;
                        console.log("2 startValueIsActive consolelog " + startValueIsActive);
                    }
                } else {
                    display.innerHTML = value.slice(0, -1);
                    value = value.slice(0, -1);
                }
            } else {
                if (lastChar == "(") {
                    firstBracketIsActive = true;
                    console.log("3 firstBracketIsActive consolelog " + firstBracketIsActive);
                    display.innerHTML = value.slice(0, -1);
                    value = value.slice(0, -1);
                } else {
                    firstBracketIsActive = false;
                    console.log("4 firstBracketIsActive consolelog " + firstBracketIsActive);
                    display.innerHTML = value.slice(0, -1);
                    value = value.slice(0, -1);
                }

            }

        } else if (buttonValue == "=") {
            const lastChar = value.charAt(value.length - 1);
            if (lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/" && lastChar != ".") {
                try {
                    const result = eval(display.innerHTML); // Используем функцию eval для вычисления выражения
                    display.innerHTML = result;
                    value = result.toString();
                } catch (error) {
                    display.innerHTML = "Error";
                }
            } else {
                alert("Incorrect format!");
            }

        } else {
            if (startValueIsActive) {
                if (buttonValue != "+" && buttonValue != "-" && buttonValue != "*" && buttonValue != "/" && buttonValue != "." && buttonValue != "()") {
                    if (buttonValue != 0) {
                        display.innerHTML = buttonValue;
                        value += buttonValue;
                        if (display.innerHTML.length < maxDisplayLength) {
                            display.classList.remove("calculator__value--small");
                            console.log(display.innerHTML.length);
                        } else {
                            display.classList.add("calculator__value--small");
                            console.log(display.innerHTML.length);
                        }
                        console.log("2 consolelog " + value);
                        startValueIsActive = false;
                        console.log("3 startValueIsActive consolelog " + startValueIsActive);
                    }
                }

            } else {
                
                const lastChar = value.charAt(value.length - 1); // можно сделать функцию
                if ((lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/" && lastChar != ".") ||
                    (buttonValue != "+" && buttonValue != "-" && buttonValue != "*" && buttonValue != "/" && buttonValue != ".")) {
                    display.innerHTML += buttonValue;
                    value += buttonValue;
                    if (display.innerHTML.length < maxDisplayLength) {
                        display.classList.remove("calculator__value--small");
                        console.log(display.innerHTML.length);
                    } else {
                        display.classList.add("calculator__value--small");
                        console.log(display.innerHTML.length);
                    }
                    console.log("4 consolelog " + value);
                } else {
                    value = value.slice(0, -1) + buttonValue;
                    display.innerHTML = value;
                    if (display.innerHTML.length < maxDisplayLength) {
                        display.classList.remove("calculator__value--small");
                        console.log(display.innerHTML.length);
                    } else {
                        display.classList.add("calculator__value--small");
                        console.log(display.innerHTML.length);
                    }
                    console.log("5 consolelog " + value);
                }

            }

        }
    }
})