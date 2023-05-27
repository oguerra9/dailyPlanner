import http from "../http-common.js";

class DataService {
    
    getAllPlanned() {
        console.log(`[DataService]: getAllPlanned() called`);
        return http.get("/api/planned");
    }

    getPlanned(id) {
        console.log(`[DataService]: getPlanned(id) called for id=${id}`);
        return http.get(`/api/planned/${id}`);
    }

    getPlannedDay(timestamp) {
        console.log(`[DataService]: getPlannedDay(timestamp) called for timestamp=${timestamp}`);
        return http.get(`/api/planned/day/${timestamp}`);
    }

    getPlannedWeek(timestamp) {
        console.log(`[DataService]: getPlannedWeek(timestamp) called for timestamp=${timestamp}`);
        return http.get(`/api/planned/week/${timestamp}`);
    }

    getPlannedMonth(timestamp) {
        console.log(`[DataService]: getPlannedMonth(timestamp) called for timestamp=${timestamp}`);
        return http.get(`/api/planned/month/${timestamp}`);
    }

    createPlanned(data) {
        console.log(`[DataService]: createPlanned(data) called`);
        return http.post("/api/planned", data);
    }

    updatePlanned(id, data) {
        console.log(`[DataService]: updatePlanned(id, data) called for id=${id}`);
        return http.put(`/api/planned/${id}`, data);
    }

    deletePlanned(id) {
        console.log(`[DataService]: deletePlanned(id) called for id=${id}`);
        return http.delete(`/api/planned/${id}`);
    }


    // functions to call category routes
    getAllCategories() {
        console.log(`[DataService]: getAllCategories() called`);
        return http.get("/api/categories");
    }

    getCategory(id) {
        console.log(`[DataService]: getCategory(id) called for id=${id}`);
        return http.get(`/api/categories/${id}`);
    }

    createCategory(data) {
        console.log(`[DataService]: createCategory(data) called`);
        return http.post("/api/categories", data);
    }

    updateCategory(id, data) {
        console.log(`[DataService]: updateCategory(id, data) called for id=${id}`);
        return http.put(`/api/categories/${id}`, data);
    }

    deleteCategory(id) {
        console.log(`[DataService]: deleteCategory() called for id=${id}`);
        return http.delete(`/api/categories/${id}`);
    }


    // functions to call planTypes routes
    getAllPlanTypes() {
        console.log(`[DataService]: getAllPlanTypes() called`);
        return http.get("/api/planTypes");
    }

    getPlanType(id) {
        console.log(`[DataService]: getPlanType(id) called for id=${id}`);
        return http.get(`/api/planTypes/${id}`);
    }

    getAllToDos() {
        console.log(`[DataService]: getAllToDos() called`);
        return http.get(`/api/planTypes/planned/2`);
    }

    createPlanType(data) {
        console.log(`[DataService]: createPlanType(data) called`);
        return http.post("/api/planTypes", data);
    }

    updatePlanType(id, data) {
        console.log(`[DataService]: updatePlanType(id, data) called for id=${id}`);
        return http.put(`/api/planTypes/${id}`, data);
    }

    deletePlanType(id) {
        console.log(`[DataService]: deletePlanType(id) called for id=${id}`);
        return http.delete(`/api/planTypes/${id}`);
    }


    // functions to call settings routes
    getAllSettings() {
        console.log(`[DataService]: getAllSettings() called`);
        return http.get("/api/settings");
    }

    getSetting(id) {
        console.log(`[DataService]: getSetting(id) called for id=${id}`);
        return http.get(`/api/settings/${id}`);
    }

    createSetting(data) {
        console.log(`[DataService]: createSetting(data) called`);
        return http.post("/api/settings", data);
    }

    updateSetting(id, data) {
        console.log(`[DataService]: updateSetting(id, data) called for id=${id}`);
        return http.put(`/api/settings/${id}`, data);
    }

    deleteSetting(id) {
        console.log(`[DataService]: deleteSetting(id) called for id=${id}`);
        return http.delete(`/api/settings/${id}`);
    }


//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

let DS = new DataService();

export default DS;