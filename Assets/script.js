var APIKey = "e3b4a441c4b1ee4915c450e40c3c49b0"
var searchBut = $("#go")
var theCity = $("#theCity")
var theCityTemp = $("#theCityTemp")
var theCityHum = $("#theCityHum")
var theCityWind = $("#theCityWind")
var theCityUV = $("#theCityUV")

var date1 = $("#theDate1")
var date2 = $("#theDate2")
var date3 = $("#theDate3")
var date4 = $("#theDate4")
var date5 = $("#theDate5")
var temp1 = $("#theTemp1")
var temp2 = $("#theTemp2")
var temp3 = $("#theTemp3")
var temp4 = $("#theTemp4")
var temp5 = $("#theTemp5")
var hum1 = $("#theHum1")
var hum2 = $("#theHum2")
var hum3 = $("#theHum3")
var hum4 = $("#theHum4")
var hum5 = $("#theHum5")
var ic1 = $("#theIcon1")
var ic2 = $("#theIcon2")
var ic3 = $("#theIcon3")
var ic4 = $("#theIcon4")
var ic5 = $("#theIcon5")
var p0 = $("#0")
var p1 = $("#1")
var p2 = $("#2")
var p3 = $("#3")
var p4 = $("#4")




$(searchBut).on("click", function(){
    ret();
    let cityName = $("#city").val()
    p0.text(cityName)
    var key = 0;
    var theData = localStorage.setItem(key, cityName)
})

for(i = 0; i < 9; i++){
    $("#" + i).prepend(localStorage.getItem(i))
};

var infor = $("#infor")

