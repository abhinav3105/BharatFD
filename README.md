# Express FAQ System

## Overview
This project is a multilingual FAQ management system built using **Express.js, MongoDB, and Redis**. It provides an API to manage FAQs with language-specific translations, caching for performance, and a WYSIWYG editor for formatting answers.

## Features
- **Multilingual Support**: Automatically translates FAQs into different languages.
- **Caching with Redis**: Speeds up API responses by caching translated FAQs.
- **WYSIWYG Editor**: Allows rich text formatting for FAQ answers.
- **RESTful API**: Provides endpoints to manage FAQs efficiently.
- **Docker Support**: Easy deployment using Docker and Docker Compose.
- **Unit Testing**: Ensures code reliability using Jest and Supertest.

## Installation

### Prerequisites
- Node.js (v14 or later)
- MongoDB
- Redis
- Docker (optional)

### Setup Instructions
```sh
git clone https://github.com/yourusername/express-faq-system.git
cd express-faq-system
npm install
```
Start MongoDB and Redis:
```sh
mongod &
redis-server &
```
Run the application:
```sh
npm start
```
Run tests:
```sh
npm test
```

## API Usage

### Fetch FAQs
```http
GET /api/faqs
```
#### Response:
```json
[
  {
    "_id": "123",
    "question": "What is this app?",
    "answer": "This is a FAQ system.",
    "translations": {
      "hi": "यह एक एफएक्यू प्रणाली है।",
      "bn": "এটি একটি প্রশ্নোত্তর ব্যবস্থা।"
    }
  }
]
```

### Fetch FAQs in Hindi
```http
GET /api/faqs?lang=hi
```

### Add a New FAQ
```http
POST /api/faqs
Content-Type: application/json

{
  "question": "How to use this system?",
  "answer": "Follow the documentation."
}
```

### Error Handling
```json
{
  "message": "Error message here."
}
```

## Contribution Guidelines
1. Fork the repository.
2. Create a new feature branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Make your changes and commit using [conventional commits](https://www.conventionalcommits.org/):
   ```sh
   git commit -m "feat: add new API endpoint"
   ```
4. Push to your fork:
   ```sh
   git push origin feature-branch
   ```
5. Open a Pull Request.

## Deployment with Docker
Build and run the container:
```sh
docker-compose up --build
```
Access the API at `http://localhost:5000/api/faqs`.

## License
This project is licensed under the MIT License.
