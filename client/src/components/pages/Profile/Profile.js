import { Container } from 'react-bootstrap'

const Profile = ({ loggedUser }) => {
    return (
        <Container>
            <h1>¡Bienvenid@, {loggedUser.username}!</h1>
            <p>Tu nombre es: {loggedUser.name}!</p>
            <p>Tu fecha de nacimiento es: {loggedUser.birthday}!</p>
            <p>Tu foto de perfil es: </p>
            <img src={loggedUser.image}></img>
        </Container>
    )
}

export default Profile