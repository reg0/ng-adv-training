class ContactCard extends HTMLElement {

    constructor() {
        super();
        this.data = {};
    }

    static get observedAttributes() {
        return ['name', 'phone'];
    }

    connectedCallback() {
        this
            .querySelector('button')
            .addEventListener('click', _ => this.dispatchEvent(new CustomEvent('more', { detail: this.data })));

        this
            .querySelector('input')
            .addEventListener('input', (ev) => (this.data.phone = ev.target.value));
    }

    attributeChangedCallback(attr, old, value) {
        this.data[attr] = value;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div>
                hello ${this.data.name}
                <input value="${this.data.phone}">
                <button>more</button>
            </div>
        `;
    }

}

window.customElements.define('x-contact-card', ContactCard);

