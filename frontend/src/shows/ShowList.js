import React, { useEffect, useState } from "react";
import ShowItem from "./ShowItem";
import { listShows } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function ShowList({ deleteShow }) {
  const [shows, setShows] = useState([]);
  const [userInput, setUserInput] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getShows() {
      try {
        const response = await listShows()
        let showsData = response.data.data
        setShows(showsData)
      } catch (error) {
        console.error(error)
      }
    }

    getShows()
  }, [])

  // filter based off of title; eliminate case-sensitivity
  let filtered = shows.filter((show) => userInput ? show.title.toLowerCase().includes(`${userInput.toLowerCase()}`) : show)

  const handleChange = event => {
    event.preventDefault();
    let text = event.target.value
    setUserInput(text)
  }

  return (
    <div className="Show-list">
      <button onClick={() => navigate("/new")}>Add Show</button>
      <label>I want movies with the word: </label>
      <input 
        type="text"
        onChange={handleChange}
        value={userInput}
      />
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Title</th>
            <th>Director</th>
            <th>Country</th>
            <th>Date Added</th>
            <th>Release Year</th>
            <th>Rating</th>
            <th>Duration</th>
            <th>Listed In</th>
          </tr>
        </thead>
        <tbody>
          {/* Converts shows array into HTML elements */}
          {(shows.length === 0 && userInput)
            ? "Loading shows..." 
            : filtered.map((show, index) => {
              return <ShowItem
                key={index}
                show={show}
                deleteShow={() => deleteShow(index)}
              />  
          })}
        </tbody>
      </table>
    </div>
  );
}