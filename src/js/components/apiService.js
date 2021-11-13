
export function getImg(endPoint, page) {
  return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${endPoint}&page=${page}&per_page=12&key=24293217-fac742fabeea19ad0d08fc078
`).then(response => response.json());
}

