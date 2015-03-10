
/**
 * TODO: 
 */
'use strict';

var dataTTFB = {
    labels: ["06.02.","09.02.","10.02.","12.02.","13.02.","17.02.","18.02.","19.02.","20.02.","23.02.","05.03.","06.03", "07.03"],
    datasets: [
        {
            label: "Repeat View",
            fillColor: "rgba(220,68,55,0.2)",
            strokeColor: "rgba(220,68,55,0.6)",
            pointColor: "rgba(220,68,55,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [405,1165,743,876,835,744,1174,1213,1041,799,890,579, 592, 444]
        },
        {
            label: "First View",
            fillColor: "rgba(62,134,237,0.2)",
            strokeColor: "rgba(62,134,237,0.6)",
            pointColor: "rgba(62,134,237,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [386,986,688,773,1096,964,1307,1239,1141,729,681,417, 400, 187]
        }
    ]
};

var dataRenderStart = {
    labels: ["06.02.","09.02.","10.02.","12.02.","13.02.","17.02.","18.02.","19.02.","20.02.","23.02.","05.03.","06.03", "07.03"],
    datasets: [
        {
            label: "Repeat View",
            fillColor: "rgba(220,68,55,0.2)",
            strokeColor: "rgba(220,68,55,0.6)",
            pointColor: "rgba(220,68,55,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [1774,925,1312,1190,418,784,908,595,614,592,510, 578, 432]
        },
        {
            label: "First View",
            fillColor: "rgba(62,134,237,0.2)",
            strokeColor: "rgba(62,134,237,0.6)",
            pointColor: "rgba(62,134,237,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [3486,1915,2961,2456,1483,2567,2458,2621,1106,1237,1233, 1179, 496]
        }
    ]
};

var dataVisuallyComplete = {
    labels: ["06.02.","09.02.","10.02.","12.02.","13.02.","17.02.","18.02.","19.02.","20.02.","23.02.","05.03.","06.03", "07.03"],
    datasets: [
        {
            label: "Repeat View",
            fillColor: "rgba(220,68,55,0.2)",
            strokeColor: "rgba(220,68,55,0.6)",
            pointColor: "rgba(220,68,55,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [2611,1741,2171,2358,2228,1705,3852,3683,2972,2330,667,683,821]
        },
        {
            label: "First View",
            fillColor: "rgba(62,134,237,0.2)",
            strokeColor: "rgba(62,134,237,0.6)",
            pointColor: "rgba(62,134,237,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [7190,4992,6089,7571,5555,6122,7600,7316,5665,4325,2450,2500,1450]
        }
    ]
};

var dataLoadTime = {
    labels: ["06.02.","09.02.","10.02.","12.02.","13.02.","17.02.","18.02.","19.02.","20.02.","23.02.","05.03.","06.03", "07.03"],
    datasets: [
        {
            label: "Repeat View",
            fillColor: "rgba(220,68,55,0.2)",
            strokeColor: "rgba(220,68,55,0.6)",
            pointColor: "rgba(220,68,55,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [1078,805,970,875,773,1250,1319,1325,856,943,753,708,838]
        },
        {
            label: "First View",
            fillColor: "rgba(62,134,237,0.2)",
            strokeColor: "rgba(62,134,237,0.6)",
            pointColor: "rgba(62,134,237,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [4324,3146,4133,3313,3331,6850,4965,4149,2691,2926,2610,2596,1590]
        }
    ]
};


var dataSpeedIndex = {
    labels: ["06.02.","09.02.","10.02.","12.02.","13.02.","17.02.","18.02.","19.02.","20.02.","23.02.","05.03.","06.03", "07.03"],
    datasets: [
        {
            label: "Repeat View",
            fillColor: "rgba(220,68,55,0.2)",
            strokeColor: "rgba(220,68,55,0.6)",
            pointColor: "rgba(220,68,55,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [2392,1519,1867,2092,1865,1508,975,664,742,689,642,669,827]
        },
        {
            label: "First View",
            fillColor: "rgba(62,134,237,0.2)",
            strokeColor: "rgba(62,134,237,0.6)",
            pointColor: "rgba(62,134,237,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [5935,3964,4957,6063,4682,4292,2728,2733,2231,1985,1709,1771,1000]
        }
    ]
};

