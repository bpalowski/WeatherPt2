import { Weather } from './starter.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    function showResults(shoe){
      $('.showHumidity').text(`The humidity in ${city} is ${shoe.main.humidity}%`);
       $('.showTemp').text(`The temperature in Kelvins is ${shoe.main.temp}.`);
    }
    function error(){
      $('#errors').text("There was an error processing your request. Please try again.");
    }
    $('#location').val("");
    Weather.getData(city, showResults, error);
  });
});
