describe('login data', () => {
    
    it(' verify login', () => {
            cy.visit('https://next-realworld.vercel.app/user/login')
            cy.fixture('data').then((data) => {
                

                cy.get(':nth-child(1) > .form-control').type(data.Email)
                cy.get(':nth-child(2) > .form-control').type(data.Password)
                cy.get('.btn').click()
            
        })
        
    })

})
