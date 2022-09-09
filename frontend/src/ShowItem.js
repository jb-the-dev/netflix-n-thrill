import React from "react";

// HTML template to use with each show

export default function showItem({show, deleteShow}){

    return (
        <>
            <tr>
                <td>{show?.type}</td>
                <td>{show?.title}</td>
                <td>{show?.director}</td>
                <td>{show?.country}</td>
                <td>{show?.date_added}</td>
                <td>{show?.release_year}</td>
                <td>{show?.rating}</td>
                <td>{show?.duration}</td>
                <td>{show?.listed_in}</td>
                <td>
                    <button name="delete" onClick={deleteShow}>Delete</button>
                </td>
            </tr>
        </>
    )
}