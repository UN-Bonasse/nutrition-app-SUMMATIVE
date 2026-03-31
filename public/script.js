document.getElementById("searchBtn").addEventListener("click", async () => {
  const food = document.getElementById("foodInput").value.trim();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (!food) {
    resultsDiv.textContent = "Please enter a food item.";
    return;
  }

  try {
    const response = await fetch(`/nutrition?food=${encodeURIComponent(food)}`);
    const data = await response.json();

    if (!data || data.length === 0) {
      resultsDiv.textContent = "No nutrition data found.";
      return;
    }

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "result-item";

      div.innerHTML = `
        <strong>${item.name}</strong><br>
        Serving size: ${item.serving_size_g} g<br>
        Calories: ${item.calories}<br>
        Protein: ${item.protein_g}<br>
        Total Fat: ${item.fat_total_g} g<br>
        Saturated Fat: ${item.fat_saturated_g} g<br>
        Carbohydrates: ${item.carbohydrates_total_g} g<br>
        Fiber: ${item.fiber_g} g<br>
        Sugar: ${item.sugar_g} g<br>
        Sodium: ${item.sodium_mg} mg<br>
        Potassium: ${item.potassium_mg} mg<br>
        Cholesterol: ${item.cholesterol_mg} mg
      `;

      resultsDiv.appendChild(div);
    });

  } catch (error) {
    resultsDiv.textContent = "Error fetching nutrition data. Please try again.";
    console.error(error);
  }
});