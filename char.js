/**
 * Created by twerg_000 on 4/22/2014.
 */
/*jshint browser:true */

var str = {};
str.value = 0;

var int = {};
int.value = 0;

var wis = {};
wis.value = 0;

var dex = {};
dex.value = 0;

var con = {};
con.value = 0;

var cha = {};
cha.value = 0;


var modScore = function(ability, score, elem) {
    var strMod = "0";
    str.value = parseInt(document.getElementById("str").value);
    if(str.value < 10) {
        strMod = "-1";
    } else if(str.value < 12) {
        strMod = "0";
    } else if(str.value <= 13) {
        strMod = "+1";
    } else if(str.value <= 15) {
        strMod = "+2";
    } else if(str.value <= 17) {
        strMod = "+3";
    } else if(str.value <= 19) {
        strMod = "+4";
    }  else if(str.value > 19) {
        strMod = "+5";
    } else {
        strMod = "Invalid";
    }
    document.getElementById("strmod").innerHTML = "Mod: " + strMod;
};

var getMod = function() {
    var strMod = "0";
    str.value = parseInt(document.getElementById("str").value);
    if(str.value < 10) {
        strMod = "-1";
    } else if(str.value < 12) {
        strMod = "0";
    } else if(str.value <= 13) {
        strMod = "+1";
    } else if(str.value <= 15) {
        strMod = "+2";
    } else if(str.value <= 17) {
        strMod = "+3";
    } else if(str.value <= 19) {
        strMod = "+4";
    }  else if(str.value > 19) {
        strMod = "+5";
    } else {
        strMod = "Invalid";
    }
    document.getElementById("strmod").innerHTML = "Mod: " + strMod;
};