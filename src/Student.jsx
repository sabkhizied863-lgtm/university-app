import profileImg from './assets/blank-profile-picture-973460_1280.png'
function Student(props) {
    return(
    <div className='card'>
      <img src={profileImg} className='profile_pic'></img>
      <h1>
      Fiche étudiant
      </h1>
        <p className="label">Nom & Prénom : <span className='student-props'>{props.prenom} {props.nom}</span></p>
        <p className="label">Email : <span className='student-props'>{props.email}</span></p>
        <p className="label">Téléphone : <span className='student-props'>{props.telephone}</span></p>
        <p className="label">Filière : <span className='student-props'>{props.filiere}</span></p>
        <p className="label">Année d'étude : <span className='student-props'>{props.anneeEtude}</span></p>
        <p className="label">Groupe : <span className='student-props'>{props.groupe}</span></p>
        <p className="label">Ville : <span className='student-props'>{props.ville}</span></p>
        <button className='btn' >Contacter</button>
    </div>
    );
}
export default Student;