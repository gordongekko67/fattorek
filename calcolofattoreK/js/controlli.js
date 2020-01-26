var lastclick = "";

  function myFunction90() {
        // imposto tutti i campi a seguito del bottone 90°
        document.getElementById("img1").style.visibility = "visible";
        document.getElementById("img2").style.visibility = "hidden";
        document.getElementById("img3").style.visibility = "hidden";
        document.getElementById("form1").style.visibility = "visible";
        document.getElementById("form2").style.visibility = "hidden";
        document.getElementById("form3").style.visibility = "hidden";
        document.getElementById("calcola").style.visibility = "visible";
        document.getElementById("testo1").style.visibility = "hidden";
        document.getElementById("testo1b").style.visibility = "hidden";
        document.getElementById("testo2").style.visibility = "hidden";
        document.getElementById("raggiot").style.visibility = "hidden";
        lastclick = "90";

       }


  function myFunctionN90() {
        // imposto tutti i campi a seguito del bottone no 90°
        document.getElementById("img1").style.visibility = "hidden";
        document.getElementById("img2").style.visibility = "visible";
        document.getElementById("img3").style.visibility = "visible";
        document.getElementById("form1").style.visibility = "hidden";
        document.getElementById("form2").style.visibility = "visible";
        document.getElementById("form3").style.visibility = "visible";
        document.getElementById("calcola").style.visibility = "visible";
        document.getElementById("testo1").style.visibility = "hidden";
        document.getElementById("testo1b").style.visibility = "hidden";
        document.getElementById("testo2").style.visibility = "hidden";
        document.getElementById("raggiot").style.visibility = "hidden";
        lastclick = "N90";

       }


  function initialize() {
        // tutti i campi sono nascosti
        document.getElementById("img1").style.visibility = "hidden";
        document.getElementById("img2").style.visibility = "hidden";
        document.getElementById("img3").style.visibility = "hidden";
        document.getElementById("form1").style.visibility = "hidden";
        document.getElementById("form2").style.visibility = "hidden";
        document.getElementById("form3").style.visibility = "hidden";
        document.getElementById("calcola").style.visibility = "hidden";
        document.getElementById("testo1").style.visibility = "hidden";
        document.getElementById("testo1b").style.visibility = "hidden";
        document.getElementById("testo2").style.visibility = "hidden";
        document.getElementById("raggiot").style.visibility = "hidden";

       }

function Calcola() {

        document.getElementById("testo1").style.visibility = "hidden";
        document.getElementById("testo1b").style.visibility = "hidden";
        document.getElementById("testo2").style.visibility = "hidden";

        // nel caso in cui sia stato premuto, in ultima istanza il tasto 90 pongo i campi di conseguenza
        if(lastclick =="90"){
        document.getElementById("testo1").style.visibility = "visible";
        document.getElementById("testo2").style.visibility = "hidden";
        document.getElementById("raggiot").style.visibility = "visible";
        var raggiot_value = document.getElementById('raggiot').value;

        // nel caso in cui il raggio teorico non sia zero, visualizzo campi aggiuntivi
               if  (raggiot_value.length >0) {
                     document.getElementById("testo1b").style.visibility = "visible";
              }

        }
        // nel caso in cui sia stato premuto, in ultima istanza il tasto N90 pongo i campi di conseguenza
        if(lastclick =="N90"){
        document.getElementById("testo1").style.visibility = "hidden";
        document.getElementById("testo2").style.visibility = "visible";

        }


       }