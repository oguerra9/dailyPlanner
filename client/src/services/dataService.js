import http from "../http-common.js";

// export const getAllPlanned = async () => {
//     try {
//         let plannedEvents = await http.get("/planned");
//         console.log(`planned events: ${JSON.stringify(plannedEvents)}`);
//         return plannedEvents;
//     } catch (err) {
//         console.log(err)
//     }
// };

class DataService {
    // functions to call planned routes
    async getAllPlanned() {
        return await http.get("/planned");
    }

    getPlanned(id) {
        return http.get(`/planned/${id}`);
    }

    createPlanned(data) {
        return http.post("/planned", data);
    }

    updatePlanned(id, data) {
        return http.put(`/planned/${id}`, data);
    }

    deletePlanned(id) {
        return http.delete(`/planned/${id}`);
    }


    // functions to call category routes
    getAllCategories() {
        return http.get("/categories");
    }

    getCategory(id) {
        return http.get(`/categories/${id}`);
    }

    createCategory(data) {
        return http.post("/categories", data);
    }

    updateCategory(id, data) {
        return http.put(`/categories/${id}`, data);
    }

    deleteCategory(id) {
        return http.delete(`/categories/${id}`);
    }


    // functions to call planTypes routes
    getAllPlanTypes() {
        return http.get("/planTypes");
    }

    getPlanType(id) {
        return http.get(`/planTypes/${id}`);
    }

    createPlanType(data) {
        return http.post("/planTypes", data);
    }

    updatePlanType(id, data) {
        return http.put(`/planTypes/${id}`, data);
    }

    deletePlanType(id) {
        return http.delete(`/planTypes/${id}`);
    }


    // functions to call settings routes
    getAllSettings() {
        return http.get("/settings");
    }

    getSetting(id) {
        return http.get(`/settings/${id}`);
    }

    createSetting(data) {
        return http.post("/settings", data);
    }

    updateSetting(id, data) {
        return http.put(`/settings/${id}`, data);
    }

    deleteSetting(id) {
        return http.delete(`/settings/${id}`);
    }


//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

let DS = new DataService();

export default DS;