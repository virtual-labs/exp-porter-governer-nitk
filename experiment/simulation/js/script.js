
var simstatus = 0;
var rotstatus = 1;

var commenttext = "Some Text";
var commentloc = 0;

var trans = new point(150, 100);
var transa = new point(150, 230);
var transaa = new point(200, 400);


var y = new point(0, 0, "y");
var z = new point(0, 0, "z");
var o = new point(0, 0, " ");
var a = new point(0, 0, " ");
var b = new point(0, 0, " ");
var d = new point(0, 0, "d");
var c = new point(0, 0, "c");
var c1 = new point(0, 0, "");
var c2 = new point(0, 0, "");
var e = new point(0, 0, " ");
var f = new point(0, 0, " ");
var ii = new point(0, 0, "ii");
var k = new point(0, 0, "k");
var l = new point(0, 0, "S");
var v = new point(0, 0, "v");
var va = new point(0, 0, "va");

var h1 = 0;
var om1 = 0;
var theta = 0;
var omega = 0;;
var r = 0;
var h = 0;
var m = 4;
var m1 = 20;
var r1 = 0;
var g = 0;
var r2 = 0;
var r3 = 0;
var n = 130;

var canvas = document.getElementById("simscreen");
var ctx = canvas.getContext("2d");
//Array to hold datapoints to plot graph
var datapoints1 = [];

//rotation variables
var gr = 0;


var time = 0;

//To set color
var colorGraph = "#35b1d0";
document.getElementById("cb").checked = false;
var exptSelected = 0;//For experiments
var randCal = 0;// for choosing calculation
var userHeight = 0, userMass = 0, userRpm = 0;//User entered values
var randomRpm = 0, randomHeight = 0, randomOmega = 0;
var dropArray = [3, 4, 4, 2, 3, 2];
var countSpan = 0;
var ansSpan0 = document.createElement("span");
var ansSpan1 = document.createElement("span");
var ansSpan2 = document.createElement("span");
var ansSpan3 = document.createElement("span");
var ansSpan4 = document.createElement("span");
var ansSpan5 = document.createElement("span");
function editcss() {
    //$('.variable').css('padding-top', '30px');
    // $('.usercheck').css('left', '40px');
    // <!-- $('#legend').css("width",document.getElementById('legendimg').width+"px"); -->
    // <!-- $('#legend').css("top",419); -->
    // <!-- $('#legend').css("left",342); -->
    // $('#container').css("top", 0);
    // $('#container').css("left", 0);
    // <!-- $('#legendicon').css("top",471); -->
    $('.variable').css('padding-top','20px');
$('.usercheck').css('left','30px');
$('#container').css("top",0);
$('#container').css("left",0);
$('#legendicon').css("top",471);
}

function startsim() {
    simTimeId=setInterval("varupdate();",8);
}

function varinit() {
    varchange();
    $('#nslider').slider("value", 130);
    $('#nspinner').spinner("value", 130);

    $('#massslider').slider("value", 4.5);
    $('#massspinner').spinner("value", 4.5);

}

function varchange() {
    //Variable omega2 slider and number input types
    $('#nslider').slider({ max: 180, min: 130, step: 2 });		// slider initialisation : jQuery widget
    $('#nspinner').spinner({ max: 180, min: 130, step: 2 });		// number initialisation : jQuery widget
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $("#nslider").on("slide", function (e, ui) { $('#nspinner').spinner("value", ui.value); colorGraph = "#35b1d0"; sliderGraph(); });
    $("#nspinner").on("spin", function (e, ui) { $('#nslider').slider("value", ui.value); colorGraph = "#35b1d0"; sliderGraph(); });
    $("#nspinner").on("change", function () { varchange(); });

    //Variable omega2 slider and number input types
    $('#massslider').slider({ max: 6, min: 2, step: 0.5 });		// slider initialisation : jQuery widget
    $('#massspinner').spinner({ max: 6, min: 2, step: 0.5 });		// number initialisation : jQuery widget
    // monitoring change in value and connecting slider and number
    // setting trace point coordinate arrays to empty on change of link length
    $("#massslider").on("slide", function (e, ui) { $('#massspinner').spinner("value", ui.value); colorGraph = "#a23827"; sliderGraph(); });
    $("#massspinner").on("spin", function (e, ui) { $('#massslider').slider("value", ui.value); colorGraph = "#a23827"; sliderGraph(); });
    $("#massspinner").on("change", function () { varchange(); });

    varupdate();
}

