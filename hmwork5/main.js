// davaleba 1
document.getElementById("But").addEventListener("click", function() {
    document.getElementById("Txt").style.display = "none";
});
        
document.getElementById("card");{
    console.log("Tsertsvadze")
}     

// davaleba 2

const kitxvebi = [
    {
        kitxva: "saqartvelos dedaqalaqi?",
        pasuxebi: ["Berlin", "Madrid", "Tbilisi", "Rome"],
        swori: "Tbilisi"
    },
    {
        kitxva: "ras vswavlobt axla?",
        pasuxebi: ["Java", "Javascript", "Python", "PHP"],
        swori: "Javascript"
    },
    {
        kitxva: "meramdene planetaa dedamiwa mzis sistemashi?",
        pasuxebi: ["3", "4", "5", "6"],
        swori: "3"
    }
];

let kitxvisIndex = 0;
let qula = 0;

function chatvirtva() {
    const quiz = document.getElementById("quiz");
    const kitxvaEl = document.getElementById("kitxva");
    const pasuxebiEl = document.getElementById("pasuxebi");
    
    if (kitxvisIndex >= kitxvebi.length) {
        quiz.innerHTML = `<h2>qvizi dasrulebulia</h2><p>tqveni qula: ${qula}</p>`;
        return;
    }
    
    const currentkitxva = kitxvebi[kitxvisIndex];
    kitxvaEl.textContent = currentkitxva.kitxva;
    pasuxebiEl.innerHTML = "";
    
    currentkitxva.pasuxebi.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option");
        btn.onclick = function() {
            if (option === currentkitxva.swori) {
                btn.classList.add("swori");
                qula++;
                document.getElementById("qula").textContent = qula;
            } else {
                btn.classList.add("araswori");
            }
            setTimeout(() => {
                kitxvisIndex++;
                chatvirtva();
            }, 1000);
        };
        pasuxebiEl.appendChild(btn);
    });
}

chatvirtva();