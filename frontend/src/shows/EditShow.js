import { useNavigate } from "react-router-dom";
import ShowForm from "./ShowForm";

export default function EditShow() {
    const navigate = useNavigate();

    const handleCancel = (event) => {
        event.preventDefault();
        navigate("/");
      };

    return (
        <>
            <h2>Edit the show</h2>
            <br />
            <ShowForm 
                handleCancel={handleCancel}
                // handleEdit={}
            />
        </>
    )
}