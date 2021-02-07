const imageItem = document.getElementById('img-src');
const imageTitle = document.getElementById('img-title');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', function(){

    const searchValue= document.getElementById('input-value');
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue.value}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));


            const displayMeals = meals =>{
            searchBtn.addEventListener('click', function(){
                const mealsDiv = document.getElementById('meals');
            
                meals.forEach(meal => {
                    const mealDiv = document.createElement('div');
                    mealDiv.className = 'meals-item';
                    const contant = `
                        <img onclick="displayMealDetails(${meal.strMeal})" src="${meal.strMealThumb}" alt="">
                        <h5>${meal.strMeal}</h5>
                    `
                mealDiv.innerHTML = contant;
                    mealsDiv.appendChild(mealDiv);
                    
                });
            })
            
            }
});

const displayMealDetails = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${meal}}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.strMeal));
}