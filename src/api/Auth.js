import { AxiosInstance } from "./AxiosInstance";

export const Auth = {
    login: async (formData) => {
        const response = await AxiosInstance(`/login`, {
            method: "POST",
            data: formData,
        });
        return response;
    }
};
