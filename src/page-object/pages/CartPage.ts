class CartPage {

    get productInCart() {
        return $("div[class='product cart_item']")
    }

}
export default new CartPage();