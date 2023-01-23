describe('Reach the landing page and search for bars in London', () => {
  it('passes', () => {
    cy.visit('https://cheersy.vercel.app/')
    cy.get('[data-testid="input"]').type('London').get('[data-testid="button"]').click()
    cy.location("pathname").should("eq", "/results/results")
  })
})

describe('Refine the searched results and then view them in the map', () =>{
  it('passes', () => {
    cy.visit('https://cheersy.vercel.app/')
    cy.get('[data-testid="input"]').type('London').get('[data-testid="button"]').click().get(':nth-child(1) > .filterdropdown_p__a95Un').click().get(':nth-child(1) > [data-testid="checkbox"]').click().get(':nth-child(2) > .filterdropdown_p__a95Un').click().get('[data-testid="unordered-list"] > :nth-child(4)').click().get(':nth-child(3) > .filterdropdown_p__a95Un').get('[data-testid="unordered-list"] > :nth-child(4)').click().get(':nth-child(3) > .filterdropdown_p__a95Un').click().get(':nth-child(4) > [data-testid="checkbox"]').click().get(':nth-child(4) > .filterdropdown_p__a95Un').click().get(':nth-child(3) > [data-testid="checkbox"]').click().get('.Results-search-section_filters_button__OXU_K').click().get('.Results-search-section_button_box__zMZab > :nth-child(3)').click()
  })
})