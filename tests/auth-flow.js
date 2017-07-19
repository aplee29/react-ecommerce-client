module.exports = {

  'get to signup page': (browser) => {

    browser
      .url(browser.launchUrl)
      .waitForElementVisible('.navbar', 1000)
      .click('a[href="/signup"]')

    browser.assert.urlContains('signup')
    browser.assert.cssClassPresent("form", "signup_form");
  },

  'signup user and redirect to cart': (browser) => {

    browser
      .setValue('input[type=email]', 'test@user.com')
      .setValue('input[type=password]', 'password')
      .click('button[type=submit]')
      .waitForElementVisible('.navbar', 1000)
      .getText('h1', function(res) {
        this.assert.equal(res.value, 'Thanks for signing up!')
      })

    browser.assert.urlEquals('/users/test/profile')
  },

  'close': (browser) => browser.end()
}
