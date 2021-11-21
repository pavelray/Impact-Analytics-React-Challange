import React, { useState } from 'react';

export const MovieForm = ({saveMovie}) => {
    const INITIAL_STATE = {
        name: '',
        ratings: '',
        duration: ''
    }
    const [error, setError] = useState(false)

    const [movie, setMovie] = useState(INITIAL_STATE);

    const handleOnChange = (event) => {
        const {name, value}  = event.target;
        const lastChar = value.charAt(value.length -1);
        if(name === 'duration' && value !== ''
            && (lastChar !== 'h' && lastChar !== 'm')){
            setError(true);
        }else if(name === 'duration' && value === ''){
            setError(false);
        }
        else{
            setError(false);
        }
        setMovie({...movie, [name]:value});
    }


    const submitForm = () => {
        saveMovie(movie);
        setMovie(INITIAL_STATE);
    }

    return(
        <div>
            <labe>Movie Name</labe>
            <br/>
            <input type="text" name="name" value={movie.name} onChange={handleOnChange}/>
            <br/>
            <labe>Rating</labe>
            <br/>
            <input type="text" name="ratings" value={movie.ratings} onChange={handleOnChange}/>
            <br/>
            <labe>Duration</labe>
            <br/>
            <input type="text" name="duration" value={movie.duration} onChange={handleOnChange}/>
            {error && <span style={{color: 'red'}}>Duration is incorrect (eg. 120m or 2h)</span>}
            <br/>
            <br/>
            <button onClick={submitForm}>Submit</button>
        </div>
    )
}