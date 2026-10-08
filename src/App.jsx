import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import profileImg from './assets/blank-profile-picture-973460_1280.png'
import './App.css'
const student = "zied"
const Email = "sabkhizied863@gmail.com"
const Téléphone = "+21699545451"
const Filiére = "Genie Logiciel et Systèmes d'Information"
const groupe = "GLSI 2"
const ville = "Mahdia"

function App() {
  return(
    <div className='card'>
      <img src={profileImg} className='profile_pic'></img>
      <h1>
      Fiche étudiant
      </h1>
        <p><span className = "label">Nom & Prenom : </span>{student}</p>
        <p><span className = "label">Email : </span>{Email}</p>
        <p><span className = "label">Téléphone : </span>{Téléphone}</p>
        <p><span className = "label">Filière : </span>Filière : {Filiére}</p>
        <p><span className = "label">Année d'étude : </span></p>
        <p><span className = "label">Groupe : </span>Groupe : {groupe}</p>
        <p><span className = "label">Ville : </span>Ville : {ville}</p>
        <button className='btn' >Contacter</button>
    </div>
  )
}

export default App
