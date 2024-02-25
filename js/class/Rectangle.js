import { Shape } from "./shape.js";

export class Rectangle extends Shape {
    #width;
    #height;

    constructor(startX, startY, width, height) {
        super(startX, startY);
        this.#width = width;
        this.#height = height;
    }
    set setColor(color) {
        this._color = color;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this._x, this._y, this.#width, this.#height);
        ctx.strokeStyle = this._color;
        ctx.lineWidth = this._lineWidth;
        ctx.stroke();
    }
}