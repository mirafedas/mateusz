class Button extends HTMLElement {
  constructor() {
    super();
  }

  static get observerdAttributes() {
    return ['text'];
  }

  connectedCallback() {
    this.innerHTML = /* html */`
    <button>${this.text || 'Click'}</button>
    `;
  }

  set inprogress(progress) {
    if (progress) {
      this.setAttribute('inprogress', 'true');
    } else {
      this.removeAttribute('inprogress');
    }
  }

  get inprogress() {
    return this.getAttribute('inprogress');
  }


  attributeChangedCallback(attribute, oldValue, newValue) {
    const button = this.querySelector('button');
    console.log('newValue', newValue);
    console.log('oldValue', oldValue);
  }
}
customElements.define('app-button', Button);