class FurnitureAccessoriesPage {
    
    get firstProductBtn() {
        return $("//*[@id='products-list']/div[1]")
    }

    async clickOnFirstProductBtn() {
        const btn: WebdriverIO.Element = this.firstProductBtn;
        await btn.waitForDisplayed()
        await btn.click()
    }
}

export default new FurnitureAccessoriesPage()