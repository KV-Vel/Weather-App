const autocompleteInput = document.querySelector('.autocomplete');
const autoCompletePlaceholder = document.querySelector(
  '.autocomplete-placeholder',
);
const options = {
  method: 'GET',
  headers: { accept: 'application/json' },
  mode: 'cors',
};

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
      `https://eu1.locationiq.com/v1/autocomplete?q=${autocompleteInput.value}&tag=place%3Acity&limit=5&accept-language=en&dedupe=1&key=pk.372ca6b6ad1157e7185b0f6413208262`,
      options,
    );
    if (response.ok) {
      const responseJSON = await response.json();
      return responseJSON;
    }
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
    addressWrapper.setAttribute('data-lan', element.lat);
    addressWrapper.setAttribute('data-lon', element.lon);

    const city = document.createElement('span');
    city.className = 'city';
    city.textContent = element.address.name;

    const country = document.createElement('span');
    country.className = 'country';
    country.textContent = element.address.country;

    addressWrapper.append(city, country);
    autocompleteWrapper.append(addressWrapper);
  }
  autoCompletePlaceholder.append(autocompleteWrapper);
}

function createAutoCompleteDropdown() {
  if (autocompleteInput.value.length >= 3) {
    getCitySuggestions()
      .then((res) => createAutoCompleteDOM(res))
      .catch((e) => console.log(e));
  }
}
const debouncedDropdown = debounce(createAutoCompleteDropdown, 1500);

autocompleteInput.addEventListener('input', () => {
  if (autocompleteInput.value.length < 3) {
    autoCompletePlaceholder.innerHTML = '';
  }
  debouncedDropdown();
});

const hideAutocompleteDropdown = () => {
  if (document.querySelector('.autocomplete-wrapper')) {
    document.querySelector('.autocomplete-wrapper').classList.add('hide');
  }
};

export { autocompleteInput, autoCompletePlaceholder, hideAutocompleteDropdown };