function varupdate() {
    n = $('#nspinner').spinner("value");
    m = $('#massspinner').spinner("value");
    omega = (2 * 3.14 * n) / 600;
    theta = theta + (rotstatus * 0.05 * deg(omega));
    theta = theta % 360;
    if (theta < 0) theta += 360; a
    h = (m + m1) * 9.81 / (omega * omega * m);
    g = (80 * 80) - (h * h);
    r1 = Math.sqrt(g);
    r2 = r1 * Math.cos(rad(theta));
    r3 = 10 * Math.cos(rad(theta));
    o.xcoord = 0;
    o.ycoord = 0;
    z.xcoord = 10 * Math.cos(rad(theta));
    z.ycoord = 10 * Math.sin(rad(theta));
    y.xcoord = -10 * Math.cos(rad(theta));
    y.ycoord = -10 * Math.sin(rad(theta));
    c.xcoord = 0;
    c.ycoord = 0;
    c1.xcoord = 8 * Math.cos(rad(theta));
    c1.ycoord = 0;
    c2.xcoord = -8 * Math.cos(rad(theta));
    c2.ycoord = 0;
    d.xcoord = 0;
    e.xcoord = r2;
    e.ycoord = -h;
    f.xcoord = -r2;
    f.ycoord = -h;
    d.ycoord = -2 * h;
    ii.xcoord = r3;
    ii.ycoord = -2 * h;
    k.xcoord = -r3;
    k.ycoord = -2 * h;
    l.xcoord = 0;
    l.ycoord = -2 * h - 30;
    v.xcoord = r3
    v.ycoord = -2 * h - 30;
    va.xcoord = -r3;
    va.ycoord = -2 * h - 30;
    a.xcoord = r1 * Math.cos(rad(theta));
    a.ycoord = r1 * Math.sin(rad(theta));
    b.xcoord = -r1 * Math.cos(rad(theta));
    b.ycoord = -r1 * Math.sin(rad(theta));
    document.getElementById("hval").value = ((h * 10)).toFixed(3);//To update the height field as per the updated n value
    draw();
}
let mediaQuery1 = window.matchMedia("screen and (max-width: 540px)");
let mediaQuery2 = window.matchMedia("screen and (max-width: 704px)");
let mediaQuery3 = window.matchMedia("screen and (max-width: 820px)");
let mediaQuery4 = window.matchMedia("screen and (max-width: 980px)");
let mediaQuery5 = window.matchMedia("screen and (max-width: 1200px)");
let scaleX = 0.5;
let scaleY = 0.5;

const setMediaQueries = function (ctx) {
    let originalX = 20;
    if (mediaQuery1.matches) {
      scaleX = 1.5;
      // originalX = 20;
      originalX = canvas.width / 4 - 10;
      scaleY = 0.9;
    } else if (mediaQuery2.matches) {
      scaleX = 1;
      // originalX = canvas.width / 4 - 10;
      scaleY = 0.9;
    } else if (mediaQuery3.matches) {
      scaleX = 1;
      originalX = canvas.width / 4 - 10;
      scaleY = 0.9;
    } else if (mediaQuery4.matches) {
      scaleX = 1;
      originalX = canvas.width / 4 - 10;
      scaleY = 0.9;
    } else if (mediaQuery5.matches) {
      scaleX = 0.5;
      originalX = canvas.width / 4 - 10;
      scaleY = 0.9;
    } else {
      // originalX = canvas.width / 4 - 20;
      scaleX = 0.3;
      scaleY = 0.7;
    }
    ctx.canvas.width = document.documentElement.clientWidth * scaleX;
    ctx.canvas.height = document.documentElement.clientHeight * scaleY;
    return originalX;
};

