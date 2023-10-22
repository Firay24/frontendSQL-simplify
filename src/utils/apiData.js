/* eslint-disable max-len */
const BASE_URL = process.env.REACT_APP_API_DATA;

// USER
function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function login({ username, password }) {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const responseJson = await response.json();

  if (response.status !== 200) {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function register({
  name, username, password, role, region,
}) {
  const response = await fetch(`${BASE_URL}/users/regis`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, username, password, role, region,
    }),
  });

  const responseJson = await response.json();

  if (response.status !== 200) {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (response.status !== 200) {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

// FLOCKS
async function getFlocks() {
  const response = await fetchWithToken(`${BASE_URL}/flocks`);
  const responseJson = await response.json();

  if (response.status !== 200) {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getFlock(id) {
  const response = await fetch(`${BASE_URL}/flocks/${id}`);
  const responseJson = await response.json();

  if (response.status !== 200) {
    console.log(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getIsFunctional(id) {
  const response = await fetchWithToken(`${BASE_URL}/flocks/functional/${id}`);
  const responseJson = await response.json();

  if (response.status !== 200) {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function addFlock({
  name, placesBirth, datesBirth, nik, fathersName, gender, job, numberPhone, mzOrigin, yearEnteredTN, kaji, suluk, address,
}) {
  const response = await fetch(`${BASE_URL}/flocks/addFlock`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, placesBirth, datesBirth, nik, fathersName, gender, job, numberPhone, mzOrigin, yearEnteredTN, kaji, suluk, address,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function updateFlock({
  id, name, nik, fathersName, placesBirth, datesBirth, gender, job, numberPhone, mzOrigin, yearEnteredTN, country, province, regency, subdistrict, ward, linkGmaps, details,
}) {
  const response = await fetchWithToken(`${BASE_URL}/flocks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, nik, fathersName, placesBirth, datesBirth, gender, job, numberPhone, mzOrigin, yearEnteredTN, country, province, regency, subdistrict, ward, linkGmaps, details,
    }),
  });

  const responseJson = await response.json();

  if (response.status !== 200) {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson };
}

async function importFileFlocks(file) {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetchWithToken(`${BASE_URL}/flocks/importFlocks`, {
    method: 'POST',
    body: formData,
  });

  const responseJson = await response.json();

  if (response.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

// BOARD
async function getBoards() {
  const response = await fetchWithToken(`${BASE_URL}/boards/getBoards`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getBoard(id) {
  const response = await fetchWithToken(`${BASE_URL}/boards/getBoard/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function addBoard({
  name, regionProvince, coordinatorName, regionBKMZ, statusBoard, SKCategory, landStatus, buildingState, address, notes, head1, head2, head3,
}) {
  const response = await fetchWithToken(`${BASE_URL}/boards/addBoard`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, regionProvince, coordinatorName, regionBKMZ, statusBoard, SKCategory, landStatus, buildingState, address, notes, head1, head2, head3,
    }),
  });

  const responseJson = response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function updateBoard({
  id, name, regionProvince, coordinatorName, regionBKMZ, statusBoard, SKCategory, landStatus, buildingState, address, notes, head1, head2, head3,
}) {
  const response = await fetchWithToken(`${BASE_URL}/boards/updatedBoard/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, regionProvince, coordinatorName, regionBKMZ, statusBoard, SKCategory, landStatus, buildingState, address, notes, head1, head2, head3,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function importFileBoards(file) {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetchWithToken(`${BASE_URL}/boards/importBoard`, {
    method: 'POST',
    body: formData,
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: true, data: [] };
}

// FUNCTIONAL
async function getFunctionals() {
  const response = await fetchWithToken(`${BASE_URL}/functionals/getFunctionals`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getFunctional(id) {
  const response = await fetch(`${BASE_URL}/functionals/getFunctional/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function addFunctional({
  name, nik, fathersName, petoto, pentawajuh, pentarekat, pz,
}) {
  const response = await fetch(`${BASE_URL}/functionals/addFunctional`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, nik, fathersName, petoto, pentawajuh, pentarekat, pz,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function updateFunctional({
  _id, name, nik, fathersName, petoto, pentawajuh, pentarekat, pz,
}) {
  const response = await fetch(`${BASE_URL}/functionals/updateFunctionalkWithoutVerify/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, nik, fathersName, petoto, pentawajuh, pentarekat, pz,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: false, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function importFileFunctionals(file) {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetchWithToken(`${BASE_URL}/functionals/importFunctional`, {
    method: 'POST',
    body: formData,
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: true, data: [] };
}

// SULUK
async function createSuluk({
  id, nameSuluk, sulukTo, location, times, prevKaji, afterKaji, notes,
}) {
  const response = await fetchWithToken(`${BASE_URL}/flocks/suluks/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nameSuluk, sulukTo, location, times, prevKaji, afterKaji, notes,
    }),
  });

  const responseJson = response.json();

  if (response.status !== 200) {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson };
}

async function getSuluks() {
  const response = await fetch(`${BASE_URL}/suluk/getSuluks`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getSuluk(id) {
  const response = await fetch(`${BASE_URL}/flocks/suluks/${id}`);

  const responseJson = await response.json();

  if (response.status !== 200) {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data[0] };
}

async function updateSuluk({
  id, nameSuluk, sulukTo, location, times, prevKaji, afterKaji, notes,
}) {
  const response = await fetch(`${BASE_URL}/flocks/suluks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nameSuluk, sulukTo, location, times, prevKaji, afterKaji, notes,
    }),
  });
  const responseJson = await response.json();

  if (response.status !== 200) {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson };
}

// CLASS
async function createClasses({
  id, nameClass, time, location,
}) {
  const response = await fetchWithToken(`${BASE_URL}/flocks/class/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nameClass, time, location,
    }),
  });

  const responseJson = response.json();

  if (response.status !== 200) {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson };
}

async function getClass(id) {
  const response = await fetch(`${BASE_URL}/flocks/class/${id}`);

  const responseJson = await response.json();

  if (response.status !== 200) {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data[0] };
}

async function updateClass({
  id, nameClass, time, location,
}) {
  const response = await fetch(`${BASE_URL}/flocks/class/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nameClass, time, location,
    }),
  });
  const responseJson = await response.json();

  if (response.status !== 200) {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson };
}

async function getClasses() {
  const response = await fetch(`${BASE_URL}/class/getClasses`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

// NOTE'S FLOCK
async function getNotesFlock(id) {
  const response = await fetchWithToken(`${BASE_URL}/flocks/notes/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getNoteFlock(id) {
  const response = await fetchWithToken(`${BASE_URL}/noteFlock/getNote/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function updateNoteFlock({
  _id, name, nik, fathersName, details,
}) {
  const response = await fetchWithToken(`${BASE_URL}/noteFlock/updatedNote/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, nik, fathersName, details,
    }),
  });
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function updateNoteFlockBio({
  _id, name, nik, fathersName, details,
}) {
  const response = await fetchWithToken(`${BASE_URL}/noteFlock/updatedNoteBio/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, nik, fathersName, details,
    }),
  });
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function addNoteFlock({
  name, nik, fathersName, details,
}) {
  const response = await fetchWithToken(`${BASE_URL}/noteFlock/addNote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, nik, fathersName, details,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

// NOTE'S BOARD
async function getNotesBoard() {
  const response = await fetchWithToken(`${BASE_URL}/noteBoard/getNotes`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getNoteBoard(id) {
  const response = await fetchWithToken(`${BASE_URL}/noteBoard/getNote/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function updateNoteBoard({
  _id, name, nik, fathersName, details,
}) {
  const response = await fetchWithToken(`${BASE_URL}/noteBoard/updatedNote/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, nik, fathersName, details,
    }),
  });
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function updateNoteBoardBio({
  _id, name, nik, fathersName,
}) {
  const response = await fetchWithToken(`${BASE_URL}/noteBoard/updatedNoteBio/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, nik, fathersName,
    }),
  });
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    console.log(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function addNoteBoard({
  name, nik, fathersName, details,
}) {
  const response = await fetchWithToken(`${BASE_URL}/noteBoard/addNote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, nik, fathersName, details,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

export {
  getAccessToken,
  login,
  register,
  putAccessToken,
  getUserLogged,
  getFlocks,
  getFlock,
  addFlock,
  updateFlock,
  importFileFlocks,
  getBoards,
  getBoard,
  addBoard,
  updateBoard,
  importFileBoards,
  getIsFunctional,
  getFunctionals,
  getFunctional,
  addFunctional,
  updateFunctional,
  importFileFunctionals,
  createSuluk,
  getSuluks,
  getSuluk,
  updateSuluk,
  createClasses,
  getClasses,
  getClass,
  updateClass,
  getNotesFlock,
  getNoteFlock,
  updateNoteFlock,
  updateNoteFlockBio,
  addNoteFlock,
  getNotesBoard,
  getNoteBoard,
  updateNoteBoard,
  updateNoteBoardBio,
  addNoteBoard,
};
