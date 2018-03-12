export function mapNotNull(inputArray, transformerFunction) {
  const inputArrayLength = inputArray.length;
  const outputArray = new Array(inputArrayLength);
  let outputIndex = 0;
  for (let inputIndex = 0; inputIndex < inputArrayLength; inputIndex++) {
    const transformerResult = transformerFunction(inputArray[inputIndex]);
    if (transformerResult != null) outputArray[outputIndex++] = transformerResult;
  }
  if (outputIndex < inputArrayLength) {
    outputArray.length = outputIndex;
  }
  return outputArray;
}

export function convertCountries(country) {
  return {
    value: country.translations.en,
    label: country.translations.en,
    currency: {
      id: country.preferredCurrency.id,
      value: country.preferredCurrency.name,
      label: country.preferredCurrency.name,
    },
  }
}

export function convertCurrencies(currency) {
  return {
    value: currency.translations.en,
    label: currency.translations.en,
    id: currency._id,
  }
}