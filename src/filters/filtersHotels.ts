import {HotelsStore} from "@/store/types";

const countriesFilter = (state: HotelsStore) => {
  state.hotels = [
    ...state.hotels.filter((el) => {
      return state.filters.counties.find((country) => el.country === country)
    })]
}
const typesFilter = (state: HotelsStore) => {
  state.hotels_filter = [
    ...state.hotels.filter((el) => {
      return state.filters.types.find((type) => el.type === type)
    })]
}
const starsFilter = (state: HotelsStore) => {
  state.filters.star.forEach((star) => {
    state.hotels_filter = [
      ...state.hotels.filter((el) => el.stars === star)]
  })
}
const countReviewsFilter = (state: HotelsStore) => {
  state.hotels_filter = [
    ...state.hotels.filter((el) => el.reviews_amount >= state.filters.countReviews)]
}
const priceFilter = (state: HotelsStore) => {
  state.hotels_filter = [
    ...state.hotels.filter((el) => el.min_price >= state.filters.price[0] && el.min_price <= state.filters.price[1])]
}


export const hotelsFilter = (state: HotelsStore) => {
  state.hotels_filter = []
  if (state.filters.counties.length > 0) {
    countriesFilter(state)
    state.pagination.disabled = false
  }
  if (state.filters.types.length > 0) {
    typesFilter(state)
    state.pagination.disabled = false
  }
  if (state.filters.star.length > 0) {
    starsFilter(state)
    state.pagination.disabled = false
  }
  if (state.filters.countReviews > 0) {
    countReviewsFilter(state)
    state.pagination.disabled = false
  }
  if (state.filters.price.length > 0) {
    priceFilter(state)
    state.pagination.disabled = false
  }
}
