import axios from 'axios'

const API_KEY = '07368b14adf09cb8f2f452999e2d0cc4' // API key - considere usar variáveis de ambiente
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export async function getWeatherByCity(city) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'pt_br'
      }
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error(`Cidade "${city}" não encontrada`)
    }
    if (error.response?.status === 401) {
      throw new Error('Erro de autenticação com a API de clima')
    }
    throw new Error('Erro ao buscar dados de clima. Tente novamente mais tarde.')
  }
}
