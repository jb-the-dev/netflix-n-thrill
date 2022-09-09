import React, { useEffect, useState } from "react";
import ShowItem from "./ShowItem";
import { listShows } from "./utils/api";

export default function ShowList({ deleteShow }) {
  const [shows, setShows] = useState([]);

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


  return (
    <div className="Show-list">
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
          {/* Converts Shows array into HTML elements */}
          {shows && shows.map((show, index) => {
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