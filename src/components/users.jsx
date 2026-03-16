import { useEffect, useState } from "react";

function Users () {
    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const req = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await req.json()
            setListUsers(data)
        }
        fetchUsers()

        // Optionnel: return () => { /* fonction de nettoyage */ }
    }, [])

    return (
        <>
        <ul>
            {listUsers?.map(user => 
            <li> {user.name}</li>
            )}
        </ul>
        </>
    )
}

export default Users;