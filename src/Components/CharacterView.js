import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CharacterView = () => {

    const [character, setCharacters] = useState([])
    const [offset, setOffset] =useState(50)
    const key = process.env.REACT_APP_API_KEY

    console.log(key)

    useEffect(()=>{
        axios.get(`https://gateway.marvel.com/v1/public/characters?limit=50&offset=${offset}&apikey=${key}`)
        .then(response => {
            let data = response.data.data.results
            setCharacters(data)
            setOffset(offset + 50)
        })
    },[offset])


    const display = character.map(character => {

        return(
            <div key={character.id}>
                <h1>{character.name}</h1>
                <img src={`${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`} alt={character.name} />
            </div>
        )
    })

    console.log(character[0])

    return(
        <>
        {display}
        </>
    )
}

export default CharacterView