let cart = [];

    function toggleGrid() {
        const cart = document.getElementById('cart');

        if (cart.style.display === 'none') {
            // If currently hidden, set to grid
            cart.style.display = 'grid';
        } else {
            // If currently grid, set to none
            cart.style.display = 'none';
        }
    }
    
    function addToCart(name, price) {
      const item = cart.find(i => i.name === name);
      if (item) {
        item.quantity++;
      } else {
        cart.push({ name, price, quantity: 1 });
      }
      renderCart();
    }

    function removeFromCart(name) {
      cart = cart.filter(i => i.name !== name);
      renderCart();
    }

    function substractFromCart(name) {
        
      const item = cart.find(i => i.name === name);
        item.quantity--;
        if (item.quantity === 0) {
            removeFromCart(name);
        }
        renderCart();
    }

    function addFromCart(name) {
        
      const item = cart.find(i => i.name === name);
        item.quantity++;
        renderCart();
    }

    function renderCart() {
      const cartItemsDiv = document.getElementById('cart-items');
      const totalDiv = document.getElementById('total');
      cartItemsDiv.innerHTML = '';

      let total = 0;
      cart.forEach(item => {
        total += item.price * item.quantity;
        cartItemsDiv.innerHTML += `
          <div class="cart-item">
            <span>${item.name} x${item.quantity}</span>
            <button onclick="substractFromCart('${item.name}')">-</button>
            <button onclick="addFromCart('${item.name}')">+</button>
            <button onclick="removeFromCart('${item.name}')">X</button>
          </div>
        `;
      });

      totalDiv.textContent = 'Total: ₹' + total;
    }

    function placeOrder() {
      if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
      }
      alert('Order placed successfully! 🎉 Thank you for dining with us!');
      cart = [];
      renderCart();
    }
    
 