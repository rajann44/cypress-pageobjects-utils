import randomgen from '../utils/RandomGenerator';

describe('drag n drop test', () => {

    it.only('random', () => {
        cy.log(randomgen.generateRandomString(10));
        cy.log(randomgen.generateRandomNumber(10));
      })

})