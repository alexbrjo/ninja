/** 
 * Handles all time calculations including delta time and iterations per second. 
 *
 *	TODO:
 * 		[+] Change from object to function
 *
 *	@author Alex Johnson
 */
var Level = function(w, h){
  this.h = 29;
  this.w = 150;
  this.tileSize = 16;
  this.trunc = function(x){ return Math.trunc(x/this.tileSize, 2); };
  this.sprite_sheet = "tiles.png";
  var sprite_index = [
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w: 0, h: 0}}, // sky
    {sprite:{x:1, y:0, w: 16, h:16}, AABB:{x:0, y:0, w: 0, h: 0}}, // grass variant 1
    {sprite:{x:2, y:0, w: 16, h:16}, AABB:{x:0, y:0, w: 0, h: 0}}, // grass variant 2
    {sprite:{x:3, y:0, w: 16, h:16}, AABB:{x:0, y:0, w: 0, h: 0}}, // grass w/ flower
    {sprite:{x:4, y:0, w: 16, h:16}, AABB:{x:0, y:0, w: 0, h: 0}}, // grass for edge blocks
    {sprite:{x:5, y:0, w: 16, h:16}, AABB:{x:0, y:0, w: 0, h: 0}}, // stalagmight 1
    {sprite:{x:6, y:0, w: 16, h:16}, AABB:{x:0, y:0, w: 0, h: 0}}, // stalagmight 2
    {sprite:{x:7, y:0, w: 16, h:16}, AABB:{x:0, y:0, w: 0, h: 0}}, // stalagtight 1
    {sprite:{x:8, y:0, w: 16, h:16}, AABB:{x:0, y:0, w: 0, h: 0}}, // stalagtight 2
                      
    {sprite:{x:0, y:1, w: 16, h:16}, AABB:{x:0, y:0, w:16, h:16}}, // dirt
    {sprite:{x:1, y:1, w: 16, h:16}, AABB:{x:0, y:0, w:16, h:16}}, // dirt w/ grass top
    {sprite:{x:2, y:1, w: 16, h:16}, AABB:{x:0, y:0, w:16, h:16}}, // dirt top left corner w/ grass
    {sprite:{x:3, y:1, w: 16, h:16}, AABB:{x:0, y:0, w:16, h:16}}, // dirt top right corner w/ grass
    {sprite:{x:4, y:1, w: 16, h:16}, AABB:{x:0, y:0, w:16, h:16}}, // dirt bottom left corner
    {sprite:{x:5, y:1, w: 16, h:16}, AABB:{x:0, y:0, w:16, h:16}}, // dirt bottom left corner
    {sprite:{x:6, y:1, w: 16, h:16}, AABB:{x:0, y:0, w:16, h:16}}, // dirt w/ bones 1
    {sprite:{x:7, y:1, w: 16, h:16}, AABB:{x:0, y:0, w:16, h:16}}, // dirt w/ bones 2
                      
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}},
    {sprite:{x:0, y:0, w: 16, h:16}, AABB:{x:0, y:0, w:0, h:0}}
  ];

    var data = [[0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,1,10,9,9,9,16,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,20,19,1,10,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,2,10,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,1,10,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,20,0,19,2,10,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,2,10,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,1,10,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,2,10,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,2,10,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,29,20,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,19,1,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,29,20,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,29,20,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,29,20,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,15,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,16,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,2,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,20,4,11,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,20,2,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,19,3,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,19,1,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,19,4,12,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,12,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,1,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,2,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,4,11,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,13,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1]];
    
    this.terrain_sprite_index = function(i){
        return sprite_index[i];
    }
    
    this.terrainSpritesNum = function(){
        return sprite_index.length;
    }
    
    this.terrain = function(x, y) {
        if(x > this.w || x < 0 || y < 0 || y > this.h || x == undefined || y == undefined) return 0;
        return data[x][y];
    }
    
    this.getHeight = function(){
        return this.h;
    }
    
    this.getWidth = function(){
        return this.w;
    }
    
    this.setData = function(x, y, n){
        if(x > this.w || x < 0 || y < 0 || y > this.h){
            return false;
        }else{
            data[x][y] = n;
            return true;
        }
    }
    
    this.getData = function(){
        return data;
    }
    
        // returns basic AABB object for x y
    this.getBlockObject = function(i, j){
        // i, j are both in pixels
        var pos = {x: this.trunc(i), y: this.trunc(j)};
        var _id = this.terrain(pos.x, pos.y);
        var b = this.terrain_sprite_index(_id);
        
        return{
            //position on img file
            sprite: {
                x: b.sprite.x,
                y: b.sprite.y,
                w: b.sprite.w,
                h: b.sprite.h,
                id: _id,
                    
            },
            //position on canvas
            pos: {
                x: pos.x*this.tileSize,
                y: pos.y*this.tileSize,
                w: b.sprite.w,
                h: b.sprite.h
            },
            // Axis-aligned bounding box
            AABB: {
                x: pos.x*this.tileSize + b.AABB.x,
                y: pos.y*this.tileSize + b.AABB.y,
                w: b.AABB.w,
                h: b.AABB.h,
                s: function(x, y){
                    if(x > this.x && x < this.x + this.w){
                        if(y > this.y && y < this.y + this.h){
                            return true;
                        }else{
                            return false;
                        }
                    }else{
                        return false;
                    }
                }
             }
         };
    };
};
