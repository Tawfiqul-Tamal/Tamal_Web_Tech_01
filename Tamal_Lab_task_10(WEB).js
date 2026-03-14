// Define unit price
const unitPrice = 1000;

// Get elements
const quantityInput = document.getElementById('quantity');
const totalPriceInput = document.getElementById('totalPrice');

// Function to update total
function updateTotal() {
    let quantity = parseInt(quantityInput.value);

    // Validation: prevent negative quantity
    if (quantity < 0 || isNaN(quantity)) {
        quantity = 0;
        quantityInput.value = 0;
    }

    const total = unitPrice * quantity;
    totalPriceInput.value = total;

    // Gift coupon notification
    if (total > 1000) {
        alert("Congratulations! You are eligible for a gift coupon.");
    }
}

// Event listener for real-time update
quantityInput.addEventListener('input', updateTotal);