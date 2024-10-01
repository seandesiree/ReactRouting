import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const characterDetails = (props) => {
    const [id, setId] = useState(props.params)
    const [character, setCharacter]= useState(null)
    
    
    
    useEffect( () => {
        if (props.params) {
            
            
            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?&ts=1&apikey=1d89a4cd079ab160427ebb9a0ab5274f0&Hash7aecc47122f718203aa811e81433582b`);
                    setCharacter(response.data.data.results[0])
                    
                } catch (error) {
                    console.error('Error fetching products', error)
                }
            }
            fetchData();
        } else {
            setId(null)
        }
    }, []);
    
    if (!character) {
        if (!id) {
            return (
                <div> 
                    <h2>Character Details Page</h2>
                    <p>Pick the character you want to know more information about on our <Link to='/characters'>Marvel Characters</Link> page.</p>
                </div>
            )
        } else {
            return <div> Loading... </div>
        }    
    }

    
   

    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.description}</p>
            <ul>
                {character.comics.items.map((comic, index)=> (
                    <li key={index}>{comic.name}</li>
                ))}
            </ul>
            <br />
        </div>
    )
}



export default characterDetails;