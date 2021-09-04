import axios from 'axios';
const CustUrl = "http://localhost:9091/admin/"
class Customerservice {
    getCustomers() {
        return axios.get(CustUrl + "getAll")
    }
    deleteCustomer(email) {
        return axios.delete(CustUrl + "delete/" + email)
    }
    addCustomer(customer) {
        return axios.post(CustUrl, customer)
    }

}
export default new Customerservice()