function draw() {
    let originalX = setMediaQueries(ctx);
    ctx.canvas.width = document.documentElement.clientWidth * scaleX;
    ctx.canvas.height = document.documentElement.clientHeight * scaleY;
    ctx.clearRect(0,0,595,550);
    // ctx.font = "14pt Verdana";
    // ctx.fillText("Top View",20,80);
    // ctx.fillText("Front View",20,280);
    // ctx.clearRect(0, 0, 550, 400);  //clears the complete canvas#simscreen everytime

    pointtrans(o, trans);
    pointtrans(b, trans);
    pointtrans(a, trans);
    pointtrans(z, trans);
    pointtrans(y, trans);
    pointtrans(c, transa);
    pointtrans(c1, transa);
    pointtrans(c2, transa);
    pointtrans(d, transa);
    pointtrans(e, transa);
    pointtrans(f, transa);
    pointtrans(ii, transa);
    pointtrans(k, transa);
    pointtrans(l, transa);
    pointtrans(v, transa);
    pointtrans(va, transa);


    ctx.beginPath();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#666666";
    //ctx.setLineDash([5, 15]);

    ctx.moveTo(150, o.xcoord);
    ctx.lineTo(150, -400);
    ctx.lineTo(150, 400);
    ctx.moveTo(150, 200);
    ctx.lineTo(50, 200);
    ctx.lineTo(250, 200);
    ctx.stroke();
    ctx.closePath();

    //Pivot and centre
    pointjoin(o, a, ctx, "#0885d8", 5);
    pointjoin(o, b, ctx, "#0885d8", 5);
    pointdisp(b, ctx, m + 7, '#8e020c', '#8e020c');
    pointdisp(a, ctx, m + 7, '#8e020c', '#8e020c');
    pointjoin(z, y, ctx, "#181819", 20);
    pointjoin(c, d, ctx, "#181819", 5);
    pointjoin(c, e, ctx, "#0885d8", 5);
    pointjoin(c, f, ctx, "#0885d8", 5);
    pointjoin(c, c1, ctx, "#181819", 15);
    pointjoin(c, c2, ctx, "#181819", 15);
    pointdisp(f, ctx, m + 7, '#8e020c', '#8e020c');
    pointdisp(e, ctx, m + 7, '#8e020c', '#8e020c');
    pointjoin(e, ii, ctx, "#0885d8", 5);
    pointjoin(f, k, ctx, "#0885d8", 5);
    pointjoin(ii, k, ctx, "#e5791b", 20);
    pointjoin(d, l, ctx, "#e5791b", 10);
    pointjoin(v, va, ctx, "#e5791b", 10);
    pointdisp(l, ctx, 6, "", "", '', '', '');
}
//This function used for plotting graph
function drawgraphh() {
    let originalX = setMediaQueries(ctx);
    ctx.canvas.width = document.documentElement.clientWidth * scaleX;
    ctx.canvas.height = document.documentElement.clientHeight * scaleY;
    document.getElementById("graph").innerHTML = "";
    if (gr == 0) {
        document.getElementById("cb").checked = true;
        document.getElementById("graph").style.visibility = "visible";
        document.getElementById("eqn").style.visibility = "visible";
        document.getElementById("myImg").style.visibility = "hidden";
        document.getElementById("fb").style.visibility = "hidden";
        gr = 1;
        for (plott = 130; plott <= 180; plott++) {
            omega1 = (2 * 3.14 * (plott)) / 600;
            h2 = (m + m1) * 9.81 / (omega1 * omega1 * m) * 10;//calculates h value
            datapoints1.push({ x: h2, y: plott });
        }
        drawgraph("graph", datapoints1, "height(mm)", "n(rpm)", colorGraph);//Used graph.ob.js and graph_use.ob.js files plot graph
    }
    else if (gr == 1) {
        document.getElementById("cb").checked = false;
        document.getElementById("graph").style.visibility = "hidden";
        document.getElementById("eqn").style.visibility = "hidden";
        document.getElementById("myImg").style.visibility = "visible";
        document.getElementById("fb").style.visibility = "visible";
        gr = 0;
        datapoints1.length = 0;//clears the datapoints
    }
}
function sliderGraph() {
    document.getElementById("graph").innerHTML = "";
    datapoints1 = [];
    n = $('#nspinner').spinner("value");
    m = $('#massspinner').spinner("value");
    $('#massspinner').spinner("value", m);
    omega = (2 * 3.14 * n) / 600;
    theta = theta + (rotstatus * 0.6 * deg(omega));
    theta = theta % 360;
    if (theta < 0) theta += 360;
    h = (m + m1) * 9.81 / (omega * omega * m);
    for (plott = 130; plott <= 180; plott++) {
        omega1 = (2 * 3.14 * (plott)) / 600;
        h2 = (m + m1) * 9.81 / (omega1 * omega1 * m) * 10;//calculates h value
        datapoints1.push({ x: h2, y: plott });
    }
    if (document.getElementById("cb").checked == true || randCal == 2) {
        drawgraph("graph", datapoints1, "height(mm)", "n(rpm)", colorGraph);
    }//Used graph.ob.js and graph_use.ob.js files plot graph
    else {
        datapoints1 = [];
        document.getElementById("graph").innerHTML = "";
    }
}
function printcomment() {
    // document.getElementById('commentboxleft').style.width = '570px';
    document.getElementById('commentboxleft').innerHTML = "<center>s stands for sleeve; change rpm to see the change in height </center>";
    // ignore use of deprecated tag <center> . Code is executed only if printcomment function receives inappropriate commentloc value
}
//To set Experiments
function setExperiments() {
    if ($(window).width() > 945) {
            // Apply styles for small screens
            $('#comments').css('width', '200%');
        
          }
    // $("#comments").css("width", "100%");
    console.log("click");
    document.getElementById("simscreen").style.visibility = "hidden";
    document.getElementById("graph").style.visibility = "hidden";
    document.getElementById("variables").style.display = "none";
    document.getElementById("canvas-container").style.display = "none";
    document.getElementById("graphbutton").classList.toggle("graphDisabled");
 
    document.getElementById("myImg").style.visibility = "hidden";
    document.getElementById("fb").style.visibility = "hidden";
    document.getElementById("eqn").style.visibility = "hidden";
    document.getElementById("cb").style.visibility = "hidden";
    document.getElementById("sg").style.visibility = "hidden";
    document.getElementById("exp").style.display = "inline-block";
    document.getElementById("commentboxleft").innerHTML = "";
    document.getElementById("goToExperiment").style.display = "none";
    document.getElementById("startExperiment").style.display = "inline-block";
    document.getElementById("goSimulator").style.display = "inline-block";
   
    

}

