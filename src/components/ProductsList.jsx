import { useState } from 'react';

const mediterraneanFruits = [
    "Arance",
    "Limoni",
    "Mandarini",
    "Fichi",
    "Albicocche",
    "Pesche",
    "Kiwi",
    "Nespole"
];



export default function ProductsList() {

    const [newProduct, setNewProduct] = useState('')

    const [products, setProducts] = useState(mediterraneanFruits)

    const addProduct = e => {
        e.preventDefault();
        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        setNewProduct('');
    }

    const removeProduct = i => {
        const updatedProducts = products.filter((product, index) => {
            return index !== i
        });
        setProducts(updatedProducts);
    }

    return (
        <>

            {products.length === 0 ? <h2>La tua lista è vuota</h2> :

                <ul className="products-list">
                    {
                        products.map((fruit, fruitIndex) => (
                            <li key={fruitIndex}>{fruit}
                                <button onClick={() => removeProduct(fruitIndex)}>
                                    Elimina
                                </button>
                            </li>))
                    }
                </ul>}

            <form onSubmit={addProduct}>
                <input type="text" value={newProduct}
                    onChange={event => { setNewProduct(event.target.value) }} />
                <button>Aggiungi prodotto</button>
            </form>

        </>
    )

}
