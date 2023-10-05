import home from '../../PageObjects/Home/homePage';
import exchangehome from '../../PageObjects/Exchange/exchangeHomePage';
import shortfeature from '../../PageObjects/Exchange/shortFeaturePage';
import managewallet from '../../PageObjects/DepositWithdraw/manageWalletPage';
import 'cypress-if';
import { assert } from 'chai';

const shortTimeout = 3000;
const mediumTimeout = 10000;

describe('Smoke Test Cases of the Short Trade Flows', () => {
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

  it('SMOKE: Perform the Short Trade with Native Token and valid details using Market on Arbitrum Network', () => {
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

        // enter amount in pay text field
        exchangehome.pay_short.type(data.short_amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of short field
        exchangehome.tokenSelector_short_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the short eth button
        exchangehome.shortEth.click();

        // validate the confirm short text
        shortfeature.confirmShortModal.should('be.visible');

        // validate the pay details
        shortfeature.payEth.should('be.visible');

        // validate the short details
        shortfeature.shortEth.should('be.visible');

        // click on the short button
        shortfeature.short.click();

        // wait for the element
        cy.wait(mediumTimeout);

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
      } catch (e) {
        console.error(e);
        assert.fail(
          'The short trade with Native Token valid details is not performed.'
        );
      }
    });
  });

  it('SMOKE: Perform the short Trade with Native Token and valid details using Limit on Arbitrum Network', () => {
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

        // click on the limit sub tab
        exchangehome.limitSubTab.click({ force: true });

        // enter amount in pay text field
        exchangehome.pay_short.type(data.short_amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of short field
        exchangehome.tokenSelector_short_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // get the mark price amount text
        exchangehome.priceMark.invoke('text').as('mark');

        // get the mark price amount
        let priceMark_random = 0;
        cy.get('@mark').then((markPrive) => {
          let priceMark_decimal = parseFloat(
            markPrive.split(/:\s/)[1].replace(/,/g, '')
          );
          priceMark_random = priceMark_decimal + 1;

          // enter the price in the priceMark field
          exchangehome.price_short.type(priceMark_random);
        });

        // click on the create limit order button
        exchangehome.createLimitOrder.click();

        // validate the confirm limit order text
        shortfeature.confirmLimitOrderModal.should('be.visible');

        // validate the pay details
        shortfeature.payEth.should('be.visible');

        // validate the short details
        shortfeature.shortEth.should('be.visible');

        // click on the create order button
        shortfeature.createOrder.click();

        // wait for the element
        cy.wait(mediumTimeout);

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
      } catch (e) {
        console.error(e);
        assert.fail(
          'The short trade with short Trade with Native Token and valid details using Limit is not performed.'
        );
      }
    });
  });

  it('SMOKE: Perform the short Trade with Native Token and valid details using Trigger on Arbitrum Network', () => {
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
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of short field
        exchangehome.tokenSelector_short_short.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // get the max trigger amount text
        exchangehome.triggerAmountMax.invoke('text').as('price1');

        // get the max trigger amount
        let maxTriggerAmount_random = 0;
        cy.get('@price1').then((maxPrice) => {
          let maxTriggerAmount_split = maxPrice.split(/:\s+/);
          let maxTriggerAmount_decimal = parseInt(maxTriggerAmount_split[1]);
          maxTriggerAmount_random = Math.floor(
            Math.random() * maxTriggerAmount_decimal + 1
          );

          // enter the max trigger amount
          exchangehome.triggerAmount_short.type(maxTriggerAmount_random);
        });

        // get the mark trigger price text
        exchangehome.triggerPriceMark.invoke('text').as('price2');

        // get the mark trigger price
        let triggerPriceMark_random = 0;
        cy.get('@price2').then((price) => {
          let triggerPriceMark_split = price.split(/:\s+/);
          let triggerPriceMark_decimal = parseInt(triggerPriceMark_split[1]);
          triggerPriceMark_random =
            (triggerPriceMark_decimal / 100) * 5 + triggerPriceMark_decimal;

          // enter the trigger price of mark
          exchangehome.triggerPrice_short.type(triggerPriceMark_random);
        });

        // click on the create stop order button
        exchangehome.createStopOrder.click();

        // validate the confirm limit order text
        shortfeature.confirmLimitOrderModal.should('be.visible');

        // validate the pay details
        shortfeature.payEth.should('be.visible');

        // validate the short details
        shortfeature.shortEth.should('be.visible');

        // click on the create order button
        shortfeature.createOrder.click();

        // wait for the element
        cy.wait(mediumTimeout);

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
      } catch (e) {
        console.error(e);
        assert.fail(
          'The short trade with short Trade with Native Token and valid details using Trigger is not performed.'
        );
      }
    });
  });
});
