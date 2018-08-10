export class Weather{
  constructor(){

  }
  static getData(query, blue, error){
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=f160f325aa62fa3e3a2ca7e693cda176`)
      .then(function(shoe){
        blue(shoe);
      }).fail(function(){
        error();
      });
    };
}
