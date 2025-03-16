import { AxiosInstance } from "./AxiosInstance";

export const getAllvolunteer = async () => {
    return await AxiosInstance.get("/volunteer").then((res) => res.data).catch((err) => err.response);
}

export const getVolunteerById = async (id) => {
    return await AxiosInstance.get(`/volunteer/${id}`).then((res) => res.data).catch((err) => err.response);
}

export const addVolunteer = async (data) => {
    return await AxiosInstance.post("/volunteer", data).then((res) => res.data).catch((err) => err.response);
}

export const updateVolunteer = async (id, data) => {
    return await AxiosInstance.put(`/volunteer/${id}`, data).then((res) => res.data).catch((err) => err.response);
}

export const deleteVolunteer = async (id) => {
    return await AxiosInstance.delete(`/volunteer/${id}`).then((res) => res.data).catch((err) => err.response);
}