ore = 999;

function assenze() {
    n = parseInt(document.getElementById("progresso").value);
    console.log(n);
    assenze = n * 6;
    ore_assenti = ore - assenze;
    percentuale = (100 * ore_assenti)/ore;
    console.log(percentuale);
    document.getElementById("barra").style.width = percentuale + "%";
}


function calcola() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operazione").value;

    let res;

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("risultato").innerHTML = "Errore";
        return;
    }

    if (op == "+") {
        res = n1 + n2;
    }
    if (op == "-") {
        res = n1 - n2;
    }
    if (op == "*") {
        res = n1 * n2;
    }
    if (op == "/") {
        if (n2 == 0) {
            document.getElementById("risultato").innerHTML = "Divisione per 0 impossibile";
            return;
        }
        res = n1 / n2;
    }

    document.getElementById("risultato").innerHTML = res;
}