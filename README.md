Key Components
1. State Management:
 - city: Stores the input city name.
 - weather: Stores the weather data fetched from the API.
 - error: Stores any error messages.
 - loading: Indicates if the application is in a loading state.
   
2. Functions:
 - fetchWeather: Fetches weather data from the OpenWeatherMap API.
 - handleInputChange: Updates the city state with user input.
 - handleSearch: Triggers the fetchWeather function.
   
3. Styling:
 - CSS classes are used to style the application, making it visually appealing and user-friendly.

**Assumptions**
-  API Key: The code assumes that the user has a valid OpenWeatherMap API key.
 - Internet Connection: The application requires an active internet connection to fetch weather data from the API.
 - Valid City Names: Users will enter valid city names recognized by the OpenWeatherMap API.
 - Browser Compatibility: The application assumes it will be run in a modern web browser that supports ES6 and fetch API.
   
**Limitations**
 - Error Handling: The error handling in the fetchWeather function is basic and only accounts for a "City not found" scenario. Other 
      potential errors (e.g., network issues, API limits) are not specifically handled.
 - Loading State: While a loading state is implemented, the user experience could be improved with a more visually appealing loader.
 - CSS Styling: The current styling is minimal. More advanced styling and responsiveness could be added for better user experience.
 - API Rate Limits: The OpenWeatherMap API has rate limits that might restrict the number of requests, especially with a free-tier API 
     key.
 - City Names: The application does not handle cases where multiple cities have the same name (e.g., Paris, France vs. Paris, Texas).
 - Units of Measurement: The temperature is hardcoded to be displayed in Celsius. Adding a feature to switch between Celsius and 
     Fahrenheit could make the app more versatile.
