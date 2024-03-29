import { AdminFormSelector } from '../src/admin-form/admin-form.selector';
import { AdminFormPage } from '../src/admin-form/admin-form-page';
import { RafflePageSelector } from '../src/raffle-page/raffle-page.selectors';

describe('Admin form', () => {
  beforeEach(() => {
    cy.window().then((window) => {
      window.sessionStorage.clear();
    });
    cy.visit('/');
    AdminFormPage.fillAdminFormMandatory('form.json');
  });

  it('should change icon', () => {
    const logoUrl = 'assets/raffle-logo.png';
    AdminFormPage.fillInput(AdminFormSelector.IconUrlInput, logoUrl);
    AdminFormPage.saveAdminForm();
    cy.get(RafflePageSelector.ImageLogo).should('have.attr', 'src', logoUrl);
    cy.percySnapshot();
  });

  it('should change button text', () => {
    const newText = 'Yalla';
    AdminFormPage.fillInput(AdminFormSelector.ButtonText, newText);
    AdminFormPage.saveAdminForm();
    cy.get(RafflePageSelector.StartRaffleBtn).contains(newText);
    cy.percySnapshot();
  });

  it('should change background color', () => {
    const newColor = '#54142a';
    cy.get(AdminFormSelector.BackgroundColor)
      .invoke('val', newColor)
      .trigger('input')
      .should('have.value', newColor);
    AdminFormPage.saveAdminForm();
    cy.get(RafflePageSelector.raffleBackground).should('have.css', 'background-color', 'rgb(84, 20, 42)');
    cy.percySnapshot();
  });
});
