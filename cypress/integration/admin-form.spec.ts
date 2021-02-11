import { AdminFormSelector } from '../src/admin-form/admin-form.selector';
import { AdminFormPage } from '../src/admin-form/admin-form-page';
import { LotteryPageSelector } from '../src/lottery-page/lottery-page.selectors';

describe('Admin form', () => {
  beforeEach(() => {
    cy.window().then((window) => {
      window.sessionStorage.clear();
    });
    cy.visit('/admin');
    AdminFormPage.fillAdminForm('form.json');
  });

  it('should change icon', () => {
    const logoUrl = 'assets/angular-il.jpeg';
    cy.get(AdminFormSelector.IconUrlInput).clear()
      .type(logoUrl)
      .should('have.value', logoUrl);
    AdminFormPage.saveAdminForm();
    cy.get(LotteryPageSelector.ImageLogo).should('have.attr', 'src', logoUrl);
  });

  it('should change button text', () => {
    const newText = 'Yalla';
    cy.get(AdminFormSelector.ButtonText).clear()
      .type(newText)
      .should('have.value', newText);
    AdminFormPage.saveAdminForm();
    cy.get(LotteryPageSelector.StartLotteryBtn).contains(newText);
  });

  it('should change background color', () => {
    const newColor = '#54142a';
    cy.get(AdminFormSelector.BackgroundColor)
      .invoke('val', newColor)
      .trigger('input')
      .should('have.value', newColor);
    AdminFormPage.saveAdminForm();
    cy.get(LotteryPageSelector.LotteryBackground).should('have.css', 'background-color', 'rgb(84, 20, 42)');
  });
});
