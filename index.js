document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetchData");
    const tableBody = document.getElementById("dataBody");

    fetchButton.addEventListener("click", () => {
        tableBody.innerHTML = "";
        promiseAPI1()
            .then(res => res ? promiseAPI2() : Promise.reject("API 1 failed"))
            .then(res => res ? promiseAPI3() : Promise.reject("API 2 failed"))
            .catch(error => console.error("Error fetching data", error));
    });
});

function promiseAPI1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/posts")
                .then(response => response.json())
                .then(data => {
                    displayData(data.posts, "Posts");
                    resolve(true);
                })
                .catch(error => {
                    console.error("Error fetching posts", error);
                    resolve(false);
                });
        }, 1000);
    });
}

function promiseAPI2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/products")
                .then(response => response.json())
                .then(data => {
                    displayData(data.products, "Products");
                    resolve(true);
                })
                .catch(error => {
                    console.error("Error fetching Products", error);
                    resolve(false);
                });
        }, 2000);
    });
}

function promiseAPI3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/todos")
                .then(response => response.json())
                .then(data => {
                    displayData(data.todos, "To-do");
                    resolve(true);
                })
                .catch(error => {
                    console.error("Error fetching Todos", error);
                    resolve(false);
                });
        }, 3000);
    });
}

function displayData(items, category) {
    const tableBody = document.getElementById("dataBody");
    items.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${category}</td>
            <td>${item.id}</td>
            <td>${item.title || item.name || item.todo}</td>
        `;
        tableBody.appendChild(row);
    });
}