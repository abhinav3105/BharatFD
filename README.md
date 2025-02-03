<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express FAQ System - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        h1, h2, h3 {
            color: #333;
        }
        pre {
            background: #ddd;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <h1>Express FAQ System</h1>
    <h2>Overview</h2>
    <p>This project is a multilingual FAQ management system built using <strong>Express.js, MongoDB, and Redis</strong>. It provides an API to manage FAQs with language-specific translations, caching for performance, and a WYSIWYG editor for formatting answers.</p>
    
    <h2>Features</h2>
    <ul>
        <li><strong>Multilingual Support</strong>: Automatically translates FAQs into different languages.</li>
        <li><strong>Caching with Redis</strong>: Speeds up API responses by caching translated FAQs.</li>
        <li><strong>WYSIWYG Editor</strong>: Allows rich text formatting for FAQ answers.</li>
        <li><strong>RESTful API</strong>: Provides endpoints to manage FAQs efficiently.</li>
        <li><strong>Docker Support</strong>: Easy deployment using Docker and Docker Compose.</li>
        <li><strong>Unit Testing</strong>: Ensures code reliability using Jest and Supertest.</li>
    </ul>

    <h2>Installation</h2>
    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js (v14 or later)</li>
        <li>MongoDB</li>
        <li>Redis</li>
        <li>Docker (optional)</li>
    </ul>
    <h3>Setup Instructions</h3>
    <pre>
        git clone https://github.com/yourusername/express-faq-system.git
        cd express-faq-system
        npm install
    </pre>
    <p>Create a <code>.env</code> file and add the following:</p>
    <pre>
        PORT=5000
        MONGO_URI=mongodb://localhost:27017/faqdb
    </pre>
    <p>Start MongoDB and Redis:</p>
    <pre>
        mongod &
        redis-server &
    </pre>
    <p>Run the application:</p>
    <pre>npm start</pre>
    <p>Run tests:</p>
    <pre>npm test</pre>
    
    <h2>API Usage</h2>
    <h3>Fetch FAQs</h3>
    <pre>GET /api/faqs</pre>
    <h3>Response:</h3>
    <pre>
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
    </pre>
    <h3>Fetch FAQs in Hindi</h3>
    <pre>GET /api/faqs?lang=hi</pre>
    <h3>Add a New FAQ</h3>
    <pre>
        POST /api/faqs
        Content-Type: application/json
        {
          "question": "How to use this system?",
          "answer": "Follow the documentation."
        }
    </pre>
    <h3>Error Handling</h3>
    <pre>
        {
          "message": "Error message here."
        }
    </pre>

    <h2>Contribution Guidelines</h2>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new feature branch:
            <pre>git checkout -b feature-branch</pre>
        </li>
        <li>Make your changes and commit using <a href="https://www.conventionalcommits.org/">conventional commits</a>:
            <pre>git commit -m "feat: add new API endpoint"</pre>
        </li>
        <li>Push to your fork:
            <pre>git push origin feature-branch</pre>
        </li>
        <li>Open a Pull Request.</li>
    </ol>

    <h2>Deployment with Docker</h2>
    <p>Build and run the container:</p>
    <pre>docker-compose up --build</pre>
    <p>Access the API at <code>http://localhost:5000/api/faqs</code>.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>
</body>
</html>
