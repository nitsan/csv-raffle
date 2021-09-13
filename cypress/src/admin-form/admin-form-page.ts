import { AdminFormSelector } from './admin-form.selector';
import { AdminForm } from '../../../src/app/models/admin.form.model';
import { AppUrl } from '../core/url.enum';

export class AdminFormPage {
  static fillAdminFormMandatory(fixturePath: string) {
    cy.fixture(fixturePath).then((adminForm: AdminForm) => {
      cy.get(AdminFormSelector.CSVFile)
        .attachFile(adminForm.csvFile);
    });
  }

  static fillInput(selector: AdminFormSelector, value: string) {
    cy.get(selector).clear()
      .type(value)
      .should('have.value', value);
  }

  static saveAdminForm() {
    cy.get(AdminFormSelector.SaveFormBtn).click();
    cy.url().should('eq', Cypress.config().baseUrl + AppUrl.Home);
  }
}
