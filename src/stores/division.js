import { axiosInstance } from "@/plugins/axios"
import { defineStore } from "pinia"
import { handleError } from "@/helpers/errorHelper"

export const useDivisionStore = defineStore({
    id: "division",
    state: () => ({
        divisions: [],
        loading: false,
        error: null,
        success: null,
    }),
    actions: {
        /**
         * Fetches all division data from the server.
         */
        async fetchDivisions(params) {
            this.loading = true;

            try {
                const response = await axiosInstance.get(`/division`, { params });

                this.divisions = response.data.data;
            } catch (error) {
                this.error = handleError(error);
            } finally {
                this.loading = false;
            }
        },

        /**
         * Fetch a single division data from the server.
         */
        async fetchDivision(slug) {
            this.loading = true;

            try {
                const response = await axiosInstance.get(`/division/${slug}`);

                this.divisions = response.data.data;
            } catch (error) {
                this.error = handleError(error);
            } finally {
                this.loading = false;
            }
        },
    },
})
