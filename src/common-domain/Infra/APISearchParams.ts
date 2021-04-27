import { SortBy, SortOrder } from './SearchParams'

/**
 * search params are camel cased for naming consistency unlike the
 * actual search params defined in APISearchParams which are snake cased
 */
export type APISearchParams = {
  page: string // number
  perPage: string // number
  order: SortOrder
  sort: SortBy
}
