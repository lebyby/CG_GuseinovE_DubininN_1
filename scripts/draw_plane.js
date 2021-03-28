let canv_P = document.getElementById("canvasPlane");
canv_P.width = 1600;
canv_P.height = 600;
//canv_P.strokeStyle = 'rgb(163,212,224)';
let ctx_P = canv_P.getContext('2d');
ctx_P.fillRect(0, 0, canv_P.width, canv_P.height);

let x1_P = document.getElementById("xPoint1");
let y1_P = document.getElementById("yPoint1");
let z1_P = document.getElementById("zPoint1");

let x2_P = document.getElementById("xPoint2");
let y2_P = document.getElementById("yPoint2");
let z2_P = document.getElementById("zPoint2");

let x3_P = document.getElementById("xPoint3");
let y3_P = document.getElementById("yPoint3");
let z3_P = document.getElementById("zPoint3");

let x4_P = document.getElementById("xPoint4");
let y4_P = document.getElementById("yPoint4");
let z4_P = document.getElementById("zPoint4");

ctx_P.lineWidth = 2;

//система координат

ctx_P.beginPath();
//xz
ctx_P.moveTo(400, 50);
ctx_P.lineTo(400, 300);
ctx_P.moveTo(100, 300);
ctx_P.lineTo(400, 300);
//yz
ctx_P.moveTo(700, 50);
ctx_P.lineTo(700, 300);
ctx_P.lineTo(1000, 300);
//xy
ctx_P.moveTo(1350, 550);
ctx_P.lineTo(1350, 300);
ctx_P.lineTo(1070, 300);

ctx_P.strokeStyle="orange";
ctx_P.font = "25px Verdana";
ctx_P.strokeText("X",80,290);
ctx_P.strokeText("Z",375,55);

ctx_P.strokeText("Z",710,55);
ctx_P.strokeText("Y",1000,290);

ctx_P.strokeText("Y",1325,555);
ctx_P.strokeText("X",1050,325);
ctx_P.stroke();
ctx_P.closePath();


