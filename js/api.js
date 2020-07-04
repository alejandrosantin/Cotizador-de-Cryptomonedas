class API {
    constructor(apikey) {
            this.apikey = apikey
        }
        // Obtener todas las monedas
    async obtenerMonedasAPI() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`

        //fetch a la api
        const urlObtenerMonedas = await fetch(url)
            // Respuesta en json
        const monedas = await urlObtenerMonedas.json()

        return {
            monedas
        }
    }

    async obtenerValores(moneda, cryptomoneda) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`
            // Consultar en rest api
        const urlConvertir = await fetch(url)
        const resultado = await urlConvertir.json()
        return {
            resultado
        }
    }
}