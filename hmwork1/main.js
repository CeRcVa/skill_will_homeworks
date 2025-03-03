// davaleba 1

function shedareba(a, b) {
    return a == b ? "tolia" : "ar aris toli";
}

console.log(shedareba(5, 5))

// davaleba 2

function celsiusi(farengeiti) {
    if (typeof farengeiti !== "number") {
        return false;
    }
    return (farengeiti - 32) * 5 / 9;
}

console.log(celsiusi(56.7))  

// davaleba 3

function gamotvla(a, b, operacia) {
    if (typeof a !== "number" || typeof b !== "number") {
        return false;
    }

    if (operacia === "+") {
        return a + b;
    } else if (operacia === "-") {
        return a - b;
    } else if (operacia === "*") {
        return a * b;
    } else if (operacia === "/") {
        return b !== 0 ? a / b : false;
    } else {
        return false;
    }
}

console.log(gamotvla(10, 5, "+"))