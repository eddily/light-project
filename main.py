while True:
    print("temperature " + input.temperature(TemperatureUnit.FAHRENHEIT))
    print("light level " + input.light_level())

    if input.temperature(TemperatureUnit.FAHRENHEIT) > 80 and input.light_level() > 50:
        light.set_all(color.rgb(255, 0, 0))
        print("hot and sunny")

    elif input.temperature(TemperatureUnit.FAHRENHEIT) < 45 and input.light_level() < 30:
        light.set_all(color.rgb(0, 0, 255))
        print("cold and cloudy")

    else:
        light.set_all(color.rgb(0, 255, 0))
        print("nice weather")

        