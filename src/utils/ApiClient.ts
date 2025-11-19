import axios from "axios"

const ApiClient = axios.create({
    baseURL:"https://localhost:3000/api",
    headers: {
        "Accept": "application/json"
    }

})

export default ApiClient