import { axiosInstance } from "@/plugins/axios"
import router from "@/router"
import { defineStore } from "pinia"
import { handleError } from "@/helpers/errorHelper"

export const useActivityStore = defineStore("activity", {
    state: () => ({
        activities: [],
        loading: false,
        error: null,
        success: null,
    }),

    actions: {
        async getActivities() {
            this.loading = true

            try {
                const response = await axiosInstance.get("/activities")

                this.activities = response.data
            } catch (error) {
                this.activities = handleError(error)
            } finally {
                this.loading = false
            }
        },
    },
})