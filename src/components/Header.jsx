export function Header() {
    return (
        <header className="bg-agro-dark text-white py-6 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-agro-yellow rounded-full flex items-center justify-center">
                            <span className="text-agro-dark font-bold text-xl">🌾</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Agro M2</h1>
                            <p className="text-agro-light text-sm">Clima para o Agro</p>
                        </div>
                    </div>
                    <div className="text-agro-yellow text-3xl">🌤️</div>
                </div>
            </div>
        </header>
    )
}
