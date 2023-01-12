class FoodItem extends HTMLElement {
    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card">
            <div class="container-image">
                <img class="food-image" src="${this._food.image}" alt="Pasta Mie">
            </div>
            <p class="food-name">${this._food.title}</p>
            <div class="star-rating-good">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
            </div>
            <div class="price-container">
                <p>Rp 25.000</p>
                <div class="price-dotted">
                    <p>.</p>
                </div>
                <p> 3 item</p>
                <button class="button-order" type="submit">Order Now</button>
            </div>
        </div>
        `
    }
}

customElements.define('food-item', FoodItem);