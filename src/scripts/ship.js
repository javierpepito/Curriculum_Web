import { Objetct } from "./objetcts.js";

export class Ship{
    constructor(ctx,nave_pixel){
        this.ctx =ctx;
        this.image = new Objetct(nave_pixel,{x:3,y:1},260,260,0.3);
        this.position = {x:450,y:500};
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
            this.position.x -= Math.cos(this.angle + Math.PI/2);
            this.position.y += Math.sin(this.angle - Math.PI/2);
        }
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