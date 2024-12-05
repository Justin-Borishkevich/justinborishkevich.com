let img;

function setup() {
//Canvas size
createCanvas(600, 400);

img = loadImage('images/Doge.jpg');
}

function draw() {
//Background color
background("#4C4348");//"#ADB0AB"

// Set shadow properties
drawingContext.shadowBlur = 30;          // The amount of blur for the shadow
drawingContext.shadowColor = color(0, 0, 0, 150); // The shadow color (black with transparency)
// Adjust shadow position based on the cursor
drawingContext.shadowOffsetX = (300 - mouseX)/4;  // Horizontal offset based on mouseX
drawingContext.shadowOffsetY = (200 - mouseY)/4; // Vertical offset based on mouseY
  
//DOGE
image(img, 130, 100, 340, 200);

drawingContext.shadowBlur = 50;
drawingContext.shadowColor = '#FFECC2';
drawingContext.shadowOffsetX = 0;  // Horizontal offset based on mouseX
drawingContext.shadowOffsetY = 0; // Vertical offset based on mouseY

fill(255, 255, 0);  // Yellow color for the "light source"
noStroke(); // Remove stroke for a cleaner look
ellipse(mouseX, mouseY, 20, 20); // Circle representing the light source

  // Draw the bulb (a circle)
  fill("#FFFCD6");  // Yellow color for the lightbulb
  noStroke();
  ellipse(mouseX, mouseY, 50, 100);  // Bulb shape

  // Draw the filament (a small line in the middle)
  stroke("#FFEF0A");
  strokeWeight(4);
  quad(mouseX - 5, mouseY - 20, mouseX + 2, mouseY - 6, mouseX + 8, mouseY + 30, mouseX - 3, mouseY + 30);

  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = '';

  // Draw the base of the lightbulb (a rectangle)
  fill("#FDF3ED");
  noStroke();
  rect(mouseX - 20, mouseY + 40, 40, 100, 10); // Base of the bulb

}

