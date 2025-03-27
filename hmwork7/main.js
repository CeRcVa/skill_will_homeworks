function Time(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

function Damzadeba(time) {
    return Time(time).then(() => {
        console.log("სათამაშო დამზადდა");
        return "სათამაშო";
    });
}

function Gadazidva(time) {
    return Time(time).then(() => {
        console.log("სათამაშო გაიგზავნა");
        return "მივიდა";
    });
}

function Gayidva(time) {
    return Time(time).then(() => {
        console.log("სათამაშო გაიყიდა");
        return "გაიყიდა";
    });
}

// Then/Catch ვერსია
Damzadeba(3000)
    .then(toy => Gadazidva(2000))
    .then(deliveredToy => Gayidva(1000))
    .then(soldToy => console.log("პროცესის წარმატებით დასრულდა!"))
    .catch(error => console.error("შეცდომა:", error));

// Async/Await ვერსია
async function Magazia() {
    try {
        await Damzadeba(3000);
        await Gadazidva(2000);
        await Gayidva(1000);
        console.log("პროცესის წარმატებით დასრულდა!");
    } catch (error) {
        console.error("შეცდომა:", error);
    }
}

Magazia();