import axios from 'axios';
const adminurl = "http://localhost:9092/admin/"
class WasherService {
    getWashers() {
        return axios.get(adminurl + "getAllWasher")
    }
    deletewasher(email) {
        return axios.delete(adminurl + "deletewasher/" + email)
    }

}
export default new WasherService()