class WardrobeProductPage {
    
    get addSetToCartBtn() {
        return $("button[data-discount='85551']")
    }

    get loadingPigPicture() {
        return $("img[alt='loading-pig']")
    }

    get goToCheckoutBtn() {
        return $("a[id='add-to-cart-basket']")
    }

    async clickOnAddSetToCartBtn() {
        const btn: WebdriverIO.Element = await this.addSetToCartBtn
        const loading: WebdriverIO.Element = await this.loadingPigPicture
        await loading.scrollIntoView()
        await browser.pause(6000)
        await btn.waitForDisplayed()
        await btn.scrollIntoView()
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
export default new WardrobeProductPage();