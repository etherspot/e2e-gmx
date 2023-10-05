class homePage {
  shortTimeout = 10000;
  mediumTimeout = 300000;
  longTimeout = 600000;

  connectWallet_btn =
    'div.App-header.small button.connect-wallet-btn span.btn-label';
  modal_connectWallet_mdl = 'div.Modal-body';
  metaMask_btn = 'button.Wallet-btn.MetaMask-btn';
  connectWalletClose_btn = 'div.Modal-close-button';
  lightningBoltFalse_btn =
    'div.App-header.small span.App-header-etherspot-status-icon';
  lightningBoltTrue_btn =
    'div.App-header.small span.App-header-etherspot-status-icon.etherspot-enabled-status';
  userAvatar_btn = 'div.App-header.small div.user-avatar';
  oneClickTrading_btn = 'div.menu-item p';
  transparentAddress_btn =
    'div.App-header.small button.App-cta.small.transparent.address-btn';

  get openURL() {
    return cy;
  }

  get connectWallet() {
    return cy.get(this.connectWallet_btn);
  }

  get modal_connectWallet() {
    return cy.get(this.modal_connectWallet_mdl, {
      timeout: this.shortTimeout,
    });
  }

  get metaMask() {
    return cy.get(this.metaMask_btn, { timeout: this.shortTimeout });
  }

  get connectWalletClose() {
    return cy.get(this.connectWalletClose_btn, {
      timeout: this.shortTimeout,
    });
  }

  get lightningBoltFalse() {
    return cy.get(this.lightningBoltFalse_btn, {
      timeout: this.shortTimeout,
    });
  }

  get lightningBoltTrue() {
    return cy.get(this.lightningBoltTrue_btn, {
      timeout: this.shortTimeout,
    });
  }

  get userAvatar() {
    return cy.get(this.userAvatar_btn, { timeout: this.shortTimeout });
  }

  get oneClickTrading() {
    return cy
      .get(this.oneClickTrading_btn, { timeout: this.shortTimeout })
      .contains('1-Click Trading');
  }

  get transparentAddress() {
    return cy.get(this.transparentAddress_btn, {
      timeout: this.shortTimeout,
    });
  }
}

let home = new homePage();
export default home;
