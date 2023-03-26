// ---------- Functions -------------

// ---------- Categories -------------

// Get Categories
const getCategories = () => {
  let category = new Array();
  for (let obj of channels) {
    category.push(obj.category);
  }
  //console.log([...new Set(category)]);
};

// ---------- Languages -------------

//Render Languages
const renderLanguages = (arr) => {
  $("#language").html(`								<option value="all">All Languages</option>`);
  for (let a in arr) {
    let html = `
    <option value="${arr[a]}">${arr[a].toUpperCase()}</option>`;
    $("#language").append(html);
    //console.log(arr[a]);
  }
};

// Get Languages
const getLanguages = () => {
  let languages = new Array();
  for (let obj of channels) {
    languages.push(obj.language);
  }
  renderLanguages([...new Set(languages)]);
};

// ---------- Countries -------------

//Render Countries
const renderCountries = (arr) => {
  $("#country").html(`								<option value="all">All Countries</option>`);
  for (let a in arr) {
    let html = `
    <option value="${arr[a]}">${arr[a].toUpperCase()}</option>`;
    $("#country").append(html);
    //console.log(arr[a]);
  }
};

// Get Country
const getCountries = () => {
  let countries = new Array();
  for (let obj of channels) {
    countries.push(obj.country);
  }
  renderCountries([...new Set(countries)]);
};

// ---------- Home -------------

//Render Home Banner
const renderHome = (arr) => {
  $("#flixtv-hero").html("");
  for (let obj of arr) {
    let html = `
    <div class="home__card">
    <a href="details.html?id=${obj.id}">
    <img width="414" height="330" src="${obj.img}" alt="${obj.name}">
    <span class="live__status">live</span>
    </a>
    <div>
    <h2>${obj.name}</h2>
    <ul>
    <li>${obj.language.toUpperCase()}</li>
    <li>${obj.country.toUpperCase()}</li>
    <li>${obj.category.toUpperCase()}</li>
    </ul>
    </div>
    <button class="home__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <span class="home__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.9</span>
    </div>`;
    $("#flixtv-hero").append(html);
    //console.log(arr[a]);
  }
};

// Get Home Banner
const getHome = () => {
  let home = new Array();
  for (let obj of channels) {
    if (obj.home) {
      home.push(obj);
    }
  }
  renderHome(home);
};

getHome();

// ---------- Home Sort -------------

// Render Featured
const renderFeatured = (arr) => {
  $("#homeData").html("");
  for (let obj of arr) {
    let html = `
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="150" src="${obj.img}" alt="${obj.name}">
    ${obj.active ? '<span class="live__status">live</span>' : ""}
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.9</span>
    <h3 class="card__title"><a href="details.html?id=${obj.id}">${
      obj.name
    }</a></h3>
    <ul class="card__list">
    <li>${obj.language.toUpperCase()}</li>
    <li>${obj.country.toUpperCase()}</li>
    <li>${obj.category.toUpperCase()}</li>
    </ul>
    </div>
    </div>
    `;
    $("#homeData").append(html);
    //console.log(arr[a]);
  }
};

// Get Featured
const getFeatured = () => {
  let featured = new Array();
  for (let obj of channels) {
    if (obj.featured) {
      featured.push(obj);
    }
  }
  //renderFeatured(home);
  renderFeatured(featured);
};

// Render Featured Bottom
const renderFeaturedBottom = (arr) => {
  $("#newest").html("");
  for (let obj of arr) {
    let html = `
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="270" src="${obj.img}" alt="${obj.name}">
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1615 8.05308C13.1615 9.79908 11.7455 11.2141 9.9995 11.2141C8.2535 11.2141 6.8385 9.79908 6.8385 8.05308C6.8385 6.30608 8.2535 4.89108 9.9995 4.89108C11.7455 4.89108 13.1615 6.30608 13.1615 8.05308Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05289C17.289 3.48888 13.806 0.750885 9.998 0.750885H10.002C6.194 0.750885 2.711 3.48888 0.75 8.05289C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <h3 class="card__title card__title--subs"><a href="details.html?id=${
      obj.id
    }">${obj.name}</a></h3>
    <ul class="card__list card__list--subs">
    <li>${obj.category.toUpperCase()}, ${obj.country.toUpperCase()}, ${obj.language.toUpperCase()}</li>
    </ul>
    </div>
    `;
    $("#newest").append(html);
    //console.log(arr[a]);
  }
};

// Get Featured Bottom
const getFeaturedBottom = () => {
  let featured = new Array();
  for (let obj of channels) {
    if (obj.featured) {
      featured.push(obj);
    }
  }
  //renderFeatured(home);
  renderFeaturedBottom(featured);
};

