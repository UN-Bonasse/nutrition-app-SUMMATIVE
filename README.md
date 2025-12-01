Nutrition App

A modern web application I built that allows users to get detailed nutritional information for any food item in real-time. By leveraging the API Ninjas Nutrition API, the app provides data on calories, carbohydrates, protein, fat, and serving size, all through a simple, interactive interface.

Features

Real-time nutrition search: Type any food item to see its nutritional information instantly.

Clean, responsive design: Works seamlessly on desktop, tablet, and mobile devices.

Error handling: Displays user-friendly messages for API failures or network issues.

Backend API integration: Fetches live data from the API Ninjas Nutrition API.

Caching: Reduces repeated API calls by caching recent queries for faster performance.

Live Application

The application fetches live data from the API Ninjas Nutrition API. Example searches:

Apple: 52 calories, 14g carbohydrates, 0.3g protein, 0.2g fat per 100g

Banana: 89 calories, 23g carbohydrates, 1.1g protein, 0.3g fat per 100g

Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js with Express

API: API Ninjas Nutrition API

Environment Management: dotenv for API key management

Installation

Clone the repository:

git clone https://github.com/UN-Bonasse/nutrition-app-SUMMATIVE.git


Navigate into the project directory:

cd nutrition-app-SUMMATIVE


Install dependencies:

npm install


Create a .env file in the root directory and add your API key:

API_KEY=your_api_key_here


Start the server:

node server.js


Open your browser at http://localhost:3000

Functionality Testing

Searched for Apple → returned correct nutritional values

Searched for Banana → data displayed correctly

Tested invalid food name → graceful error message displayed

Reloaded page after search → caching worked, preventing unnecessary API calls

How it Works

When a user searches for a food item:

The frontend sends a request to the backend endpoint:

/nutrition?food=<food_name>


The backend queries the API Ninjas Nutrition API using the API key

The backend returns nutritional data in JSON format

The frontend displays the data in a readable table or card format

Recent queries are cached for 5 minutes to improve performance and reduce API calls

Challenges Faced

Handling foods with similar names and ensuring accurate results

Managing API rate limits on the free tier (50 requests/day)

Displaying data clearly and responsively across devices

API Documentation

API Ninjas Nutrition API: https://api-ninjas.com/api/nutrition

Rate Limit: 50 requests/day (free tier)

Usage: Provides nutritional information for user-specified foods

Credits

API Ninjas – for providing the Nutrition API

Font Awesome – for icons

Google Fonts – Inter font family for clean typography

Author

UN-Bonasse

GitHub: UN-Bonasse

Email: b.ndekezi@alustudent.com
