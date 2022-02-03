# kaholo-plugin-apify
Apify plugin for Kaholo.

This plugin is based on the [Apify dataset API](https://docs.apify.com/api/v2#/reference/datasets) and helps you to retrive Apify dataset & process/pipe it further.

## Settings

1. Apify Token (Vault) - The default Apify access token to connect to Apify. [Learn More](https://docs.apify.com/api/v2#/introduction/authentication)

## Method: Retrieve Dataset Item

Retrieve a dataset item from the Apify dataset. This method calls Apify [get dataset items](https://docs.apify.com/api/v2#/reference/datasets/item-collection/get-items).

### Parameters
1. Apify Token (Vault) **Optional** - Apify access token.
2. Dataset ID (String) **Required** - ID of the dataset from which data needs to be pulled.
3. Offset (String) **Optional** - This parameter decides which record to pull from Apify dataset. If not provided, it will always pull the first item.
