const autocompleteInput = document.querySelector('.autocomplete');
const options = {
  method: 'GET',
  headers: { accept: 'application/json' },
  mode: 'cors',
};
// Move to utils folder?
// eslint-disable-next-line import/prefer-default-export
export const debounce = (func, ms) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, ms);
  };
};

// eslint-disable-next-line consistent-return
const getCitySuggestions = async () => {
  try {
    const response = await fetch(
      `https://eu1.locationiq.com/v1/autocomplete?q=${autocompleteInput.value}&tag=place%3Acity%2C%20place%3Atown%2C%20place%3Avillage&limit=5&accept-language=en&dedupe=1&key=pk.372ca6b6ad1157e7185b0f6413208262`,
      options,
    );
    const responseJSON = await response.json();
    console.log(responseJSON);
    return responseJSON;
  } catch (e) {
    console.log(e);
  }
};

function createAutoCompleteDOM(data) {
  if (document.querySelector('.autocomplete-wrapper')) {
    document.querySelector('.autocomplete-wrapper').remove();
  }

  const autocompleteWrapper = document.createElement('div');
  autocompleteWrapper.className = 'autocomplete-wrapper';

  // eslint-disable-next-line no-restricted-syntax, prefer-const
  for (let element of data) {
    const addressWrapper = document.createElement('div');
    addressWrapper.className = 'address-wrapper';

    const city = document.createElement('span');
    city.className = 'city';
    city.textContent = element.address.name;

    const country = document.createElement('span');
    country.className = 'country';
    country.textContent = element.address.country;

    addressWrapper.append(city, country);
    autocompleteWrapper.append(addressWrapper);
  }

  autocompleteInput.insertAdjacentElement('afterEnd', autocompleteWrapper);
}

function createAutoCompleteDropdown() {
  getCitySuggestions().then((res) => createAutoCompleteDOM(res));
}
const debouncedDropdown = debounce(createAutoCompleteDropdown, 1500);

autocompleteInput.addEventListener('input', () => {
  if (autocompleteInput.value.length >= 3) debouncedDropdown();
});
