const autocompleteInput = document.querySelector('.autocomplete');
const findBtn = document.querySelector('.find-btn');
const autoCompletePlaceholder = document.querySelector(
  '.autocomplete-placeholder',
);
const options = {
  method: 'GET',
  headers: { accept: 'application/json' },
  mode: 'cors',
};

export const debounce = (func, ms) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, ms);
  };
};

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

function createError() {
  const autocompleteWrapper = document.createElement('div');
  autocompleteWrapper.className = 'autocomplete-wrapper';

  const addressWrapper = document.createElement('div');
  addressWrapper.className = 'error-wrapper';

  const err = document.createElement('span');
  err.className = 'city';
  err.textContent = 'No city found';

  addressWrapper.append(err);
  autocompleteWrapper.append(addressWrapper);
  autoCompletePlaceholder.append(autocompleteWrapper);

  // remove loader
  document.querySelector('.loader-wrapper').remove();
}

function createAutoCompleteDOM(data) {
  if (document.querySelector('.autocomplete-wrapper')) {
    document.querySelector('.autocomplete-wrapper').remove();
  }
  const autocompleteWrapper = document.createElement('div');
  autocompleteWrapper.className = 'autocomplete-wrapper';

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
    country.textContent =
      element.address.country === 'United States of America'
        ? element.address.state
        : element.address.country;

    addressWrapper.append(city, country);
    autocompleteWrapper.append(addressWrapper);
  }
  autoCompletePlaceholder.append(autocompleteWrapper);
}

function createAutoCompleteDropdown() {
  if (autocompleteInput.value.length >= 3) {
    getCitySuggestions()
      .then((res) => createAutoCompleteDOM(res))
      .catch(() => createError());
  }
}
const debouncedDropdown = debounce(createAutoCompleteDropdown, 1000);

const hideAutocompleteDropdown = () => {
  if (document.querySelector('.autocomplete-wrapper')) {
    document.querySelector('.autocomplete-wrapper').classList.add('hide');
  }
};

function createLoader() {
  const loaderWrapper = document.createElement('div');
  loaderWrapper.className = 'loader-wrapper';

  const loader = document.createElement('div');
  loader.className = 'loader';

  loaderWrapper.append(loader);
  autoCompletePlaceholder.append(loaderWrapper);
}

const handleAutocompleteInput = (e, addressWrapper = e.target) => {
  addressWrapper.setAttribute('data-selected', 'selected');

  const city = addressWrapper.querySelector('.city').textContent;
  const country = addressWrapper.querySelector('.country').textContent;
  autocompleteInput.value = `${city}, ${country}`;

  findBtn.classList.remove('hide');
  hideAutocompleteDropdown();
};

autocompleteInput.addEventListener('input', () => {
  if (!document.querySelector('.loader-wrapper')) createLoader();

  if (autocompleteInput.value.length < 3) {
    autoCompletePlaceholder.innerHTML = '';
  }
  findBtn.classList.add('hide');
  debouncedDropdown();
});

autocompleteInput.addEventListener('keyup', (e) => {
  // Checking if autocomplete exist
  const autocompleteWrapper = document.querySelector('.autocomplete-wrapper');
  if (!autocompleteWrapper) return;

  const selectedCityWrapper =
    autocompleteWrapper.querySelector('.address-wrapper');

  if (e.code === 'Enter') {
    handleAutocompleteInput(e, selectedCityWrapper);
  }
});

autoCompletePlaceholder.addEventListener('click', (e) => {
  if (e.target.classList.contains('address-wrapper')) {
    // Removing loader
    document.querySelector('.loader-wrapper').remove();
    handleAutocompleteInput(e);
  }
});

export { autocompleteInput, findBtn };
