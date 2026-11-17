import { Objetct } from "./objetcts.js";

export class Ship{
    constructor(ctx,nave_pixel){
        this.ctx =ctx;
        this.image = new Objetct(nave_pixel,{x:3,y:1},260,260,0.8);
        this.position = {x:450,y:500};
        this.speed = 0;
        this.keys = {
            A:false,
            D:false,
            W:false
        }
        this.angle = 0;
        this.keyboard();
    }

    draw(){
        this.ctx.save();
        this.ctx.translate(this.position.x,this.position.y);
        this.ctx.rotate(this.angle);
        this.ctx.translate(-this.position.x,-this.position.y);
        this.image.draw(this.ctx,this.position);
        this.ctx.restore();
    }

    move(){
        if(this.keys.D) this.angle+=0.04;
        if(this.keys.A) this.angle-=0.04;
        if(this.keys.W){
            this.speed += 0.9;
            if(this.speed>=4.5) this.speed = 4.5;  
        }
        if(!this.keys.W){
            this.speed -= 0.09;
            if (this.speed<=0) this.speed = 0;
        }
        this.position.x -= Math.cos(this.angle + Math.PI/2) * this.speed;
        this.position.y += Math.sin(this.angle - Math.PI/2) * this.speed;
    }

    update(){
        this.draw();
        this.move();
    }

    keyboard(){
        document.addEventListener("keydown",(e)=>{
            if(e.key === "a" || e.key === "A"){
                this.keys.A = true;
            }
            if(e.key === "d" || e.key === "D"){
                this.keys.D = true;
            }
            if(e.key === "w" || e.key === "W"){
                this.keys.W = true;
            }
        });
        document.addEventListener("keyup",(e)=>{
            if(e.key === "a" || e.key === "A"){
                this.keys.A = false;
            }
            if(e.key === "d" || e.key === "D"){
                this.keys.D = false;
            }
            if(e.key === "w" || e.key === "W"){
                this.keys.W = false;
            }
        });
    }
}