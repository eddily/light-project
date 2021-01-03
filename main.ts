while (true) {
    console.log("temperature " + input.temperature(TemperatureUnit.Fahrenheit))
    console.log("light level " + input.lightLevel())
    if (input.temperature(TemperatureUnit.Fahrenheit) > 80 && input.lightLevel() > 50) {
        light.setAll(color.rgb(255, 0, 0))
        console.log("hot and sunny")
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 45 && input.lightLevel() < 30) {
        light.setAll(color.rgb(0, 0, 255))
        console.log("cold and cloudy")
    } else {
        light.setAll(color.rgb(0, 255, 0))
        console.log("nice weather")
    }
    
}
