let canv_F = document.getElementById("canvasFigure");
canv_F.width = 800;
canv_F.height = 500;
canv_F.strokeStyle = 'rgb(163,212,224)';
let ctx_F = canv_F.getContext('2d');
ctx_F.fillRect(0, 0, canv_F.width, canv_F.height);

let x1_F = document.getElementById("xPoint1");
let y1_F = document.getElementById("yPoint1");
let z1_F = document.getElementById("zPoint1");

let x2_F = document.getElementById("xPoint2");
let y2_F = document.getElementById("yPoint2");
let z2_F = document.getElementById("zPoint2");

let x3_F = document.getElementById("xPoint3");
let y3_F = document.getElementById("yPoint3");
let z3_F = document.getElementById("zPoint3");

let x4_F = document.getElementById("xPoint4");
let y4_F = document.getElementById("yPoint4");
let z4_F = document.getElementById("zPoint4");

ctx_F.lineWidth = 2;

//система координат

ctx_F.beginPath();
ctx_F.moveTo(400, 10);
ctx_F.lineTo(400, 250);
ctx_F.lineTo(560, 410);
ctx_F.moveTo(400, 250);
ctx_F.lineTo(100, 250);

ctx_F.strokeStyle="orange";
ctx_F.font = "25px Verdana";
ctx_F.strokeText("X",100,240);
ctx_F.strokeText("Y",560,400);
ctx_F.strokeText("Z",375,25);
ctx_F.stroke();
ctx_F.closePath();

let xa_F;
let za_F;
let xb_F;
let zb_F;
let xc_F;
let zc_F;
let xd_F;
let zd_F;

function draw_figure(ctx_F, x1_F, y1_F, z1_F, x2_F, y2_F, z2_F, x3_F, y3_F, z3_F, x4_F, y4_F, z4_F){

    ctx_F.clearRect(0, 0, canv_F.width, canv_F.height);
    ctx_F.fillRect(0, 0, canv_F.width, canv_F.height);

    //система координат
    ctx_F.beginPath();
    ctx_F.moveTo(400, 10);
    ctx_F.lineTo(400, 250);
    ctx_F.lineTo(560, 410);
    ctx_F.moveTo(400, 250);
    ctx_F.lineTo(100, 250);

    ctx_F.strokeStyle="orange";
    ctx_F.font = "25px Verdana";
    ctx_F.strokeText("X",100,240);
    ctx_F.strokeText("Y",560,400);
    ctx_F.strokeText("Z",375,25);
    ctx_F.stroke();
    ctx_F.closePath();

    //фигура

    xa_F = 400 - x1_F.value + Math.sin(45)*y1_F.value;
    za_F = 250 - z1_F.value + Math.sin(45)*y1_F.value;

    xb_F = 400 - x2_F.value + Math.sin(45)*y2_F.value;
    zb_F = 250 - z2_F.value + Math.sin(45)*y2_F.value;

    xc_F = 400 - x3_F.value + Math.sin(45)*y3_F.value;
    zc_F = 250 - z3_F.value + Math.sin(45)*y3_F.value;

    xd_F = 400 - x4_F.value + Math.sin(45)*y4_F.value;
    zd_F = 250 - z4_F.value + Math.sin(45)*y4_F.value;

    ctx_F.beginPath();
    ctx_F.strokeStyle = "red";
    ctx_F.moveTo(xa_F, za_F);
    ctx_F.lineTo(xb_F, zb_F);
    ctx_F.moveTo(xa_F, za_F);
    ctx_F.lineTo(xc_F, zc_F);
    ctx_F.moveTo(xa_F, za_F);
    ctx_F.lineTo(xd_F, zd_F);
    ctx_F.lineTo(xb_F, zb_F);
    ctx_F.moveTo(xd_F, zd_F);
    ctx_F.lineTo(xc_F, zc_F);
    ctx_F.lineTo(xb_F, zb_F);

    ctx_F.stroke();
    ctx_F.closePath();

    // название вершины
    ctx_F.beginPath();
    ctx_F.strokeStyle="blue";
    ctx_F.font = "18px Verdana";
    ctx_F.strokeText("A",xa_F,za_F);
    ctx_F.strokeText("B",xb_F,zb_F);
    ctx_F.strokeText("C",xc_F,zc_F);
    ctx_F.strokeText("D",xd_F,zd_F);
    ctx_F.stroke();
    ctx_F.closePath();
}