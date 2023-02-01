import React from 'react';
import { Link } from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../actions/index';
import { useEffect } from 'react'; 

export default function Detail(props){
    console.log(props)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id));// eslint-disable-next-line
    },[])
    const myPokemon = useSelector((state) => state.detail)

    
    console.log(myPokemon);
    return(
        <div>
            {
                // <h1>Hello</h1>
                myPokemon.name ?
                <div>

                    <h1>Pokemon Stats & Details</h1>

                    <h1>{myPokemon.name}</h1>
                    <img src={myPokemon.img} alt={myPokemon.name}/>
                    <div>
                    <p>Healt Point: {myPokemon.hp}</p>
                    <p>Attack: {myPokemon.attack}</p>
                    <p>Defense: {myPokemon.defense}</p>
                    <p>Speed: {myPokemon.speed}</p>
                    <p>Height: {myPokemon.height}</p>
                    <p>Weight: {myPokemon.weight}</p>
                    <p>Types: {myPokemon.type.map(e => e+ " ")}</p>
                    </div>


                </div>
                 : <p>Loading...</p>
            }
            <Link to= '/home'>
                <button>Volver</button>
            </Link>
        </div>
    )
}  