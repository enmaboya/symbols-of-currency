import { currencies } from "./variables"
import { CurrencyProps } from "./types/CurrencyProps"

export function getSymbolByCode(code: string, country?: string) {
    const currency = currencies.find((currency: CurrencyProps) => {
        if (country) {
            return currency.code.toLocaleLowerCase() == code.toLocaleLowerCase() && currency.country.toLocaleLowerCase() == country.toLocaleLowerCase();
        }

        return currency.code.toLocaleLowerCase() == code.toLocaleLowerCase();
    });

    return currency && currency.symbol;
}

export function getSymbolByCountry(country: string) {
    const currency = currencies.find((currency: CurrencyProps) => currency.country.toLocaleLowerCase() == country.toLocaleLowerCase());

    return currency && currency.symbol;
}

export function getSymbolByCurrencyName(name: string, country?: string) {
    const currency = currencies.find((currency: CurrencyProps) => {
        if (country) {
            return currency.name.toLocaleLowerCase() == name.toLocaleLowerCase() && currency.country.toLocaleLowerCase() == country.toLocaleLowerCase();
        }

        return currency.name.toLocaleLowerCase() == name.toLocaleLowerCase();
    });

    return currency && currency.symbol;
}
