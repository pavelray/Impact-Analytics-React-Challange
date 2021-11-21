import React from "react";

export const MoveTable = ({movies}) => {

    movies.sort((a,b) => {
        const lastCharA = a.duration.charAt(a.duration.length -1);
        const lastCharB = b.duration.charAt(b.duration.length -1);
        let durationA = 0;
        let durationB = 0;
        if(lastCharA === 'h'){
            durationA = parseFloat(a.duration.slice(0,-1)) * 30;
        }else{
            durationA = parseFloat(a.duration.slice(0,-1));
        }
        if(lastCharB === 'h'){
            durationB = parseFloat(b.duration.slice(0,-1)) * 30;
        }else{
            durationB = parseFloat(b.duration.slice(0,-1));
        }

        if(durationA > durationB){
            return -1;
        }
        if(durationA < durationB){
            return 1
        }

        return 0;
    })

    return (
        <table>
        <tr>
        <td>Name</td>
        <td>Ratings</td>
        <td>Duration</td>
        </tr>
        {
            movies && movies.length > 0 ? movies.map(movie => (
                <tr>
                    <td>{movie.name}</td>
                    <td>{movie.ratings}</td>
                    <td>{movie.duration}</td>
                </tr>
            )) : (
                <tr>
                    <td>No Movies Found</td>
                </tr>
            )  
        }
        </table>
    )

}

export default MoveTable