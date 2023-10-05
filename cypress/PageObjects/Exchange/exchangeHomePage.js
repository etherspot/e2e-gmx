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
  pay_short_txt =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(2) div:nth-child(2) div:nth-child(1) input';
  tokenSelector_pay_short_btn =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(2) div:nth-child(2) div:nth-child(2) div.TokenSelector-box';
  long_long_txt =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(4) div:nth-child(2) div:nth-child(1) input';
  tokenSelector_long_long_btn =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(4) div:nth-child(2) div:nth-child(2) div.TokenSelector-box';
  short_short_txt =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(4) div:nth-child(2) div:nth-child(1) input';
  tokenSelector_short_short_btn =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(4) div:nth-child(2) div:nth-child(2) div.TokenSelector-box';
  price_long_txt =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(5) div:nth-child(2) div:nth-child(1) input';
  price_short_txt =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(5) div:nth-child(2) div:nth-child(1) input';
  tokenSelector_price_long_btn =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(5) div:nth-child(2) div:nth-child(2) div.TokenSelector-box';
  priceMark_lbl =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(5) div.buy-input-top-row span.Exchange-swap-label';
  triggerAmount_long_txt =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(5) div:nth-child(2) div:nth-child(1) input';
  triggerAmount_short_txt =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(5) div:nth-child(2) div:nth-child(1) input';
  tokenSelector_triggerAmount_long_btn =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(5) div:nth-child(2) div:nth-child(2) div.TokenSelector-box';
  tokenSelector_triggerAmount_short_btn =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(5) div:nth-child(2) div:nth-child(2) div.TokenSelector-box';
  triggerAmountMax_lbl =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(5) div.buy-input-top-row span.Exchange-swap-label';
  triggerPrice_long_txt =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(6) div:nth-child(2) div:nth-child(1) input';
  tokenSelector_triggerPrice_long_btn =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(6) div:nth-child(2) div:nth-child(2) div.TokenSelector-box';
  triggerPrice_short_txt =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(6) div:nth-child(2) div:nth-child(1) input';
  tokenSelector_triggerPrice_short_btn =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(6) div:nth-child(2) div:nth-child(2) div.TokenSelector-box';
  triggerPriceMark_lbl =
    'div.Exchange-swap-box div.Exchange-swap-box-inner.App-box-highlight div:nth-child(6) div.buy-input-top-row span.Exchange-swap-label';
  leverage_btn = 'div.Exchange-leverage-box div.rc-slider-mark span';
  fees_lbl =
    'div.Exchange-leverage-box div:nth-child(7) div:nth-child(2) span.Tooltip-handle div';
  longEth_btn = 'div.Exchange-swap-button-container button';
  shortEth_btn = 'div.Exchange-swap-button-container button';
  insufficient_btn = 'div.Exchange-swap-button-container button';
  createLimitOrder_btn = 'div.Exchange-swap-button-container button';
  createStopOrder_btn = 'div.Exchange-swap-button-container button';
  searchToken_txt = 'input.Tokenselector-search-input';
  ethToken_btn = "img[alt='Ethereum']";
  uniToken_btn = "img[alt='Uniswap']";
  linkToken_btn = "img[alt='Chainlink']";
  usdceToken_btn = "img[alt='Bridged USDC (USDC.e)']";
  usdcToken_btn = "img[alt='USD Coin']";
  usdtToken_btn = "img[alt='Tether']";
  exchangeSwapBall_btn = 'button.Exchange-swap-ball';
  swapTransaction_btn = 'button.button.primary-action.w-full.center';
  positionTab_btn =
    'div.Exchange-lists.small div.Tab.inline.Exchange-list-tabs div:nth-child(1)';
  ordersTab_btn =
    'div.Exchange-lists.small div.Tab.inline.Exchange-list-tabs div:nth-child(2)';
  tradesTab_btn =
    'div.Exchange-lists.small div.Tab.inline.Exchange-list-tabs div:nth-child(3)';

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

  get tokenSelector_pay_uni() {
    return cy
      .get(this.tokenSelector_pay_long_btn, {
        timeout: this.shortTimeout,
      })
      .contains('UNI');
  }

  get pay_short() {
    return cy.get(this.pay_short_txt, { timeout: this.shortTimeout });
  }

  get tokenSelector_pay_short() {
    return cy.get(this.tokenSelector_pay_short_btn, {
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

  get tokenSelector_long_eth() {
    return cy
      .get(this.tokenSelector_long_long_btn, {
        timeout: this.shortTimeout,
      })
      .contains('ETH');
  }

  get tokenSelector_short_eth() {
    return cy
      .get(this.tokenSelector_short_short_btn, {
        timeout: this.shortTimeout,
      })
      .contains('ETH');
  }

  get short_short() {
    return cy.get(this.short_short_txt, { timeout: this.shortTimeout });
  }

  get tokenSelector_short_short() {
    return cy.get(this.tokenSelector_short_short_btn, {
      timeout: this.shortTimeout,
    });
  }

  get price_long() {
    return cy.get(this.price_long_txt, { timeout: this.shortTimeout });
  }

  get price_short() {
    return cy.get(this.price_short_txt, { timeout: this.shortTimeout });
  }

  get tokenSelector_price_long() {
    return cy.get(this.tokenSelector_price_long_btn, {
      timeout: this.shortTimeout,
    });
  }

  get priceMark() {
    return cy.get(this.priceMark_lbl, {
      timeout: this.shortTimeout,
    });
  }

  get triggerAmount_long() {
    return cy.get(this.triggerAmount_long_txt, { timeout: this.shortTimeout });
  }

  get triggerAmount_short() {
    return cy.get(this.triggerAmount_short_txt, { timeout: this.shortTimeout });
  }

  get tokenSelector_triggerAmount_long() {
    return cy.get(this.tokenSelector_triggerAmount_long_btn, {
      timeout: this.shortTimeout,
    });
  }

  get tokenSelector_triggerAmount_short() {
    return cy.get(this.tokenSelector_triggerAmount_short_btn, {
      timeout: this.shortTimeout,
    });
  }

  get triggerAmountMax() {
    return cy.get(this.triggerAmountMax_lbl, {
      timeout: this.shortTimeout,
    });
  }

  get triggerPrice_long() {
    return cy.get(this.triggerPrice_long_txt, { timeout: this.shortTimeout });
  }

  get tokenSelector_triggerPrice_long() {
    return cy.get(this.tokenSelector_triggerPrice_long_btn, {
      timeout: this.shortTimeout,
    });
  }

  get triggerPrice_short() {
    return cy.get(this.triggerPrice_short_txt, { timeout: this.shortTimeout });
  }

  get tokenSelector_triggerPrice_short() {
    return cy.get(this.tokenSelector_triggerPrice_short_btn, {
      timeout: this.shortTimeout,
    });
  }

  get triggerPriceMark() {
    return cy.get(this.triggerPriceMark_lbl, {
      timeout: this.shortTimeout,
    });
  }

  get leverage() {
    return cy
      .get(this.leverage_btn, {
        timeout: this.shortTimeout,
      })
      .contains('2x');
  }

  get fees() {
    return cy.get(this.fees_lbl, {
      timeout: this.shortTimeout,
    });
  }

  get longEth() {
    return cy
      .get(this.longEth_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Long ETH');
  }

  get longUni() {
    return cy
      .get(this.longEth_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Long UNI');
  }

  get shortUni() {
    return cy
      .get(this.longEth_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Short UNI');
  }

  get shortEth() {
    return cy
      .get(this.shortEth_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Short ETH');
  }

  get min10Usd() {
    return cy
      .get(this.longEth_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Min order: 10 USD');
  }

  get insufficientEth() {
    return cy
      .get(this.insufficient_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Insufficient ETH balance');
  }

  get insufficientUsdc() {
    return cy
      .get(this.insufficient_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Insufficient USDC balance');
  }

  get insufficientUni() {
    return cy
      .get(this.insufficient_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Insufficient UNI balance');
  }

  get createLimitOrder() {
    return cy
      .get(this.createLimitOrder_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Create Limit Order');
  }

  get createStopOrder() {
    return cy
      .get(this.createStopOrder_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Create Stop Order');
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

  get linkToken() {
    return cy.get(this.linkToken_btn, { timeout: this.shortTimeout });
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
    return cy.get(this.swapTransaction_btn, { timeout: this.shortTimeout });
  }

  get enteranAmount() {
    return cy
      .get(this.swapTransaction_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Enter an amount');
  }

  get positionTab() {
    return cy.get(this.positionTab_btn, {
      timeout: this.shortTimeout,
    });
  }

  get ordersTab() {
    return cy.get(this.ordersTab_btn, {
      timeout: this.shortTimeout,
    });
  }

  get tradesTab() {
    return cy.get(this.tradesTab_btn, {
      timeout: this.shortTimeout,
    });
  }
}

let exchangehome = new exchangeHomePage();
export default exchangehome;