var dataRequestsOld = [
    {
        value: 30,
        color:"#dc4437",
        highlight: "#eb6156",
        label: "Images"
    },
    {
        value: 3,
        color: "#3e86ed",
        highlight: "#5296f8",
        label: "CSS"
    },
    {
        value: 5,
        color: "#eeb302",
        highlight: "#fac62b",
        label: "JS"
    },
    {
        value: 4,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Other"
    }
];

var dataRequestsNew = [
    {
        value: 9,
        color:"#dc4437",
        highlight: "#eb6156",
        label: "Images"
    },
    {
        value: 1,
        color: "#3e86ed",
        highlight: "#5296f8",
        label: "CSS"
    },
    {
        value: 4,
        color: "#eeb302",
        highlight: "#fac62b",
        label: "JS"
    },
    {
        value: 2,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Other"
    }
];

var dataRequestsMobileOld = [
    {
        value: 4,
        color:"#dc4437",
        highlight: "#eb6156",
        label: "Images"
    },
    {
        value: 3,
        color: "#3e86ed",
        highlight: "#5296f8",
        label: "CSS"
    },
    {
        value: 5,
        color: "#eeb302",
        highlight: "#fac62b",
        label: "JS"
    },
    {
        value: 4,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Other"
    }
];

var dataRequestsMobileNew = [
    {
        value: 2,
        color:"#dc4437",
        highlight: "#eb6156",
        label: "Images"
    },
    {
        value: 1,
        color: "#3e86ed",
        highlight: "#5296f8",
        label: "CSS"
    },
    {
        value: 4,
        color: "#eeb302",
        highlight: "#fac62b",
        label: "JS"
    },
    {
        value: 2,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Other"
    }
];

var dataSiteSizeMobile = [
    {
        value: 145,
        color: "#009f5d",
        highlight: "#10b06e",
        label: "KB"
    },
    {
        value: 363,
        color:"#7B1FA2",
        highlight: "#892cb0",
        label: "KB"
    }
];

var dataSiteSizeDesktop = [
    {
        value: 517,
        color: "#009f5d",
        highlight: "#10b06e",
        label: "KB"
    },
    {
        value: 1000,
        color:"#7B1FA2",
        highlight: "#892cb0",
        label: "KB"
    }
];


// Get the context of the canvas element we want to select
var tmpTTFB = document.getElementById("ttfb").getContext("2d");
var tmpRender = document.getElementById("renderStart").getContext("2d");
var tmpVisuallyComplete = document.getElementById("visuallyComplete").getContext("2d");
var tmpLoadTime = document.getElementById("loadTime").getContext("2d");
var tmpSpeedIndex = document.getElementById("speedIndex").getContext("2d");
var tmpRerquestsOld = document.getElementById("requestsOld").getContext("2d");
var tmpRequestsNew = document.getElementById("requestsNew").getContext("2d");
var tmpRerquestsMobileOld = document.getElementById("requestsMobileOld").getContext("2d");
var tmpRequestsMobileNew = document.getElementById("requestsMobileNew").getContext("2d");
var tmpSiteSizeDesktop = document.getElementById("siteSizeDesktop").getContext("2d");
var tmpSiteSizeMobile = document.getElementById("siteSizeMobile").getContext("2d");

Chart.defaults.global.responsive = true;
Chart.defaults.global.animation = true;
Chart.defaults.global.scaleOverride = true;
Chart.defaults.global.scaleSteps = 10;
Chart.defaults.global.scaleStepWidth = 1000;
Chart.defaults.global.scaleStartValue = 0;

// line charts
new Chart(tmpTTFB).Line(dataTTFB, {});
new Chart(tmpRender).Line(dataRenderStart, {});
new Chart(tmpVisuallyComplete).Line(dataVisuallyComplete, {});
new Chart(tmpLoadTime).Line(dataLoadTime, {});
new Chart(tmpSpeedIndex).Line(dataSpeedIndex, {});

// polar chart
new Chart(tmpRerquestsOld).Doughnut(dataRequestsOld, {scaleOverride: false});
new Chart(tmpRequestsNew).Doughnut(dataRequestsNew, {scaleOverride: false});
new Chart(tmpRerquestsMobileOld).Doughnut(dataRequestsMobileOld, {scaleOverride: false});
new Chart(tmpRequestsMobileNew).Doughnut(dataRequestsMobileNew, {scaleOverride: false});

// pie charts
new Chart(tmpSiteSizeDesktop).Pie(dataSiteSizeDesktop, {scaleOverride: false});
new Chart(tmpSiteSizeMobile).Pie(dataSiteSizeMobile, {scaleOverride: false});