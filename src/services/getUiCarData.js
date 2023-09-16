export function getUiCarData(carApi) {
  Object.entries(carApi).forEach(([key, value]) => {
    if (typeof value === "string" && value.length) {
      const unCapitalize = value.split('');
      unCapitalize[0] = unCapitalize[0].toLowerCase();
      carApi[key] = unCapitalize.join('');
    }
  })
  return {
    ...carApi,
    price: `${carApi.priceNum} ${carApi.priceCurrency}`,
    name: `${carApi.marka} ${carApi.model}`,
  }
}
