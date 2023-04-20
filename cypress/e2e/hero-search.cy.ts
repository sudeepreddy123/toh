describe('HeroSearchComponent', () => {
    beforeEach(() => {
      cy.visit('localhost:4200/dashboard');
    });

    // Happy cases
    it('searches for a hero and finds multiple results (TU01)', () => {
      const searchTerm = 'Mag';

      cy.get('#search-box').type(searchTerm);
      cy.get('.search-result li').should('have.length', 2);
      cy.get('.search-result li').should('contain', "Magneta");
      cy.get('.search-result li').should('contain', "Magma");
    });

    it('searches for a valid hero and finds the result (TU02)', () => {
      const searchTerm = 'Magneta';

      cy.get('#search-box').type(searchTerm);
      cy.get('.search-result li').should('contain', searchTerm);
    });

    // Exception cases
    it('clears the search box after a valid search (TU03)', () => {
      const searchTerm = 'Magneta';
    
      cy.get('#search-box').type(searchTerm).clear();
      cy.get('.search-result li').should('not.exist');
    });
    
    it('searches for an invalid hero and finds no results (TU04)', () => {
      const searchTerm = 'InvalidHero';
    
      cy.get('#search-box').type(searchTerm);
      cy.get('.search-result li').should('not.exist');
    });
  });
