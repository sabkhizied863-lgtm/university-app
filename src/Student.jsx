import profileImg from './assets/blank-profile-picture-973460_1280.png'
import { useState } from 'react'

function Student(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerInformations() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className='card'>
      <img src={profileImg} className='profile_pic' alt='Profil' />
      <h1>Fiche étudiant</h1>

      <p className="label">Nom & Prénom : <span className='student-props'>{props.prenom} {props.nom}</span></p>
      <p className="label">Email : <span className='student-props'>{props.email}</span></p>
      <p className="label">Téléphone : <span className='student-props'>{props.telephone}</span></p>
      <p className="label">Filière : <span className='student-props'>{props.filiere}</span></p>
      <p className="label">Année d'étude : <span className='student-props'>{props.anneeEtude}</span></p>
      <p className="label">Groupe : <span className='student-props'>{props.groupe}</span></p>
      <p className="label">Ville : <span className='student-props'>{props.ville}</span></p>

      <button className='btn'>Contacter</button>

      {coordonneesVisibles && (
        <>
          <p>Email : {props.email}</p>
          <p>Téléphone : {props.telephone}</p>
        </>
      )}

      <button className='btn' onClick={basculerInformations}>
        {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
      </button>
    </div>
  );
}

export default Student;