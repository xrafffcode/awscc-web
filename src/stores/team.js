import { axiosInstance } from "@/plugins/axios"
import { defineStore } from "pinia"
import { handleError } from "@/helpers/errorHelper"

export const useTeamStore = defineStore({
    id: "team",
    state: () => ({
        teams: [],
        total: 0,
        loading: false,
        error: null,
        success: null,
    }),
    actions: {
        /**
         * Fetches all team data from the server.
         */
        async fetchTeams(params) {
            this.loading = true;

            try {
                const response = await axiosInstance.get(`/teams`, { params });

                this.teams = response.data.data;
                this.total = response.data.data.length;
            } catch (error) {
                this.error = handleError(error);
            } finally {
                this.loading = false;
            }
        },
    },
})
