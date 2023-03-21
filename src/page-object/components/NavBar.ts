class NavBar {

    get FurnitureAccessoriesCategoryBtn(){
        return $("a[class='menu-list-item__anchor'][href='https://belini.pl/produkty/akcesoria-meblowe/']")
    }
    
    get BedroomFurnituresCategoryBtn() {
        return $("a[class='menu-list-item__anchor'][href='https://belini.pl/produkty/meble-do-sypialni/']")
    }

    async clickOnFurnitureAccessoriesCategoryBtn(){
        const btn: WebdriverIO.Element = await this.FurnitureAccessoriesCategoryBtn;
        await btn.waitForClickable()
        await btn.click()
    }
    
    async clickOnBedroomFurnituresCategory() {
        const btn: WebdriverIO.Element = await this.BedroomFurnituresCategoryBtn;
        await btn.waitForClickable()
        await btn.click()
    }
}

export default new NavBar()