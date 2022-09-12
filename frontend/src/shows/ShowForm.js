import { useLocation } from "react-router-dom";

export default function ShowForm({ handleSubmit, handleCancel, showData = {} }) {
  const { pathname } = useLocation()
  const { data } = showData

    return (
        <>
          <form className="card" onSubmit={handleSubmit}>
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <input 
                id="type" 
                name="type" 
                type="text" 
                className="form-control" 
                placeholder="" 
                defaultValue={data?.data.type || ""}
                required />
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input 
                id="title" 
                name="title" 
                type="text" 
                className="form-control" 
                placeholder="" 
                defaultValue={data?.data.title || ""}
                required />        
            <label htmlFor="director" className="form-label">
              Director
            </label>
            <input 
                id="director" 
                name="director" 
                type="text" 
                className="form-control"
                defaultValue={data?.data.director || ""}
                required />        
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input 
                id="country" 
                name="country" 
                type="text" 
                className="form-control" 
                defaultValue={data?.data.country || ""}
                required />        
            <label htmlFor="date_added" className="form-label">
               Date Added
            </label>
            <input 
                id="date_added" 
                name="date_added" 
                type="text" 
                className="form-control" 
                defaultValue={data?.data.date_added || ""}
                required />        
            <label htmlFor="release_year" className="form-label">
              Release Year
            </label>
            <input 
                id="release_year" 
                name="release_year" 
                type="text" 
                className="form-control" 
                defaultValue={data?.data.release_year || ""}
                placeholder="" 
                required />   
            <label htmlFor="rating" className="form-label">
               Rating
            </label>
            <input 
                id="rating" 
                name="rating" 
                type="text" 
                className="form-control"
                defaultValue={data?.data.rating || ""}
                required />        
            <label htmlFor="duration" className="form-label">
                Duration
            </label>
            <input 
                id="duration" 
                name="duration" 
                type="text" 
                className="form-control"
                defaultValue={data?.data.duration || ""}
                required />        
            <label htmlFor="listed_in" className="form-label">
              Listed In
            </label>
            <input 
                id="listed_in" 
                name="listed_in" 
                type="text" 
                className="form-control" 
                defaultValue={data?.data.listed_in || ""}
                placeholder="" 
                required />       
            <button type="submit" className="btn btn-primary mb-2">{pathname.includes("new") ? "Add Movie" : "Update Movie"}</button>
            <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
          </form>
        </>
      );
}