function startExperiments() {
    if (!$("input:radio[name='expt']").is(":checked")) {
        document.getElementById('commentboxleft').innerHTML = "You have not selected any experiment";
    }
    else {
        exptSelected = 1;
        document.getElementById("canvas-container").style.display = "block";
        document.getElementById("exitExperiment").style.display = "block";
        document.getElementById("resetExperiment").style.display = "block";
        document.getElementById("goSimulator").style.display = "none";
        document.getElementById("startExperiment").style.display = "none";
        selectExperiments();
    }
}
//To set questions for calculation and Parts
function selectExperiments() {
    $("#exp").hide();
    if ($('#calc').is(':checked')) {
        document.getElementById("commentboxleft").innerHTML = "Calculation Selected";
        document.getElementById("simscreen").style.visibility = "visible";
        // document.getElementById("variables").style.display = "block";
        randomizeValues();
        varupdate();
        randomizeExperiments();
        
    }
    else if ($('#gParts').is(':checked')) {
        document.getElementById("commentboxleft").innerHTML = "Identify parts of governor using dropdown";
        document.getElementById("resetExperiment").style.display = "none";
        document.getElementById("canvas-container").style.display = "none";
        document.getElementById("partImage").style.visibility = "visible";
        document.getElementById("dropDownSet").style.display = "block";
        document.getElementById("comments").style.width = "200%";
        // if ($(window).width() > 945) {
        //     // Apply styles for small screens
        //     $('#comments').css('width', '200%');
        
        //   } 
         
    }
}

