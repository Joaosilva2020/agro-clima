const { useState } = React;

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // chave api
    const API_KEY = '07368b14adf09cb8f2f452999e2d0cc4';

    const handleSearch = async (e) => {
        e.preventDefault();
        
        if (!city.trim()) return;

        setLoading(true);
        setError('');
        setWeather(null);

        try {
            
            const geoResponse = await fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
            );

            if (!geoResponse.ok) {
                throw new Error('Cidade não encontrada');
            }

            const geoData = await geoResponse.json();
            
            if (geoData.length === 0) {
                throw new Error('Cidade não encontrada');
            }

            const { lat, lon } = geoData[0];

            
            const weatherResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${API_KEY}`
            );

            if (!weatherResponse.ok) {
                throw new Error('Erro ao buscar dados do clima');
            }

            const weatherData = await weatherResponse.json();
            setWeather(weatherData);
        } catch (err) {
            setError(err.message || 'Erro ao buscar dados');
        } finally {
            setLoading(false);
        }
    };

    const getWeatherIcon = (weatherMain) => {
        switch (weatherMain.toLowerCase()) {
            case 'clear':
                return '☀️';
            case 'clouds':
                return '☁️';
            case 'rain':
            case 'drizzle':
                return '🌧️';
            case 'snow':
                return '❄️';
            case 'thunderstorm':
                return '⛈️';
            default:
                return '🌤️';
        }
    };

    return (
        <>
            {/* Header */}
            <header>
                {/* *** LOGO ADICIONADA AQUI ***
                Certifique-se de que o caminho da imagem esteja correto (ex: ./assets/image_bd4721.png)
                */}
                <img 
                    src="logo.svg" 
                    alt="Agro M2 Logo" 
                    className="main-logo"
                />

                <h1>Agro + clima</h1>
                <p>Informações climáticas para sua agricultura</p>
            </header>

            {/* Container Principal */}
            <div className="container">
                {/* Search Form */}
                <div className="card">
                    <form className="search-form" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Digite o nome da cidade..."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button type="submit" disabled={loading}>
                            {loading ? 'Buscando...' : 'Buscar'}
                        </button>
                    </form>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="error">
                        ❌ {error}
                    </div>
                )}

                {/* Weather Display */}
                {weather && (
                    <div className="card">
                        <div className="weather-container">
                            {/* Clima Principal */}
                            <div className="weather-main">
                                <h2>{weather.name}</h2>
                                <p className="description">{weather.weather[0].description}</p>
                                <div className="weather-icon">
                                    {getWeatherIcon(weather.weather[0].main)}
                                </div>
                                <div className="temperature">
                                    {Math.round(weather.main.temp)}°C
                                </div>
                                <p className="feels-like">
                                    Sensação térmica: <strong>{Math.round(weather.main.feels_like)}°C</strong>
                                </p>
                            </div>

                            {/* Detalhes do Clima */}
                            <div className="weather-details">
                                <div className="detail-box yellow">
                                    <div className="detail-label">💧 Umidade</div>
                                    <div className="detail-value">{weather.main.humidity}%</div>
                                </div>

                                <div className="detail-box green">
                                    <div className="detail-label">💨 Vento</div>
                                    <div className="detail-value">{weather.wind.speed.toFixed(1)} m/s</div>
                                </div>

                                <div className="detail-box yellow">
                                    <div className="detail-label">👁️ Visibilidade</div>
                                    <div className="detail-value">{(weather.visibility / 1000).toFixed(1)} km</div>
                                </div>

                                <div className="detail-box green">
                                    <div className="detail-label">☁️ Condição</div>
                                    <div className="detail-value">{weather.weather[0].main}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Loading */}
                {loading && (
                    <div className="card loading">
                        <div className="spinner"></div>
                        <p className="loading-text">Buscando dados do clima...</p>
                    </div>
                )}

                {/* Empty State */}
                {!weather && !loading && !error && (
                    <div className="card empty-state">
                        <p>Digite o nome de uma cidade para ver as informações climáticas</p>
                    </div>
                )}
            </div>
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);