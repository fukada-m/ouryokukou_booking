export const more10 = (num) => {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

export const today = () => {
    let today = new Date();
    today = `${today.getFullYear()}-${more10(today.getMonth() + 1)}-${more10(today.getDate())}`;
    return today;
}
