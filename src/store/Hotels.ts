import {defineStore} from "pinia";
import {Filters, Hotel, HotelsStore} from "@/store/types";
import data from "@/hotels.json"
import {hotelsFilter} from "@/filters/filtersHotels";

export const useHotelsStore = defineStore('hotels', {
  state: () => ({
    pagination: {
      disabled: true,
      currentPage: 1,
      countPage: 4,
      countView: 3,
      startIndex: 0,
      endIndex: 3,
    },
    listCounties: [],
    filters: {
      counties: [],
      types: [],
      star: [],
      price: [],
      countReviews: 0
    },
    hotels: [],
    hotels_filter: []
  } as HotelsStore),
  actions: {
    init() {
      const hotels: Hotel[] = data.hotels as Hotel[]
      hotels.forEach(el => {
        if (!this.listCounties.includes(el.country)) this.listCounties.push(el.country)
      })
      this.pagination.countPage = Math.ceil(hotels.length / this.pagination.countView)

      this.hotels = [...hotels]
      this.hotels_filter = this.hotels.slice(this.pagination.startIndex, this.pagination.endIndex)

    },
    updatePagination(nextPage: number) {
      if (nextPage <= this.pagination.countPage) {
        if (nextPage > this.pagination.currentPage) {
          this.pagination.startIndex += this.pagination.countView
          this.pagination.endIndex += this.pagination.countView
          this.hotels_filter = this.hotels.slice(this.pagination.startIndex, this.pagination.endIndex)
          this.pagination.currentPage = nextPage
        } else {
          this.pagination.startIndex -= this.pagination.countView
          this.pagination.endIndex -= this.pagination.countView
          this.hotels_filter = this.hotels.slice(this.pagination.startIndex, this.pagination.endIndex)
          this.pagination.currentPage = nextPage
        }
      }

    },
    clearFilter() {
      this.filters.counties = []
      this.filters.price = []
      this.filters.star = []
      this.filters.types = []
      this.filters.countReviews = 0
      this.pagination = {
        ...this.pagination,
        disabled: true,
        currentPage: 1,
        startIndex: 0,
        endIndex: 3
      }
      this.hotels_filter = this.hotels.slice(this.pagination.startIndex, this.pagination.endIndex - 1)
    },
    updateFilter(data: Filters) {
      this.filters = {
        ...this.filters,
        ...data
      }
    },
    filterHotels() {
      const isNotFilter = this.filters.counties.length === 0
        && this.filters.types.length === 0
        && this.filters.star.length == 0
        && this.filters.countReviews === 0 &&
        this.filters.price.length === 0
      if (isNotFilter) {
        this.pagination = {
          ...this.pagination,
          disabled: true,
          currentPage: 1,
          startIndex: 0,
          endIndex: 3
        }
        this.hotels_filter = this.hotels.slice(this.pagination.startIndex, this.pagination.endIndex - 1)
      } else {
        hotelsFilter(this)
      }
    }
  }
})

