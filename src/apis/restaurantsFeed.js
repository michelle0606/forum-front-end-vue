import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurantsFeed() {
    return apiHelper.get(`/restaurants/feeds`)
  }
}
