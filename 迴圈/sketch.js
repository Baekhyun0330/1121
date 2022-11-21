
function setup() {
  createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
  rectMode(CENTER)//設定方塊座標點以中心點為座標
  background(0);//背景顏色為黑色
  noFill()//不充滿顏色
  stroke(255)//框線為白色
  var w= mouseX/10
  
  for(var j=0;j<height/50;j++)
  {
  for(var i=0;i<width/50;i++)
  {
  stroke("#ff595e")
  ellipse(25+50*i,25+50*j,mouseX/10)//座標(25,25)畫一個直徑50的圓
  stroke("#ff7b00")
  rect(25+50*i,25+50*j,mouseX/4)
  stroke("#012a4a")
  ellipse(50+50*i,50+50*j,25)//右下角的小圓
  }
  }
}