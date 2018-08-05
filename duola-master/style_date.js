!function () {
    window.code = `/*
 *  面试官，你好呀！
 *  
 * 
 *  很高兴您能够腾出宝贵的时间来看我的作品！
 *  
 *  好啦，我们开始吧！
 *
 *  今天我们用 CSS 来画一只可爱的机器猫!
 */

/* 首先，先将画板调成蓝色 */

body{
    background: #87B9F6;
}

/* 然后，准备一张白纸 */




*{margin: 0;padding: 0;}
#doraemon{
  position:fixed;
  margin-left:400px;  
  margin-top:100px;
  float:left;
  width:500px;
  z-index:12;
}
.head{
  position:relative;
  width:310px;
  height:300px;
  border-radius:146px;
  background:#07beea; 
  border: 2px solid;
  box-shadow:-5px 10px 15px rgba(0,0,0,0.45);
  background: -webkit-gradient(linear, right top, left bottom, from(#fff) ,color-stop(0.20, #07beea), color-stop(0.73, #10a6ce),color-stop(0.95, #000), to(#444));  
  background: -moz-linear-gradient(right top, #fff,#07beea 20%, #10a6ce 73% ,#000 95% ,#000 155%); 
}
.head::after{
  content:"";
  width:60px;
  height:60px;
  box-shadow:-60px 60px 60px #fff;
  border-radius:50px;
  position:absolute;
  top:-60px;
  left:300px;
  opacity:0.7;
}
.eye-left {
  position: absolute;
  top:calc(25% - 35px);
  width:72px;
  height:83px;
  border-radius:35px;
  border:2px solid #000;
  background-color: #fff;
  z-index: 6;
  left: calc(50% - 73px);
}
.eye-left::after {
  content:"";
  width: 15px;
  height: 15px;
  background-color: #333;
  border-radius:10px;
  position: absolute;
  top: calc(25% + 33px);
  left: calc(50% + 10px);
}
.eye-right {
  position: absolute;
  top:calc(25% - 35px);
  width:72px;
  height:83px;
  border-radius:35px;
  border:2px solid #000;
  background-color: #fff;
  z-index: 6;
  left: 50%;
}
.eye-right::after {
  content:"";
  width: 15px;
  height: 15px;
  background-color: #333;
  border-radius:10px;
  position: absolute;
  top: calc(25% + 33px);
  left: calc(25% - 10px);
}
.face {
  position: absolute;
  top:25%;
  left: 8%;
  width:264px;
  height:196px;
  border-radius:150px;
  border: 2px solid;
  background-color: #fff;
  z-index:5 ;
  background: -webkit-gradient(linear, right top, left bottom, from(#fff),color-stop(0.75,#fff),color-stop(0.83,#eee),color-stop(0.90,#999),color-stop(0.95,#444), to(#000)); 
  background: -moz-linear-gradient(right top, #fff,#fff 75%, #eee 83%,#999 90%,#444 95%, #000); 
}
.nose {
  width: 35px;
  height: 35px;
  border-radius:20px;
  background-color: #c93e00;
  position: absolute;
  border: 2px solid #333;
  top:calc(25% + 40px);
  left: calc(50% - 18px);
  z-index: 7;
}
.nose::after {
  content:"";
  display: block;
  width:10px;
  height:10px;
  border-radius:5px;
  box-shadow:19px 8px 5px #fff;
}
.philtrum{
  content:"";
  width: 3px;
  height: 90px;
  background-color: #333;
  position: absolute;
  top:50%;
  left:50%;
  z-index: 6;
}
.mouth {
  width: 240px;
  height: 500px;
  border-bottom: 3px solid;
  border-radius: 0 0 120px 120px;
  position: absolute;
  top:-87%;
  left:calc(10% + 7px);
  z-index: 5;
}
.mouth::after {
  content:"";
  display: block;
  width: 245px;
  height: 80px;
  margin-top: calc(165% - 5px);
  background-color: #fff;
  border-radius:0 25px 25px  50px;
}

.whiskers-top {
  background:#333;
  height:2px;
  width:60px;
  position:absolute;
  top:50%;
  transform: rotate(20deg);
  left: 15%;
  z-index: 5;
}
.whiskers-middle {
  background:#333;
  height:2px;
  width:60px;
  position:absolute;
  top:56%;
  left: 15%;
  z-index: 5;
}
.whiskers-bottom {
  background:#333;
  height:2px;
  width:60px;
  position:absolute;
  top:62%;
  transform: rotate(-20deg);
  left: 15%;
  z-index: 5;
}
.whiskers-top::after {
  content:"";
  background:#333;
  height:2px;
  width:60px;
  position:absolute;
  top:-55px;
  left:150px;
  transform: rotate(140deg);
}
.whiskers-middle::after {
  content:"";
  background:#333;
  height:2px;
  width:60px;
  position:absolute;
  top:56%;
  left: 265%;
}
.whiskers-bottom::after {
  content:"";
  background:#333;
  height:2px;
  width:60px;
  position:absolute;
  transform: rotate(-140deg);
  left: 150px;
  bottom:-55px
}
.choker {
  position: relative;
  width: 310px;
  top:-35px;
}
.belt {
  width:230px;
  height:20px;
  border:#000 solid 2px;
  background:#ca4100;
  border-radius:10px; 
  position: absolute;
  left:calc(50% - 115px);
  z-index: 7;
  background: -webkit-gradient(linear, left top, left bottom, from(#ca4100), to(#800400));  
  background: -moz-linear-gradient(top, #ca4100, #800400); 
}
.belt::after {
  content:"";
  position: absolute;
  width: 40px;
  height: 30px;
  border-bottom-left-radius:30px;
  box-shadow:-30px 30px 17px rgba(0,0,0,0.2);
  bottom:24px;
  left:15px;
}
.bell {
  width:40px;
  height:40px;
  border-radius:40px;
  border:2px solid #000;
  background:#f9f12a;
  box-shadow:-5px 5px 10px rgba(0,0,0,0.25);
  position: absolute;
  top:10px;
  left:calc(50% - 20px);
  z-index: 8;
  background: -webkit-gradient(linear, left top, left bottom, from(#f9f12a),color-stop(0.5, #e9e11a), to(#a9a100)); 
  background: -moz-linear-gradient(top, #f9f12a, #e9e11a 75%,#a9a100);   
}
.bell-line {
  width: 39px;
  height: 2px;
  border: 2px solid;
  position: absolute;
  top:12px;
  left:-2px;
  border-radius:4px;
}
.bell-circle {
  width: 12px;
  height:10px;
  border-radius:5px;
  background:#000;
  position:relative;
  top:23px;
  left:calc(50% - 6px);
}
.bell-circle::after {
  content:"";
  width: 3px;
  height: 9px;
  background-color: #333;
  position: absolute;
  left: 5px;
  top: 10px;
}
.bell::after {
  content:"";
  display: block;
  width:10px;
  height:10px;
  border-radius:10px;
  box-shadow:19px 8px 5px #fff;
  position:relative;
  opacity:0.7;
  bottom:12px;
  left: 6px;
}
.body {
  width: 215px;
  height: 169px;
  background-color: red;
  position: relative;
  top:-12px;
  left:47px;
  background:#07beea;
  background: -webkit-gradient(linear, right top, left top, from(#07beea),color-stop(0.5, #0073b3),color-stop(0.75,#00b0e0), to(#0096be));  
  background: -moz-linear-gradient(right, #07beea, #0073b3 50%,#0096be 75%,#00b0e0 ,#0096be 100% ,#333 114%); 
  border:#333 2px solid;
}
.body::after {
  content:"";
  width:30px;
  height:200px;
  box-shadow:-30px 100px 20px rgba(0,0,0,0.4);
  position: absolute;
  bottom:70px;
  left:16px;
  z-index:-2;
}
.belly {
  width:170px;
  height:170px;
  border-radius:85px;
  border:2px solid #000;
  background:#FFF;
  position: absolute;
  top:-40px;
  left:20px;
  background: -webkit-gradient(linear, right top, left bottom, from(#fff),color-stop(0.75,#fff),color-stop(0.83,#eee),color-stop(0.90,#999),color-stop(0.95,#444), to(#000)); 
  background: -moz-linear-gradient(right top, #fff,#fff 75%, #eee 83%,#999 90%,#444 95%, #000); 
}
.pocket {
  width:130px;
  height:70px;
  border-radius:0 0 85px 85px;
  border:2px solid #000;
  background:#fff;
  position: absolute;
  left: calc(50% - 68px);
  top:45px;
  background: -webkit-gradient(linear, right top, left bottom, from(#fff),color-stop(0.70,#fff),color-stop(0.75,#f8f8f8),color-stop(0.80,#eee),color-stop(0.88,#ddd), to(#fff));  
  background: -moz-linear-gradient(right top, #fff, #fff 70%,#f8f8f8 75%,#eee 80%,#ddd 88% , #fff); 
}
.pocket::after{
  content:"";
  width:110px;
  height:185px;
  border-radius:40px 0 0;
  box-shadow:-130px 100px 15px rgba(0,0,0,0.35);
  opacity:0.6;
  transform: rotate(-20deg);  
  position: absolute;
  top:-190px;
  left:12px;
}
.arm-left {
  position: absolute;
  width:80px;
  height:50px;
  background:#0096be;
  border:solid 1px #000;
  transform:rotate(145deg);
  left:-60px;
  top:15px;
  z-index: -1;
  box-shadow:5px -7px 10px rgba(0,0,0,0.25);
}
.hand-left {
  position:absolute;
  width:60px;
  height:60px;
  border-radius:30px;
  border:2px solid #000;
  background:#fff;
  background: -webkit-gradient(linear, right top, left bottom, from(#fff),color-stop(0.5,#fff),color-stop(0.70,#eee),color-stop(0.8,#ddd), to(#999)); 
  background: -moz-linear-gradient(right top, #fff, #fff 50%, #eee 70%, #ddd 80%,#999); 
  top:38px;
  left: -90px;
}
.hand-left::after {
  content:"";
  position: absolute;
  width: 5px;
  height: 45px;
  background-color:#007796;
  left:85px;
  bottom:55px;
}
.arm-right {
  position: absolute;
  width:80px;
  height:50px;
  background:#07beea;
  border:solid 1px #000;
  transform:rotate(35deg);
  left:calc(100% - 20px);
  top:15px;
  z-index: -1;
  box-shadow:5px 5px 10px rgba(0,0,0,0.3);
}
.hand-right {
  position:absolute;
  width:60px;
  height:60px;
  border-radius:30px;
  border:2px solid #000;
  background:#fff;
  background: -webkit-gradient(linear, right top, left bottom, from(#fff),color-stop(0.5,#fff),color-stop(0.70,#eee),color-stop(0.8,#ddd), to(#999)); 
  background: -moz-linear-gradient(right top, #fff, #fff 50%, #eee 70%, #ddd 80%,#999); 
  top:38px;
  left:245px;
}
.hand-right::after {
  content:"";
  position: absolute;
  width: 5px;
  height: 45px;
  background-color:#07BDE9;
  right:90px;
  bottom:55px;
}
.foot-left {
  position: absolute;
  width:120px;
  height:30px;
  background:#fff;
  background: -webkit-gradient(linear, right top, left bottom, from(#fff),color-stop(0.75,#fff),color-stop(0.85,#eee), to(#999)); 
  background: -moz-linear-gradient(right top, #fff,#fff 75%, #eee 85%, #999); 
  border:solid 2px #333;
  border-radius:80px 60px 60px 40px;
  top:100%;
  left:-10%;
}
.foot-right {
  position: absolute;
  width:120px;
  height:30px;
  background:#fff;
  background: -webkit-gradient(linear, right top, left bottom, from(#fff),color-stop(0.75,#fff),color-stop(0.85,#eee), to(#999)); 
  background: -moz-linear-gradient(right top, #fff,#fff 75%, #eee 85%, #999); 
  border:solid 2px #333;
  border-radius:60px 80px 40px 60px;
  top:100%;
  right:-10%;
}
.foot-left::after {
  content:"";
  position: absolute;
  width: 26px;
  height: 13px;
  background-color: #fff;
  border: 2px solid #000;
  border-bottom: 0;
  border-radius:24px 24px 0 0;
  top:-14px;
  left:113px;
}
.foot-right::after {
  content:"";
  width:30px;
  height:200px;
  box-shadow:-50px 100px 15px rgba(0,0,0,0.25);
  position: absolute;
  bottom:120px;
  left:135px;
  z-index: -2;
}



 */
 `;
}();