function draw_plane(ctx_P, x1_P, y1_P, z1_P, x2_P, y2_P, z2_P, x3_P, y3_P, z3_P, x4_P, y4_P, z4_P) {

    ctx_P.clearRect(0, 0, canv_P.width, canv_P.height);
    ctx_P.fillRect(0, 0, canv_P.width, canv_P.height);

    //система координат
    ctx_P.beginPath();
    //xz
    ctx_P.moveTo(400, 50);
    ctx_P.lineTo(400, 300);
    ctx_P.moveTo(100, 300);
    ctx_P.lineTo(400, 300);
    //yz
    ctx_P.moveTo(700, 50);
    ctx_P.lineTo(700, 300);
    ctx_P.lineTo(1000, 300);
    //xy
    ctx_P.moveTo(1350, 550);
    ctx_P.lineTo(1350, 300);
    ctx_P.lineTo(1070, 300);

    ctx_P.strokeStyle = "orange";
    ctx_P.font = "25px Verdana";
    ctx_P.strokeText("X", 80, 290);
    ctx_P.strokeText("Z", 375, 55);

    ctx_P.strokeText("Z", 710, 55);
    ctx_P.strokeText("Y", 1000, 290);

    ctx_P.strokeText("Y", 1325, 555);
    ctx_P.strokeText("X", 1050, 325);
    ctx_P.stroke();
    ctx_P.closePath();

    ctx_P.beginPath();
    ctx_P.strokeStyle = "#1ac5e3";
    //xz
    ctx_P.moveTo(400 - x1_P.value, 300 - z1_P.value);
    ctx_P.lineTo(400 - x2_P.value, 300 - z2_P.value);
    ctx_P.lineTo(400 - x3_P.value, 300 - z3_P.value);
    ctx_P.lineTo(400 - x4_P.value, 300 - z4_P.value);
    ctx_P.lineTo(400 - x1_P.value, 300 - z1_P.value);
    ctx_P.lineTo(400 - x3_P.value, 300 - z3_P.value);
    ctx_P.moveTo(400 - x2_P.value, 300 - z2_P.value);
    ctx_P.lineTo(400 - x4_P.value, 300 - z4_P.value);
    ctx_P.stroke();
    ctx_P.closePath();

    // название вершины
    ctx_P.beginPath();
    ctx_P.strokeStyle = "blue";
    ctx_P.font = "18px Verdana";
    ctx_P.strokeText("A", 400 - x1_P.value, 300 - z1_P.value);
    ctx_P.strokeText("B", 400 - x2_P.value, 300 - z2_P.value);
    ctx_P.strokeText("C", 400 - x3_P.value, 300 - z3_P.value);
    ctx_P.strokeText("D", 400 - x4_P.value, 300 - z4_P.value);
    ctx_P.stroke();
    ctx_P.closePath();


    //фигура yz
    ctx_P.beginPath();
    ctx_P.strokeStyle = "green";
    //yz
    ctx_P.moveTo(Number(y1_P.value) + 700, 300 - z1_P.value);
    ctx_P.lineTo(Number(y2_P.value) + 700, 300 - z2_P.value);
    ctx_P.lineTo(Number(y3_P.value) + 700, 300 - z3_P.value);
    ctx_P.lineTo(Number(y4_P.value) + 700, 300 - z4_P.value);
    ctx_P.lineTo(Number(y1_P.value) + 700, 300 - z1_P.value);
    ctx_P.lineTo(Number(y3_P.value) + 700, 300 - z3_P.value);
    ctx_P.moveTo(Number(y2_P.value) + 700, 300 - z2_P.value);
    ctx_P.lineTo(Number(y4_P.value) + 700, 300 - z4_P.value);
    ctx_P.stroke();
    ctx_P.closePath();

    // название вершины
    ctx_P.beginPath();
    ctx_P.strokeStyle = "blue";
    ctx_P.font = "18px Verdana";
    ctx_P.strokeText("A", Number(y1_P.value) + 700, 300 - z1_P.value);
    ctx_P.strokeText("B", Number(y2_P.value) + 700, 300 - z2_P.value);
    ctx_P.strokeText("C", Number(y3_P.value) + 700, 300 - z3_P.value);
    ctx_P.strokeText("D", Number(y4_P.value) + 700, 300 - z4_P.value);
    ctx_P.stroke();
    ctx_P.closePath();

    //фигура xy
    ctx_P.beginPath();
    ctx_P.strokeStyle = "#ccc";
    ctx_P.moveTo(1350 - x1_P.value, 300 + Number(y1_P.value));
    ctx_P.lineTo(1350 - x2_P.value, 300 + Number(y2_P.value));
    ctx_P.lineTo(1350 - x3_P.value, 300 + Number(y3_P.value));
    ctx_P.lineTo(1350 - x4_P.value, 300 + Number(y4_P.value));
    ctx_P.lineTo(1350 - x1_P.value, 300 + Number(y1_P.value));
    ctx_P.lineTo(1350 - x3_P.value, 300 + Number(y3_P.value));
    ctx_P.moveTo(1350 - x2_P.value, 300 + Number(y2_P.value));
    ctx_P.lineTo(1350 - x4_P.value, 300 + Number(y4_P.value));
    ctx_P.stroke();
    ctx_P.closePath();

    // название вершины
    ctx_P.beginPath();
    ctx_P.strokeStyle = "blue";
    ctx_P.font = "18px Verdana";
    ctx_P.strokeText("A", 1350 - x1_P.value, 300 + Number(y1_P.value));
    ctx_P.strokeText("B", 1350 - x2_P.value, 300 + Number(y2_P.value));
    ctx_P.strokeText("C", 1350 - x3_P.value, 300 + Number(y3_P.value));
    ctx_P.strokeText("D", 1350 - x4_P.value, 300 + Number(y4_P.value));
    ctx_P.stroke();
    ctx_P.closePath();
}