//function to randomize calculation experiments
function randomizeExperiments() {
    randCal = [1, 2, 3][Math.floor(Math.random() * 3)];
    switch (randCal) {
        case 1: calculateHeight();
            break;
        case 2: calculateMass();
            break;
        case 3: calculateRpm();
            break;
    }
}
//function to randomize parameter values
function randomizeValues() {
    n = Math.floor(Math.random() * (130 - 100 + 1)) + 100;
    m = [4, 4.5, 5, 5.5, 6][Math.floor(Math.random() * 3)];
    $('#nspinner').spinner("value", n);
    $('#nslider').slider("value", n);
    $('#massspinner').spinner("value", m);
    $('#massslider').slider("value", m);
    setValuesDisabled();
}
//To disable variables
function setValuesDisabled() {
    $("#nspinner").spinner("disable");
    $("#nslider").slider("disable");
    $("#massspinner").spinner("disable");
    $("#massslider").slider("disable");
    $("#massspinner").spinner("disable");
    $("#massslider").slider("disable");
}
//Set questions for height calculation
function calculateHeight() {
    document.getElementById("variables").style.display = "none";
    $("#mset").show();
    $("#massset").show();
    $("#nset").hide();
    $("#qMass").hide();
    $("#qRpm").hide();
    $("#questionsSet").show();
    $("#qHeight").show();
    document.getElementById("variables").style.display = "block";
    document.getElementById("comments").style.width = "100%";
    document.getElementsByClassName("circuit-dia")[0].style.display = "none";
    // document.getElementById('commentboxleft').style.width = '300px';
    document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Constant Variables</span>:<br> M = 20kg";
    document.getElementById("commentboxright").innerHTML = "";
}
//Set questions for mass calculation
function calculateMass() {
    document.getElementById("variables").style.display = "none";
    $("#mset").hide();
    $("#massset").hide();
    $("#nset").hide();
    $("#qHeight").hide();
    $("#qRpm").hide();
    $("#questionsSet").show();
    $("#qMass").show();
    gr = 0;
    document.getElementById("graph").style.display = "block";
    document.getElementById("eqn").style.display = "none";
    sliderGraph();
    // document.getElementById('commentboxleft').style.width = '300px';
    document.getElementsByClassName("circuit-dia")[0].style.display = "block";
    document.getElementById("graph").style.visibility = "visible";
    document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Constant Variables</span>:<br>M = 20kg";
    document.getElementById("commentboxright").innerHTML = "";
    $('#comments').css('width', '100%');
    if ($(window).width() < 944) {
        // Apply styles for small screens
        $('#comments').css('width', '100%');
        console.log("saiiiii");
      } 
      else {
        // Apply styles for larger screens
        $('#comments').css('width', '200%');
        console.log("gello");
      }
}
//Set questions for rpm calculation
function calculateRpm() {
    $("#massset").show();
    $("#nset").show();
    $("#mset").hide();
    $("#qMass").hide();
    $("#qHeight").hide();
    $("#questionsSet").show();
    $("#qRpm").show();
    document.getElementById("variables").style.display = "block";
    document.getElementById("comments").style.width = "100%";
    document.getElementsByClassName("circuit-dia")[0].style.display = "none";
    // document.getElementById('commentboxleft').style.width = '300px';
    document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Constant Variables</span>:<br>M = 20kg";
    document.getElementById("commentboxright").innerHTML = "";
}
//To identify parts
function identifyingParts() {
    document.getElementById("commentboxleft").innerHTML = "Parts of Governor Selected";
}
//To exit from experiments
function exitExperiments() {
    document.getElementById("canvas-container").style.display = "none";
    document.getElementById("simscreen").style.visibility = "hidden";
    document.getElementById("graph").style.visibility = "hidden";
    document.getElementById("variables").style.display = "none";
    document.getElementById("comments").style.width = "200%";
    if (mediaQuery4.matches) {
        document.getElementById("comments").style.width = "100%";
    }
    document.getElementById("myImg").style.visibility = "hidden";
    document.getElementById("partImage").style.visibility = "hidden";
    document.getElementById("dropDownSet").style.display = "none";
    document.getElementById("fb").style.visibility = "hidden";
    document.getElementById("eqn").style.visibility = "hidden";
    document.getElementById("cb").style.visibility = "hidden";
    document.getElementById("sg").style.visibility = "hidden";
    document.getElementById("exp").style.display = "inline-block";
    document.getElementsByClassName("circuit-dia")[0].style.display = "block";
    document.getElementById('commentboxright').innerHTML = "";
    // document.getElementById('commentboxleft').style.width = '570px';
    document.getElementById("commentboxleft").innerHTML = "";
    document.getElementById("exitExperiment").style.display = "none";
    document.getElementById("resetExperiment").style.display = "none";
    document.getElementById("goToExperiment").style.display = "none";
    // document.getElementById("graphbutton").classList.toggle("graphDisabled");
    // document.getElementById("graphListItem").classList.toggle("graphDisabled");
    document.getElementById("questionsSet").style.display = "none";
    document.getElementById("calcHeight").value = "";
    document.getElementById("calcMass").value = "";
    document.getElementById("calcRpm").value = "";
    document.getElementById("startExperiment").style.display = "inline-block";
    document.getElementById("goSimulator").style.display = "inline-block";
    $("input:radio[name='expt']").prop('checked', false);
    resetValues();
    resetSelect();
}
//Back to Simulator
function goToSimulator() {
    gr = 0;
    exptSelected = 0;
    randCal = 0;
    clearGraph();
    document.getElementById("simscreen").style.visibility = "visible";
    document.getElementById("canvas-container").style.display = "block";
    document.getElementById("variables").style.display = "block";
    document.getElementById("myImg").style.visibility = "visible";
    document.getElementById("fb").style.visibility = "visible";
    document.getElementById("cb").style.visibility = "visible";
    document.getElementById("cb").checked = false;
    document.getElementById("sg").style.visibility = "visible";
    document.getElementById("eqn").style.visibility = "hidden";
    document.getElementById("partImage").style.visibility= "hidden";
    document.getElementById("dropDownSet").style.display = "none";
    document.getElementById("exp").style.display = "none";
    document.getElementById("commentboxleft").innerHTML = "";
    document.getElementById("goToExperiment").style.display = "inline-block";
    document.getElementById("graphbutton").classList.toggle("graphDisabled");
    // document.getElementById("graphListItem").classList.toggle("graphDisabled");
    document.getElementById("startExperiment").style.display = "none";
    document.getElementById("exitExperiment").style.display = "none";
    document.getElementById("goSimulator").style.display = "none";
    document.getElementById("questionsSet").style.display = "none";
    document.getElementById("comments").style.width = "100%";
    document.getElementById("calcHeight").value = "";
    document.getElementById("calcMass").value = "";
    document.getElementById("calcRpm").value = "";
    document.getElementById('commentboxright').innerHTML = "";
    // document.getElementById('commentboxleft').style.width = '570px';
    document.getElementById('commentboxleft').innerHTML = "<center>s stands for shaft; change rpm to see the change in height </center>";
    $("input:radio[name='expt']").prop('checked', false);
    enableVariables();
    resetValues();
}
function clearGraph() {
    datapoints1 = [];
    document.getElementById("graph").innerHTML = "";
}
function enableVariables() {

    $("#nspinner").spinner("enable");
    $("#nslider").slider("enable");
    $("#massspinner").spinner("enable");
    $("#massslider").slider("enable");
    $("#massspinner").spinner("enable");
    $("#massslider").slider("enable");
    $("#massset").show();
    $("#nset").show();
    $("#mset").show();
}
//To evaluate Height
function evalHeight() {
    
    userHeight = document.getElementById("calcHeight").value;
    randomRpm = n;
    randomOmega = (2 * 3.14 * (randomRpm)) / 600;
    randomHeight = (m + m1) * 9.81 / (randomOmega * randomOmega * m) * 10;//calculates h value
    // console.log(randomHeight-0.05) 
    if (userHeight == randomHeight.toFixed(3) || (userHeight >= (randomHeight - 0.03) && userHeight <= (randomHeight + 0.03))) {
        document.getElementById("hspan").innerHTML = "<span style='color:green'>&#10004;</span>";
    } else {
        document.getElementById("hspan").innerHTML = "<span style='color:red'>&#10008;</span>";
        document.getElementById("commentboxright").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Height(mm) = " + randomHeight.toFixed(3);
    }
}
//To evaluate Mass
function evalMass() {
    
    userMass = document.getElementById("calcMass").value;
    if (userMass == m) {
        document.getElementById("mspan").innerHTML = "<span style='color:green'>&#10004;</span>";
    } else {
        document.getElementById("mspan").innerHTML = "<span style='color:red'>&#10008;</span>";
        document.getElementById("commentboxright").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Mass(kg) = " + m;
    }
}
//To evaluate Rpm
function evalRpm() {
    
    userRpm = document.getElementById("calcRpm").value;
    if (userRpm == n) {
        document.getElementById("rspan").innerHTML = "<span style='color:green'>&#10004;</span>";
    } else {
        document.getElementById("rspan").innerHTML = "<span style='color:red'>&#10008;</span>";
        document.getElementById("commentboxright").innerHTML = "<span style='color:green'>Correct Answer:</span><br>n(rpm) = " + n;
    }
}
function resetValues() {
    userHeight = 0;
    userMass = 0;
    userRpm = 0;
    document.getElementById("hspan").innerHTML = "";
    document.getElementById("mspan").innerHTML = "";
    document.getElementById("rspan").innerHTML = "";
    document.getElementById("commentboxright").innerHTML = "";
}
function resetExperiments() {
    $("#questionsSet").hide();
    $("#qHeight").hide();
    $("#qMass").hide();
    $("#qRpm").hide();
    $("#massset").hide();
    $("#nset").hide();
    $("#mset").hide();
    document.getElementById("graph").style.display = "none";
    resetValues();
    selectExperiments();
}
function evaluateParts(ele) {
    var userSelected = ele.selectedIndex;
    var selectedList = ele.id;
    countSpan = 1;
    switch (ele.id) {
        case "pivot": if (userSelected == dropArray[0]) {
            spanHighlight("dropPivot", "<span style='color:green'>&#10004;</span>", ansSpan0);
        } else {
            spanHighlight("dropPivot", "<span style='color:red'>&#10008;</span>", ansSpan0);
        }
            break;
        case "flyBall": if (userSelected == dropArray[1]) {
            spanHighlight("dropFlyBall", "<span style='color:green'>&#10004;</span>", ansSpan1);
        } else {
            spanHighlight("dropFlyBall", "<span style='color:red'>&#10008;</span>", ansSpan1);
        }
            break;

        case "sleeve": if (userSelected == dropArray[2]) {
            spanHighlight("dropSleeve", "<span style='color:green'>&#10004;</span>", ansSpan2);
        } else {
            spanHighlight("dropSleeve", "<span style='color:red'>&#10008;</span>", ansSpan2);
        }
            break;
        case "spindle": if (userSelected == dropArray[3]) {
            spanHighlight("dropSpindle", "<span style='color:green'>&#10004;</span>", ansSpan3);
        } else {
            spanHighlight("dropSpindle", "<span style='color:red'>&#10008;</span>", ansSpan3);
        }
            // document.getElementById("dropSpindle").style.left = "104px";
            break;
        case "connectingRod": if (userSelected == dropArray[4]) {
            spanHighlight("dropConnectingRod", "<span style='color:green'>&#10004;</span>", ansSpan4);
        } else {
            spanHighlight("dropConnectingRod", "<span style='color:red'>&#10008;</span>", ansSpan4);
        }
            // document.getElementById("dropConnectingRod").style.left = "27px";
            break;
        case "arm": if (userSelected == dropArray[5]) {
            spanHighlight("dropArm", "<span style='color:green'>&#10004;</span>", ansSpan5);
        } else {
            spanHighlight("dropArm", "<span style='color:red'>&#10008;</span>", ansSpan5);
        }
            // document.getElementById("dropArm").style.left = "70px";
            break;

    }

}
function resetSelect() {
    // document.getElementById("pivot").selectedIndex = "0";
    // document.getElementById("flyBall").selectedIndex = "0";
    // document.getElementById("connectingRod").selectedIndex = "0";
    // document.getElementById("spindle").selectedIndex = "0";
    // document.getElementById("sleeve").selectedIndex = "0";
    // document.getElementById("arm").selectedIndex = "0";
    // document.getElementById("dropSpindle").style.left = "117px";
    // document.getElementById("dropConnectingRod").style.left = "38px";
    // document.getElementById("dropArm").style.left = "83px";
    ansSpan0.innerHTML = " ";
    ansSpan1.innerHTML = " ";
    ansSpan2.innerHTML = " ";
    ansSpan3.innerHTML = " ";
    ansSpan4.innerHTML = " ";
    ansSpan5.innerHTML = " ";
}
function spanHighlight(divTag, ans, ansSpan) {
    ansSpan.innerHTML = " ";
    ansSpan.innerHTML = ans;
    document.getElementById(divTag).appendChild(ansSpan);
}