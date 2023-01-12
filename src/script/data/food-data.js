const axios = require('axios');

class DataSource {
    static searchFood(keyword) {
        return axios.get(`https://api.spoonacular.com/food/menuItems/search?apiKey=your_api_key&query=${keyword}`)
        .then(response => {
            return response.data;
        })
        .then(responseJson => {
            if(responseJson.menuItems) {
                return Promise.resolve(responseJson.menuItems);
            }
            else {
                return Promise.reject(`${keyword} is not found`)
            }
        })
    }
}

export default DataSource;