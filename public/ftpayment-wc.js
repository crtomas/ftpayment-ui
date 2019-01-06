class FTPaymentDashboard extends HTMLElement {
 constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.innerHTML = `
            <style>
                p {
                    color: red;
                }
            </style>
            <p>FTPayments v2!</p>
    `;
  }
}
window.customElements.define("ftpayment-dashboard", FTPaymentDashboard);