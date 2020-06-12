class Ball {
    constructor(x, y, width, height){
        var ball_opt = {
            isStatic : true,
            //restitution : 0.3,
            //friction : 0.5,
            //density : 1.2
        }
        this.body = Bodies.rectangle(x,180,width,height,ball_opt);
        this.width = width;
        this.height = height;
        this.image = loadImage("ball.png");
        World.add(world,this.body);
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        translate(this.body.position.x,this.body.position.y);
        image(this.image,0,0,30,30);
    }
}