import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";


export async function listShows() {
    return axios.get(`${API_BASE_URL}/shows`)
}

export async function readShow(show_id) {
  return axios.get(`${API_BASE_URL}/shows/${show_id}`)
}

export async function createShow(newShow) {
    return axios.post(`${API_BASE_URL}/shows`, newShow)
  }

export async function updateShow(updatedShow) {
  return axios.put(`${API_BASE_URL}/shows/${updatedShow.data.show_id}`, updatedShow)
}

export async function deleteShow(show_id) {
  return axios.delete(`${API_BASE_URL}/shows/${show_id}`)
}