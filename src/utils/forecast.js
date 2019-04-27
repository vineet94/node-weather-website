const request = require('request');

const forecast = (lat,long,callback) =>{
    const url = `https://api.darksky.net/forecast/1180a8d697deab9d4baeebba3ddabeb1/${lat},${long}?units=si`;
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback(`can't connect with the weather service.`)
        } else if (body.error) {
            callback(`unable to find location.`)
        }
        else {
            const currently = body.currently;
            const msg = `${body.daily.data[0].summary} It is currently ${currently.temperature} degree out. There is ${currently.precipProbability} % chance of rain`;
            callback(undefined,msg)
        }
    })
}

module.exports = forecast

