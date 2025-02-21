import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';

const imgContainer = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const loaderEl = document.querySelector('.loader');

function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();
  imgContainer.innerHTML = '';
  if (searchQuery === '') {
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
  imgContainer.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetchPhotos(searchQuery)
    .then(imagesData => {
      loaderEl.classList.add('is-hidden');
      if (imagesData.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        imgContainer.innerHTML = createMarkup(imagesData.hits);
        const lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionsDelay: 250,
        });
      }
    })

  
    .catch(error => {
      console.log(error);
      loaderEl.classList.add('is-hidden');
    })
    .finally(() => {
      event.target.reset();
    });
}

searchForm.addEventListener('submit', onSearch);