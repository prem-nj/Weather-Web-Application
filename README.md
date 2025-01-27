
# Weather Web Application 🌦️

A user-friendly web application that provides real-time weather information for any city around the globe. This project uses the OpenWeatherMap API to fetch weather data, such as temperature, humidity, wind speed, and weather conditions.

---

## Features 🚀
- **Search for City**: Enter any city's name to fetch its weather data.
- **Dynamic Weather Updates**: Displays current weather conditions like temperature, humidity, and wind speed.
- **Responsive Design**: Works seamlessly across devices.
- **Custom Weather Icons**: Icons dynamically change based on the weather condition (e.g., Clear, Clouds, Rain).
- **Error Handling**: Displays an error message if the city is not found.
- **Loading Animation**: A loading spinner is displayed while fetching data from the API.

---

## Tech Stack 🛠️
- **HTML5**: For structuring the content.
- **CSS3**: For styling the user interface with gradients, shadows, and a clean layout.
- **JavaScript (ES6)**: For implementing functionality like API calls and dynamic content rendering.
- **OpenWeatherMap API**: To fetch weather data.

---

## Folder Structure 📂
Weather-Web/ │ ├── index.html # Main HTML file ├── wthr.js # JavaScript functionality ├── wthr.css # Stylesheet for the project ├── images/ # Contains weather icons and other assets │ ├── clear.png # Icon for clear weather │ ├── cloudy.png # Icon for cloudy weather │ ├── drizzle.png # Icon for drizzle │ ├── mist.png # Icon for mist │ ├── rainy.png # Icon for rain │ └── wind.png # Icon for wind speed ├── loading.gif # Loading animation └── close.png # Icon for error message

---

## Setup Instructions 🛠️
Follow these steps to set up and run the project:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/weather-web.git
   cd weather-web

Here's a README.md file tailored for your project:

markdown
Copy
Edit
# Weather Web Application 🌦️

A user-friendly web application that provides real-time weather information for any city around the globe. This project uses the OpenWeatherMap API to fetch weather data, such as temperature, humidity, wind speed, and weather conditions.

---

## Features 🚀
- **Search for City**: Enter any city's name to fetch its weather data.
- **Dynamic Weather Updates**: Displays current weather conditions like temperature, humidity, and wind speed.
- **Responsive Design**: Works seamlessly across devices.
- **Custom Weather Icons**: Icons dynamically change based on the weather condition (e.g., Clear, Clouds, Rain).
- **Error Handling**: Displays an error message if the city is not found.
- **Loading Animation**: A loading spinner is displayed while fetching data from the API.

---

## Tech Stack 🛠️
- **HTML5**: For structuring the content.
- **CSS3**: For styling the user interface with gradients, shadows, and a clean layout.
- **JavaScript (ES6)**: For implementing functionality like API calls and dynamic content rendering.
- **OpenWeatherMap API**: To fetch weather data.

---

## Folder Structure 📂
Weather-Web/ │ ├── index.html # Main HTML file ├── wthr.js # JavaScript functionality ├── wthr.css # Stylesheet for the project ├── images/ # Contains weather icons and other assets │ ├── clear.png # Icon for clear weather │ ├── cloudy.png # Icon for cloudy weather │ ├── drizzle.png # Icon for drizzle │ ├── mist.png # Icon for mist │ ├── rainy.png # Icon for rain │ └── wind.png # Icon for wind speed ├── loading.gif # Loading animation └── close.png # Icon for error message

yaml
Copy
Edit

---

## Setup Instructions 🛠️
Follow these steps to set up and run the project:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/weather-web.git
   cd weather-web
Open in Browser: Open the index.html file in any web browser.

Add Your API Key: Replace the apikey variable in wthr.js with your OpenWeatherMap API key:

javascript
Copy
Edit
const apikey = "YOUR_API_KEY";
Run: Enter a city name in the search bar and click the search button to view the weather details.

##How It Works ⚙️
Search Input: Users enter the name of a city in the input box.
API Call: The app sends a request to the OpenWeatherMap API using the city name.
Loading State: While fetching data, a loading animation is displayed.
Display Data:
If the city is found, weather details are displayed dynamically.
If the city is not found, an error message appears.
---------------------------------------------------
##Demo 🌐
Here's a preview of the app:


##Customization 🎨
Weather Icons: Replace the images in the images folder with your custom icons.
Styling: Modify wthr.css to change the design.
Known Issues & Limitations 🐞
The API key is hardcoded in the script. Consider using environment variables for better security.
Weather data accuracy depends on the OpenWeatherMap API.
Future Enhancements 🔮
Add a 5-day weather forecast feature.
Use local storage to save the last searched city.
Implement geolocation to fetch weather based on the user's current location.
License 📜
This project is licensed under the MIT License. Feel free to modify and distribute the code.

##Contributions 🤝
Contributions are welcome! Create an issue or submit a pull request with your changes.

##Acknowledgements 💡
OpenWeatherMap API
Icons and loading gif from public resources.

Feel free to replace placeholders like prem-nj and the API key note with your specific details!
