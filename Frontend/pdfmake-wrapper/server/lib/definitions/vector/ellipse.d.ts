import { Vector } from './vector';
import { IEllipse } from '../../interfaces';
/**
 * Creates a ellipse vector
 */
export declare class Ellipse extends Vector<Ellipse, IEllipse> {
    /**
     * if either of the params receive one number (`new Ellipse(10,10)`):
     *  * `point` is applied to `x` and `y`
     *  * `radius` is applied to `r1` (radius1) and `r2` (radius2)
     *
     * if either of the params receive a tuple (`new Ellipse([10, 5],[20, 30])`)
     *  * `point[0]` is applied to `x` and `point[1]` is applied to `y`
     *  * `radius[0]` is applied to `r1` (radius1) and `radius[1]` is applied to `r2` (radius2)
     *
     * @param point the point where the ellipse will be drawn
     * @param radius the radius of the ellipse
     */
    constructor(point: number | [number, number], radius: number | [number, number]);
    /**
     * Sets the point to the ellipse vector
     * @param point the point of the ellipse vector
     */
    private setPoint;
    /**
     * Sets the radius to the ellipse vector
     * @param radius the radius of the ellipse vector
     */
    private setRadius;
}
//# sourceMappingURL=ellipse.d.ts.map