declare global {
    interface Result<T = any, F = any> {
        code: number,
        message?: string,
        data?: T,
        banners?: F
    }
}

declare const foo: number;

export { }