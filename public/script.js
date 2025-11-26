let API_KEY = "";

// Fetch API key from backend
fetch("/apikey")
    .then(res => res.json())
    .then(data => {
        API_KEY = data.key;
    })
    .catch(err => console.error("Error loading API key:", err));

const searchBtn = document.getElementById("searchBtn");
const foodInput = document.getElementById("foodInput");
const resultsDiv = document.getElementById("results");

searchBtn.addEventListener("click", () => {
    const food = foodInput.value.trim();
    if (!food) {
        resultsDiv.innerHTML = "<p>Please enter a food item.</p>";
        return;
    }

    resultsDiv.innerHTML = "<p>Loading...</p>";

    fetch(`https://api.api-ninjas.com/v1/nutrition?query=${food}`, {
        method: "GET",
        headers: { 'X-Api-Key': API_KEY }
    })
    .then(response => response.json())
    .then(data => {
        if (!data || data.length === 0) {
            resultsDiv.innerHTML = "<p>No data found for this food.</p>";
            return;
        }

        let html = "<h2>Nutrition Info</h2>";
        data.forEach(item => {
            html += `<div id="result">
                        <strong>${item.name}</strong><br>
                        Calories: ${item.calories}<br>
                        Carbs: ${item.carbohydrates_total_g}g<br>
                        Protein: ${item.protein_g}g<br>
                        Fat: ${item.fat_total_g}g
                     </div>`;
        });
        resultsDiv.innerHTML = html;
    })
    .catch(err => {
        console.error(err);
        resultsDiv.innerHTML = "<p>Error fetching data. Please try again later.</p>";
    });
});
