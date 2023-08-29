/// <reference types='Cypress' />
import { assert } from 'chai';
import home from '../../PageObjects/Home/homePage';
import managewallet from '../../PageObjects/DepositWithdraw/manageWalletPage';
import 'cypress-if';

const shortTimeout = 3000;

describe('Smoke Test Cases of the Deposit and Withdraw Flow', () => {
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

  it('SMOKE: Perform the Withdraw Transaction with Native Token and Enabled one click trading option and valid details on Arbitrum Network', () => {
    cy.fixture('DepositWithdraw').then((data) => {
      try {
        // click on the user avatar
        home.userAvatar.click();

        // click on the one click trading
        home.oneClickTrading.click();

        // scroll down to 1-click trading button
        managewallet.oneClickTradingConfirmation.scrollTo('bottom');

        // click on the one click trading button
        managewallet.enableOneClickTrading.click();

        // click on the withdraw tab
        managewallet.withdrawTab.click();

        // enter the amount in the input field
        managewallet.withdrawAmount.type(data.amount);

        // click on the token list button
        managewallet.withdrawToken.click();

        // enter the token name in the search field
        managewallet.search.type(data.ethereum);

        // click on the respective ethereum option
        managewallet.ethereum.click();

        // validate the one click trading is disabled
        managewallet.disableOneClickTrading.should('be.visible');

        // click on the withdraw button
        managewallet.withdraw.click();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast and accept the signature request
        cy.confirmMetamaskSignatureRequest();

        // close the manage wallet model
        managewallet.closeModel.click();

        // validate the home screen
        home.connectWallet.should('not.exist');
      } catch (e) {
        console.error(e);
        assert.fail(
          'The withdraw transaction with enabled one click trading option is not performed.'
        );
      }
    });
  });

  it('SMOKE: Perform the Withdraw Transaction with Native Token and Disabled one click trading option and valid details on Arbitrum Network', () => {
    cy.fixture('DepositWithdraw').then((data) => {
      try {
        // click on the user avatar
        home.userAvatar.click();

        // click on the one click trading
        home.oneClickTrading.click();

        // scroll down to 1-click trading button
        managewallet.oneClickTradingConfirmation.scrollTo('bottom');

        // click on the one click trading button
        managewallet.enableOneClickTrading.click();

        // click on the withdraw tab
        managewallet.withdrawTab.click();

        // enter the amount in the input field
        managewallet.withdrawAmount.type(data.amount);

        // click on the token list button
        managewallet.withdrawToken.click();

        // enter the token name in the search field
        managewallet.search.type(data.ethereum);

        // click on the respective ethereum option
        managewallet.ethereum.click();

        // click on the one click trading button
        managewallet.disableOneClickTrading.click();

        // click on the withdraw button
        managewallet.withdraw.click();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast and accept the signature request
        cy.confirmMetamaskSignatureRequest();

        // close the manage wallet model
        managewallet.closeModel.click();

        // validate the home screen
        home.connectWallet.should('not.exist');
      } catch (e) {
        console.error(e);
        assert.fail(
          'The withdraw transaction with disabled one click trading option is not performed.'
        );
      }
    });
  });

  it('SMOKE: Perform the Deposit Transaction with Native Token and Enabled one click trading option and valid details on Arbitrum Network', () => {
    cy.fixture('DepositWithdraw').then((data) => {
      try {
        // click on the user avatar
        home.userAvatar.click();

        // click on the one click trading
        home.oneClickTrading.click();

        // scroll down to 1-click trading button
        managewallet.oneClickTradingConfirmation.scrollTo('bottom');

        // click on the one click trading button
        managewallet.enableOneClickTrading.click();

        // click on the deposit tab
        managewallet.depositTab.click({ force: true });

        // enter the amount in the input field
        managewallet.depositAmount.type(data.amount);

        // click on the token list button
        managewallet.depositToken.click();

        // enter the token name in the search field
        managewallet.search.type(data.ethereum);

        // click on the respective ethereum option
        managewallet.ethereum.click();

        // validate the one click trading is disabled
        managewallet.disableOneClickTrading.should('be.visible');

        // click on the deposit button
        managewallet.deposit.click();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast and accept the signature request
        cy.confirmMetamaskTransaction();

        // close the manage wallet model
        managewallet.closeModel.click();

        // validate the home screen
        home.connectWallet.should('not.exist');
      } catch (e) {
        console.error(e);
        assert.fail(
          'The deposit transaction with enabled one click trading option is not performed.'
        );
      }
    });
  });

  it('SMOKE: Perform the Deposit Transaction with Native Token and Disabled one click trading option and valid details on Arbitrum Network', () => {
    cy.fixture('DepositWithdraw').then((data) => {
      try {
        // click on the user avatar
        home.userAvatar.click();

        // click on the one click trading
        home.oneClickTrading.click();

        // scroll down to 1-click trading button
        managewallet.oneClickTradingConfirmation.scrollTo('bottom');

        // click on the one click trading button
        managewallet.enableOneClickTrading.click();

        // click on the deposit tab
        managewallet.depositTab.click();

        // enter the amount in the input field
        managewallet.depositAmount.type(data.amount);

        // click on the token list button
        managewallet.depositToken.click();

        // enter the token name in the search field
        managewallet.search.type(data.ethereum);

        // click on the respective ethereum option
        managewallet.ethereum.click();

        // click on the one click trading button
        managewallet.disableOneClickTrading.click();

        // click on the deposit button
        managewallet.deposit.click();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast and accept the signature request
        cy.confirmMetamaskTransaction();

        // close the manage wallet model
        managewallet.closeModel.click();

        // validate the home screen
        home.connectWallet.should('not.exist');
      } catch (e) {
        console.error(e);
        assert.fail(
          'The deposit transaction with disabled one click trading option is not performed.'
        );
      }
    });
  });
});
