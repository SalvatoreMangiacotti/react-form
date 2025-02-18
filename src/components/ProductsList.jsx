import { useState } from 'react';

const mediterraneanFruits = [
    "Arance",
    "Limoni",
    "Mandarini",
    "Fichi",
    "Melograni",
    "Albicocche",
    "Pesche",
    "Prugne",
    "Uva",
    "Cachi",
    "Kiwi",
    "Nespole",
    "Mandorle",
    "Olive",
    "Cedri",
    "Mirto",
    "Carrube",
    "Fichi d'India"
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
            <form onSubmit={addProduct}>
                <input type="text" value={newProduct}
                    onChange={event => { setNewProduct(event.target.value) }} />
                <button>Aggiungi prodotto</button>
            </form>

            <ul className="products-list">
                {
                    products.map((fruit, fruitIndex) => (
                        <li key={fruitIndex}>{fruit}</li>))
                }
            </ul>
        </>
    )

}
