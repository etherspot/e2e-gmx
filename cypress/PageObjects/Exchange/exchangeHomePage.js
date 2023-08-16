class exchangeHomePage {
  shortTimeout = 10000;
  medimTimeuout = 300000;
  longTimeout = 600000;

  exchangesTabs_btn = 'div.Tab.block.Exchange-swap-option-tabs div';
  subExchangesTabs_btn = 'div.Tab.inline.Exchange-swap-order-type-tabs div';
  pay_swap_txt =
    "div[class='Exchange-right'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1) input:nth-child(1)";
  tokenSelector_pay_swap_btn =
    "div[class='Exchange-right'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(1)";
  receive_swap_txt =
    "div[class='Exchange-right'] div:nth-child(1) div:nth-child(1) div:nth-child(4) div:nth-child(2) div:nth-child(1) input:nth-child(1)";
  tokenSelector_receive_swap_btn =
    "div[class='Exchange-right'] div:nth-child(1) div:nth-child(1) div:nth-child(4) div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(1)";
  searchToken_txt = 'input.Tokenselector-search-input';
  ethToken_btn = "img[alt='Ethereum']";
  usdceToken_btn = "img[alt='Bridged USDC (USDC.e)']";
  usdcToken_btn = "img[alt='USD Coin']";
  usdtToken_btn = "img[alt='Tether']";
  exchangeSwapBall_btn = 'button.Exchange-swap-ball';
  swapTransaction_btn = 'button.button.primary-action.w-full.center';

  get longTab() {
    return cy
      .get(this.exchangesTabs_btn, { timeout: this.shortTimeout })
      .contains('Long');
  }

  get shortTab() {
    return cy
      .get(this.exchangesTabs_btn, { timeout: this.shortTimeout })
      .contains('Short');
  }

  get swapTab() {
    return cy
      .get(this.exchangesTabs_btn, { timeout: this.shortTimeout })
      .contains('Swap');
  }

  get marketTab() {
    return cy
      .get(this.subExchangesTabs_btn, { timeout: this.shortTimeout })
      .contains('Market');
  }

  get limitTab() {
    return cy
      .get(this.subExchangesTabs_btn, { timeout: this.shortTimeout })
      .contains('Limit');
  }

  get triggerTab() {
    return cy
      .get(this.subExchangesTabs_btn, { timeout: this.shortTimeout })
      .contains('Trigger');
  }

  get pay_swap() {
    return cy.get(this.pay_swap_txt, { timeout: this.shortTimeout });
  }

  get tokenSelector_pay_swap() {
    return cy.get(this.tokenSelector_pay_swap_btn, {
      timeout: this.shortTimeout,
    });
  }

  get receive_swap() {
    return cy.get(this.receive_swap_txt, { timeout: this.shortTimeout });
  }

  get tokenSelector_receive_swap() {
    return cy.get(this.tokenSelector_receive_swap_btn, {
      timeout: this.shortTimeout,
    });
  }

  get searchToken() {
    return cy.get(this.searchToken_txt, { timeout: this.shortTimeout });
  }

  get ethToken() {
    return cy.get(this.ethToken_btn, { timeout: this.shortTimeout });
  }

  get usdceToken() {
    return cy.get(this.usdceToken_btn, { timeout: this.shortTimeout });
  }

  get usdcToken() {
    return cy.get(this.usdcToken_btn, { timeout: this.shortTimeout });
  }

  get usdtToken() {
    return cy.get(this.usdtToken_btn, { timeout: this.shortTimeout });
  }

  get exchangeSwapBall() {
    return cy.get(this.exchangeSwapBall_btn, { timeout: this.shortTimeout });
  }

  get swap() {
    return cy
      .get(this.swapTransaction_btn, { timeout: this.shortTimeout })
      .contains('Swap');
  }

  get enteranAmount() {
    return cy
      .get(this.swapTransaction_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Enter an amount');
  }
}

let exchangeHome = new exchangeHomePage();
export default exchangeHome;
