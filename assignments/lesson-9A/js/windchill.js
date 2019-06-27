
/*function wchillnow() {} */
var wchill=35.74 + 0.6215*otemp +(0.4275*otemp - 35.75)*Math.pow(wspeed,0.16);





/*<!-- 35.74 + 0.6215T - 35.75V (**0.16) + 0.4275TV(**0.16)

f = 35.75 + 0.6215t - 35.75s^0.16 + 0.4275 t s^0.16

where f is the wind chill factor in Fahrenheit
t is the air average temperature in Fahrenheit
and s is the wind speed in miles per hour. -->  */
