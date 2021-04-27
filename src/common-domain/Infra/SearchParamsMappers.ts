import { APISearchParams } from './APISearchParams'
import { SearchParams } from './SearchParams'

export const toApiSearchParams = ({
  page,
  perPage,
  sortOrder,
  sortBy,
  ...rest
}: SearchParams & any): APISearchParams => {
  return {
    page: String(page),
    per_page: String(perPage),
    order: sortOrder,
    sort: sortBy,
    ...rest,
  }
}
