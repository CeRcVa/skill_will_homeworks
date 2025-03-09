// davaleba 1
function axalgazrda(users) {
    if (!users.length) return null;
    return users.reduce((youngest, user) => user.age < youngest.age ? user : youngest).name;
}

function axaliUser(user) {
    return { ...user };
}

const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
];

console.log(axalgazrda(users));

const pirveliUser = { name: 'Nino', age: 30 };
const ganaxlebuliUser = axaliUser(pirveliUser);

console.log(ganaxlebuliUser);
console.log(pirveliUser === ganaxlebuliUser);

// davaleba 2

function kamateli() {
    return Math.floor(Math.random() * 6) + 1;
}

function tamashi() {
    let amcdeloba = 0;
    let bmcdeloba = 0;
    let agagoreba = 0, bgagoreba = 0;

    while (agagoreba !== 3) {
        agagoreba = kamateli();
        amcdeloba++;
    }

    while (bgagoreba !== 3) {
        bgagoreba = kamateli();
        bmcdeloba++;
    }

    console.log(`მოთამაშე a სამიანი გააგორა ${amcdeloba} ცდაში.`);
    console.log(`მოთამაშე b სამიანი გააგორა ${bmcdeloba} ცდაში.`);

    if (amcdeloba < bmcdeloba) {
        console.log("გამარჯვებულია მოთამაშე a");
    } else if (bmcdeloba < amcdeloba) {
        console.log("გამარჯვებულია მოთამაშე b");
    }
}

tamashi();
