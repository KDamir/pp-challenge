import CurrencyModel from "./CurrencyModel";
import CountryModel from "./CountryModel";

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
  return new CountryModel(
    country._id,
    country.translations.en,
    country.translations.en,
    new CurrencyModel(
      country.preferredCurrency.id,
      country.preferredCurrency.name,
      country.preferredCurrency.name
    )
  );
}

export function convertCurrencies(currency) {
  return new CurrencyModel(
    currency._id,
    currency.translations.en,
    currency.translations.en
  );
}