import Action from "../../utils/Action"

describe('login via api', () => {

    it('Simple API login', () => {
        cy.request('POST', 'https://ums.ninox.com/api/credentials/signin', {
            email: 'gibeyi7348@iucake.com',
            password: 'Gibeyi7348@iucake.com',
        })
        Action.navigateTo('https://app.ninox.com/')
        Action.sleepForSeconds(2)
        Action.navigateTo('https://admin.ninox.com/profile')
        Action.sleepForSeconds(2)
      })

    it('Complex API login', () => {
        // TODO: Implement this
        Action.navigateTo('app.timelyapp.com/')
    })

})