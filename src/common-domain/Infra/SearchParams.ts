export enum SortOrder {
  Descending = 'desc',
  Ascending = 'desc',
}

export enum SortBy {
  Stars = 'stars',
}

/**
 * search params are camel cased for naming consistency unlike the
 * actual search params defined in APISearchParams which are snake cased
 */
export type SearchParams = {
  page: number
  perPage: number
  sortOrder: SortOrder
  sortBy: SortBy
}
