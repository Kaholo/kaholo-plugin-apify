const axios = require('axios');

const APIFY_ENDPOINT = 'https://api.apify.com/v2';

async function getDataset(params) {
  const url = `${APIFY_ENDPOINT}/datasets/${params.datasetId}`;
  return axios.get(url, {
    params: {
      token: params.apifyToken,
    },
  });
}

async function getDatasetItem(params) {
  const url = `${APIFY_ENDPOINT}/datasets/${params.datasetId}/items`;
  return axios.get(url, {
    params: {
      token: params.apifyToken,
      offset: params.offset,
      limit: 1,
    },
  });
}

module.exports = {
  getDataset,
  getDatasetItem,
};
