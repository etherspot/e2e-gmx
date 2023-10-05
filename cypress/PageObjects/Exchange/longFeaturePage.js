class longFeaturePage {
  shortTimeout = 10000;
  medimTimeuout = 300000;
  longTimeout = 600000;

  confirmLongModal_lbl = 'div.Modal-content div.Modal-title';
  confirmLimitOrderModal_lbl = 'div.Modal-content div.Modal-title';
  confirmLongModalBody_mdl = 'div.Modal-body';
  pay_lbl = 'div.Confirmation-box-main span:nth-child(1)';
  long_lbl = 'div.Confirmation-box-main div:nth-child(3)';
  long_btn = 'div.Confirmation-box-row button';
  createOrder_btn = 'div.Confirmation-box-row button';
  confirmTransactionModel_lbl = 'div.Modal-title';
  close_confirmTransactionModel_btn =
    'div.Modal.EtherspotSettingsModal div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) *.Modal-close-icon';
  confirm_confirmTransactionModel_btn =
    'div.Modal.EtherspotSettingsModal div:nth-child(2) div:nth-child(3) div:nth-child(1) button:nth-child(2)';
  reject_confirmTransactionModel_btn =
    'div.Modal.EtherspotSettingsModal div:nth-child(2) div:nth-child(3) div:nth-child(1) button:nth-child(3)';
  toastMessage_lbl = 'div.Toastify div';
  close_toastMessage_btn = "button[aria-label='close']";
  close_confirmLongModel_btn = 'div.Modal-close-button *.Modal-close-icon';

  get confirmLongModal() {
    return cy
      .get(this.confirmLongModal_lbl, { timeout: this.shortTimeout })
      .contains('Confirm Long');
  }

  get confirmLimitOrderModal() {
    return cy
      .get(this.confirmLimitOrderModal_lbl, { timeout: this.shortTimeout })
      .contains('Confirm Limit Order');
  }

  get confirmLongModalBody() {
    return cy.get(this.confirmLongModalBody_mdl, {
      timeout: this.shortTimeout,
    });
  }

  get payEth() {
    return cy
      .get(this.pay_lbl, { timeout: this.shortTimeout })
      .contains('Pay')
      .contains('ETH');
  }

  get payUni() {
    return cy
      .get(this.pay_lbl, { timeout: this.shortTimeout })
      .contains('Pay')
      .contains('UNI');
  }

  get payUsdc() {
    return cy
      .get(this.pay_lbl, { timeout: this.shortTimeout })
      .contains('Pay')
      .contains('USDC');
  }

  get payUsdce() {
    return cy
      .get(this.pay_lbl, { timeout: this.shortTimeout })
      .contains('Pay')
      .contains('USDC.e');
  }

  get longEth() {
    return cy
      .get(this.long_lbl, { timeout: this.shortTimeout })
      .contains('Long')
      .contains('ETH');
  }

  get longUsdc() {
    return cy
      .get(this.long_lbl, { timeout: this.shortTimeout })
      .contains('Long')
      .contains('USDC');
  }

  get longUsdce() {
    return cy
      .get(this.long_lbl, { timeout: this.shortTimeout })
      .contains('Long')
      .contains('USDC.e');
  }

  get longUni() {
    return cy
      .get(this.long_lbl, { timeout: this.shortTimeout })
      .contains('Long')
      .contains('UNI');
  }

  get longLink() {
    return cy
      .get(this.long_lbl, { timeout: this.shortTimeout })
      .contains('Long')
      .contains('LINK');
  }

  get long() {
    return cy.get(this.long_btn, { timeout: this.shortTimeout });
  }

  get createOrder() {
    return cy.get(this.createOrder_btn, { timeout: this.shortTimeout });
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

  get longFailed_confirmTransactionModel() {
    return cy
      .get(this.toastMessage_lbl, {
        timeout: this.shortTimeout,
      })
      .contains('Transaction was cancelled.');
  }

  get longFailed() {
    return cy
      .get(this.toastMessage_lbl, {
        timeout: this.shortTimeout,
      })
      .contains('Long failed.');
  }

  get longSuccess() {
    return cy
      .get(this.toastMessage_lbl, {
        timeout: this.shortTimeout,
      })
      .contains('Long submitted.');
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

  get minimumAmountForGas() {
    return cy
      .get(this.toastMessage_lbl, { timeout: this.shortTimeout })
      .contains('Leave at least 0.002 ETH for gas');
  }

  get close_toastMessage() {
    return cy.get(this.close_toastMessage_btn, {
      timeout: this.shortTimeout,
    });
  }

  get close_confirmLongModel() {
    return cy.get(this.close_confirmLongModel_btn, {
      timeout: this.shortTimeout,
    });
  }
}

let longfeature = new longFeaturePage();
export default longfeature;
