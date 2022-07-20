var apiKey = "b800334a089083945a5728b7543ae88a"
var srcBtn = $('.searchButton')

function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
        fetch(requestUrl)
            .then(function (response){
                return response.json
            })
}