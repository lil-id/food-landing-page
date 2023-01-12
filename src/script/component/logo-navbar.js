class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<img class="logo" id="logo" src="img/freshFood.png" alt="Fresh Food Logo">`;
    }
}

customElements.define('app-bar', AppBar);