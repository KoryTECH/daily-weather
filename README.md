# 🌤️ Daily Weather App

A beautiful and responsive weather forecast application that provides real-time weather information based on your location or any city worldwide.

![Weather App Preview]
<!-- Add a screenshot of your app -->

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions for any location
- **Geolocation Support**: Automatically detects and displays weather for your current location
- **5-Hour Forecast**: View hourly weather predictions for the next 5 hours
- **5-Day Forecast**: Plan ahead with a 5-day weather outlook
- **Daily Details**: Access additional weather metrics including:
  - Feels Like temperature
  - Wind Speed
  - Humidity levels
  - Atmospheric Pressure
- **Location Search**: Search for weather information in any city worldwide
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Beautiful UI**: Clean, modern interface with smooth animations and hover effects

## 🚀 Live Demo

Check out the live application: [Daily Weather App](https://korytech.github.io/daily-weather/)

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Core functionality and API integration
- **OpenWeather API**: Weather data and geocoding services
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts (Space Grotesk)**: Modern typography

## 📋 Prerequisites

To run this project locally, you'll need:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- An API key from [OpenWeather](https://openweathermap.org/api)
- A local development server (optional, but recommended)

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
   git clone https://github.com/KoryTECH/daily-weather.git
   cd daily-weather
```

2. **Get your API Key**
   - Sign up at [OpenWeather](https://openweathermap.org/api)
   - Generate a free API key

3. **Configure the API Key**
   - Open `script.js`
   - Replace the existing API key with your own:
```javascript
   const OPENWEATHER_KEY = `YOUR_API_KEY_HERE`;
```

4. **Run the application**
   - Open `index.html` in your browser, or
   - Use a local development server:
```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
```

5. **Access the app**
   - Navigate to `http://localhost:8000` (or the port your server uses)

## 🎯 Usage

1. **On First Load**: The app will request your location permission to show weather for your current location
2. **Search for a City**: 
   - Click the search button (⚙️)
   - Enter any city name
   - Click search again to fetch weather data
3. **View Forecasts**: Scroll through hourly and daily forecasts
4. **Check Details**: View additional weather metrics in the Daily Details section

## 📱 Responsive Breakpoints

- **Desktop**: 769px and above
- **Tablet**: 481px - 768px
- **Mobile**: 480px and below

## 🔑 API Endpoints Used

- **Weather Forecast**: `https://api.openweathermap.org/data/2.5/forecast`
- **Geocoding**: `https://api.openweathermap.org/geo/1.0/direct`

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 Future Enhancements

- [ ] Add weather alerts and warnings
- [ ] Implement favorite locations
- [ ] Add weather maps integration
- [ ] Support for multiple languages
- [ ] Dark/Light theme toggle
- [ ] Historical weather data
- [ ] Weather comparison between cities

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**KoryTECH**
- GitHub: [@KoryTECH](https://github.com/KoryTECH)
- Project Link: [https://github.com/KoryTECH/daily-weather](https://github.com/KoryTECH/daily-weather)

## 🙏 Acknowledgments

- Weather data provided by [OpenWeather API](https://openweathermap.org/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Font from [Google Fonts](https://fonts.google.com/)
- Background image from [Unsplash](https://unsplash.com/) (if applicable)

## 📧 Support

If you have any questions or run into issues, please [open an issue](https://github.com/KoryTECH/daily-weather/issues) on GitHub.

---

⭐ If you found this project helpful, please consider giving it a star!
