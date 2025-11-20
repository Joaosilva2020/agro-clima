import { useState } from 'react'

export function SearchBox({ onSearch, loading }) {
    const [city, setCity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city.trim()) {
            onSearch(city)
            setCity('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Digite o nome da cidade..."
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-agro-yellow focus:outline-none focus:border-agro-yellow bg-agro-light text-agro-dark placeholder-gray-500"
                    disabled={loading}
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 bg-agro-yellow text-agro-dark font-bold rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                    {loading ? 'Buscando...' : 'Buscar Clima'}
                </button>
            </div>
        </form>
    )
}
