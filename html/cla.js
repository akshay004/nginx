function getHistory() {
    return document.getElementById("history_value").innerText;
}

function printHistory(num) {
    document.getElementById("history_value").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {

        document.getElementById("output-value").innerText = getFormattednumber(num);
    }
}

function getFormattednumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString(n);
    return value;
}

function reverseNumberFormat(num) {
    console.log("in reverseNumberFormat : " + num);
    return Number(num.replace(/,/g, ''));

}

var FO;
var FH
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {

        if (getHistory() != "" && this.id == "backspace") {
            var AlterHistory = FH.substr(0, getHistory().length - 1);
            printHistory(AlterHistory);
            console.log("AlterHistory : " + AlterHistory);
        }

        if (this.id == "clear") {
            printOutput("");
            printHistory("");
        } else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            FO = getOutput();
            FH = getHistory();
            if (FO != "") {
                FO = reverseNumberFormat(FO);
                FH = (FH + FO);
                console.log(" first add : " + FH);
                printHistory(FH + this.id);
                console.log(" second add : " + FH);
                printOutput("");
                console.log("after clearing : " + FH);
            }
            if (this.id == "=") {
                console.log(this.id);
                var FR = eval(FH);
                printHistory("");
                printOutput(FR);
                console.log(eval(FH));
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        if (printOutput != "") {
            printOutput("");
        }
        var output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    });
}