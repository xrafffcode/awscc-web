import { axiosInstance } from "@/plugins/axios"
import { defineStore } from "pinia"
import { handleError } from "@/helpers/errorHelper"

export const useGalleryStore = defineStore({
    id: "gallery",
    state: () => ({
        galleries: [],
        total: 0,
        loading: false,
        error: null,
        success: null,
    }),
    actions: {
        /**
         * Fetches all gallery data from the server.
         */
        async fetchGalleries(params) {
            this.loading = true;

            try {
                const response = await axiosInstance.get(`/galleries`, { params });

                this.galleries = response.data.data;
                this.total = response.data.data.length;
            } catch (error) {
                this.error = handleError(error);
            } finally {
                this.loading = false;
            }
        },
    },
})

