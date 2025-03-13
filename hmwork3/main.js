// davaleba 1

function num(...numbers) {
    if (numbers.length < 3) {
        throw new Error("უნდა იყოს მინიმუმ 3 რიცხვი");
    }
    
    const sum = numbers[0] + numbers[1];
    const fin = numbers.slice(2).reduce((acc, num) => acc * num, 1);
    
    return [sum, fin];
}

console.log(num(2, 3, 4, 5));    

// davaleba 2

function City(user) {
    const { banks } = user || {};
    const { address } = banks?.[2] || {};
    return address?.city;
}

const user = {
    banks: [
        {},
        {},
        { address: { city: "Tbilisi" } }
    ]
};

console.log(City(user));
console.log(City({}));

// davaleba 3

function Clone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (Array.isArray(obj)) {
        return obj.map(item => Clone(item));
    }
    
    return { ...Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, Clone(value)])) };
}

const Pirveli = {
    name: "Shota",
    age: 20,
    address: {
        city: "Tbilisi",
        zip: "0190"
    }
};

const Change = Clone(Pirveli);
console.log(Change);
console.log(Change !== Pirveli);
console.log(Change.address !== Pirveli.address);