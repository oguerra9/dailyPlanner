const axios = require('axios');
const SettingsAPI = {};

SettingsAPI.getLocationName = async () => {
    var locationLink = 'http://localhost:3001/api/settings/1';
    try {
        const response = await axios.get(locationLink);
        //console.log(response.data);
        return response.data.setting_value;
    } catch (error) {
        console.log(error);
    }
};

module.exports = SettingsAPI;