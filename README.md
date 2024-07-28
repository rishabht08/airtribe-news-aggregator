Sure! Here’s the complete `README.md` file:

```markdown
# Node.js Express API

This is a Node.js Express API for user registration, login, and news preference management.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/your-repo.git](https://github.com/rishabht08/airtribe-news-aggregator.git)
   cd your-repo
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server

To start the server, run:
```bash
npm run start
```
The server will start on port 3000.

## API Endpoints

### POST /register

Register a new user.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "message": "User registered successfully"
}
```

### POST /login

Log in a user.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "token": "jwt-token"
}
```

### GET /preferences

Retrieve the news preferences for the logged-in user.

**Headers:**
```http
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "preferences": {
    "categories": ["string"],
    "sources": ["string"]
  }
}
```

### PUT /preferences

Update the news preferences for the logged-in user.

**Headers:**
```http
Authorization: Bearer <jwt-token>
```

**Request Body:**
```json
{
  "categories": ["string"],
  "sources": ["string"]
}
```

**Response:**
```json
{
  "message": "Preferences updated successfully"
}
```

### GET /news

Fetch news articles based on the logged-in user's preferences.

**Headers:**
```http
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "articles": [
    {
      "title": "string",
      "description": "string",
      "url": "string"
    }
  ]
}
```

3. Run Test:
   ```bash
   npm run test

## License


