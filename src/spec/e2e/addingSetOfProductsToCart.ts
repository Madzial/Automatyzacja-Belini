import { bedroomfurnituresUrl, homeUrl } from "../../lib/pages"
import NavBar from "../../page-object/components/NavBar"
import BedroomFurnituresPage from "../../page-object/pages/BedroomFurnituresPage"

describe("Verification of adding a set of products to the cart", async () => {

    it("Should open home page", async () => {
        await browser.url(homeUrl)
        expect(browser).toHaveUrl(homeUrl)
    })

    it("Should click on bedroom furnitures category button", async () => {
        await NavBar.clickOnBedroomFurnituresCategory()
        expect(browser).toHaveUrl(bedroomfurnituresUrl)
    })

    it("Should click on first product from list", async () => {
        await BedroomFurnituresPage.clickOnFirstProductBtn();
        expect(browser).toHaveUrlContaining("https://belini.pl/produkt/")
    
    })
})