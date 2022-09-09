import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";


export async function listShows() {
    return axios.get(`${API_BASE_URL}/shows`)
}

export async function createShow(newShow) {
    return axios.post(`${API_BASE_URL}/shows`, newShow)
  }