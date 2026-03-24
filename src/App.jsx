import { useState } from "react";
import Counter from "./components/counter";
import Formulaire from "./components/formulaire";
import { Modal } from "./components/modale";
import Users from "./components/users";

function App (){
  const [isOpen, setIsOpen] = useState(false)

  return(
    <>     
      <h1>Test</h1>
      <Counter /> 
      <Formulaire/>
      {/* <Users /> */}

      <button onClick={() => setIsOpen(true)}>
        ouvrir la modale
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen (false)}>
        <h2>Ma modale</h2>
        <p>contenu de ma modale</p>
      </Modal>
    </>

  )
}

export default App;