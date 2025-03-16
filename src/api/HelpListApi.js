import { AxiosInstance } from "./AxiosInstance";

export const getAllHelpList = async () => {
    return await AxiosInstance.get("/help").then((res) => res.data).catch((err) => err.response);
}

export const getHelpById = async (id) => {
    return await AxiosInstance.get(`/help/${id}`).then((res) => res.data).catch((err) => err.response);
}

export const addHelp = async (data) => {
    return await AxiosInstance.post("/help", data).then((res) => res.data).catch((err) => err.response);
}

export const updateHelp = async (id, data) => {
    return await AxiosInstance.put(`/help/${id}`, data).then((res) => res.data).catch((err) => err.response);
}

export const deleteHelp = async (id) => {
    return await AxiosInstance.delete(`/help/${id}`).then((res) => res.data).catch((err) => err.response);
}