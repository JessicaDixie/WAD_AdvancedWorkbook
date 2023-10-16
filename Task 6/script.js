function calculateTotal() {
    const cpuQuantity = parseInt(document.getElementById("cpu").value);
    const gpuQuantity = parseInt(document.getElementById("gpu").value);
    const ramQuantity = parseInt(document.getElementById("ram").value);
    const storageQuantity = parseInt(document.getElementById("storage").value);
    const psuQuantity = parseInt(document.getElementById("psu").value);
    const motherboardQuantity = parseInt(document.getElementById("motherboard").value);

    const totalCost = (cpuQuantity * 2500 + gpuQuantity * 4000 + ramQuantity * 1300 + storageQuantity * 1200 + psuQuantity * 800 + motherboardQuantity * 1000).toFixed(2);

    document.getElementById("totalCost").textContent = totalCost;
    return totalCost;
}

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const quantity = calculateTotal();

    var confirmationMessage = `Thank you, ${name}! Your order for R${quantity} has been received. An email confirmation will be sent to ${email}.`;
    if(quantity <= 0){
         confirmationMessage = `You have not selected any PC components to purchase.`;
    }
    
    document.getElementById("orderConfirmation").textContent = confirmationMessage;
    this.reset();
});

