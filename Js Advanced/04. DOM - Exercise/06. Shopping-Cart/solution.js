function solve() {
    function addProduct(index) {
        let price = parseFloat(document.getElementsByClassName('product-line-price')[index].textContent);
        let productName = document.getElementsByClassName('product-title')[index].textContent;

        textArea.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;

        totalMoney += price;

        if (!products.includes(productName)) {
            products.push(productName);
        }
    }

    function checkout() {
        textArea.value += `You bought ${products.join(', ')} for ${totalMoney.toFixed(2)}.`;

        for (const button of addButtons) {
            button.disabled = true;
        }
    }

    let textArea = document.getElementsByTagName('textArea')[0];
    let addButtons = document.getElementsByClassName('add-product');
    let totalMoney = 0;
    let products = [];

    for (let i = 0; i < addButtons.length; i++) {
        addButtons[i].addEventListener('click', function() {
            addProduct(i)
        });
    }

    let checkoutButton = document.getElementsByClassName('checkout')[0];
    checkoutButton.addEventListener('click', checkout);
}