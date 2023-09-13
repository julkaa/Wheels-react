

export const currencyService = {
    toUAH(v){
        return v * 40.3;
    },
    format(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
}