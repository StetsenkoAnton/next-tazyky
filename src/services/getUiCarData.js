export function getUiCarData(carApi) {
  return {
    ...carApi,
    price: `${carApi.price} ${carApi.currency}`,
    name: `${carApi.marka} ${carApi.model}`,
  }
}
