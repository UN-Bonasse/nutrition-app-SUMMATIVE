Nutrition App

Nutrition App is a web application that provides real-time nutritional information for any food item using the API Ninjas Nutrition API. Users can search for foods and instantly view calories, protein, fat, carbohydrates, and serving size through a clean and responsive interface built with HTML, CSS, and JavaScript, while the backend uses Node.js and Express to handle API requests securely with environment variables. The app includes error handling for invalid inputs and network issues to ensure a smooth user experience.

Features:

- Real-time food search  
- Displays calories, protein, fat, carbohydrates, and serving size  
- Responsive design for desktop and mobile  
- Error handling for invalid input and API failures  

Setup & Installation
Install dependencies:
npm install

Create a .env file:
API_KEY=your_api_key_here

Run the server:
node server.js

Open in browser:
http://localhost:3000
or use the forwarded port 3000 link in GitHub Codespaces.

Technologies Used
- HTML, CSS, JavaScript  
- Node.js, Express  
- API Ninjas Nutrition API  

Testing
Tested with inputs like "apple" and "rice", including empty inputs and API error handling to ensure correct responses.

Challenges
Faced issues with API errors and environment variable setup; resolved by correcting request format and properly configuring .env.

Credits
- API Ninjas for the Nutrition API  
- Node.js and Express for backend development  
- GitHub Codespaces for development environment  

Author
Bonasse NDEKEZI