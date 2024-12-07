function submitOrder() {
    // Prevent form from submitting and reloading the page
    event.preventDefault();
  
    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const food = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;
    const specialRequest = document.getElementById('specialRequest').value; document.getElementById('orderForm').reset();
  }