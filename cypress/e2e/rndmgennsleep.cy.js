import Action from '../utils/Action';
import randomgen from '../utils/RandomGenerator';

describe('random number and sleep', () => {

    it('random', () => {
        cy.log(randomgen.generateRandomString(10));
        cy.log(randomgen.generateRandomNumber(10));
      })

    it('sleep for seconds', () => {
      Action.sleepForSeconds(2)
    })

})