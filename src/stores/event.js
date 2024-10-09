import { axiosInstance } from "@/plugins/axios"
import { defineStore } from "pinia"
import { handleError } from "@/helpers/errorHelper"

export const useEventStore = defineStore({
    id: "event",
    state: () => ({
        events: [],
        loading: false,
        error: null,
        success: null,
    }),
    actions: {
        /**
         * Fetches all event data from the server.
         */
        async fetchEvents(params) {
            this.loading = true;

            try {
                const response = await axiosInstance.get(`/events`, { params });

                this.events = response.data.data;
            } catch (error) {
                this.error = handleError(error);
            } finally {
                this.loading = false;
            }
        },

    },
})

