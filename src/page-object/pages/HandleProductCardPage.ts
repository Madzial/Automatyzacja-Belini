class HandleProductCardPage {

    get addToCartBtn() {
        return $("button[data-evt='add_to_cart_gtm']")
    }

    get goToCheckoutBtn() {
        return $("a[id='add-to-cart-basket']")
    }

    async clickOnAddToCartBtn() {
        const btn: WebdriverIO.Element = await this.addToCartBtn;
        await btn.waitForClickable()
        await btn.click()
    }

    async clickOnGoToCheckoutBtn() {
        const btn: WebdriverIO.Element = await this.goToCheckoutBtn;
        await btn.waitForDisplayed()
        await btn.waitForClickable()
        await btn.click()
    }
}
export default new HandleProductCardPage();