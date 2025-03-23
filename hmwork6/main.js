// davaleba 1

function openModal() {
    document.getElementById("id1").style.display = "flex";
}

function changeColor() {
    const ferebi = ["red", "blue", "green", "black", "white"];
    const id2 = document.getElementById("id2").value.toLowerCase();
    
    if (ferebi.includes(id2)) {
        document.body.style.backgroundColor = id2;
        document.getElementById("id1").style.display = "none";
    } else {
        alert("araswori feri! sheiyvanet: red, blue, green, black, an white.");
    }
}

// davaleba 2

function calculateAverage() {
    const shetana = document.getElementById("cifri").value;
    const ricxvebi = shetana.split(":").map(Number).filter(n => !isNaN(n));
    
    if (ricxvebi.length > 0) {
        const jami = ricxvebi.reduce((acc, num) => acc + num, 0);
        const sashualo = jami / ricxvebi.length;
        document.getElementById("shedegi").textContent = "sashualo: " + sashualo;
    } else {
        document.getElementById("shedegi").textContent = "sheitanet swori ricxvebi.";
    }
}