var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";
function Player_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
        canvas.add(image_object);
    });
}
function New_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keyDown);
function my_keyDown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true&&keyPressed=='80')
    {
        console.log("P and shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true&&keyPressed=='77')
    {
        console.log("M and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPressed=='38')
    {
        console.log("Up");
        Up();
    }
    if(keyPressed=='40')
    {
        console.log("Down");
        Down();
    }
    if(keyPressed=='37')
    {
        console.log("Left");
        Left();
    }
    if(keyPressed=='39')
    {
        console.log("Right");
        Right();
    }
    if(keyPressed=='73')
    {
        console.log("I");
        New_image('ironman_face.png');
    }
    if(keyPressed=='83')
    {
        console.log("S");
        New_image('spiderman_body.png');
    }
    if(keyPressed=='72')
    {
        console.log("H");
        New_image('hulk_legs.png');
    }
    if(keyPressed=='84')
    {
        console.log("T");
        New_image('thor_right_hand.png');
    }
    if(keyPressed=='67')
    {
        console.log("C");
        New_image('captain_america_right_hand.png');
    }
}
function Up()
{
    if(player_y>=0)
    {
        player_y=player_y-block_image_height;
        console.log("block image hieght="+block_image_height);
        console.log("when up arrow key is pressed, x="+player_x+",y="+player_y);
        canvas.remove(player_object);
        Player_update();
    }
}
function Down()
{
    if(player_y<=500)
    {
        player_y=player_y+block_image_height;
        console.log("block image hieght="+block_image_height);
        console.log("when down key is pressed, x="+player_x+",y="+player_y);
        canvas.remove(player_object);
        Player_update();
    }
}
function Left()
{
    if(player_x>=0)
    {
        player_x=player_x-block_image_width;
        console.log("block image width="+block_image_width);
        console.log("when left arrow key is pressed, x="+player_x+",y="+player_y);
        canvas.remove(player_object);
        Player_update();
    }
}
function Right()
{
    if(player_x<=850)
    {
        player_x=player_x+block_image_width;
        console.log("block image width="+block_image_width);
        console.log("when right arrow key is pressed, x="+player_x+",y="+player_y);
        canvas.remove(player_object);
        Player_update();
        }
}