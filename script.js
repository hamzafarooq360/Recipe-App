let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchBtn.addEventListener("click", () => {
  let userInp = document.getElementById("user-inp").value;
  if (userInp.length == 0) {
    result.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`;
  } else {
    fetch(url + userInp)
      .then((response) => response.json())
      .then((data) => {
        let meals = data.meals;
        result.innerHTML = "";
        meals.forEach((meal) => {
          let count = 1;
          let ingredients = [];
          for (let i in meal) {
            let ingredient = "";
            let measure = "";
            if (i.startsWith("strIngredient") && meal[i]) {
              ingredient = meal[i];
              measure = meal[`strMeasure` + count];
              count += 1;
              ingredients.push(`${measure} ${ingredient}`);
            }
          }

          let mealDiv = document.createElement("div");
          mealDiv.classList.add("meal");
          mealDiv.innerHTML = `<div class="mealdiv">
            <img src=${meal.strMealThumb}>
            <div class="details">
                <h2>${meal.strMeal}</h2>
                <h4>${meal.strArea}</h4>
            </div>
            <div class="ingredient-con"></div>
            <div class="recipe">
                <button class="hide-recipe">X</button>
                <p class="instructions">${meal.strInstructions}</p>
            </div>
            <button class="show-recipe">Show Recipe </button>
            </div>
          `;

          let ingredientCon = mealDiv.querySelector(".ingredient-con");
          let parent = document.createElement("ul");
          let recipe = mealDiv.querySelector(".recipe");
          let hideRecipe = mealDiv.querySelector(".hide-recipe");
          let showRecipe = mealDiv.querySelector(".show-recipe");

          ingredients.forEach((i) => {
            let child = document.createElement("li");
            child.innerText = i;
            parent.appendChild(child);
            ingredientCon.appendChild(parent);
          });

          hideRecipe.addEventListener("click", () => {
            recipe.style.display = "none";
          });
          showRecipe.addEventListener("click", () => {
            recipe.style.display = "block";
          });

          result.appendChild(mealDiv);
        });
      })
      .catch(() => {
        result.innerHTML = `<h3>Invalid Input</h3>`;
      });
  }
});

