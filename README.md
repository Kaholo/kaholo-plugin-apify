# kaholo-plugin-apify
Apify plugin for Kaholo
This plugin is based on [apify dataset API](https://docs.apify.com/api/v2#/reference/datasets) and helps you to retrive apify dataset & process/pipe it further.

## Method: Retrieve Dataset Item

**Description**

This method will retrieve a dataset item from Apify dataset. This method calls Apify [get dataset items](https://docs.apify.com/api/v2#/reference/datasets/item-collection/get-items)

**Parameters**
1. Dataset ID (String) **Required** - ID of the dataset from which data need to be pulled
2. Offset **Optional** - This parameter decides whcih record to pull from Apify dataset. If not provided, it will pull always first item.
3. Apify Token **Optional** - Apify access token