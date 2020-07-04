const cotizador = new API('2d2550dc3f4535ca5914fcd2e66ec1791f1cbf5c2b96a46ae9529d3d8f522b7a')
const ui = new UI()

cotizador.obtenerMonedasAPI()

//Leer el formulario
const formulario = document.querySelector('#formulario')
    // Event Listener
formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    // Leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda')
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value

    // Leer la cryptomoneda seleccionada
    const cryptoMonedaSelect = document.querySelector('#cryptomoneda')
    const cryptoMonedaSeleccionada = cryptoMonedaSelect.options[cryptoMonedaSelect.selectedIndex].value

    // Comprobar que ambos campos tengan algo seleccionado
    if (monedaSeleccionada === '' || cryptoMonedaSeleccionada === '') {
        // Alerta de error
        ui.mostrarMensaje('Ambos Campos son Requeridos', 'alert bg-danger text-center')
    } else {
        // todo bien, consultar la api
        cotizador.obtenerValores(monedaSeleccionada, cryptoMonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, cryptoMonedaSeleccionada)
            })
    }

})