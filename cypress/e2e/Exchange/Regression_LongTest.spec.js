/// <reference types='Cypress' />
import home from '../../PageObjects/Home/homePage';
import exchangehome from '../../PageObjects/Exchange/exchangeHomePage';
import longFeature from '../../PageObjects/Exchange/longFeaturePage';
import managewallet from '../../PageObjects/DepositWithdraw/manageWalletPage';
import 'cypress-if';
import longfeature from '../../PageObjects/Exchange/longFeaturePage';

const shortTimeout = 3000;
const mediumTimeout = 10000;

describe('Regression Test Cases of the long Flows', () => {
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

  it('REGRESSION: Validate the Exchange Swap Ball Button with Matket tab for the Long Trade with Native Token on Arbitrum Network', () => {
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

        // click on the long tab
        exchangehome.longTab.click({ force: true });

        // click on the market sub tab
        exchangehome.marketSubTab.click({ force: true });

        // enter amount in pay text field
        exchangehome.pay_long.type(data.long_amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of long field
        exchangehome.tokenSelector_long_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.uniswap);

        // click on the uniswap token
        exchangehome.uniToken.click();

        // click on the exchange swap ball button
        exchangehome.exchangeSwapBall.click();

        // validate the exchange swap ball button working or not
        exchangehome.tokenSelector_pay_uni.should('be.visible');
        exchangehome.tokenSelector_long_eth.should('be.visible');
        exchangehome.min10Usd.should('be.visible');
      } catch (e) {
        console.error(e);
        assert.fail('The Exchange Swap Ball Button is not working correctly.');
      }
    });
  });

  it('REGRESSION: Validate the Exchange Swap Ball Button with Limit tab for the Long Trade with Native Token on Arbitrum Network', () => {
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

        // click on the long tab
        exchangehome.longTab.click({ force: true });

        // click on the limit sub tab
        exchangehome.limitSubTab.click({ force: true });

        // enter amount in pay text field
        exchangehome.pay_long.type(data.long_amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of long field
        exchangehome.tokenSelector_long_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.uniswap);

        // click on the uniswap token
        exchangehome.uniToken.click();

        // get the mark price text
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

        // click on the exchange swap ball button
        exchangehome.exchangeSwapBall.click();

        // validate the exchange swap ball button working or not
        exchangehome.tokenSelector_pay_uni.should('be.visible');
        exchangehome.tokenSelector_long_eth.should('be.visible');
        exchangehome.min10Usd.should('be.visible');
      } catch (e) {
        console.error(e);
        assert.fail('The Exchange Swap Ball Button is not working correctly.');
      }
    });
  });

  it('REGRESSION: Validate the Exchange Swap Ball Button with Trigger tab for the Long Trade with Native Token on Arbitrum Network', () => {
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

        // click on the long tab
        exchangehome.longTab.click({ force: true });

        // click on the trigger sub tab
        exchangehome.triggerSubTab.click({ force: true });

        // enter amount in pay text field
        exchangehome.pay_long.type(data.long_amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of long field
        exchangehome.tokenSelector_long_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.uniswap);

        // click on the uniswap token
        exchangehome.uniToken.click();

        // wait for the element
        cy.wait(shortTimeout);

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
          exchangehome.triggerAmount_long.type(maxTriggerAmount_random);
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
          exchangehome.triggerPrice_long.type(triggerPriceMark_random);
        });

        // click on the exchange swap ball button
        exchangehome.exchangeSwapBall.click();

        // validate the exchange swap ball button working or not
        exchangehome.tokenSelector_pay_uni.should('be.visible');
        exchangehome.tokenSelector_long_eth.should('be.visible');
        exchangehome.min10Usd.should('be.visible');
      } catch (e) {
        console.error(e);
        assert.fail('The Exchange Swap Ball Button is not working correctly.');
      }
    });
  });

  it('REGRESSION: Perform the long with Exceeded Amount on Arbitrum Network', () => {
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

        // click on the long tab
        exchangehome.longTab.click({ force: true });

        // click on the trigger sub tab
        exchangehome.triggerSubTab.click({ force: true });

        // enter amount in pay text field
        exchangehome.pay_long.type(data.exceeded_amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of long field
        exchangehome.tokenSelector_long_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.unilong);

        // click on the uni token
        exchangehome.uniToken.click();

        // validate the insufficient ETH balance button
        managewallet.insufficientETHBalance.should('be.visible');
      } catch (e) {
        console.error(e);
        assert.fail(
          'The long transaction with exceeded amount is not performed.'
        );
      }
    });
  });

  it('REGRESSION: Perform the long with Small Amount on Arbitrum Network', () => {
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

        // click on the long tab
        exchangehome.longTab.click({ force: true });

        // click on the trigger sub tab
        exchangehome.triggerSubTab.click({ force: true });

        // enter amount in pay text field
        exchangehome.pay_long.type(data.small_amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of long field
        exchangehome.tokenSelector_long_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.unilong);

        // click on the uni token
        exchangehome.uniToken.click();

        // validate the enter an amount button
        exchangehome.enteranAmount.should('be.visible');
      } catch (e) {
        console.error(e);
        assert.fail('The long transaction with small amount is not performed.');
      }
    });
  });

  it('REGRESSION: Perform the long with valid details and reject the transaction requiest from transaction confirmation modal on Arbitrum Network', () => {
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

        // click on the long tab
        exchangehome.longTab.click({ force: true });

        // click on the market sub tab
        exchangehome.marketSubTab.click({ force: true });

        // enter amount in pay text field
        exchangehome.pay_long.type(data.long_amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of long field
        exchangehome.tokenSelector_long_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.unilong);

        // click on the uni token
        exchangehome.uniToken.click();

        // wait for the element
        cy.wait(shortTimeout);

        // click on the long uni button
        exchangehome.longUni.click();

        // validate the confirm long text
        longfeature.confirmLongModal.should('be.visible');

        // validate the pay details
        longfeature.payEth.should('be.visible');

        // validate the long details
        longfeature.longUni.should('be.visible');

        // click on the long button
        longfeature.long.click();

        // wait for the element
        cy.wait(mediumTimeout);

        // validate the confirm transaction model
        longfeature.confirmTransactionModel.should('be.visible');

        // click on the reject button
        longFeature.reject_confirmTransactionModel.click();

        // validate the failed message
        longFeature.longFailed_confirmTransactionModel.should('be.visible');

        // close the toast message
        longFeature.close_toastMessage.click();

        // close the long transaction modal
        longFeature.close_confirmLongModel.click();

        // validate the home screen
        home.connectWallet.should('not.exist');
      } catch (e) {
        console.error(e);
        assert.fail(
          'The long transaction with valid details and reject the transaction requiest from transaction confirmation modal is not performed.'
        );
      }
    });
  });

  it('REGRESSION: Perform the long with valid details and reject the transaction requiest from metamask on Arbitrum Network', () => {
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

        // click on the long tab
        exchangehome.longTab.click({ force: true });

        // click on the market sub tab
        exchangehome.marketSubTab.click({ force: true });

        // enter amount in pay text field
        exchangehome.pay_long.type(data.long_amount);

        // click on the select token dropdown icon of pay field
        exchangehome.tokenSelector_pay_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangehome.ethToken.click();

        // click on the select token dropdown icon of long field
        exchangehome.tokenSelector_long_long.click();

        // enter valid token text in search field
        exchangehome.searchToken.type(data.unilong);

        // click on the uni token
        exchangehome.uniToken.click();

        // wait for the element
        cy.wait(shortTimeout);

        // click on the long uni button
        exchangehome.longUni.click();

        // validate the confirm long text
        longfeature.confirmLongModal.should('be.visible');

        // validate the pay details
        longfeature.payEth.should('be.visible');

        // validate the long details
        longfeature.longUni.should('be.visible');

        // click on the long button
        longfeature.long.click();

        // wait for the element
        cy.wait(mediumTimeout);

        // validate the confirm transaction model
        longfeature.confirmTransactionModel.should('be.visible');

        // click on the confirm button
        longfeature.confirm_confirmTransactionModel.click();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast and reject the signature request
        cy.rejectMetamaskSignatureRequest();

        // close the toast message
        longFeature.close_toastMessage.click();

        // close the long transaction modal
        longFeature.close_confirmLongModel.click();

        // validate the home screen
        home.connectWallet.should('not.exist');
      } catch (e) {
        console.error(e);
        assert.fail(
          'The long transaction with valid details and reject the transaction requiest from metamask is not performed.'
        );
      }
    });
  });
});
