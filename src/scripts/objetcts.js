export class Objetct{
    constructor(srpitesheet, paddlePosition,paddleWidth,paddleHeight,scale){
        this.srpitesheet = srpitesheet;
        this.paddlePosition = paddlePosition;
        this.paddleWidth = paddleWidth;
        this.paddleHeight = paddleHeight;
        this.scale = scale;

        this.width = this.paddleWidth * scale;
        this.height = this.paddleHeight * scale;
    }
    
    draw(ctx,position){
        ctx.drawImage(
            this.srpitesheet,
            this.paddlePosition.x,
            this.paddlePosition.y,
            this.paddleWidth,
            this.paddleHeight,
            position.x - 40,
            position.y - 40,
            this.width,
            this.height
        )
    }
}