import { sampleSize } from "lodash";

declare global {
    interface Array<T> {
        sampleSize<T>(this: T[], size: number): T[]
    }
}

Array.prototype.sampleSize = function <T>(this: T[], size: number): T[] {
    return sampleSize(this, size);
};