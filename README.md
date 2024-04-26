🚀 Getting Started With This Project

To run this project locally, follow these steps:

Clone the Repository:

👉🏻 git clone <https://github.com/sammyniyo/my-trip.git>
Navigate to the Project Directory:

cd to <project-directory>
Install Dependencies:

"dependencies": {
"@chakra-ui/react": "^2.8.2",
"@emotion/react": "^11.11.4",
"@emotion/styled": "^11.11.5",
"@fortawesome/fontawesome-free": "^6.5.2",
"@google/maps": "^1.1.3",
"@react-google-maps/api": "^2.19.3",
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"axios": "^1.6.8",
"framer-motion": "^11.1.7",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-icons": "^5.1.0",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"
},

👉🏻 npm install
Set Up Environment Variables:
👉🏻 Make .env File
Add your Google Maps API key to the .env file:

👉🏻 REACT_APP_GOOGLE_MAPS_API_KEY=your-api-key-here
Run the Project:

npm start
View the Application:
In your browser the project will run on http://localhost:3000 or other port if 3000 is busy.

👉🏻 Usage:
Enter the origin and destination addresses.
Click on "Calculate" to calculate the route.
Click on "Print Route" to print the route details.

🛠️ Built With

React.js - Frontend library for building user interfaces.
Chakra UI - Component library for React applications.
React Google Maps API - Library for integrating Google Maps into React applications.

📝 Notes

Make sure you have Node.js installed on your machine.
You need to obtain a Google Maps API key to use the Google Maps features. Follow the instructions provided by Google to obtain your API key.

📧 Contact Me

Feel free to reach out to me if you have any questions or suggestions! You can contact me via email or connect with me on social media.

📩 Email: samshakul@gmail.com / info@sammuhoza.pro

🌐 Website: [sammuhoza.pro](http://sammuhoza.pro/)

🐦 Twitter: @Basamulee

👔 LinkedIn: Samuel Niyomuhoza

📷 Instagram: @samuel.14.07

Happy Hacking ⚙️

👉🏻 Here's a breakdown of how the route calculation likely happens:

## Google Maps Routing Algorithms:

Google Maps utilizes sophisticated routing algorithms that consider various factors like road network data, traffic patterns, and restrictions. These algorithms are constantly updated and improved by Google.

API Call and Response:
The directionsService.route() function makes an API call to Google Maps servers with the provided origin and destination information.

Google's internal routing engines calculate the optimal route based on their algorithms and return the results within the results object.

🫡 Distance and Duration Extraction:

The code snippet extracts the distance and duration information from the results object. These values are likely pre-calculated by Google's routing algorithms and included in the response.
