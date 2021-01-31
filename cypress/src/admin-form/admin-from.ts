import { AdminFormSelector } from './admin-form.selector';
import { AdminForm } from '../../../src/app/models/admin.form.model';
import { AppUrl } from '../core/url.enum';

export class AdminFrom {
  static fillAdminForm(fixturePath: string) {
    cy.fixture(fixturePath).then((adminForm: AdminForm) => {
      cy.get(AdminFormSelector.CSVFile)
        .attachFile(adminForm.csvUrl);
      cy.get(AdminFormSelector.IconUrlInput).clear().type(adminForm.logoUrl);
      cy.get(AdminFormSelector.ButtonText).clear().type(adminForm.buttonText);
      cy.get(AdminFormSelector.BackgroundColor).type(adminForm.backgroundColor);
    });
  }

  static saveAdminForm() {
    cy.get(AdminFormSelector.SaveFormBtn).click();
    cy.url().should('eq', Cypress.config().baseUrl + AppUrl.Lottery);
  }
}
