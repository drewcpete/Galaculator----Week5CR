import { Age } from "./galaculator.js"
import $ from "jquery"

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
