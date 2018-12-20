---
title: Address
icon: qrcode
ordinal: 1
---

## Details single address

### `GET /address/details/{address}`

Address details single. Returns the details of an address including balance

#### Arguments

1.  address `String` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/address/details/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: application/json"
        // [ { propertyid: 1,
        //  balance: '100.00106300',

## Details bulk addresses

### `POST /address/details`

Address details bulk. Returns the details of multiple addresses

#### Arguments

1.  addresses `Array` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/address/details" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"addresses\":[\"bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c\",\"bitcoincash:qrehqueqhw629p6e57994436w730t4rzasnly00ht0\"]}"

## Utxo single address

### `GET /address/utxo/{address}`

Address utxos single. Returns the list of utxo for an address

#### Arguments

1.  address `String` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/address/utxo/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: application/json"

## Utxo bulk addresses

### `POST /address/utxo`

Address utxos bulk. Returns the utxo of multiple addresses

#### Arguments

1.  addresses `Array` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/address/utxo" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"addresses\":[\"bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c\",\"bitcoincash:qrehqueqhw629p6e57994436w730t4rzasnly00ht0\"]}"

## Unconfirmed single address

### `GET /address/unconfirmed/{address}`

Unconfirmed transactions for an address. Returns the list of unconfirmed transactions for an address

#### Arguments

1.  address `String` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/address/unconfirmed/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: application/json"

## Unconfirmed bulk addresses

### `POST /address/unconfirmed`

Unconfirmed transactions for array of addresses. Returns the list of unconfirmed transactions for an array of addresses

#### Arguments

1.  addresses `Array` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/address/unconfirmed" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"addresses\":[\"bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c\",\"bitcoincash:qrehqueqhw629p6e57994436w730t4rzasnly00ht0\"]}"

## Transactions single address

### `GET /address/transactions/{address}`

Transactions for an address. Returns the list of transactions for an address

#### Arguments

1.  address `String` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X GET "https://rest.bitcoin.com/v2/address/transactions/bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c" -H "accept: */*"

## Transactions bulk addresses

### `POST /address/transactions/`

Transactions for an array of addresses. Returns the list of transactions for an array of addresses.

#### Arguments

1.  addresses `Array` required

#### Result

array `Array` of JSON Objects

#### Examples

    curl -X POST "https://rest.bitcoin.com/v2/address/transactions" -H "accept: */*" -H "Content-Type: application/json" -d "{\"addresses\":[\"bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c\",\"bitcoincash:qrehqueqhw629p6e57994436w730t4rzasnly00ht0\"]}"
