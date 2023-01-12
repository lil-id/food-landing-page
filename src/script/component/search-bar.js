class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#searchElement').value;
    }

    render() {
        this.innerHTML = `
        <div class="search-box">
            <input class="input-form" type="text" id="searchElement" placeholder="Search food">
            <button id="searchButtonElement" class="input-button" type="submit"><i class="bi bi-search fa-2x"></i></button>
        </div>
        `;

        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);