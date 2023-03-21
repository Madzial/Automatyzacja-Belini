class CartPage {

    get productInCart() {
        return $("div[class='product cart_item']")
    }

    get setInCart() {
        return $("//a[contains(text(), 'Elementy zestawu')]")
    }

}
export default new CartPage();