// Render Popular
const renderPopular = (arr) => {
  $("#homeData").html("");
  for (let obj of arr) {
    let html = `
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="150" src="${obj.img}" alt="${obj.name}">
    ${obj.active ? '<span class="live__status">live</span>' : ""}
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.9</span>
    <h3 class="card__title"><a href="details.html?id=${obj.id}">${
      obj.name
    }</a></h3>
    <ul class="card__list">
    <li>${obj.language.toUpperCase()}</li>
    <li>${obj.country.toUpperCase()}</li>
    <li>${obj.category.toUpperCase()}</li>
    </ul>
    </div>
    </div>
    `;
    $("#homeData").append(html);
    //console.log(arr[a]);
  }
};

// Render Popular Bottom
const renderPopularBottom = (arr) => {
  $("#subscriptions").html("");
  for (let obj of arr) {
    let html = `
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="270" src="${obj.img}" alt="${obj.name}">
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1615 8.05308C13.1615 9.79908 11.7455 11.2141 9.9995 11.2141C8.2535 11.2141 6.8385 9.79908 6.8385 8.05308C6.8385 6.30608 8.2535 4.89108 9.9995 4.89108C11.7455 4.89108 13.1615 6.30608 13.1615 8.05308Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05289C17.289 3.48888 13.806 0.750885 9.998 0.750885H10.002C6.194 0.750885 2.711 3.48888 0.75 8.05289C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <h3 class="card__title card__title--subs"><a href="details.html?id=${
      obj.id
    }">${obj.name}</a></h3>
    <ul class="card__list card__list--subs">
    <li>${obj.category.toUpperCase()}, ${obj.country.toUpperCase()}, ${obj.language.toUpperCase()}</li>
    </ul>
    </div>
    `;
    $("#subscriptions").append(html);
    //console.log(arr[a]);
  }
};

// Get Popular
const getPopular = () => {
  let popular = new Array();
  for (let obj of channels) {
    if (obj.popular) {
      popular.push(obj);
    }
  }
  renderPopular(popular);
};

// Get Popular Bottom
const getPopularBottom = () => {
  let popular = new Array();
  for (let obj of channels) {
    if (obj.popular) {
      popular.push(obj);
    }
  }
  renderPopularBottom(popular);
};

// Render Popular
const renderZiyarat = (arr) => {
  $("#ziyaratData").html("");
  for (let obj of arr) {
    let html = `
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="150" src="${obj.img}" alt="${obj.name}">
    ${obj.active ? '<span class="live__status">live</span>' : ""}
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.9</span>
    <h3 class="card__title"><a href="details.html?id=${obj.id}">${
      obj.name
    }</a></h3>
    <ul class="card__list">
    <li>${obj.language.toUpperCase()}</li>
    <li>${obj.country.toUpperCase()}</li>
    <li>${obj.category.toUpperCase()}</li>
    </ul>
    </div>
    </div>
    `;
    $("#ziyaratData").append(html);
    //console.log(arr[a]);
  }
};

// Get Ziyarat
const getZiyarat = () => {
  let ziyarat = new Array();
  for (let obj of channels) {
    if (obj.category == "ziyarat") {
      ziyarat.push(obj);
    }
  }
  renderZiyarat(ziyarat);
};

// Render All
const renderAll = (arr) => {
  $("#homeData").html("");
  for (let obj of arr) {
    let html = `						<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="150" src="${obj.img}" alt="${obj.name}">
    ${obj.active ? '<span class="live__status">live</span>' : ""}
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.9</span>
    <h3 class="card__title"><a href="details.html?id=${obj.id}">${
      obj.name
    }</a></h3>
    <ul class="card__list">
    <li>${obj.language.toUpperCase()}</li>
    <li>${obj.country.toUpperCase()}</li>
    <li>${obj.category.toUpperCase()}</li>
    </ul>
    </div>
    </div>`;
    $("#homeData").append(html);
    //console.log(arr[a]);
  }
};

// Get All
const getAll = () => {
  let all = new Array();
  for (let obj of channels) {
    all.push(obj);
  }
  renderAll(all);
  //console.log(all);
};

//Sort Options
$(".slider-radio").on("click", () => {
  var all = $("#all").is(":checked");
  var featured = $("#featured").is(":checked");
  var popular = $("#popular").is(":checked");
  if (all) {
    //console.log("All");
    getAll();
  } else if (featured) {
    //console.log("Featured");
    getFeatured();
  } else if (popular) {
    //console.log("Popular");
    getPopular();
  }
});

// Render Selected
const renderSelected = (arr) => {
  $("#homeData").html("");
  for (let obj of arr) {
    let html = `						<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
    <div class="card">
    <a href="details.html?id=${obj.id}" class="card__cover">
    <img width="192" height="150" src="${obj.img}" alt="${obj.name}">
    ${obj.active ? '<span class="live__status">live</span>' : ""}
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <button class="card__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.9</span>
    <h3 class="card__title"><a href="details.html?id=${obj.id}">${
      obj.name
    }</a></h3>
    <ul class="card__list">
    <li>${obj.language.toUpperCase()}</li>
    <li>${obj.country.toUpperCase()}</li>
    <li>${obj.category.toUpperCase()}</li>
    </ul>
    </div>
    </div>`;
    $("#homeData").append(html);
    //console.log(arr[a]);
  }
};

