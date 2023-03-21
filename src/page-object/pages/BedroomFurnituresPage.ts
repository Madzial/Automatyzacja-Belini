class BedroomFurnituresPage {

    get firstProductBtn() {
        return $("//*[@id='products-list']/div[1]")
    }

    async clickOnFirstProductBtn() {
        const btn: WebdriverIO.Element = await this.firstProductBtn
        await btn.waitForClickable()
        await btn.click()
    }
}
export default new BedroomFurnituresPage();