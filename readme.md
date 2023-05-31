# Endpoints

### `POST /category`

Creates a new category.

### Request Body

| Parameter | Type   | Required | Description                            |
| --------- | ------ | -------- | -------------------------------------- |
| tags      | Array  | No       | An array of strings representing tags. |
| category  | String | Yes      | The name of the category.              |
| img       | String | No       | The URL of the category image.         |

### Response

Returns the created category.

### Errors

| Status Code | Description                                                |
| ----------- | ---------------------------------------------------------- |
| 400         | Bad Request.                                               |
| 400         | Item already exists, please try again with something else. |

### `GET /category`

Gets all categories or a specific category.

### Request Parameters

| Parameter   | Type   | Required | Description               |
| ----------- | ------ | -------- | ------------------------- |
| category_id | String | No       | The ID of the category.   |
| category    | String | No       | The name of the category. |

### Response

Returns an array of categories or a single category.

### Errors

| Status Code | Description         |
| ----------- | ------------------- |
| 400         | Bad Request.        |
| 404         | Category not found. |

### `PATCH /category`

Updates a specific category.

### Request Body

| Parameter   | Type   | Required | Description                            |
| ----------- | ------ | -------- | -------------------------------------- |
| category_id | String | Yes      | The ID of the category.                |
| category    | String | No       | The new name of the category.          |
| tags        | Array  | No       | An array of strings representing tags. |
| img         | String | No       | The URL of the category image.         |

### Response

Returns the updated category.

### Errors

| Status Code | Description         |
| ----------- | ------------------- |
| 400         | Bad Request.        |
| 404         | Category not found. |

### `DELETE /category`

Deletes a specific category.

### Request Body

| Parameter   | Type   | Required | Description             |
| ----------- | ------ | -------- | ----------------------- |
| category_id | String | Yes      | The ID of the category. |

### Response

Returns the deleted category.

### Errors

| Status Code | Description         |
| ----------- | ------------------- |
| 400         | Bad Request.        |
| 404         | Category not found. |

## Error Responses

In case of an error, the API will return a JSON object with the following structure:

| Property | Type   | Description                                                       |
| -------- | ------ | ----------------------------------------------------------------- |
| name     | String | The name of the error.                                            |
| message  | String | A description of the error.                                       |
| detail   | String | Additional details about the error, may be omitted in some cases. |
| status   | Number | The HTTP status code of the error.                                |
