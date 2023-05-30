describe('Verify Login with valid and invalid credencials', () => {

  
beforeEach(()=>{
  cy.visit('https://next-realworld.vercel.app/user/login')
})

    it('Should verify login with invalid signin users', () => {
        // cy.visit('https://next-realworld.vercel.app/user/login')
        
      cy.get(':nth-child(1) > .form-control').type("efeknf@gmail.com")
      cy.get(':nth-child(2) > .form-control').type("password")
      cy.get('.btn').click()
      cy.get('.error-messages > li').should('be.visible')
     
})
    it('Should verify login with valid signin users', () => {
        // cy.visit('https://next-realworld.vercel.app/user/login')
    
        cy.get(':nth-child(1) > .form-control').type("email0123@gmail.com")
        cy.get(':nth-child(2) > .form-control').type("password")
        cy.get('.btn').click()
        cy.should('be.visible');
        
      })
      it('Should validate with empty email', () => {
        // cy.visit('https://next-realworld.vercel.app/user/login')
    
        cy.get(':nth-child(1) > .form-control')
        cy.get(':nth-child(2) > .form-control').type("password")
        cy.get('.btn').click()
        cy.get('.error-messages > li').should('be.visible')
       
  
      })
      it('Should verify with empty password', () => {
        // cy.visit('https://next-realworld.vercel.app/user/login')
    
        cy.get(':nth-child(1) > .form-control').type("email0123@gmail.com")
        cy.get(':nth-child(2) > .form-control')
        cy.get('.btn').click()
        cy.get('.error-messages > li').should('be.visible')

      })   
  })