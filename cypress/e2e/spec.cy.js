describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://next-realworld.vercel.app/user/login')

    cy.get(':nth-child(1) > .form-control').type("email0123@gmail.com")
    cy.get(':nth-child(2) > .form-control').type("password")
    cy.get('.btn').click("")
    // cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
    cy.contains("New Post").click()
    // cy.get(':nth-child(1) > .form-control').type("bejfbwejgb")
    // cy.get(':nth-child(2) > .form-control').type("titlejfnjwgvj")
    // cy.get(':nth-child(3) > .form-control').type("sdjvbhjsbv")
    // cy.get(':nth-child(4) > .form-control').type("001")
    // cy.get('.btn').click()
    // cy.wait(5000)
    // cy.contains("Publish Article").click()
    // cy.xpath('//input[@placeholder="Article Titl"])[1]').type("katha94491")
    cy.xpath('//input[@placeholder="Article Title"][1]').type(' jeevanjgjkatha199493')
    cy.xpath('//input[@placeholder="What\'s this article about?"]').type('jeevan=katha2944921')
    cy.xpath('//textarea[@placeholder="Write your article (in markdown)"]').type('thisjcsjbcncnjsbcnfdhjhgygynjnscun')
    cy.xpath('//input[@placeholder="Enter tags"]').type('01')
    // cy.xpath('//button[normalize-space()="Publish Article"]').click()
    // cy.xpath('//button[normalize-space()="Publish Article"]').click()
    cy.get('.btn').click("bottomRight")

    
  

  })
})