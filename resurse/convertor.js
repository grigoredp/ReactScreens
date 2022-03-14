const select = document.querySelectorAll('.valuta');
const number = document.getElementById("number");
const output = document.getElementById("output");
fetch('https://api.frankfurter.app/currencies').then((data) => data.json())
    .then((data) => {
        display(data);
    });

function display(data) {
    const entries = Object.entries(data);
    for (var i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
    }
}

function updatevalue() {
    let valuta1 = select[0].value;
    let valuta2 = select[1].value;
    let value = number.value;
    if (valuta1 != valuta2) {
        convert(valuta1, valuta2, value);
    } else {
        alert("Alege o altă valută");
    }
}

function convert(valuta1, valuta2, value) {
    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?amount=${value}&from=${valuta1}&to=${valuta2}`)
        .then((val) => val.json())
        .then((val) => {
            console.log(Object.values(val.rates)[0]);
            output.value = Object.values(val.rates)[0];
        });
}