// Calculate Selected
const calcSelected = (selected, id) => {
  let select = new Array();
  if (selected == "all") {
    select = channels;
  } else {
    for (let obj of channels) {
      if (obj[id] == selected) {
        select.push(obj);
      }
    }
  }
  renderSelected(select);
};

// Get Selected
const getSelected = (selected, id) => {
  if (id == "language") {
    calcSelected(selected, id);
  } else if (id == "country") {
    calcSelected(selected, id);
  }
};

//Youtube Slider
/*const renderYoutube = (obj) => {
$('#flixtv').append("");
  var html = `
  <div class="interview">
  <a href="https://youtube.com/watch?v=${obj.id.videoId}" class="interview__cover">
  <img src="${obj.snippet.thumbnails.high.url}" alt="${obj.snippet.title}">
  <span>
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg> 5:33
  </span>
  </a>
  <h3 class="interview__title"><a href="https://youtube.com/watch?v=${obj.id.videoId}">${obj.snippet.title}</a></h3>
  </div>
  `

  $('#flixtv').append(html);
}

fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyC3wVhwr_r5xAFA5Fw1IxYtmKs9C19SYiE&channelId=UCb-4Mr8FtL34-v4mM3E8hiA&part=snippet,id&order=date&maxResults=10')
.then(response => response.json())
.then(data => {
  $.each(data.items, function(idx, obj) {
    renderYoutube(obj);
    //console.log(obj)
  });
})
.catch(err => console.log(err)); */

// Render Suggestions
const renderSuggestions = (arr) => {
  $("#series").html("");
  for (let obj of arr) {
    console.log(obj);
    let html = `
    <div class="series">
    <a href="details.html?id=${obj.id}" class="series__cover">
    <img width='280' height='140' src="${obj.img}" alt="">
    <span>
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg> ${
      obj.active ? "Live" : ""
    }
    </span>
    </a>
    <h3 class="series__title"><a href="details.html.html?id=${obj.id}">${
      obj.name
    }</a></h3>
    </div>
    `;
    $("#series").append(html);
  }
};

// Get Suggestions
const getSuggestions = (prevObj) => {
  let suggestions = [];
  for (let obj of channels) {
    if (obj.language == prevObj.language) {
      if (obj.id != prevObj.id) {
        suggestions.push(obj);
      }
    }
  }
  renderSuggestions(suggestions);
};

// Render Details
const renderDetails = (id) => {
  for (obj of channels) {
    if (obj.id == id) {
      $("#detailImgTop").data("bg", obj.img);
      $("#detailTitle").text(obj.name);
      $("#detailCategory").text(obj.category);
      $("#detailLanguage").text(obj.language);
      $("#detailCountry").text(obj.country);
      $("#detailLive").text(obj.active ? "Live" : "");
      $("#detailDescription").text(obj.description);
      if (obj.url.includes(".m3u8")) {
        $("#player").attr("poster", obj.img);
        $("#detailVideo-576").attr("src", obj.url);
        $("#detailVideo-720").attr("src", obj.url);
        $("#detailVideo-1080").attr("src", obj.url);
      } else {
        let html = `<a href="${obj.url}" target="_blank"><video id="player" poster="${obj.img}" /></a>`;
        $("#switchPlayer").html(html);
      }
      $("#tags").html(`
        <h3 class="categories__title">Tags</h3>
        <a href="category.html" class="categories__item">${obj.category}</a>
        <a href="category.html" class="categories__item">${obj.language}</a>
        <a href="category.html" class="categories__item">${obj.country}</a>
        `);
      getSuggestions(obj);
    }
  }
};

//get Id
let searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("id")) {
  let id = searchParams.get("id");
  renderDetails(id);
  //console.log(id);
}

let autoCompleteData = [];
channels.map((a) => {
  let obj = Object.assign(
    {},
    {
      label: a.name,
      value: a.id,
    }
  );
  autoCompleteData = [...autoCompleteData, obj];
});

$(function () {
  $("#search-channel").autocomplete({
    source: autoCompleteData,
    //appendTo: $("#channelSuggestions").next(),
    select: function (event, ui) {
      window.open(
        `https://shiachannel.in/livetv/details.html?id=${ui.item.value}`,
        "_blank"
      );
    },
  });
});

getLanguages();
getCountries();
getCategories();
getFeatured();
getFeaturedBottom();
getPopularBottom();
getZiyarat();
