
import './App.css'
import Student from './Student'
import { useState } from 'react'

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "Zied",
      nom: "Sabkhi",
      email: "sabkhizied863@gmail.com",
      telephone: "+21699545451",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia"
    }
  ])

  function ajouterEtudiant() {
    const nouvelEtudiant = {
      prenom: "Ahmed",
      nom: "Bannour",
      email: "ahmed@gmail.com",
      telephone: "+21612345678",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia"
    }

    setEtudiants([...etudiants, nouvelEtudiant])
  }
  return (
    <div className='container'>
      <button className='add-button' onClick={ajouterEtudiant}>
        Ajouter un étudiant
      </button>

      {etudiants.map((etudiant) => (
        <Student
          key={etudiant.email}
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          email={etudiant.email}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          anneeEtude={etudiant.anneeEtude}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
        />
      ))}
    </div>
  )
}

export default App
