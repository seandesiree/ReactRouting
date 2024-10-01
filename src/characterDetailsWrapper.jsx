
import {useParams, useNavigate} from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

function characterDetailsWrapper() {
    let params = useParams()
    let navigate = useNavigate()
    return <CharacterDetails params={params} navigate={navigate} />
}

export default characterDetailsWrapper;
