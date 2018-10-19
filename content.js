const remIncrement = 0.01;
const fiveMinutes = 5000;
const fiftyMinutes = 50000;
let remAmount = 0.01;

const createBlurStyle = (remAmount) => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(`body {filter: blur(${remAmount}rem) !important}`));
    return style;
};

const blurringIntensifies = () => {
    document.documentElement.appendChild(createBlurStyle(remAmount));
    remAmount += remIncrement;
};

const blurringInterval = setInterval(blurringIntensifies, fiveMinutes);

setTimeout(() => {
    clearInterval(blurringInterval);
}, fiftyMinutes);
