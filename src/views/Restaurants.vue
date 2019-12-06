<template>
  <div class="container py-5">
    <NavTabs />
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>
    <RestaurantsPagination
      v-if="totalPage"
      :category-id="categoryId"
      :current-page="currentPage"
      :total-page="totalPage"
    />

    <div v-if="restaurants.length < 1">
      此類別目前無餐廳資料
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'
import restaurantsAPI from './../apis/restaurants'

import { Toast } from './../utils/helpers'

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data() {
    return {
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: -1
    }
  },
  created() {
    const { page = 1, categoryId = '' } = this.$route.query
    this.fetchRestaurants({
      page,
      categoryId
    })
  },
  beforeRouteUpdate(to, from, next) {
    const { page } = to.query
    this.fetchRestaurants({ page, categoryId: '' })
    next()
  },
  methods: {
    async fetchRestaurants({ page, categoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page,
          categoryId
        })
        const { data, statusText } = response

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.categories = data.categories
        this.categoryId = data.categoryId
        this.currentPage = data.page
        this.restaurants = data.restaurants
        this.totalPage = data.totalPage.length
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>
