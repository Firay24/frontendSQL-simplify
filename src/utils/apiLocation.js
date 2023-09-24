/* eslint-disable camelcase */
const BASE_URL = process.env.REACT_APP_API_LOKASI;
const API_KEY = process.env.REACT_APP_API_KEY_LOKASI;

async function getProvince() {
  const response = await fetch(`${BASE_URL}/provinsi?api_key=${API_KEY}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { data: [] };
  }

  return { data: responseJson.data };
}

async function getRegency(provinsi_id) {
  const response = await fetch(`${BASE_URL}/kota?provinsi_id=${provinsi_id}`, {
    headers: {
      'X-API-KEY': `${API_KEY}`,
    },
  });
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { data: [] };
  }

  return { data: responseJson.data };
}

async function getSubdistrict(kota_id) {
  const response = await fetch(`${BASE_URL}/kecamatan?kota_id=${kota_id}`, {
    headers: {
      'X-API-KEY': `${API_KEY}`,
    },
  });
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { data: [] };
  }

  return { data: responseJson.data };
}

async function getWard(kecamatan_id) {
  const response = await fetch(`${BASE_URL}/kelurahan?kecamatan_id=${kecamatan_id}`, {
    headers: {
      'X-API-KEY': `${API_KEY}`,
    },
  });
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { data: [] };
  }

  return { data: responseJson.data };
}

export {
  getProvince,
  getRegency,
  getSubdistrict,
  getWard,
};
