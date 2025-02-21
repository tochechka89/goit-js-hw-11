const API_KEY = '43997117-306e8cb8a0972afaf1f3fc80b';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = (searchImage) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    return response.json();
  });
};