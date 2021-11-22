import axios from "axios";

export default class getShop {
    static async getItems() {
        const response = await axios.get('https://fakestoreapi.com/products')
        return response;

    }

    static async getItemPage(id) {
        const response = await axios.get('https://fakestoreapi.com/products/' + id)
        return response;

    }
}