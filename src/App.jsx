import { useState } from 'react'
import { Header } from './components/Header'
import { SearchBox } from './components/SearchBox'
import { WeatherCard } from './components/WeatherCard'
import { ErrorMessage } from './components/ErrorMessage'
import { getWeatherByCity } from './services/weatherService'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchedCity, setSearchedCity] = useState('')

  const handleSearch = async (city) => {
    setLoading(true)
    setError(null)
    setWeatherData(null)

    try {
      const data = await getWeatherByCity(city)
      setWeatherData(data)
      setSearchedCity(city)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-agro-dark via-agro-dark/90 to-agro-dark/80">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SearchBox onSearch={handleSearch} loading={loading} />
        
        <ErrorMessage message={error} />
        
        <WeatherCard data={weatherData} city={searchedCity} />
      </main>

      <footer className="bg-agro-dark/50 text-center py-6 mt-12 text-agro-light">
        <p className="text-sm">© 2025 Agro M2 - Clima para o Agro. Desenvolvido com React + Tailwind</p>
      </footer>
    </div>
  )
}

export default App
