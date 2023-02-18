import action from "../../utils/Action"

describe('login via api', () => {

    it('Simple API login', () => {
        cy.request('POST', 'https://ums.ninox.com/api/credentials/signin', {
            email: 'gibeyi7348@iucake.com',
            password: 'Gibeyi7348@iucake.com',
        })
        action.navigateTo('https://app.ninox.com/')
        action.sleepForSeconds(2)
        action.navigateTo('https://admin.ninox.com/profile')
        action.sleepForSeconds(2)
      })

    it('Complex API login', () => {
        // TODO: Implement this
        action.navigateTo('app.timelyapp.com/')
    })

})