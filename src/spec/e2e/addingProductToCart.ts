import { cartPageUrl, furnitureAccessoriesUrl, handleProductCardUrl, homeUrl } from "../../lib/pages"
import NavBar from "../../page-object/components/NavBar"
import FurnitureAccessoriesPage from "../../page-object/pages/FurnitureAccesoriesPage"
import HandleProductCardPage from "../../page-object/pages/HandleProductCardPage"
import CartPage from "../../page-object/pages/CartPage"

describe("Verification of adding the product to the cart", async () => {
    it("Should open home page", async () => {
        await browser.url(homeUrl)
        expect(browser).toHaveUrl(homeUrl)
    })

    it("Should click on furniture accessories category", async () => {
        await NavBar.clickOnFurnitureAccessoriesCategoryBtn()
        expect(browser).toHaveUrl(furnitureAccessoriesUrl)
    })

    it("Should click on first product from list", async () => {
        await FurnitureAccessoriesPage.clickOnFirstProductBtn()
        expect(browser).toHaveUrlContaining("https://belini.pl/produkt/")
    })

    it("Should click on add to cart button and go to checkout", async () => {
        await HandleProductCardPage.clickOnAddToCartBtn()
        await HandleProductCardPage.clickOnGoToCheckoutBtn()
        expect(browser).toHaveUrl(cartPageUrl)
    })
    
    it("Should verify that the product is in the basket", async () => {
        await expect(CartPage.productInCart).toBeDisplayed()
    })
})