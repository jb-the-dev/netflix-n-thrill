import ShowForm from "./ShowForm";
import { useNavigate } from "react-router-dom";
import { createShow } from "../utils/api";


export default function CreateShow() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const newShow = {
          data: {
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

        await createShow(newShow);
        navigate("/")
    }

    const handleCancel = (event) => {
        event.preventDefault();
        navigate("/");
      };

    return (
        <>
          <h2 className="mb-4">Create new reservation</h2>
          <ShowForm
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
          />
        </>
      );
}