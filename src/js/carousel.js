import { debounce } from './autocomplete';

const nextBtn = document.querySelector('.arrow-right');
const prevBtn = document.querySelector('.arrow-left');
const dayElements = document.querySelectorAll('.day-wrapper');
const scrollBehaviour = {
  behavior: 'smooth',
  block: 'start',
  inline: 'center',
};

const getActiveElement = () => {
  const activeELement = document.querySelector(
    '.next-5days__inner-wrapper > .active',
  );
  const activeElementIndex = Number(
    activeELement.getAttribute('data-position'),
  );

  return [activeELement, activeElementIndex];
};

const isCarouselEnded = (activeElIndex, position) =>
  (activeElIndex === dayElements.length - 1 && position === 'right') ||
  (activeElIndex === 0 && position === 'left');

const scrollEl = ([activeEl, activeElIndex], position) => {
  if (isCarouselEnded(activeElIndex, position)) return;
  if (position === 'right') {
    // eslint-disable-next-line no-unused-expressions
    dayElements[activeElIndex + 1].scrollIntoView(scrollBehaviour);

    dayElements[activeElIndex + 1].classList.add('active');
  } else if (position === 'left') {
    dayElements[activeElIndex - 1].scrollIntoView(scrollBehaviour);

    dayElements[activeElIndex - 1].classList.add('active');
  }
  activeEl.classList.remove('active');
};

const setUpStartPosition = () => {
  console.log(window.innerWidth);
  if (window.innerWidth <= 768) {
    document
      .querySelector('.next-5days__inner-wrapper > .active')
      .classList.remove('active');
    dayElements[0].classList.add('active');
  }
};

const debouncedStart = debounce(setUpStartPosition, 500);

nextBtn.addEventListener('click', () => {
  scrollEl(getActiveElement(), 'right');
});
prevBtn.addEventListener('click', () => {
  scrollEl(getActiveElement(), 'left');
});

window.addEventListener('resize', () => {
  debouncedStart();
});
