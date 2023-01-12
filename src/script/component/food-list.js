import './food-item.js'

class FoodList extends HTMLElement {
    set foods(foods) {
        this._foods = foods;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._foods.forEach(food => {
            const foodItemElement = document.createElement('food-item');
            foodItemElement.food = food;

            this.appendChild(foodItemElement);
        });
    }

    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define('food-list', FoodList);