function ret(){
    let cityName = $("#city").val() 
    var queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}`

    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(data => {
            console.log(data)
            var d = new Date();
            theCity.text(data.city.name + " " + d.toString())
            console.log(data.city.coord.lat)
            let temp = (data.list[0].main.temp*1.8 - 459.6).toString()
            const res = Number(temp.slice(0, 4))
            theCityTemp.text("Temperature: " + res)
            theCityHum.text("Humidity: " + data.list[0].main.humidity)
            theCityWind.text("Wind Speed: " + data.list[0].wind.speed)
            date1.text(data.list[5].dt_txt + " PM")
            date2.text(data.list[13].dt_txt + " PM")
            date3.text(data.list[21].dt_txt + " PM")
            date4.text(data.list[29].dt_txt + " PM")
            date5.text(data.list[37].dt_txt + " PM")
            let tempe1 = (data.list[1].main.temp*1.8 - 459.6).toString()
            const res1 = Number(tempe1.slice(0, 4))
            temp1.text("Temp: " + res1)
            let tempe2 = (data.list[9].main.temp*1.8 - 459.6).toString()
            const res2 = Number(tempe2.slice(0, 4))
            temp2.text("Temp: " + res2)
            let tempe3 = (data.list[17].main.temp*1.8 - 459.6).toString()
            const res3 = Number(tempe3.slice(0, 4))
            temp3.text("Temp: " + res3)
            let tempe4 = (data.list[25].main.temp*1.8 - 459.6).toString()
            const res4 = Number(tempe4.slice(0, 4))
            temp4.text("Temp: " + res4)
            let tempe5 = (data.list[33].main.temp*1.8 - 459.6).toString()
            const res5 = Number(tempe5.slice(0, 4))
            temp5.text("Temp: " + res5)
            hum1.text("Humidity: " + data.list[5].main.humidity)
            hum2.text("Humidity: " + data.list[13].main.humidity)
            hum3.text("Humidity: " + data.list[21].main.humidity)
            hum4.text("Humidity: " + data.list[29].main.humidity)
            hum5.text("Humidity: " + data.list[37].main.humidity)
            var iconcode1 = data.list[1].weather[0].icon
            var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png"
            ic1.attr('src', iconurl1)
            var iconcode2 = data.list[9].weather[0].icon
            var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png"
            ic2.attr('src', iconurl2)
            var iconcode3 = data.list[17].weather[0].icon
            var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png"
            ic3.attr('src', iconurl3)
            var iconcode4 = data.list[25].weather[0].icon
            var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png"
            ic4.attr('src', iconurl4)
            var iconcode5 = data.list[33].weather[0].icon
            var iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png"
            ic5.attr('src', iconurl5)
            var theQuery = `http://api.openweathermap.org/data/2.5/uvi/forecast?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&appid=${APIKey}`
            console.log(data.list[5].weather[0].icon)
            $.ajax({
                url: theQuery,
                method: "GET"
            }).then(data => {
                    console.log("hello")
                    theCityUV.text("UV Index: " + data[0].value)
                    var the = 8
                    if(data[0].value < 4){
                        theCityUV.addClass('bg-success')
                    }
                    if(data[0].value >= 4 && data[0].value < 7){
                        theCityUV.addClass('bg-warning')
                    }
                    if(data[0].value >= 7){
                        theCityUV.addClass('bg-danger')
                    }
                }) 
            
        });
    console.log(cityName)
    console.log(APIKey)
    }

    $(p0).on('click', function(){
        let cityName = p0.text()
        console.log('click')
        var queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}`

        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(data => {
                console.log(data)
                var d = new Date();
                theCity.text(data.city.name + " " + d.toString())
                console.log(data.city.coord.lat)
                let temp = (data.list[0].main.temp*1.8 - 459.6).toString()
                const res = Number(temp.slice(0, 4))
                theCityTemp.text("Temperature: " + res)
                theCityHum.text("Humidity: " + data.list[0].main.humidity)
                theCityWind.text("Wind Speed: " + data.list[0].wind.speed)
                date1.text(data.list[5].dt_txt + " PM")
                date2.text(data.list[13].dt_txt + " PM")
                date3.text(data.list[21].dt_txt + " PM")
                date4.text(data.list[29].dt_txt + " PM")
                date5.text(data.list[37].dt_txt + " PM")
                let tempe1 = (data.list[1].main.temp*1.8 - 459.6).toString()
                const res1 = Number(tempe1.slice(0, 4))
                temp1.text("Temp: " + res1)
                let tempe2 = (data.list[9].main.temp*1.8 - 459.6).toString()
                const res2 = Number(tempe2.slice(0, 4))
                temp2.text("Temp: " + res2)
                let tempe3 = (data.list[17].main.temp*1.8 - 459.6).toString()
                const res3 = Number(tempe3.slice(0, 4))
                temp3.text("Temp: " + res3)
                let tempe4 = (data.list[25].main.temp*1.8 - 459.6).toString()
                const res4 = Number(tempe4.slice(0, 4))
                temp4.text("Temp: " + res4)
                let tempe5 = (data.list[33].main.temp*1.8 - 459.6).toString()
                const res5 = Number(tempe5.slice(0, 4))
                temp5.text("Temp: " + res5)
                hum1.text("Humidity: " + data.list[5].main.humidity)
                hum2.text("Humidity: " + data.list[13].main.humidity)
                hum3.text("Humidity: " + data.list[21].main.humidity)
                hum4.text("Humidity: " + data.list[29].main.humidity)
                hum5.text("Humidity: " + data.list[37].main.humidity)
                var iconcode1 = data.list[1].weather[0].icon
                var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png"
                ic1.attr('src', iconurl1)
                var iconcode2 = data.list[9].weather[0].icon
                var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png"
                ic2.attr('src', iconurl2)
                var iconcode3 = data.list[17].weather[0].icon
                var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png"
                ic3.attr('src', iconurl3)
                var iconcode4 = data.list[25].weather[0].icon
                var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png"
                ic4.attr('src', iconurl4)
                var iconcode5 = data.list[33].weather[0].icon
                var iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png"
                ic5.attr('src', iconurl5)
                var theQuery = `http://api.openweathermap.org/data/2.5/uvi/forecast?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&appid=${APIKey}`
                console.log(data.list[5].weather[0].icon)
                $.ajax({
                    url: theQuery,
                    method: "GET"
                }).then(data => {
                        console.log("hello")
                        theCityUV.text("UV Index: " + data[0].value)
                        var the = 8
                        if(data[0].value < 4){
                            theCityUV.addClass('bg-success')
                        }
                        if(data[0].value >= 4 && data[0].value < 7){
                            theCityUV.addClass('bg-warning')
                        }
                        if(data[0].value >= 7){
                            theCityUV.addClass('bg-danger')
                        }
                    }) 
            
            });
        console.log(cityName)
        console.log(APIKey)
        }

    )

// ret();