document.addEventListener('DOMContentLoaded', function () {
    // Update flavor information based on selection
    const flavorSelect = document.getElementById('product-flavor');
    const selectedFlavorDisplay = document.getElementById('selected-flavor');

    flavorSelect.addEventListener('change', function () {
        const selectedFlavor = flavorSelect.value;
        selectedFlavorDisplay.textContent = `Selected flavor: ${selectedFlavor}`;
    });

    // Placeholder function for PayPal button
    const paypalButton = document.getElementById('paypal-button');
    paypalButton.addEventListener('click', function () {
        // Redirect to PayPal checkout URL
        window.location.href = 'YOUR_PAYPAL_CHECKOUT_LINK';
    });

    // Placeholder function for Apple Pay button
    const applePayButton = document.getElementById('apple-pay-button');
    applePayButton.addEventListener('click', function () {
        // Logic for Apple Pay checkout
        alert('Apple Pay is currently in development.');
    });
});
