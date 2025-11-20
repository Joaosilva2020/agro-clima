function getWeatherIcon(description) {
    const desc = description.toLowerCase()
    if (desc.includes('nublado')) return '☁️'
    if (desc.includes('chuva') || desc.includes('rain')) return '🌧️'
    if (desc.includes('nevoeiro')) return '🌫️'
    if (desc.includes('neve')) return '❄️'
    if (desc.includes('tempestade')) return '⛈️'
    if (desc.includes('sol') || desc.includes('clear')) return '☀️'
    return '🌤️'
}

export function WeatherCard({ data, city }) {
    if (!data) {
        return (
            <div className="text-center py-12">
                <p className="text-agro-light text-lg">Busque uma cidade para ver o clima</p>
            </div>
        )
    }

    const weather = data.list?.[0] || data

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header da card */}
                <div className="bg-gradient-to-r from-agro-dark to-agro-dark/80 text-white p-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-4xl font-bold">{city || data.name}</h2>
                            <p className="text-agro-light text-sm mt-1">{data.sys?.country}</p>
                        </div>
                        <div className="text-6xl">{getWeatherIcon(data.weather?.[0]?.main)}</div>
                    </div>
                    <p className="text-agro-light capitalize">{data.weather?.[0]?.description}</p>
                </div>

                {/* Temperatura principal */}
                <div className="px-8 py-8 border-b-4 border-agro-yellow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-agro-light text-sm mb-1">Temperatura</p>
                            <p className="text-6xl font-bold text-agro-dark">
                                {Math.round(data.main?.temp)}°C
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-agro-light text-sm mb-1">Sensação Térmica</p>
                            <p className="text-4xl font-bold text-agro-yellow">
                                {Math.round(data.main?.feels_like)}°C
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid de informações */}
                <div className="grid grid-cols-2 gap-4 p-8">
                    <div className="bg-agro-light rounded-lg p-4 text-center">
                        <p className="text-agro-dark text-sm font-semibold mb-2">Umidade</p>
                        <p className="text-3xl font-bold text-agro-yellow">{data.main?.humidity}%</p>
                    </div>

                    <div className="bg-agro-light rounded-lg p-4 text-center">
                        <p className="text-agro-dark text-sm font-semibold mb-2">Pressão</p>
                        <p className="text-3xl font-bold text-agro-dark">{data.main?.pressure} hPa</p>
                    </div>

                    <div className="bg-agro-light rounded-lg p-4 text-center">
                        <p className="text-agro-dark text-sm font-semibold mb-2">Vento</p>
                        <p className="text-3xl font-bold text-agro-dark">{Math.round(data.wind?.speed)} m/s</p>
                    </div>

                    <div className="bg-agro-light rounded-lg p-4 text-center">
                        <p className="text-agro-dark text-sm font-semibold mb-2">Nuvens</p>
                        <p className="text-3xl font-bold text-agro-yellow">{data.clouds?.all}%</p>
                    </div>
                </div>

                {/* Informações adicionais */}
                <div className="bg-agro-dark/5 px-8 py-6 grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-agro-dark font-semibold">Temperatura Máxima</p>
                        <p className="text-lg font-bold text-agro-yellow">{Math.round(data.main?.temp_max)}°C</p>
                    </div>
                    <div>
                        <p className="text-agro-dark font-semibold">Temperatura Mínima</p>
                        <p className="text-lg font-bold text-agro-dark">{Math.round(data.main?.temp_min)}°C</p>
                    </div>
                    <div>
                        <p className="text-agro-dark font-semibold">Nascer do Sol</p>
                        <p className="text-lg font-bold text-agro-yellow">
                            {new Date(data.sys?.sunrise * 1000).toLocaleTimeString('pt-BR', {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </p>
                    </div>
                    <div>
                        <p className="text-agro-dark font-semibold">Pôr do Sol</p>
                        <p className="text-lg font-bold text-agro-dark">
                            {new Date(data.sys?.sunset * 1000).toLocaleTimeString('pt-BR', {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
