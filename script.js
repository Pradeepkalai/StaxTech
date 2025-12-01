function press(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let expression = document.getElementById("display").value;

    if (expression) {
        let result;
        try {
            result = eval(expression); // using mathematical operators
        } catch (error) {
            result = "Error";
        }
        document.getElementById("display").value = result;
    }
}
