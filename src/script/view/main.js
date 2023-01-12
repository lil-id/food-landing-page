import '../component/food-list.js';
import '../component/search-bar.js'
import DataSource from '../data/food-data.js';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const foodListElement = document.querySelector('food-list');

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchFood(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = (result) => {
        foodListElement.foods = result;
    }

    const fallbackResult = (message) => {
        foodListElement.renderError(message);
      };

    searchElement.clickEvent = onButtonSearchClicked;
}

export default main;