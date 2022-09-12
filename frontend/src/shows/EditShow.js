import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readShow, updateShow } from "../utils/api";
import ShowForm from "./ShowForm";

export default function EditShow() {
    const [currentShow, setCurrentShow] = useState({});
    const { show_id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        async function getShow() {
            try {
                const show = await readShow(show_id)
                setCurrentShow(show)
            } catch (error) {
                console.error(error)
            }
        }
        getShow()
        
    }, [show_id])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const updatedShow = {
            data: {
                show_id: Number(show_id),
                type: formData.get("type"),
                title: formData.get("title"),
                director: formData.get("director"),
                country: formData.get("country"),
                date_added: formData.get("date_added"),
                release_year: formData.get("release_year"),
                rating: formData.get("rating"),
                duration: formData.get("duration"),
                listed_in: formData.get("listed_in"),
            },
         };
        await updateShow(updatedShow);

        navigate("/");
      };

    const handleCancel = (event) => {
        event.preventDefault();
        navigate("/");
      };

    return (
        <>
            <h2>Edit the show</h2>
            <br />
            <ShowForm 
                showData={currentShow}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
            />
        </>
    )
}