class shortFeaturePage {
  shortTimeout = 10000;
  medimTimeuout = 300000;
  longTimeout = 600000;

  confirmShortModal_lbl = 'div.Modal-content div.Modal-title';
  confirmLimitOrderModal_lbl = 'div.Modal-content div.Modal-title';
  confirmShortModalBody_mdl = 'div.Modal-body';
  pay_lbl = 'div.Confirmation-box-main span:nth-child(1)';
  short_lbl = 'div.Confirmation-box-main div:nth-child(3)';
  short_btn = 'div.Confirmation-box-row button';
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
  close_confirmShortModel_btn = 'div.Modal-close-button *.Modal-close-icon';

  get confirmShortModal() {
    return cy
      .get(this.confirmShortModal_lbl, { timeout: this.shortTimeout })
      .contains('Confirm Short');
  }

  get confirmLimitOrderModal() {
    return cy
      .get(this.confirmLimitOrderModal_lbl, { timeout: this.shortTimeout })
      .contains('Confirm Limit Order');
  }

  get confirmShortModalBody() {
    return cy.get(this.confirmShortModalBody_mdl, {
      timeout: this.shortTimeout,
    });
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

  get shortEth() {
    return cy
      .get(this.short_lbl, { timeout: this.shortTimeout })
      .contains('Short')
      .contains('ETH');
  }

  get shortUsdc() {
    return cy
      .get(this.short_lbl, { timeout: this.shortTimeout })
      .contains('Short')
      .contains('USDC');
  }

  get shortUsdce() {
    return cy
      .get(this.short_lbl, { timeout: this.shortTimeout })
      .contains('Short')
      .contains('USDC.e');
  }

  get shortUni() {
    return cy
      .get(this.short_lbl, { timeout: this.shortTimeout })
      .contains('Short')
      .contains('UNI');
  }

  get shortLink() {
    return cy
      .get(this.short_lbl, { timeout: this.shortTimeout })
      .contains('Short')
      .contains('LINK');
  }

  get short() {
    return cy.get(this.short_btn, { timeout: this.shortTimeout });
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

  get shortFailed_confirmTransactionModel() {
    return cy
      .get(this.toastMessage_lbl, {
        timeout: this.shortTimeout,
      })
      .contains('Transaction was cancelled.');
  }

  get shortFailed() {
    return cy
      .get(this.toastMessage_lbl, {
        timeout: this.shortTimeout,
      })
      .contains('Short failed.');
  }

  get shortSuccess() {
    return cy
      .get(this.toastMessage_lbl, {
        timeout: this.shortTimeout,
      })
      .contains('Short submitted.');
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

  get close_confirmShortModel() {
    return cy.get(this.close_confirmShortModel_btn, {
      timeout: this.shortTimeout,
    });
  }

  get close_toastMessage() {
    return cy.get(this.close_toastMessage_btn, {
      timeout: this.shortTimeout,
    });
  }
}

let shortfeature = new shortFeaturePage();
export default shortfeature;
