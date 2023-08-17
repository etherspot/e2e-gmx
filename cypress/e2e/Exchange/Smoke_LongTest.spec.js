import home from '../../PageObjects/Home/homePage';
import exchangeHome from '../../PageObjects/Exchange/exchangeHomePage';
import longFeature from '../../PageObjects/Exchange/longFeaturePage';
import managewallet from '../../PageObjects/DepositWithdraw/manageWalletPage';
import 'cypress-if';

const shortTimeout = 3000;

describe('Smoke Test Cases of the Long Flows', () => {
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

  it('SMOKE: Perform the Long with Native Token and valid details on Arbitrum Network', () => {
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
        exchangeHome.longTab.click({ force: true });

        // click on the market sub tab
        exchangeHome.marketSubTab.click({ force: true });

        // enter amount in pay text field
        exchangeHome.pay_long.type(data.long_amount);

        // click on the select token dropdown icon of pay field
        exchangeHome.tokenSelector_pay_long.click();

        // enter valid token text in search field
        exchangeHome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangeHome.ethToken.click();

        // click on the select token dropdown icon of long field
        exchangeHome.tokenSelector_long_long.click();

        // enter valid token text in search field
        exchangeHome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangeHome.ethToken.click();

        // click on the 5x leverage
        exchangeHome.leverage.click();

        // click on the long eth button
        exchangeHome.longEth.click();

        // validate the confirm long text
        longFeature.confirmLongModal.should('be.visible');

        // validate the pay details
        longFeature.payEth.should('be.visible');

        // validate the long details
        longFeature.longEth.should('be.visible');

        // click on the long button
        longFeature.long.click();

        // wait for the element
        cy.wait(shortTimeout);

        // validate the confirm transaction model
        longFeature.confirmTransactionModel.should('be.visible');

        // click on the confirm button
        longFeature.confirm_confirmTransactionModel.click();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast and accept the transaction request
        cy.confirmMetamaskTransaction();

        // validate the success message
        longFeature.longSuccess.should('be.visible');

        // close the toast message
        longFeature.close_toastMessage.click();

        // validate the home screen
        home.connectWallet.should('not.exist');
      } catch (e) {
        console.error(e);
        assert.fail(
          'The long trade with Native Token valid details is not performed.'
        );
      }
    });
  });

  it('SMOKE: Perform the Long with Native Token and Exchange Swap Ball Button on Arbitrum Network', () => {
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
        exchangeHome.longTab.click({ force: true });

        // click on the market sub tab
        exchangeHome.marketTab.click({ force: true });

        // enter amount in pay text field
        exchangeHome.pay_long.type(data.long_amount);

        // click on the select token dropdown icon of pay field
        exchangeHome.tokenSelector_pay_long.click();

        // enter valid token text in search field
        exchangeHome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangeHome.ethToken.click();

        // click on the select token dropdown icon of long field
        exchangeHome.tokenSelector_long_long.click();

        // enter valid token text in search field
        exchangeHome.searchToken.type(data.uniswap);

        // click on the uniswap token
        exchangeHome.uniToken.click();

        // click on the exchange swap ball button
        exchangeHome.exchangeSwapBall.click();

        // enter amount in pay text field
        exchangeHome.pay_long.clear().type(data.long_uni);

        // click on the 5x leverage
        exchangeHome.leverage.click();

        // click on the long eth button
        exchangeHome.longEth.click();

        // validate the confirm long text
        longFeature.confirmLongModal.should('be.visible');

        // validate the pay details
        longFeature.payUni.should('be.visible');

        // validate the long details
        longFeature.longEth.should('be.visible');

        // click on the long button
        longFeature.long.click();

        // wait for the element
        cy.wait(shortTimeout);

        // validate the confirm transaction model
        longFeature.confirmTransactionModel.should('be.visible');

        // click on the confirm button
        longFeature.confirm_confirmTransactionModel.click();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast and accept the transaction request
        cy.confirmMetamaskTransaction();

        // validate the success message
        longFeature.longSuccess.should('be.visible');

        // close the toast message
        longFeature.close_toastMessage.click();

        // validate the home screen
        home.connectWallet.should('not.exist');
      } catch (e) {
        console.error(e);
        assert.fail(
          'The long trade with Native Token and Exchange Swap Ball Button is not performed.'
        );
      }
    });
  });
});
