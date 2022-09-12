import React from "react";
import { useNavigate } from "react-router-dom";


// HTML template to use with each show

export default function ShowItem({show, handleDelete}){
    const navigate = useNavigate();

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
                    <button name="delete" onClick={() => handleDelete(show)}>Delete</button>
                    <button onClick={() => navigate(`/shows/${show.show_id}/edit`)}>Edit</button>
                </td>
            </tr>
        </>
    )
}