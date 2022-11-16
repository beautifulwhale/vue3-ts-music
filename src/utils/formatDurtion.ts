
export default (time: number): string => {
    let durtion = time / 1000;
    let second: number | string = Math.floor(durtion % 60);
    let minute: number | string = Math.floor(durtion / 60);

    second = second < 10 ? `0${second}` : second;
    minute = minute < 10 ? `0${minute}` : minute;

    return `${minute}:${second}`;
}