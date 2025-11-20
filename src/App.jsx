import { useState } from 'react'
import { getWeatherByCity } from './services/weatherService'
import './index.css'



function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!city.trim()) return

    setLoading(true)
    setError(null)
    setWeather(null)

    try {
      const data = await getWeatherByCity(city)
      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
    
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-agro-yellow mb-2"> Agro M²</h1>
          <p className="text-agro-light">Clima+Agro</p>
        </div>

 
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Digite a cidade..."
              className="flex-1 px-4 py-2 rounded text-agro-dark focus:outline-none"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-agro-yellow text-agro-dark font-bold rounded hover:bg-yellow-500 disabled:opacity-50"
            >
              {loading ? '...' : 'Buscar'}
            </button>
          </div>
        </form>

    
        {error && (
          <div className="mb-4 p-3 bg-red-500 text-white rounded text-center">
            {error}
          </div>
        )}

   
        {weather && (
          <div className="bg-agro-light rounded-lg p-6 text-agro-dark">
            <h2 className="text-2xl font-bold mb-4">{weather.name}</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Temperatura</p>
                <p className="text-3xl font-bold text-agro-yellow">{Math.round(weather.main.temp)}°C</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Sensação</p>
                <p className="text-3xl font-bold">{Math.round(weather.main.feels_like)}°C</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Umidade</p>
                <p className="text-2xl font-bold">{weather.main.humidity}%</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Vento</p>
                <p className="text-2xl font-bold">{Math.round(weather.wind.speed)} m/s</p>
              </div>
            </div>

            <p className="text-center mt-4 text-gray-700 capitalize">{weather.weather[0].description}</p>
          </div>

          
        )}

    
        {!weather && !error && (
          <p className="text-center text-agro-light text-sm mt-8">
            Digite uma cidade para começar
          </p>
        )}
      </div>
    </div>
  )
}

export default App
