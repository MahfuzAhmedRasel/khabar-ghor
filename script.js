const imageItem = document.getElementById('img-src');
const imageTitle = document.getElementById('img-title');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', function(){

    const searchValue= document.getElementById('input-value');
        console.log(searchValue.value);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue.value}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));


            const displayMeals = meals =>{

                const mealsDiv = document.getElementById('meals');
                mealsDiv.innerHTML = "";
                const  mealDatailsDiv = document.getElementById('bistarito');
                mealDatailsDiv.innerHTML = "";

                meals.forEach(meal => {
                    const mealDiv = document.createElement('div');
                    mealDiv.className = 'meals-item';
                    const contant = `
                        <img  src="${meal.strMealThumb}" alt="">
                        <h5>${meal.strMeal}</h5>
                        <button onclick="detailsDisplay()" class = "btn btn-more">See More Details</button>                   `
                mealDiv.innerHTML = contant;
                mealsDiv.appendChild(mealDiv);
                    
                
            })
            
            }
      
});

const detailsDisplay =()=> {
    const searchValue= document.getElementById('input-value');
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue.value}`)
            .then(res => res.json())
            .then(data => displayDetailsMeals(data.meals));    
              
}

const displayDetailsMeals = meal=>{
        const  mealDatailsDiv = document.getElementById('bistarito');
           
            mealDatailsDiv.innerHTML = "";

            const datialsDiv = document.createElement('div');
            datialsDiv.className = 'datails-part';
            const detailsContant = `
                    <img  src="${meal[0].strMealThumb}" alt="">
                    <h5>${meal[0].strMeal}</h5>
                    <h5> Ingredient </h5> </br>
                    <p>${meal[0].strIngredient1}</p>
                    <p>${meal[0].strIngredient2}</p>
                    <p>${meal[0].strIngredient3}</p>
                    <p>${meal[0].strIngredient4}</p>
                    <p>${meal[0].strIngredient5}</p>
                    <p>${meal[0].strIngredient6}</p>
                    <p>${meal[0].strIngredient7}</p>
                    <p>${meal[0].strIngredient8}</p>
                    <p>${meal[0].strIngredient9}</p>
                    <p>${meal[0].strIngredient10}</p>
            `
            datialsDiv.innerHTML = detailsContant;
            mealDatailsDiv.appendChild(datialsDiv);
      
        
    
    }