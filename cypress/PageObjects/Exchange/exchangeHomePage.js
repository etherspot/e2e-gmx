class exchangeHomePage {
  shortTimeout = 10000;
  medimTimeuout = 300000;
  longTimeout = 600000;

  longTab_btn = 'div.Tab.block.Exchange-swap-option-tabs div:nth-child(1)';
  shortTab_btn = 'div.Tab.block.Exchange-swap-option-tabs div:nth-child(2)';
  swapTab_btn = 'div.Tab.block.Exchange-swap-option-tabs div:nth-child(3)';
  marketSubTab_btn =
    'div.Tab.inline.Exchange-swap-order-type-tabs div:nth-child(1)';
  limitSubTab_btn =
    'div.Tab.inline.Exchange-swap-order-type-tabs div:nth-child(2)';
  triggerSubTab_btn =
    'div.Tab.inline.Exchange-swap-order-type-tabs div:nth-child(3)';
  pay_swap_txt =
    "div[class='Exchange-right'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1) input";
  tokenSelector_pay_swap_btn =
    "div[class='Exchange-right'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(1)";
  receive_swap_txt =
    "div[class='Exchange-right'] div:nth-child(1) div:nth-child(1) div:nth-child(4) div:nth-child(2) div:nth-child(1) input";
  tokenSelector_receive_swap_btn =
    "div[class='Exchange-right'] div:nth-child(1) div:nth-child(1) div:nth-child(4) div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(1)";
  pay_long_txt =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(2) div:nth-child(2) div:nth-child(1) input';
  tokenSelector_pay_long_btn =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(2) div:nth-child(2) div:nth-child(2) div.TokenSelector-box';
  long_long_txt =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(4) div:nth-child(2) div:nth-child(1) input';
  tokenSelector_long_long_btn =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(4) div:nth-child(2) div:nth-child(2) div.TokenSelector-box';
  leverage_btn = 'div.Exchange-leverage-box div.rc-slider-mark span';
  longEth_btn = 'div.Exchange-swap-button-container button';
  searchToken_txt = 'input.Tokenselector-search-input';
  ethToken_btn = "img[alt='Ethereum']";
  uniToken_btn = "img[alt='Uniswap']";
  usdceToken_btn = "img[alt='Bridged USDC (USDC.e)']";
  usdcToken_btn = "img[alt='USD Coin']";
  usdtToken_btn = "img[alt='Tether']";
  exchangeSwapBall_btn = 'button.Exchange-swap-ball';
  swapTransaction_btn = 'button.button.primary-action.w-full.center';

  get longTab() {
    return cy.get(this.longTab_btn, { timeout: this.shortTimeout });
  }

  get shortTab() {
    return cy.get(this.shortTab_btn, { timeout: this.shortTimeout });
  }

  get swapTab() {
    return cy.get(this.swapTab_btn, { timeout: this.shortTimeout });
  }

  get marketSubTab() {
    return cy.get(this.marketSubTab_btn, { timeout: this.shortTimeout });
  }

  get limitSubTab() {
    return cy.get(this.limitSubTab_btn, { timeout: this.shortTimeout });
  }

  get triggerSubTab() {
    return cy.get(this.triggerSubTab_btn, { timeout: this.shortTimeout });
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

  get pay_long() {
    return cy.get(this.pay_long_txt, { timeout: this.shortTimeout });
  }

  get tokenSelector_pay_long() {
    return cy.get(this.tokenSelector_pay_long_btn, {
      timeout: this.shortTimeout,
    });
  }

  get long_long() {
    return cy.get(this.long_long_txt, { timeout: this.shortTimeout });
  }

  get tokenSelector_long_long() {
    return cy.get(this.tokenSelector_long_long_btn, {
      timeout: this.shortTimeout,
    });
  }

  get leverage() {
    return cy
      .get(this.leverage_btn, {
        timeout: this.shortTimeout,
      })
      .contains('5x');
  }

  get longEth() {
    return cy
      .get(this.longEth_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Long ETH');
  }

  get searchToken() {
    return cy.get(this.searchToken_txt, { timeout: this.shortTimeout });
  }

  get ethToken() {
    return cy.get(this.ethToken_btn, { timeout: this.shortTimeout });
  }

  get uniToken() {
    return cy.get(this.uniToken_btn, { timeout: this.shortTimeout });
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
