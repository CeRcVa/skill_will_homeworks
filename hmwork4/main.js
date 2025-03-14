// davaleba 1

function change(str, valueToReplace, valueToReplaceWith) {
    let result = "";
    let i = 0;

    while (i < str.length) {
        if (str.startsWith(valueToReplace, i)) {
            result += valueToReplaceWith;
            i += valueToReplace.length;
        } else {
            result += str[i];
            i++;
        }
    }

    return result;
}

console.log(change("მე ვარ", "ვარ", "20 წლის ვარ"));

// davaleba 2

function didisityva(winadadeba) {
    let words = winadadeba.split(" ");
    let capWord = words.map(word => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1);
        }
        return word;
    });
    
    return capWord.join(" ");
}

console.log(didisityva("hello you'r computer has a virus!"));

// davaleba 3

function sortAge(users) {
    return users.sort((a, b) => a.age - b.age);
}

const users = [
    { name: "Lasha", age: 30 },
    { name: "Saba", age: 23 },
    { name: "Nika", age: 25 },
    { name: "Shota", age: 20}
];

console.log(sortAge(users));