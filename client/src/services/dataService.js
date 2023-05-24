import http from "../http-common.js";

class DataService {
    // functions to call planned routes
    getAllPlanned() {
        console.log(`[DataService]: getAllPlanned() called`);
        return http.get("/planned");
    }

    getPlanned(id) {
        console.log(`[DataService]: getPlanned(id) called for id=${id}`);
        return http.get(`/planned/${id}`);
    }

    getPlannedDay(timestamp) {
        console.log(`[DataService]: getPlannedDay(timestamp) called for timestamp=${timestamp}`);
        return http.get(`planned/day/${timestamp}`);
    }

    getPlannedWeek(timestamp) {
        console.log(`[DataService]: getPlannedWeek(timestamp) called for timestamp=${timestamp}`);
        return http.get(`planned/week/${timestamp}`);
    }

    getPlannedMonth(timestamp) {
        console.log(`[DataService]: getPlannedMonth(timestamp) called for timestamp=${timestamp}`);
        return http.get(`planned/month/${timestamp}`);
    }

    createPlanned(data) {
        console.log(`[DataService]: createPlanned(data) called`);
        return http.post("/planned", data);
    }

    updatePlanned(id, data) {
        console.log(`[DataService]: updatePlanned(id, data) called for id=${id}`);
        return http.put(`/planned/${id}`, data);
    }

    deletePlanned(id) {
        console.log(`[DataService]: deletePlanned(id) called for id=${id}`);
        return http.delete(`/planned/${id}`);
    }


    // functions to call category routes
    getAllCategories() {
        console.log(`[DataService]: getAllCategories() called`);
        return http.get("/categories");
    }

    getCategory(id) {
        console.log(`[DataService]: getCategory(id) called for id=${id}`);
        return http.get(`/categories/${id}`);
    }

    createCategory(data) {
        console.log(`[DataService]: createCategory(data) called`);
        return http.post("/categories", data);
    }

    updateCategory(id, data) {
        console.log(`[DataService]: updateCategory(id, data) called for id=${id}`);
        return http.put(`/categories/${id}`, data);
    }

    deleteCategory(id) {
        console.log(`[DataService]: deleteCategory() called for id=${id}`);
        return http.delete(`/categories/${id}`);
    }


    // functions to call planTypes routes
    getAllPlanTypes() {
        console.log(`[DataService]: getAllPlanTypes() called`);
        return http.get("/planTypes");
    }

    getPlanType(id) {
        console.log(`[DataService]: getPlanType(id) called for id=${id}`);
        return http.get(`/planTypes/${id}`);
    }

    getAllToDos() {
        console.log(`[DataService]: getAllToDos() called`);
        return http.get(`/planTypes/planned/2`);
    }

    createPlanType(data) {
        console.log(`[DataService]: createPlanType(data) called`);
        return http.post("/planTypes", data);
    }

    updatePlanType(id, data) {
        console.log(`[DataService]: updatePlanType(id, data) called for id=${id}`);
        return http.put(`/planTypes/${id}`, data);
    }

    deletePlanType(id) {
        console.log(`[DataService]: deletePlanType(id) called for id=${id}`);
        return http.delete(`/planTypes/${id}`);
    }


    // functions to call settings routes
    getAllSettings() {
        console.log(`[DataService]: getAllSettings() called`);
        return http.get("/settings");
    }

    getSetting(id) {
        console.log(`[DataService]: getSetting(id) called for id=${id}`);
        return http.get(`/settings/${id}`);
    }

    createSetting(data) {
        console.log(`[DataService]: createSetting(data) called`);
        return http.post("/settings", data);
    }

    updateSetting(id, data) {
        console.log(`[DataService]: updateSetting(id, data) called for id=${id}`);
        return http.put(`/settings/${id}`, data);
    }

    deleteSetting(id) {
        console.log(`[DataService]: deleteSetting(id) called for id=${id}`);
        return http.delete(`/settings/${id}`);
    }


//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

let DS = new DataService();

export default DS;