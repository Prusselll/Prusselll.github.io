$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
   createPlatform(0,140,505,30);
   createPlatform(510,140,700,30);
   createPlatform(1200,140,40,450);
   createPlatform(1050,300,150,30);
   createPlatform(350,300,695,30);
   createPlatform(0,710,1500,30);
   createPlatform(250,560,950,30);
   createPlatform(0,650,120,10);
   createPlatform(0,420,675,30);
   createPlatform(420,440,350,10);
   createPlatform(0,350,175,10);
  

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("VBucks", 330,350,0.5,1); 
    createCollectable("VBucks", 600,380,0.5,1); 
    createCollectable("VBucks", 10,300,0.5,1);
    createCollectable("VBucks", 1100,250,0.5,1);
    createCollectable("VBucks", 1100,520,0.5,1);
    createCollectable("VBucks", 700,520,0.5,1);
    createCollectable("VBucks", 1200,650,0.5,1);
    createCollectable("VBucks", 800,650,0.5,1);
    createCollectable("VBucks", 500,650,0.5,1);
    createCollectable("VBucks", 200,650,0.5,1);
    createCollectable("VBucks", 330,520,0.5,1);
    createCollectable("VBucks", 0,610,0.5,1);



    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("top", 250,890)
    createCannon("top", 550,890)
    createCannon("top", 850,890)
    createCannon("top", 1250,890)
    createCannon("right",510,1500,)


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
