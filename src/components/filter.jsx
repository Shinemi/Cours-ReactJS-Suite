import { startTransition, useMemo, useState, useTransition } from "react";

function FilterList ({ items}) {
    const [search, setSearch] = useState("");
    const [deFerredSearch, setDeferredSearch] = useState(""); // non urgent (filtre)
    const [isPending, setTransition] = useTransition();

    const handleSearch = (e) => {
        const val= e.target.value;
        setSearch(val); // maj immédiate (l'input reste fluide)

        startTransition(() => {
            setDeferredSearch(val); // maj différée (le filtrage lurd se fera en tache de fond )
        })
    }

    // le filtre ne sera calculé que si `items` ou `search` change
    const itemsFilters = useMemo(() => {
        console.log("Calcul lourd en cours...")
        return itemsFilters.filter (item => item.includes(setDeferredSearch))
    }, [items, deferredSearch])
    return (
        <>
            {/* input lié à la recherche  et affichage de items*/}
            <input type="text" placeholder="Rechercher..." value={search} onChange={handleSearch} />
            {isPending && <p>Chargement en cours...</p>}
            <ul>
                {itemsFilter?.map(item =>
                    <li key={item.id}>{item.name}</li>
                )}
            </ul>
        </>
    )

    /*ce qui se passe :
     1. search -> update immédiate -> input fluide
     2. deferredSearch -> update dans startTransition
     3. useMemo dépend de deferredSearch 
     4. le filtrage Lourd ne bloque plus le rendu
    
    */
}


export default FilterList;