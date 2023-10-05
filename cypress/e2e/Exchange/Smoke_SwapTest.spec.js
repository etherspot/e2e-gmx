import home from '../../PageObjects/Home/homePage';
import exchangeHome from '../../PageObjects/Exchange/exchangeHomePage';
import swapFeature from '../../PageObjects/Exchange/swapFeaturePage';
import managewallet from '../../PageObjects/DepositWithdraw/manageWalletPage';
import 'cypress-if';

const shortTimeout = 3000;
const mediumTimeout = 10000;

describe('Smoke Test Cases of the Swap Flows', () => {
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

  it('SMOKE: Perform the Swap with Native Token, Smart Wallet Address and valid details on Arbitrum Network', () => {
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

        // click on the swap tab
        exchangeHome.swapTab.click();

        // enter amount in pay text field
        exchangeHome.pay_swap.type(data.amount);

        // click on the select token dropdown icon of pay field
        exchangeHome.tokenSelector_pay_swap.click();

        // enter valid token text in search field
        exchangeHome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangeHome.ethToken.click();

        // click on the select token dropdown icon of receive field
        exchangeHome.tokenSelector_receive_swap.click();

        // enter valid token text in search field
        exchangeHome.searchToken.type(data.usdc);

        // click on the usdc token
        exchangeHome.usdcToken.click();

        // click on the swap button
        exchangeHome.swap.click();

        // validate the confirm swap text
        swapFeature.confirmSwapModel.should('be.visible');

        // scroll down to bottom
        swapFeature.confirmSwapModelBody.scrollTo('bottom');

        // click on the confirm swap button
        swapFeature.confirmSwap_confirmSwapModel.click();

        // wait for the element
        cy.wait(mediumTimeout);

        // validate the confirm transaction model
        swapFeature.confirmTransactionModel.should('be.visible');

        // click on the confirm button
        swapFeature.confirm_confirmTransactionModel.click();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast and accept the signature request
        cy.confirmMetamaskSignatureRequest();

        // validate the success message
        swapFeature.swapSuccess.should('be.visible');

        // close the toast message
        swapFeature.close_toastMessage.click();

        // validate the home screen
        home.connectWallet.should('not.exist');
      } catch (e) {
        console.error(e);
        assert.fail(
          'The swap transaction with Native Token, Smart Wallet Address and valid details is not performed.'
        );
      }
    });
  });

  it('SMOKE: Perform the Swap with Native Token, Smart Wallet Address and Exchange Swap Ball Button on Arbitrum Network', () => {
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

        // click on the swap tab
        exchangeHome.swapTab.click();

        // enter amount in pay text field
        exchangeHome.pay_swap.type(data.amount);

        // click on the select token dropdown icon of pay field
        exchangeHome.tokenSelector_pay_swap.click();

        // enter valid token text in search field
        exchangeHome.searchToken.type(data.ethereum);

        // click on the ethereum token
        exchangeHome.ethToken.click();

        // click on the select token dropdown icon of receive field
        exchangeHome.tokenSelector_receive_swap.click();

        // enter valid token text in search field
        exchangeHome.searchToken.type(data.usdc);

        // click on the usdc token
        exchangeHome.usdcToken.click();

        // wait for the element
        cy.wait(shortTimeout);

        // click on the exchange swap ball button
        exchangeHome.exchangeSwapBall.click();

        // wait for the element
        cy.wait(shortTimeout);

        // click on the swap button
        exchangeHome.swap.click();

        // validate the confirm swap text
        swapFeature.confirmSwapModel.should('be.visible');

        // validate the pay details
        swapFeature.payUsdc.should('be.visible');

        // validate the receive details
        swapFeature.receiveEth.should('be.visible');

        // click on the confirm swap button
        swapFeature.confirmSwap_confirmSwapModel.click();

        // wait for the element
        cy.wait(mediumTimeout);

        // validate the confirm transaction model
        swapFeature.confirmTransactionModel.should('be.visible');

        // click on the confirm button
        swapFeature.confirm_confirmTransactionModel.click();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast and accept the signature request
        cy.confirmMetamaskSignatureRequest();

        // validate the success message
        swapFeature.swapSuccess.should('be.visible');

        // close the toast message
        swapFeature.close_toastMessage.click();

        // validate the home screen
        home.connectWallet.should('not.exist');
      } catch (e) {
        console.error(e);
        assert.fail(
          'The swap transaction with Native Token, Smart Wallet Address and Exchange Swap Ball Button is not performed.'
        );
      }
    });
  });
});
