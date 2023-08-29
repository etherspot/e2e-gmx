/// <reference types='Cypress' />
import home from '../../PageObjects/Home/homePage';
import exchangehome from '../../PageObjects/Exchange/exchangeHomePage';
import shortFeature from '../../PageObjects/Exchange/shortFeaturePage';
import managewallet from '../../PageObjects/DepositWithdraw/manageWalletPage';
import 'cypress-if';
import shortfeature from '../../PageObjects/Exchange/shortFeaturePage';

const shortTimeout = 3000;

describe('Regression Test Cases of the short Flows', () => {
  beforeEach('Connect wallet with Metamask', () => {
    cy.disconnectMetamaskWalletFromAllDapps();

    // perform the wallet connect with metamask extention
    try {
      // Visit the root URL of the DApp
      cy.visit('/');

      // click on the connect wallet button
      home.connectWallet.click();

      // click on the matamask button
      home.metaMask.click();

      // wait for the element
      cy.wait(shortTimeout);

      // Accept the Metamask access request by clicking the "Connect" button in the Metamask popup
      cy.acceptMetamaskAccess(true).should('be.true');

      // change the network
      cy.changeMetamaskNetwork('Arbitrum One');

      // close the connect wallet popupup
      home.connectWalletClose.if('visible').click();

      // click on the connect wallet button
      home.connectWallet.if('visible').click();

      // click on the matamask button
      home.metaMask.if('visible').click();

      // validate the home screen
      home.connectWallet.should('not.exist');

      // switch to EOA wallet
      home.lightningBoltTrue
        .if('visible')
        .click()
        .else()
        .log('Already switched to EOA Wallet.');
    } catch (e) {
      console.error(e);
      assert.fail('The signin with metamask is not completed.');
    }
  });

  it('REGRESSION: Perform the short Trade with ERC20 Token and valid details on Arbitrum Network', () => {
    cy.fixture('Exchange').then((data) => {
      try {
        // switch to smart wallet
        home.lightningBoltFalse.if('visible').click();

        // scroll down to 1-click trading button
        managewallet.oneClickTradingConfirmation.scrollTo('bottom');

        // click on the one click trading button
        managewallet.enableOneClickTrading.click();

        // close the manage wallet model
        managewallet.closeModel.click();

        // click on the short tab
        exchangehome.shortTab.click({ force: true });

        // click on the market sub tab
        exchangehome.marketSubTab.click({ force: true });

        // clear amount from the pay text field
        exchangehome.pay_short.clear();

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.usdce);

        // click on the usdce token
        exchangehome.usdceToken.click();

        // click on the select token dropdown icon of short field
        exchangehome.tokenSelector_short_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.unishort);

        // click on the unishort token
        exchangehome.uniToken.click();

        // enter amount in pay short field
        exchangehome.short_short.clear().type(data.short_uni);

        // get the transaction fees
        exchangehome.fees.then(($fees) => {
          const fees_text = $fees.text();
          const fees_split = fees_text.split('$');
          const fees_amount = fees_split[1];
          const fees_final = parseInt(fees_amount);
          if (fees_final > 0) {
            assert.isOk('The fees amount is displayed correctly.');
          } else {
            assert.fail('The fees amount is not displayed.');
          }
        });

        // click on the create limit order button
        exchangehome.createLimitOrder.click();

        // validate the confirm short text
        shortfeature.confirmShortModal.should('be.visible');

        // validate the pay details
        shortfeature.payUsdce.should('be.visible');

        // validate the short details
        shortfeature.shortUni.should('be.visible');

        // click on the create order button
        shortfeature.createOrder.click();

        try {
          // validate the minimum amount for gas validation
          shortfeature.minimumAmountForGas.if('visible').then(($btn) => {
            if ($btn.length > 0) {
              assert.fail('The minimum amount for gas is not available.');
            }
          });
        } catch (e) {
          // wait for the element
          cy.wait(shortTimeout);

          // validate the confirm transaction model
          shortfeature.confirmTransactionModel.should('be.visible');

          // click on the confirm button
          shortfeature.confirm_confirmTransactionModel.click();

          // wait for the element
          cy.wait(shortTimeout);

          // switch to metamast and accept the transaction request
          cy.confirmMetamaskTransaction();

          // validate the success message
          shortfeature.shortSuccess.should('be.visible');

          // close the toast message
          shortfeature.close_toastMessage.click();

          // validate the home screen
          home.connectWallet.should('not.exist');
        }
      } catch (e) {
        console.error(e);
        assert.fail(
          'The short transaction with ERC20 Token and valid details is not performed.'
        );
      }
    });
  });

  it('REGRESSION: Perform the short with ERC20 Token and Exchange short Ball Button on Arbitrum Network', () => {
    cy.fixture('Exchange').then((data) => {
      try {
        // switch to smart wallet
        home.lightningBoltFalse.if('visible').click();

        // scroll down to 1-click trading button
        managewallet.oneClickTradingConfirmation.scrollTo('bottom');

        // click on the one click trading button
        managewallet.enableOneClickTrading.click();

        // close the manage wallet model
        managewallet.closeModel.click();

        // click on the short tab
        exchangehome.shortTab.click({ force: true });

        // click on the trigger sub tab
        exchangehome.triggerSubTab.click({ force: true });

        // enter amount in pay text field
        exchangehome.pay_short.type(data.short_amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.usdce);

        // click on the usdce token
        exchangehome.usdceToken.click();

        // click on the select token dropdown icon of short field
        exchangehome.tokenSelector_short_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.uniswap);

        // click on the uniswap token
        exchangehome.uniToken.click();

        // click on the exchange swap ball button
        exchangehome.exchangeSwapBall.click();

        // click on the select token dropdown icon of short field
        exchangehome.tokenSelector_short_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.link);

        // click on the link token
        exchangehome.linkToken.click();

        // enter amount in pay text field
        exchangehome.pay_short.clear().type(data.short_uni);

        // get the max trigger amount
        let maxTriggerAmount_random = 0;
        exchangehome.triggerAmountMax.then(($max) => {
          const maxTriggerAmount_string = $max.text();
          const maxTriggerAmount_decimal = parseInt(maxTriggerAmount_string);
          const maxTriggerAmount_round = Math.round(maxTriggerAmount_decimal);
          maxTriggerAmount_random = Math.floor(
            Math.random * maxTriggerAmount_round + 1
          );
        });

        // enter the max trigger amount
        exchangehome.triggerAmount_short.type(maxTriggerAmount_random);

        // get the mark trigger price
        let triggerPriceMark_random = 0;
        exchangehome.triggerPriceMark.then(($price) => {
          const triggerPriceMark_string = $price.text();
          const triggerPriceMark_decimal = parseInt(triggerPriceMark_string);
          triggerPriceMark_random =
            (triggerPriceMark_decimal / 100) * 5 + triggerPriceMark_decimal;
        });

        // enter the trigger price of mark
        exchangehome.triggerPrice_short.type(triggerPriceMark_random);

        // validate the sufficient wallet amount
        exchangehome.insufficientUni.if('visible').then(() => {
          assert.fail("The wallet doesn't have sufficient balance.");
        });

        // click on the 2x leverage
        exchangehome.leverage.click();

        // get the transaction fees
        exchangehome.fees.then(($fees) => {
          const fees_text = $fees.text();
          const fees_split = fees_text.split('$');
          const fees_amount = fees_split[1];
          const fees_final = parseInt(fees_amount);
          if (fees_final > 0) {
            assert.isOk('The fees amount is displayed correctly.');
          } else {
            assert.fail('The fees amount is not displayed.');
          }
        });

        // click on the create limit order button
        exchangehome.createLimitOrder.click();

        // validate the confirm short text
        shortfeature.confirmShortModal.should('be.visible');

        // validate the pay details
        shortfeature.payUni.should('be.visible');

        // validate the short details
        shortfeature.shortLink.should('be.visible');

        // click on the create order button
        shortfeature.createOrder.click();

        try {
          // validate the minimum amount for gas validation
          shortfeature.minimumAmountForGas.if('visible').then(($btn) => {
            if ($btn.length > 0) {
              assert.fail('The minimum amount for gas is not available.');
            }
          });
        } catch (e) {
          // wait for the element
          cy.wait(shortTimeout);

          // validate the confirm transaction model
          shortfeature.confirmTransactionModel.should('be.visible');

          // click on the confirm button
          shortfeature.confirm_confirmTransactionModel.click();

          // wait for the element
          cy.wait(shortTimeout);

          // switch to metamast and accept the transaction request
          cy.confirmMetamaskTransaction();

          // validate the success message
          shortfeature.shortSuccess.should('be.visible');

          // close the toast message
          shortfeature.close_toastMessage.click();

          // validate the home screen
          home.connectWallet.should('not.exist');
        }
      } catch (e) {
        console.error(e);
        assert.fail(
          'The short transaction with ERC20 Token and and Exchange short Ball Button is not performed.'
        );
      }
    });
  });

  it('REGRESSION: Perform the short with Exceeded Amount on Arbitrum Network', () => {
    cy.fixture('Exchange').then((data) => {
      try {
        // switch to smart wallet
        home.lightningBoltFalse.if('visible').click();

        // scroll down to 1-click trading button
        managewallet.oneClickTradingConfirmation.scrollTo('bottom');

        // click on the one click trading button
        managewallet.enableOneClickTrading.click();

        // close the manage wallet model
        managewallet.closeModel.click();

        // click on the short tab
        exchangehome.shortTab.click({ force: true });

        // click on the trigger sub tab
        exchangehome.triggerSubTab.click({ force: true });

        // enter amount in pay text field
        exchangehome.pay_short.type(data.exceeded_amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of short field
        exchangehome.tokenSelector_short_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.usdce);

        // click on the usdce token
        exchangehome.usdceToken.click();

        // validate the insufficient ETH balance button
        managewallet.insufficientETHBalance.should('be.visible');
      } catch (e) {
        console.error(e);
        assert.fail(
          'The short transaction with exceeded amount is not performed.'
        );
      }
    });
  });

  it('REGRESSION: Perform the short with Small Amount on Arbitrum Network', () => {
    cy.fixture('Exchange').then((data) => {
      try {
        // switch to smart wallet
        home.lightningBoltFalse.if('visible').click();

        // scroll down to 1-click trading button
        managewallet.oneClickTradingConfirmation.scrollTo('bottom');

        // click on the one click trading button
        managewallet.enableOneClickTrading.click();

        // close the manage wallet model
        managewallet.closeModel.click();

        // click on the short tab
        exchangehome.shortTab.click({ force: true });

        // click on the trigger sub tab
        exchangehome.triggerSubTab.click({ force: true });

        // enter amount in pay text field
        exchangehome.pay_short.type(data.small_amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of short field
        exchangehome.tokenSelector_short_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.usdce);

        // click on the usdce token
        exchangehome.usdceToken.click();

        // validate the enter an amount button
        exchangehome.enteranAmount.should('be.visible');
      } catch (e) {
        console.error(e);
        assert.fail(
          'The short transaction with small amount is not performed.'
        );
      }
    });
  });

  it('REGRESSION: Perform the short with valid details and reject the transaction requiest from transaction confirmation modal on Arbitrum Network', () => {
    cy.fixture('Exchange').then((data) => {
      try {
        // switch to smart wallet
        home.lightningBoltFalse.if('visible').click();

        // scroll down to 1-click trading button
        managewallet.oneClickTradingConfirmation.scrollTo('bottom');

        // click on the one click trading button
        managewallet.enableOneClickTrading.click();

        // close the manage wallet model
        managewallet.closeModel.click();

        // click on the short tab
        exchangehome.shortTab.click({ force: true });

        // click on the trigger sub tab
        exchangehome.triggerSubTab.click({ force: true });

        // enter amount in pay text field
        exchangehome.pay_short.type(data.amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of short field
        exchangehome.tokenSelector_short_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.usdce);

        // click on the usdce token
        exchangehome.usdceToken.click();

        // validate the sufficient wallet amount
        exchangehome.insufficientUni.if('visible').then(() => {
          assert.fail("The wallet doesn't have sufficient balance.");
        });

        // click on the 2x leverage
        exchangehome.leverage.click();

        // get the transaction fees
        exchangehome.fees.then(($fees) => {
          const fees_text = $fees.text();
          const fees_split = fees_text.split('$');
          const fees_amount = fees_split[1];
          const fees_final = parseInt(fees_amount);
          if (fees_final > 0) {
            assert.isOk('The fees amount is displayed correctly.');
          } else {
            assert.fail('The fees amount is not displayed.');
          }
        });

        // click on the create limit order button
        exchangehome.createLimitOrder.click();

        // validate the confirm short text
        shortfeature.confirmShortModal.should('be.visible');

        // validate the pay details
        shortfeature.payEth.should('be.visible');

        // validate the short details
        shortfeature.shortUsdce.should('be.visible');

        // click on the create order button
        shortfeature.createOrder.click();

        try {
          // validate the minimum amount for gas validation
          shortfeature.minimumAmountForGas.if('visible').then(($btn) => {
            if ($btn.length > 0) {
              assert.fail('The minimum amount for gas is not available.');
            }
          });
        } catch (e) {
          // wait for the element
          cy.wait(shortTimeout);

          // validate the confirm transaction model
          shortfeature.confirmTransactionModel.should('be.visible');

          // click on the reject button
          shortFeature.reject_confirmTransactionModel.click();

          // validate the failed message
          shortFeature.shortFailed_confirmTransactionModel.should('be.visible');

          // close the toast message
          shortFeature.close_toastMessage.click();

          // close the short transaction modal
          shortFeature.close_confirmShortModel.click();

          // validate the home screen
          home.connectWallet.should('not.exist');
        }
      } catch (e) {
        console.error(e);
        assert.fail(
          'The short transaction with valid details and reject the transaction requiest from transaction confirmation modal is not performed.'
        );
      }
    });
  });

  it('REGRESSION: Perform the short with valid details and reject the transaction requiest from metamask on Arbitrum Network', () => {
    cy.fixture('Exchange').then((data) => {
      try {
        // switch to smart wallet
        home.lightningBoltFalse.if('visible').click();

        // scroll down to 1-click trading button
        managewallet.oneClickTradingConfirmation.scrollTo('bottom');

        // click on the one click trading button
        managewallet.enableOneClickTrading.click();

        // close the manage wallet model
        managewallet.closeModel.click();

        // click on the short tab
        exchangehome.shortTab.click({ force: true });

        // click on the trigger sub tab
        exchangehome.triggerSubTab.click({ force: true });

        // enter amount in pay text field
        exchangehome.pay_short.type(data.amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of short field
        exchangehome.tokenSelector_short_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.usdce);

        // click on the usdce token
        exchangehome.usdceToken.click();

        // get the transaction fees
        exchangehome.fees.then(($fees) => {
          const fees_text = $fees.text();
          const fees_split = fees_text.split('$');
          const fees_amount = fees_split[1];
          const fees_final = parseInt(fees_amount);
          if (fees_final > 0) {
            assert.isOk('The fees amount is displayed correctly.');
          } else {
            assert.fail('The fees amount is not displayed.');
          }
        });

        // click on the create limit order button
        exchangehome.createLimitOrder.click();

        // validate the confirm short text
        shortfeature.confirmShortModal.should('be.visible');

        // validate the pay details
        shortfeature.payEth.should('be.visible');

        // validate the short details
        shortfeature.shortUsdce.should('be.visible');

        // click on the create order button
        shortfeature.createOrder.click();

        try {
          // validate the minimum amount for gas validation
          shortfeature.minimumAmountForGas.if('visible').then(($btn) => {
            if ($btn.length > 0) {
              assert.fail('The minimum amount for gas is not available.');
            }
          });
        } catch (e) {
          // wait for the element
          cy.wait(shortTimeout);

          // validate the confirm transaction model
          shortfeature.confirmTransactionModel.should('be.visible');

          // click on the confirm button
          shortfeature.confirm_confirmTransactionModel.click();

          // wait for the element
          cy.wait(shortTimeout);

          // switch to metamast and reject the signature request
          cy.rejectMetamaskSignatureRequest();

          // close the toast message
          shortFeature.close_toastMessage.click();

          // close the short transaction modal
          shortFeature.close_confirmShortModel.click();

          // validate the home screen
          home.connectWallet.should('not.exist');
        }
      } catch (e) {
        console.error(e);
        assert.fail(
          'The short transaction with valid details and reject the transaction requiest from metamask is not performed.'
        );
      }
    });
  });
});
