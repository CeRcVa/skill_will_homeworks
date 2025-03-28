function expo(num, power, callback) {
    if (power === 0) return callback(1);
    return callback(num * expo(num, power - 1, callback));
}

expo(5, 3, result => console.log("შედეგი:", result));


async function fetchLink() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        
        const container = document.createElement("div");
        document.body.appendChild(container);
        
        posts.slice(0, 10).forEach(post => {
            const postElement = document.createElement("div");
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            postElement.style.border = "1px solid #ddd";
            postElement.style.padding = "10px";
            postElement.style.margin = "10px 0";
            container.appendChild(postElement);
        });
    } catch (error) {
        console.error("შეცდომა პოსტების მიღებისას:", error);
    }
}

fetchLink();

async function deepCopy(obj) {
    return new Promise((resolve, reject) => {
        if (typeof obj !== 'object' || obj === null) {
            return reject(new Error("არ უნდა იყოს ნულოვანი ობიექტი"));
        }
        
        try {
            const copiedObj = JSON.parse(JSON.stringify(obj));
            resolve(copiedObj);
        } catch (error) {
            reject(error);
        }
    });
}

deepCopy({ a: 1, b: { c: 2 } })
    .then(copy => console.log("კოპირებული:", copy))
    .catch(error => console.error("შეცდომა:", error));
