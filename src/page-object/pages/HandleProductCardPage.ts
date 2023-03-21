class HandleProductCardPage {

    get addToCartBtn() {
        return $("button[data-pid='61955']")
    }

    get goToCheckoutBtn() {
        return $("a[id='add-to-cart-basket']")
    }

    async clickOnAddToCartBtn() {
        const btn: WebdriverIO.Element = this.addToCartBtn;
        await btn.waitForClickable()
        await btn.click()
    }

    async clickOnGoToCheckoutBtn() {
        const btn: WebdriverIO.Element = this.goToCheckoutBtn;
        await btn.waitForDisplayed()
        await btn.waitForClickable()
        await btn.click()
    }
}
export default new HandleProductCardPage();