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
        const updatedTasks = [...products, newProduct];
        setProducts(updatedTasks);
        setNewProduct('');
    }

    return (
        <>

            <ul className="products-list">
                {
                    products.map((fruit, fruitIndex) => (
                        <li key={fruitIndex}>{fruit}</li>))
                }
            </ul>

            <form onSubmit={addProduct}>
                <input type="text" value={newProduct}
                    onChange={event => { setNewProduct(event.target.value) }} />
                <button>Aggiungi prodotto</button>
            </form>

        </>
    )

}
