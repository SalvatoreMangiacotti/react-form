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
    "Fichi d'India",
    "Corbezzoli"
];



export default function ProductsList() {

    return (mediterraneanFruits.map((fruit, fruitIndex) => (

        <li key={fruitIndex}>{fruit}</li>

    ))
    )

}
