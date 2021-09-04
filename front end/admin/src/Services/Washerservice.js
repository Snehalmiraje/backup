import axios from 'axios';
const adminurl = "http://localhost:9091/admin/"
class WasherService {
    getWashers() {
        return axios.get(adminurl + "getAllWasher")
    }
    deletewasher(email) {
        return axios.delete(adminurl + "delete/" + email)
    }

}
export default new WasherService()