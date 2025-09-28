class VendingMachine {
    constructor() {
        this.denoms = [500, 200, 100, 50, 20, 10, 5, 2, 1]

        this.products = [
            {
                id: 1,
                name: 'Water',
                price: 30,
            },
            {
                id: 2,
                name: 'bun',
                price: 20,
            },
            {
                id: 3,
                name: 'biscuite',
                price: 30,
            }
        ];

        this.selectedProduct = null;
        this.balance = 0;
    }

    restock(product) {
        const isOccupied = this.products.find(item => item.id === product.id);

        if (isOccupied) {
            return {
                ok: false,
                message: 'Given slot is busy, please choose another slot'
            };
        }
        this.products.push(product);
        return {
            ok: true,
            message: 'Product has been added!',
        }
    }

    selectProduct(id) {
        const product = this.products.find((item) => item.id === id);

        if (!product) {
            return {
                ok: false,
                message: 'Unknown product'
            };
        }
        this.selectedProduct = product;
        return {
            ok: true,
            message: 'please insert the coins.',
        };
    }

    insertBills(bill) {
        if (!Number.isInteger(bill) || bill <= 0) {
            return {
                ok: false,
                message: 'Unknown bill',
            };
        }

        this.balance += bill;

        if (this.selectedProduct.price > this.balance) {
            const dueAmount = this.selectedProduct.price - this.balance;
            return {
                ok: true,
                message: `Insert more ${dueAmount}`,
            };
        }
        return this.dispense(this.selectedProduct);
    }

    dispense(product) {
        const change = this.returnChange(product);
        this.products = this.products.filter(item => item.id != product.id);

        this.balance = 0;
        this.selectedProduct = null;


        return {
            ok: true,
            message: `Product has been dispense, Please collect your change: ${change.join(',')}`,
        };

    }

    returnChange(product) {
        const coins = [];
        let remainingBalance = this.balance - product.price;

        for (const note of this.denoms) {
            while (remainingBalance >= note) {
                coins.push(note);
                remainingBalance -= note;
            }
        }

        return coins;
    }
}

const vm = new VendingMachine();

vm.restock({
    id: 5,
    name: 'Chocolate',
    price: 80,
});

const selectedProduct = vm.selectProduct(5);
if (!selectedProduct.ok) {
    throw Error(selectedProduct.message)
}

// vm.insertBills(10);
// vm.insertBills(10);
// const ms =vm.insertBills(100);
// console.log(ms);



const allProduct = document.querySelector('.allProduct');
const bill = document.querySelector('#bill');
const restock = document.querySelector('#restock');
const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
const messageDisplay = document.querySelector('#message');
const balanceDisplay = document.querySelector('#balance');
const selectedProductDisplay = document.querySelector('#selectedProduct');

function updateUI() {
    balanceDisplay.textContent = vm.balance;
    if (vm.selectedProduct) {
        selectedProductDisplay.textContent = `${vm.selectedProduct.name} (₹${vm.selectedProduct.price})`;
    } else {
        selectedProductDisplay.textContent = 'None';
    }
}

function showMessage(message, isError = false) {
    messageDisplay.textContent = message;
    messageDisplay.className = isError ? 'message error' : 'message success';
    setTimeout(() => {
        messageDisplay.textContent = '';
        messageDisplay.className = 'message';
    }, 3000);
}

vm.products.forEach(product => {
    const btn = document.createElement('button');
    btn.className = 'product-btn';
    btn.innerHTML = `<strong>${product.name}</strong><br>₹${product.price}`;
    btn.dataset.productId = product.id;
    btn.addEventListener('click', () => {
        // Remove selection from all buttons
        document.querySelectorAll('.product-btn').forEach(b => {
            b.classList.remove('product-selected');
        });

        const res = vm.selectProduct(product.id);
        showMessage(res.message, !res.ok);

        // Add selection to clicked button if successful
        if (res.ok) {
            btn.classList.add('product-selected');
        }

        updateUI();
    });
    allProduct.appendChild(btn);
})

updateUI();


bill.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const amount = parseInt(bill.value, 10);
        if (isNaN(amount) || amount <= 0) {
            showMessage("Please enter a valid amount", true);
            return;
        }

        if (!vm.selectedProduct) {
            showMessage("Please select a product first", true);
            return;
        }

        const res = vm.insertBills(amount);
        showMessage(res.message, !res.ok);
        updateUI();
        bill.value = "";

        if (res.ok && res.message.includes('dispense')) {
            updateProductList();
        }
    }
})

function updateProductList() {
    allProduct.innerHTML = '';
    vm.products.forEach(product => {
        const btn = document.createElement('button');
        btn.className = 'product-btn';
        btn.innerHTML = `<strong>${product.name}</strong><br>₹${product.price}`;
        btn.dataset.productId = product.id;
        btn.addEventListener('click', () => {
            // Remove selection from all buttons
            document.querySelectorAll('.product-btn').forEach(b => {
                b.classList.remove('product-selected');
            });

            const res = vm.selectProduct(product.id);
            showMessage(res.message, !res.ok);

            // Add selection to clicked button if successful
            if (res.ok) {
                btn.classList.add('product-selected');
            }

            updateUI();
        });
        allProduct.appendChild(btn);

        // Highlight if this is the selected product
        if (vm.selectedProduct && vm.selectedProduct.id === product.id) {
            btn.classList.add('product-selected');
        }
    });
}

restock.addEventListener('click', () => {
    const name = productName.value.trim();
    const price = parseInt(productPrice.value, 10);

    if (!name || isNaN(price) || price <= 0) {
        showMessage("Please enter a valid name and price", true);
        return;
    }

    const newProduct = {
        id: Date.now(),
        name,
        price,
    };

    const res = vm.restock(newProduct);
    showMessage(res.message, !res.ok);

    if (res.ok) {
        updateProductList();
        productName.value = "";
        productPrice.value = "";
    }
})