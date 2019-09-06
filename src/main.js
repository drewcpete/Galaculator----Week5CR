import { Age } from "./galaculator.js";
import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $(".age").submit(function(event){
    event.preventDefault();
    let earAge = $("#earAgeIn").val()
    let earExp = $("#earExpectIn").val()
    let newAge = new Age(earAge, earExp);
    let newJup = newAge.getJupLife()
    console.log(newJup);
  })
})
