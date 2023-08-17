class manageWalletPage {
  shortTimeout = 10000;
  medimTimeuout = 300000;
  longTimeout = 600000;

  depositTab_btn = 'div.Tab.block div';
  withdrawTab_btn = 'div.Tab.block div';
  withdrawAmount_txt =
    'div.Modal-body div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1) input:nth-child(1)';
  withdrawToken_btn =
    'div.Modal-body div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(1)';
  depositAmount_txt =
    'div.Modal-body div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1) input:nth-child(1)';
  depositToken_btn =
    'div.Modal-body div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(1)';
  search_txt = 'input.Tokenselector-search-input';
  ethereum_btn = "div.Token-info img[alt='Ethereum']";
  usdc_btn = "div.Token-info img[alt='Bridged USDC (USDC.e)']";
  withdraw_btn = 'div.Exchange-swap-button-container button';
  deposit_btn = 'div.Exchange-swap-button-container button';
  insufficientETHBalance_btn = 'div.Exchange-swap-button-container button';
  enteranAmount_btn = 'div.Exchange-swap-button-container button';
  oneClickTrading_btn = 'div.Modal-body button';
  oneClickTradingConfirmation_mdl = 'div.Modal-body';
  withdrawFailed_lbl = 'div.Toastify div';
  depositFailed_lbl = 'div.Toastify div';
  closeFailedModel_btn = "button[aria-label='close']";
  closeModel_btn = 'div.Modal-close-button';

  get depositTab() {
    return cy
      .get(this.depositTab_btn, { timeout: this.shortTimeout })
      .contains('Deposit');
  }

  get withdrawTab() {
    return cy
      .get(this.withdrawTab_btn, { timeout: this.shortTimeout })
      .contains('Withdraw');
  }

  get withdrawAmount() {
    return cy.get(this.withdrawAmount_txt, { timeout: this.shortTimeout });
  }

  get withdrawToken() {
    return cy.get(this.withdrawToken_btn, { timeout: this.shortTimeout });
  }

  get depositAmount() {
    return cy.get(this.depositAmount_txt, { timeout: this.shortTimeout });
  }

  get depositToken() {
    return cy.get(this.depositToken_btn, { timeout: this.shortTimeout });
  }

  get search() {
    return cy.get(this.search_txt, {
      timeout: this.shortTimeout,
    });
  }

  get ethereum() {
    return cy.get(this.ethereum_btn, {
      timeout: this.shortTimeout,
    });
  }

  get usdc() {
    return cy.get(this.usdc_btn, {
      timeout: this.shortTimeout,
    });
  }

  get withdraw() {
    return cy
      .get(this.withdraw_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Withdraw');
  }

  get deposit() {
    return cy
      .get(this.deposit_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Deposit');
  }

  get insufficientETHBalance() {
    return cy
      .get(this.insufficientETHBalance_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Insufficient ETH balance');
  }

  get enteranAmount() {
    return cy
      .get(this.enteranAmount_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Enter an amount');
  }

  get disableOneClickTrading() {
    return cy
      .get(this.oneClickTrading_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Disable ⚡️ 1-Click Trading');
  }

  get enableOneClickTrading() {
    return cy
      .get(this.oneClickTrading_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Enable ⚡️ 1-Click Trading');
  }

  get oneClickTradingConfirmation() {
    return cy.get(this.oneClickTradingConfirmation_mdl, {
      timeout: this.shortTimeout,
    });
  }

  get withdrawFailed() {
    return cy
      .get(this.withdrawFailed_lbl, {
        timeout: this.shortTimeout,
      })
      .contains('Withdraw failed.');
  }

  get depositFailed() {
    return cy
      .get(this.depositFailed_lbl, {
        timeout: this.shortTimeout,
      })
      .contains('Transaction was cancelled.');
  }

  get closeFailedModel() {
    return cy.get(this.closeFailedModel_btn, {
      timeout: this.shortTimeout,
    });
  }

  get closeModel() {
    return cy.get(this.closeModel_btn, { timeout: this.shortTimeout });
  }
}

let managewallet = new manageWalletPage();
export default managewallet;
