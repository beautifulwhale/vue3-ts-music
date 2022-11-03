declare global {
    interface Result<T = any, F = any> {
        code: number,
        message?: string,
        data?: T,
        banners?: F
    }

    interface Array<T> {
        sampleSize<T>(this: T[], size: number): T[],
        first<T>(this: T[]): T,
        last<T>(this: T[]): T,
        sample<T>(this: T[]): T
    }

}

declare const foo: number;

export { }