# Recipe-App
Generates a random recipe based on the input provided using the MealDB API

# How it works
This is a JavaScript code that is used to fetch data from an API (https://www.themealdb.com/api/json/v1/1/search.php) when a button is clicked. The code first selects elements from the HTML page by their id's and assigns them to variables (result, searchBtn, url). It then adds an event listener to the search button, so that when it is clicked, it will execute the function inside. The function first checks if the input field is empty, and if it is, it will display a message on the page saying "Input Field Cannot Be Empty." If the input field is not empty, it will use the Fetch API to send a GET request to the API with the user input appended to the end of the URL. If the request is successful, it will parse the response as JSON and extract data from it. It will then extract the ingredients and recipe of the meals and display it in the HTML page. If the request is not successful it will display an error message on the page "Invalid Input".


<img width="762" alt="recipe app" src="https://user-images.githubusercontent.com/86162690/212541181-4ea519e0-336d-46a1-9f70-74f2790fa614.png">
