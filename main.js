import {InputHandler} from './input.js';
import {Player} from './player.js'

window.addEventListener('load', function() {
    const canvas = this.document.getElementById('gameWindow');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;
    class Game {
        constructor(width, height) {
            this.canvas = canvas;
            this.ctx = ctx;
            this.width = width;
            this.height = height;
            this.background = document.getElementById("background");
            this.Input = new InputHandler();
            this.player = new Player();
            this.timer = Date.now();
        }
        update() {
            
        }
        draw(context) {
            context.drawImage(this.background, 0, 0, this.width, this.height);
            this.player.update(this.Input.keys)
            this.player.draw(context);
            context.fillStyle = "red";
            context.fillRect(300,425,300,10);
        }
    }
    const game = new Game(canvas.width, canvas.height);
    function animate() {
        if((Date.now()-game.timer)>15){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            game.update();
            game.timer=Date.now()
            game.draw(ctx);
        }
        window.requestAnimationFrame(animate);
    }
    animate();
});