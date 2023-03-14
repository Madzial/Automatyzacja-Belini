import { homeUrl } from "../../lib/pages"


describe("Verification of the purchasing process", async () => {
    it("Should open home page", async () => {
        await browser.url(homeUrl)
        expect(browser).toHaveUrl(homeUrl)
        await browser.pause(3000)
    })
})