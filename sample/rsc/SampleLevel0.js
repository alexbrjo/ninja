/** 
 * Sample level
 */
var Level = function () {
    this.h = 29;
    this.w = 150;
    this.tileSize = 16;
    this.terrain_sprite = "tiles.png";
    this.resources = ["tiles.png", "bg.png", "enemy.png", "hud.png", "rpgsoldier.png", "warrior.png"];
    this.sprite_index = [
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}}, // sky
        {sprite: {x: 1, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}}, // grass variant 1
        {sprite: {x: 2, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}}, // grass variant 2
        {sprite: {x: 3, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}}, // grass w/ flower
        {sprite: {x: 4, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}}, // grass for edge blocks
        {sprite: {x: 5, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}}, // stalagmight 1
        {sprite: {x: 6, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}}, // stalagmight 2
        {sprite: {x: 7, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}}, // stalagtight 1
        {sprite: {x: 8, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}}, // stalagtight 2

        {sprite: {x: 0, y: 1, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 16, h: 16}}, // dirt
        {sprite: {x: 1, y: 1, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 16, h: 16}}, // dirt w/ grass top
        {sprite: {x: 2, y: 1, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 16, h: 16}}, // dirt top left corner w/ grass
        {sprite: {x: 3, y: 1, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 16, h: 16}}, // dirt top right corner w/ grass
        {sprite: {x: 4, y: 1, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 16, h: 16}}, // dirt bottom left corner
        {sprite: {x: 5, y: 1, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 16, h: 16}}, // dirt bottom left corner
        {sprite: {x: 6, y: 1, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 16, h: 16}}, // dirt w/ bones 1
        {sprite: {x: 7, y: 1, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 16, h: 16}}, // dirt w/ bones 2

        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}},
        {sprite: {x: 0, y: 0, w: 16, h: 16}, AABB: {x: 0, y: 0, w: 0, h: 0}}
    ];

    this.data = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 16, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 19, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 19, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 20, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 1, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 20, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 15, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 16, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 19, 3, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 12, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 1, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 2, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1]
    ];
};