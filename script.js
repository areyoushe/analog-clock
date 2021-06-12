function updatemyclock(){
    var hourhand = document.querySelector(".hours")
    var minutehand = document.querySelector(".minutes")
    var secondhand = document.querySelector(".seconds")

    var currentDate = new Date()

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var second = currentDate.getSeconds();

    var secondFraction = second/60;
    var minuteFraction = (secondFraction+minutes)/60;
    var hourFraction = (minuteFraction+hours)/12;

    var secondAngle = secondFraction*360;
    var minuteAngle = minuteFraction*360;
    var hourAngle = hourFraction*360;

    secondhand.style.transform = `rotate(${secondAngle}deg)`
    minutehand.style.transform = `rotate(${minuteAngle}deg)`
    hourhand.style.transform = `rotate(${hourAngle}deg)`
}
setInterval(updatemyclock, 1000)