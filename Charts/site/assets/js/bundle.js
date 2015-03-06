(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./site/assets/js/scripts.js":[function(require,module,exports){

/**
 * this is your scripts file
 * you can use the browserify 'require' method to pull in other javascript
 * files as a dependency.
 */
'use strict';

var dataTTFB = {
    labels: ["05.02.","06.02.","09.02.","10.02.","12.02.","13.02.","17.02.","18.02.","19.02.","20.02.","23.02.","05.03."],
    datasets: [
        {
            label: "Repeat View",
            fillColor: "rgba(220,68,55,0.2)",
            strokeColor: "rgba(220,68,55,0.6)",
            pointColor: "rgba(220,68,55,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [405,1165,743,876,835,744,1174,1213,1041,799,890,579]
        },
        {
            label: "First View",
            fillColor: "rgba(62,134,237,0.2)",
            strokeColor: "rgba(62,134,237,0.6)",
            pointColor: "rgba(62,134,237,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [386,986,688,773,1096,964,1307,1239,1141,729,681,417]
        }
    ]
};

var dataRenderStart = {
    labels: ["05.02.","06.02.","09.02.","10.02.","12.02.","13.02.","17.02.","18.02.","19.02.","20.02.","23.02.","05.03."],
    datasets: [
        {
            label: "Repeat View",
            fillColor: "rgba(220,68,55,0.2)",
            strokeColor: "rgba(220,68,55,0.6)",
            pointColor: "rgba(220,68,55,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [413,1774,925,1312,1190,418,784,908,595,614,592,510]
        },
        {
            label: "First View",
            fillColor: "rgba(62,134,237,0.2)",
            strokeColor: "rgba(62,134,237,0.6)",
            pointColor: "rgba(62,134,237,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [787,3486,1915,2961,2456,1483,2567,2458,2621,1106,1237,1233]
        }
    ]
};

var dataVisuallyComplete = {
    labels: ["05.02.","06.02.","09.02.","10.02.","12.02.","13.02.","17.02.","18.02.","19.02.","20.02.","23.02.","05.03."],
    datasets: [
        {
            label: "Repeat View",
            fillColor: "rgba(220,68,55,0.2)",
            strokeColor: "rgba(220,68,55,0.6)",
            pointColor: "rgba(220,68,55,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [1143,2611,1741,2171,2358,2228,1705,3852,3683,2972,2330,667]
        },
        {
            label: "First View",
            fillColor: "rgba(62,134,237,0.2)",
            strokeColor: "rgba(62,134,237,0.6)",
            pointColor: "rgba(62,134,237,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [3000,7190,4992,6089,7571,5555,6122,7600,7316,5665,4325,2450]
        }
    ]
};

// Get the context of the canvas element we want to select
var tmpTTFB = document.getElementById("ttfb").getContext("2d");
var tmpRender = document.getElementById("renderStart").getContext("2d");
var tmpVisuallyComplete = document.getElementById("visuallyComplete").getContext("2d");

Chart.defaults.global.responsive = true;
Chart.defaults.global.animation = true;
Chart.defaults.global.scaleOverride = true;
Chart.defaults.global.scaleSteps = 11;
Chart.defaults.global.scaleStepWidth = 1000;
Chart.defaults.global.scaleStartValue = 0;

new Chart(tmpTTFB).Line(dataTTFB, {});
new Chart(tmpRender).Line(dataRenderStart, {});
new Chart(tmpVisuallyComplete).Line(dataVisuallyComplete, {});
},{}]},{},["./site/assets/js/scripts.js"]);

//# sourceMappingURL=bundle.js.map