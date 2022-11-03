import { sampleSize, sample, first, last } from "lodash";


Array.prototype.sampleSize = function <T>(this: T[], size: number): T[] {
    return sampleSize(this, size);
};

Array.prototype.sample = function <T>(this: T[]): T {
    return sample(this) as T;
}

Array.prototype.first = function <T>(this: T[]): T {
    return first(this) as T;
}

Array.prototype.last = function <T>(this: T[]): T {
    return last(this) as T;
}