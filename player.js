export class Player{
    constructor(game) {
        this.game = game;
        this.gravity = 10;
        this.jump = false;
        this.count = 1;
        this.attack = false;
        this.facingRight = true;
        this.width = 100;
        this.height = 100;
        this.x = this.width / 2 - this.width / 2;
        this.y = 500 - this.height-40;
        this.animationFrameX = 0;
        this.animationFrameY = 0;
        this.image = document.getElementById('player');
        this.speed = 8;
    }
    update(inputKeys){
        this.animationFrameX += 128;
        if(inputKeys.includes("ArrowRight")){
            this.x += this.speed;
            this.facingRight = true;
            this.animationFrameY = 128*9;
        }
        if(inputKeys.includes("ArrowLeft")){
            this.x -= this.speed;
            this.facingRight = false;
            this.animationFrameY = 128*9;
        }
    
        if(inputKeys.includes('o')){
            this.animationFrameY = 128*3;
            this.speed = 127;
        } else this.speed = 8;
        if (this.animationFrameX >= 128*6 || this.animationFrameY==128*5 && this.animationFrameX>=128*4 || this.animationFrameY==128*9 && this.animationFrameX >= 128*3)
            this.animationFrameX = 0;
        if (inputKeys.length == 0)
            this.animationFrameY = 128*5;
        if (this.x <= -40)
            this.x = -40;
        if (this.x >= 740)
            this.x = 740;
        if (inputKeys.includes('ArrowUp')&&!this.jump){
            this.jump=true;
            this.gravity = -19
            this.y -= 1;
        }
        if (this.y < 420){
            if((251 <= this.x && this.x <= 540)&&(325<=this.y&&this.y<=335)){
                this.y =325;
            }
            else{
                this.y += this.gravity;
                this.gravity+=2;
            }
        }
        if(this.y > 420){
            this.gravity = 10;
            this.jump = false;
            this.y = 420;
        }
        if (this.jump)
            this.animationFrameY = 0;
        if (inputKeys.includes(' '))
            this.speed = 16;
        else
            this.speed = 8;
    }
    draw(context){
        if(!this.facingRight){
            context.save();
            context.scale(-1, 1);
            context.drawImage(this.image, this.animationFrameX, this.animationFrameY, 128,128, -this.x-this.width, this.y, this.width, this.height)
            context.restore()
        }
        else{
            context.drawImage(this.image, this.animationFrameX, this.animationFrameY, 128,128, this.x, this.y, this.width, this.height)
        }
    }
}