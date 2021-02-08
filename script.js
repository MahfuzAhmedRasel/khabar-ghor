const imageItem = document.getElementById('img-src');
const imageTitle = document.getElementById('img-title');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', function(){

    const searchValue= document.getElementById('input-value');
        console.log(searchValue.value);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue.value}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => displayError('Sorry Sir Something Wrong')); 


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
            .then(data => displayDetailsMeals(data.meals))
            .catch(error => displayError(error));   
              
}

const displayDetailsMeals = meals=>{
        const  mealDatailsDiv = document.getElementById('bistarito');
           
            mealDatailsDiv.innerHTML = "";
            meals.forEach(meal => {
                 const datialsDiv = document.createElement('div');
                    datialsDiv.className = 'datails-part';
                    datialsDiv.idName = 'datailsid-part';
                    const detailsContant = `
                            <img  src="${meal.strMealThumb}" alt="">
                            <h5>${meal.strMeal}</h5> </br>
                            <h5> Ingredient </h5> 
                            <p>${meal.strIngredient1}</p>
                            <p>${meal.strIngredient2}</p>
                            <p>${meal.strIngredient3}</p>
                            <p>${meal.strIngredient4}</p>
                            <p>${meal.strIngredient5}</p>
                            <p>${meal.strIngredient6}</p>
                            <p>${meal.strIngredient7}</p>
                            <p>${meal.strIngredient8}</p>
                            <p>${meal.strIngredient9}</p>
                            <p>${meal.strIngredient10}</p>
                    `
                    datialsDiv.innerHTML = detailsContant;
                    mealDatailsDiv.appendChild(datialsDiv);
                    datialsDiv.classList.add('d-block')
            });
   
      
        
    
    }

const displayError = error =>{
    const errorMsag = document.getElementById('error-msg');
    errorMsag.innerText = error;
}