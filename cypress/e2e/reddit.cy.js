describe('Reddit Test', () => {
    it('Logs into old.reddit.com', () => {
      // Visit the login page
      cy.visit('https://old.reddit.com/login');

      cy.get('#login-username').click();
      cy.focused().type('wmftcnjobtvwlwmeit@hthlm.com');

      cy.get('#login-password').click();

      cy.focused().type('P@ssw0rd..1');

      cy.focused().blur();

      cy.wait(500)

      cy.get('.login').click();

      cy.get('#search > [type="text"]', { timeout: 20000 }).should('exist');

      cy.get('#search > [type="text"]').type('r/gaming{enter}');

      cy.get('.search-result-header > .search-title > mark', { timeout: 20000 }).should('exist');

      cy.get('.search-result-header > .search-title > mark').first().click();

      cy.get('.odd', { timeout: 20000 }).should('exist');

      cy.get('.odd').eq(1).then(($el) => {
        if ($el.text().includes('Nintendo')) {
          cy.get('.arrow.up').eq(2).click().click();
        } else {
          cy.get('.arrow.down').eq(2).click().click();
        }
      });
      cy.wait(300);
      cy.get('.logout > a').click();

    });
  });