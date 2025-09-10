# 🌤️ WeatherApp Frontend

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, responsive, and interactive weather application frontend built with React and TypeScript. Get real-time weather information for cities around the world with a beautiful, user-friendly interface.

## 🌟 Features

- 🔍 **Smart City Search** - Search for weather by city name with instant results
- 🌡️ **Comprehensive Weather Data** - Current temperature, conditions, humidity, and more
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Card-based layout with smooth animations and hover effects
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🔒 **Type Safety** - Full TypeScript integration for better developer experience
- 🎯 **Interactive Components** - Dynamic weather cards with engaging user interactions

## 🚀 Demo

*Live Demo: [weatherapp-demo.netlify.app](https://your-demo-link.com)*

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.x | Frontend framework |
| **TypeScript** | 5.x | Type safety & developer experience |
| **Tailwind CSS** | 3.x | Utility-first CSS framework |
| **Axios** | Latest | HTTP client for API calls |
| **React Router DOM** | 6.x | Client-side routing |
| **Vite** | 5.x | Build tool & dev server |

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SupunLiyanage88/weatherapp-client.git
   cd weatherapp-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your configuration:
   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   VITE_WEATHER_API_KEY=your_weather_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the URL provided by Vite)

## 📁 Project Structure

```
weatherapp-frontend/
│
├── 📁 public/                 # Static assets
├── 📁 src/
│   ├── 📁 assets/            # Images, icons, static files
│   ├── 📁 components/        # Reusable UI components
│   │   ├── WeatherCard.tsx
│   │   ├── SearchBar.tsx
│   │   └── LoadingSpinner.tsx
│   ├── 📁 views/             # Page-level components
│   │   ├── HomePage.tsx
│   │   └── WeatherDetail.tsx
│   ├── 📁 api/               # API calls and utilities
│   │   ├── weatherApi.ts
│   │   └── types.ts
│   ├── 📁 hooks/             # Custom React hooks
│   │   └── useWeather.ts
│   ├── 📁 utils/             # Helper functions
│   │   └── formatters.ts
│   ├── 📄 App.tsx            # Main App component
│   ├── 📄 main.tsx           # App entry point
│   └── 📄 app.css            # Global styles
│
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 tailwind.config.js
├── 📄 vite.config.ts
└── 📄 README.md
```

## 🎯 Usage

### Basic Usage

1. **Search for a City**
   - Enter a city name in the search bar
   - Click search or press Enter
   - View real-time weather data

2. **Explore Weather Cards**
   - Hover over cards for interactive effects
   - Click cards for detailed weather information
   - Navigate between different cities

3. **Responsive Experience**
   - Enjoy seamless experience across all devices
   - Touch-friendly mobile interface
   - Optimized tablet layouts

### API Integration

The app integrates with a backend API to fetch weather data:

```typescript
// Example API call
const fetchWeatherData = async (city: string) => {
  const response = await axios.get(`${API_BASE_URL}/weather/${city}`);
  return response.data;
};
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |

## 🎨 Customization

### Styling

The app uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      },
    },
  },
}
```

### Components

All components are modular and can be easily customized. Example:

```tsx
// WeatherCard.tsx
interface WeatherCardProps {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Build the project
2. Upload `dist` folder to Netlify
3. Set environment variables in Netlify dashboard

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 🐛 Issues & Support

Found a bug or have a feature request? 

- 🐛 [Report Bug](https://github.com/SupunLiyanage88/weatherapp-client/issues)
- 💡 [Request Feature](https://github.com/SupunLiyanage88/weatherapp-client/issues)
- 💬 [Discussions](https://github.com/SupunLiyanage88/weatherapp-client/discussions)

## 📝 Changelog

### v1.2.0 (Latest)
- ✨ Added city search autocomplete
- 🐛 Fixed responsive layout issues
- ⚡ Improved loading performance

### v1.1.0
- 🎨 Enhanced UI with new animations
- 📱 Better mobile experience
- 🔧 Added TypeScript strict mode

### v1.0.0
- 🎉 Initial release
- ⭐ Core weather functionality
- 📱 Responsive design

## 🏗️ Roadmap

- [ ] 🌍 Multi-language support
- [ ] 🌙 Dark/Light theme toggle
- [ ] 📊 Weather charts and graphs
- [ ] 🔔 Weather alerts and notifications
- [ ] 📍 Geolocation support
- [ ] 💾 Offline functionality with PWA

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Supun Liyanage**
- GitHub: [@SupunLiyanage88](https://github.com/SupunLiyanage88)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap API](https://openweathermap.org/api)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- UI inspiration from [Dribbble](https://dribbble.com/)

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=SupunLiyanage88/weatherapp-client&type=Date)](https://star-history.com/#SupunLiyanage88/weatherapp-client&Date)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/SupunLiyanage88">Supun Liyanage</a></p>
  <p>If you found this project helpful, please give it a ⭐!</p>
</div>
