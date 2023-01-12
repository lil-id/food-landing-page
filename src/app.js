import './styles/style.css';
import './script/component/logo-navbar.js';
import './script/component/search-bar.js';
import main from './script/view/main.js';
import logo from './img/freshFood.png';
import food_1 from './img/food 1.png';
import food_2 from './img/food 2.png';
import food_3 from './img/food 3.png';

const freshFoodLogo = document.getElementById('logo');
freshFoodLogo.src = logo;

const firstMainImgFood = document.getElementById('first-main-img');
firstMainImgFood.src = food_1;

const secondMainImgFood = document.getElementById('second-main-img');
secondMainImgFood.src = food_2;

const thirdMainImgFood = document.getElementById('third-main-img');
thirdMainImgFood.src = food_3;

const trendingFirstFoodCard = document.getElementById('food-trending-1');
trendingFirstFoodCard.src = food_1;

const trendingSecondFoodCard = document.getElementById('food-trending-2');
trendingSecondFoodCard.src = food_2;

const trendingThirdFoodCard = document.getElementById('food-trending-3');
trendingThirdFoodCard.src = food_3;

document.addEventListener('DOMContentLoaded', main);