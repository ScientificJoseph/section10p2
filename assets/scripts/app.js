const productList = {
    products: [
        {
            title: 'A Pillow',
            imageUrl: 'http://tiny.cc/en48vz',
            price: 19.99,
            description: 'A Soft Pillow'
        },
        {
            title: 'A Rug',
            imageUrl: 'http://tiny.cc/co48vz',
            price: 89.99,
            description: 'We Buid To Your Design'
        }
    ],

    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src='${prod.imageUrl}' alt='${prod.description}'>
                    <div class='product-item__content'>
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render()