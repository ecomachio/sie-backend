# Project Name

Sierra screening project

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

Instructions on how to install and set up your project.

This repository has two folders, one for a template of a complex backend with DI and another for a simple backend with a bare bones express app.

```bash
git clone
cd <project-name>
npm install
npm start
```

## Usage

This project provides a simple API for managing listings. Here's how you can use it:

Replace `<API-URL>` with the actual URL of your API.

### Get all listings

To get all listings, send a GET request to `/listings`.

#### Request Example

```http
GET /listings HTTP/1.1
```

#### Response Example

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 91

[
    {
        "id": 1,
        "title": "Listing one",
        "price": "3000",
        "description": "This is a Listing"
    }
]
```

### Get a specific listing

To get a specific listing, send a GET request to /listings/:id, replacing :id with the ID of the listing.

#### Parameters

- `id` (required): The ID of the listing to retrieve.

#### Request Example

```http
GET /listings/1 HTTP/1.1
```

#### Response Example

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 1,
    "title": "Listing one",
    "price": "3000",
    "description": "This is a Listing"
}
```

### Create a new listing

To create a new listing, send a POST request to `/listings` with a JSON body containing the listing data.

#### Parameters

- `title` (required): The title of the listing.
- `price` (required): The price of the listing.
- `description` (optional): A description of the listing.

#### Request Example

```http
POST /listings HTTP/1.1
Content-Type: application/json

{
    "title": "Listing one",
    "price": "3000",
    "description": "This is a Listing"
}
```

#### Response Example

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
    "id": 1,
    "title": "Listing one",
    "price": "3000",
    "description": "This is a Listing"
}
```

### Delete a listing

To delete a listing, send a DELETE request to /listings/:id, replacing :id with the ID of the listing.

#### Parameters

- `id` (required): The ID of the listing to delete.

#### Request Example

```http
DELETE /listings/1 HTTP/1.1
```

#### Response Example

```http
HTTP/1.1 204 No Content
```

## License

This project is licensed under the terms of the MIT license.

The MIT License is a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

For more information, please see the [MIT License](https://opensource.org/licenses/MIT).
