export type RequestStates<ResponseSchema> = {
  isFetching: boolean
  data: ResponseSchema
  error: any
}
