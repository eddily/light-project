while True:
    print("temperature " + input.temperature(TemperatureUnit.FAHRENHEIT))
    print("light level " + input.light_level())

    if input.temperature(TemperatureUnit.FAHRENHEIT) > 70:
        light.set_pixel_color(0, color.rgb(255, 0, 0))
        light.set_pixel_color(1, color.rgb(255, 0, 0))
        light.set_pixel_color(2, color.rgb(255, 0, 0))
        light.set_pixel_color(3, color.rgb(255, 0, 0))
        light.set_pixel_color(4, color.rgb(255, 0, 0))
        print("hot and ")
    
        if input.light_level() > 35:
            light.set_pixel_color(5, color.rgb(255, 255, 0))
            light.set_pixel_color(6, color.rgb(255, 255, 0))
            light.set_pixel_color(7, color.rgb(255, 255, 0))
            light.set_pixel_color(8, color.rgb(255, 255, 0))
            light.set_pixel_color(9, color.rgb(255, 255, 0))
            print("sunny")

        else:
            light.set_pixel_color(5, color.rgb(128, 128, 128))
            light.set_pixel_color(6, color.rgb(128, 128, 128))
            light.set_pixel_color(7, color.rgb(128, 128, 128))
            light.set_pixel_color(8, color.rgb(128, 128, 128))
            light.set_pixel_color(9, color.rgb(128, 128, 128))
            print("cloudy")

    elif input.temperature(TemperatureUnit.FAHRENHEIT) < 55:
        light.set_pixel_color(0, color.rgb(0, 0, 255))
        light.set_pixel_color(1, color.rgb(0, 0, 255))
        light.set_pixel_color(2, color.rgb(0, 0, 255))
        light.set_pixel_color(3, color.rgb(0, 0, 255))
        light.set_pixel_color(4, color.rgb(0, 0, 255))
        print("cold and ")
        
        if input.light_level() > 35:
            light.set_pixel_color(5, color.rgb(255, 255, 0))
            light.set_pixel_color(6, color.rgb(255, 255, 0))
            light.set_pixel_color(7, color.rgb(255, 255, 0))
            light.set_pixel_color(8, color.rgb(255, 255, 0))
            light.set_pixel_color(9, color.rgb(255, 255, 0))
            print("sunny")

        else:
            light.set_pixel_color(5, color.rgb(128, 128, 128))
            light.set_pixel_color(6, color.rgb(128, 128, 128))
            light.set_pixel_color(7, color.rgb(128, 128, 128))
            light.set_pixel_color(8, color.rgb(128, 128, 128))
            light.set_pixel_color(9, color.rgb(128, 128, 128))
            print("cloudy")


    else:
        light.set_pixel_color(0, color.rgb(0, 255, 0))
        light.set_pixel_color(1, color.rgb(0, 255, 0))
        light.set_pixel_color(2, color.rgb(0, 255, 0))
        light.set_pixel_color(3, color.rgb(0, 255, 0))
        light.set_pixel_color(4, color.rgb(0, 255, 0))
        print("nice and")

        if input.light_level() > 35:
            light.set_pixel_color(5, color.rgb(255, 255, 0))
            light.set_pixel_color(6, color.rgb(255, 255, 0))
            light.set_pixel_color(7, color.rgb(255, 255, 0))
            light.set_pixel_color(8, color.rgb(255, 255, 0))
            light.set_pixel_color(9, color.rgb(255, 255, 0))
            print("sunny")

        else:
            light.set_pixel_color(5, color.rgb(128, 128, 128))
            light.set_pixel_color(6, color.rgb(128, 128, 128))
            light.set_pixel_color(7, color.rgb(128, 128, 128))
            light.set_pixel_color(8, color.rgb(128, 128, 128))
            light.set_pixel_color(9, color.rgb(128, 128, 128))
            print("cloudy")


       