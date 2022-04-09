# symbols-of-currency

Easily obtain a currency symbol by currency code, country name, or currency name

## Installing:

```
npm i symbols-of-currency
```

## Using:

```js
import { getSymbolByCode, getSymbolByCountry, getSymbolByCurrencyName } from 'symbols-of-currency';

<div class="app">
    <div>
        {getSymbolByCode('EUR')}
    </div>
    <div>
        {getSymbolByCountry('Russia')}
    </div>
    <div>
        {getSymbolByCurrencyName('East Caribbean dollar')}
    </div>
</div>
```
