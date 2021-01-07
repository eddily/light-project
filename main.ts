while (true) {
    console.log("temperature " + input.temperature(TemperatureUnit.Fahrenheit))
    console.log("light level " + input.lightLevel())
    if (input.temperature(TemperatureUnit.Fahrenheit) > 70) {
        light.setPixelColor(0, color.rgb(255, 0, 0))
        light.setPixelColor(1, color.rgb(255, 0, 0))
        light.setPixelColor(2, color.rgb(255, 0, 0))
        light.setPixelColor(3, color.rgb(255, 0, 0))
        light.setPixelColor(4, color.rgb(255, 0, 0))
        console.log("hot and ")
        if (input.lightLevel() > 35) {
            light.setPixelColor(5, color.rgb(255, 255, 0))
            light.setPixelColor(6, color.rgb(255, 255, 0))
            light.setPixelColor(7, color.rgb(255, 255, 0))
            light.setPixelColor(8, color.rgb(255, 255, 0))
            light.setPixelColor(9, color.rgb(255, 255, 0))
            console.log("sunny")
        } else {
            light.setPixelColor(5, color.rgb(128, 128, 128))
            light.setPixelColor(6, color.rgb(128, 128, 128))
            light.setPixelColor(7, color.rgb(128, 128, 128))
            light.setPixelColor(8, color.rgb(128, 128, 128))
            light.setPixelColor(9, color.rgb(128, 128, 128))
            console.log("cloudy")
        }
        
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 55) {
        light.setPixelColor(0, color.rgb(0, 0, 255))
        light.setPixelColor(1, color.rgb(0, 0, 255))
        light.setPixelColor(2, color.rgb(0, 0, 255))
        light.setPixelColor(3, color.rgb(0, 0, 255))
        light.setPixelColor(4, color.rgb(0, 0, 255))
        console.log("cold and ")
        if (input.lightLevel() > 35) {
            light.setPixelColor(5, color.rgb(255, 255, 0))
            light.setPixelColor(6, color.rgb(255, 255, 0))
            light.setPixelColor(7, color.rgb(255, 255, 0))
            light.setPixelColor(8, color.rgb(255, 255, 0))
            light.setPixelColor(9, color.rgb(255, 255, 0))
            console.log("sunny")
        } else {
            light.setPixelColor(5, color.rgb(128, 128, 128))
            light.setPixelColor(6, color.rgb(128, 128, 128))
            light.setPixelColor(7, color.rgb(128, 128, 128))
            light.setPixelColor(8, color.rgb(128, 128, 128))
            light.setPixelColor(9, color.rgb(128, 128, 128))
            console.log("cloudy")
        }
        
    } else {
        light.setPixelColor(0, color.rgb(0, 255, 0))
        light.setPixelColor(1, color.rgb(0, 255, 0))
        light.setPixelColor(2, color.rgb(0, 255, 0))
        light.setPixelColor(3, color.rgb(0, 255, 0))
        light.setPixelColor(4, color.rgb(0, 255, 0))
        console.log("nice and")
        if (input.lightLevel() > 35) {
            light.setPixelColor(5, color.rgb(255, 255, 0))
            light.setPixelColor(6, color.rgb(255, 255, 0))
            light.setPixelColor(7, color.rgb(255, 255, 0))
            light.setPixelColor(8, color.rgb(255, 255, 0))
            light.setPixelColor(9, color.rgb(255, 255, 0))
            console.log("sunny")
        } else {
            light.setPixelColor(5, color.rgb(128, 128, 128))
            light.setPixelColor(6, color.rgb(128, 128, 128))
            light.setPixelColor(7, color.rgb(128, 128, 128))
            light.setPixelColor(8, color.rgb(128, 128, 128))
            light.setPixelColor(9, color.rgb(128, 128, 128))
            console.log("cloudy")
        }
        
    }
    
}
