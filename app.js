const { getDataset, getDatasetItem } = require('./helpers');
const parsers = require('./parsers');

async function retrieveDatasetItem(action, settings) {
    const params = {
        datasetId: parsers.string(action.params.datasetId),
        offset: parseInt(action.params.offset || 0),
        apifyToken: parsers.string(action.params.APIFY_TOKEN) || settings.APIFY_TOKEN
    };

    if (!params.apifyToken) throw `Token was not provided`

    const datasetResponse = await getDataset(params);
    if (datasetResponse.status !== 200) {
        throw "Unable to connect to dataset";
    }
    if ((params.offset + 1) > datasetResponse.data.data.itemCount) {
        throw `Invalid offset. Not enough records in dataset for offset ${params.offset}`;
    }

    const itemResponse = await getDatasetItem(params);

    return {
        offset: params.offset,
        row: itemResponse.data[0],
        total: datasetResponse.data.data.itemCount
    };
}

module.exports = {
    retrieveDatasetItem,
};        