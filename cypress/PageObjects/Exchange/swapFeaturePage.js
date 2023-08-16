class swapFeaturePage {
  shortTimeout = 10000;
  medimTimeuout = 300000;
  longTimeout = 600000;

  confirmSwapModelBody_mdl = 'div.Modal-body';
  confirmSwapModel_lbl = 'div.Modal-title';
  payUsdc_lbl = 'div.Confirmation-box-main div:nth-child(1)';
  payUsdce_lbl = 'div.Confirmation-box-main div:nth-child(1)';
  receiveEth_lbl = 'div.Confirmation-box-main div:nth-child(3)';
  payUsdt_lbl = 'div.Confirmation-box-main div:nth-child(1)';
  receiveUsdc_lbl = 'div.Confirmation-box-main div:nth-child(3)';
  receiveUsdce_lbl = 'div.Confirmation-box-main div:nth-child(3)';
  close_confirmSwapModel_btn = 'div.Modal-close-button *.Modal-close-icon';
  confirmSwap_confirmSwapModel_btn =
    'button.button.primary-action.w-full.mt-sm.center';
  confirmTransactionModel_lbl = 'div.Modal-title';
  close_confirmTransactionModel_btn =
    'div.Modal.EtherspotSettingsModal div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) *.Modal-close-icon';
  confirm_confirmTransactionModel_btn =
    'div.Modal.EtherspotSettingsModal div:nth-child(2) div:nth-child(3) div:nth-child(1) button:nth-child(2)';
  reject_confirmTransactionModel_btn =
    'div.Modal.EtherspotSettingsModal div:nth-child(2) div:nth-child(3) div:nth-child(1) button:nth-child(3)';
  toastMessage_lbl = 'div.Toastify div';
  close_toastMessage_btn = "button[aria-label='close']";

  get confirmSwapModelBody() {
    return cy.get(this.confirmSwapModelBody_mdl, {
      timeout: this.shortTimeout,
    });
  }

  get confirmSwapModel() {
    return cy
      .get(this.confirmSwapModel_lbl, { timeout: this.shortTimeout })
      .contains('Confirm Swap');
  }

  get payUsdc() {
    return cy
      .get(this.payUsdc_lbl, { timeout: this.shortTimeout })
      .contains('Pay')
      .contains('USDC');
  }

  get payUsdce() {
    return cy
      .get(this.payUsdce_lbl, { timeout: this.shortTimeout })
      .contains('Pay')
      .contains('USDC.e');
  }

  get receiveEth() {
    return cy
      .get(this.receiveEth_lbl, { timeout: this.shortTimeout })
      .contains('Receive')
      .contains('ETH');
  }

  get payUsdt() {
    return cy
      .get(this.payUsdt_lbl, { timeout: this.shortTimeout })
      .contains('Pay')
      .contains('USDT');
  }

  get receiveUsdc() {
    return cy
      .get(this.receiveUsdc_lbl, { timeout: this.shortTimeout })
      .contains('Receive')
      .contains('USDC');
  }

  get receiveUsdce() {
    return cy
      .get(this.receiveUsdce_lbl, { timeout: this.shortTimeout })
      .contains('Receive')
      .contains('USDC.e');
  }

  get close_confirmSwapModel() {
    return cy.get(this.close_confirmSwapModel_btn, {
      timeout: this.shortTimeout,
    });
  }

  get confirmSwap_confirmSwapModel() {
    return cy
      .get(this.confirmSwap_confirmSwapModel_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Confirm Swap');
  }

  get confirmTransactionModel() {
    return cy
      .get(this.confirmTransactionModel_lbl, {
        timeout: this.shortTimeout,
      })
      .contains('Confirm Transaction');
  }

  get close_confirmTransactionModel() {
    return cy.get(this.close_confirmTransactionModel_btn, {
      timeout: this.shortTimeout,
    });
  }

  get confirm_confirmTransactionModel() {
    return cy
      .get(this.confirm_confirmTransactionModel_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Confirm');
  }

  get reject_confirmTransactionModel() {
    return cy
      .get(this.reject_confirmTransactionModel_btn, {
        timeout: this.shortTimeout,
      })
      .contains('Reject');
  }

  get swapFailed_confirmTransactionModel() {
    return cy
      .get(this.toastMessage_lbl, {
        timeout: this.shortTimeout,
      })
      .contains('Transaction was cancelled.');
  }

  get swapFailed() {
    return cy
      .get(this.toastMessage_lbl, {
        timeout: this.shortTimeout,
      })
      .contains('Swap failed.');
  }

  get swapSuccess() {
    return cy
      .get(this.toastMessage_lbl, {
        timeout: this.shortTimeout,
      })
      .contains('Swap  submitted!');
  }

  get approvalConfirm() {
    return cy
      .get(this.toastMessage_lbl, { timeout: this.shortTimeout })
      .contains('Approval submitted! ');
  }

  get approvalReject() {
    return cy
      .get(this.toastMessage_lbl, { timeout: this.shortTimeout })
      .contains('Approval was cancelled');
  }

  get close_toastMessage() {
    return cy.get(this.close_toastMessage_btn, {
      timeout: this.shortTimeout,
    });
  }
}

let swapFeature = new swapFeaturePage();
export default swapFeature;
