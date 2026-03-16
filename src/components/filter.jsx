import { use, useState } from "react";

function FilterList ({ items}) {
    const [search, setSearch] = useState("");

    // le filtre ne sera calculé que si `items` ou `search` change
    const itemsFilters = useMemo(() => {
        console.log("Calcul lourd en cours...")
        return itemsFilters.filter (item => item.includes(search))
    }, [items, search])
    return (
        <>
            {/* input lié à la recherche  et affichage de items*/}
        </>
    )
}