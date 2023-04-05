export interface Hotel {
  name: string,
  country: string,
  address: string,
  stars: 4,
  type: string,
  description: string,
  services: string[]
  min_price: number,
  currency: string,
  rating: number,
  reviews_amount: number,
  last_review: string
}

export interface Filters {
  counties: string[],
  types: string[],
  star: number[],
  price: number[]
  countReviews: number
}

export interface Pagination {
  disabled: boolean
  currentPage: number,
  countView: number,
  countPage: number
  startIndex: number,
  endIndex: number
}

export interface HotelsStore {
  pagination: Pagination
  listCounties: string[]
  filters: Filters
  hotels: Hotel[]
  hotels_filter: Hotel[]
}
