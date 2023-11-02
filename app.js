
let container = document.querySelector(".container")

async function fetchData() {
    const response = await fetch("https://api.tvmaze.com/shows");
    const data = await response.json();

    console.log(data);

    data.forEach(el => {
        container.innerHTML += ` 
        <div class = "card">
            <img src = "${el.image.medium}" alt = "#">
            <p>${el.name}</p>
            <p>${el.rating}</p>
            <p>${el.language}</p>
        </div>
        `
    });

}
fetchData()