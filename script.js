function checkout(flavor) {
    alert(`Initiating Apple Pay checkout for ${flavor}.`);
    // Implement actual Apple Pay integration here.
}

function checkoutPayPal(flavor) {
    alert(`Redirecting to PayPal checkout for ${flavor}.`);
    // Implement actual PayPal integration here.
    window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=YOUR_PAYPAL_EMAIL&item_name=${flavor}&amount=10.00&currency_code=USD`;
}
