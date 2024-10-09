import { axiosInstance } from "@/plugins/axios"
import { defineStore } from "pinia"
import { handleError } from "@/helpers/errorHelper"

export const useActivityStore = defineStore({
    id: "activity",
    state: () => ({
        activities: [],
        loading: false,
        error: null,
        success: null,
    }),
    actions: {
        /**
         * Fetches all activity data from the server.
         */
        async fetchActivities(params) {
            this.loading = true;

            try {
                const response = await axiosInstance.get(`/activities`, { params });

                this.activities = response.data.data;
            } catch (error) {
                this.error = handleError(error);
            } finally {
                this.loading = false;
            }
        },

    },
})

