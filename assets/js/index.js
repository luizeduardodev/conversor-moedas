const btnReal = document.getElementById("btn-real");
const btnDolar = document.getElementById("btn-dolar");
const btnEuro = document.getElementById("btn-euro");

const convertedValue = document.getElementById("valorConvertido");

const timeToClearMessage = () => {
    setTimeout(() => {
        convertedValue.innerText = "";
    }, 3000);
};

const valueFormatted = (realValue, currency) => {
    return realValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: currency,
        currencyDisplay: "symbol"
    });
};

const calculoMoeda = (tipoMoeda) => {
    const elementValue = document.getElementById("valor").value;
    const moeda = tipoMoeda.value;

    if (elementValue) {
        const numericValue = parseFloat(elementValue);
        const moedaValue = tipoMoeda.formula(numericValue, moeda);

        const formattedValue = valueFormatted(moedaValue, tipoMoeda.symbol);

        convertedValue.innerText = `Valor convertido em ${tipoMoeda.currency} ${formattedValue}`;
    } else {
        convertedValue.innerText = `Por favor, preencha o campo!`;
        timeToClearMessage();
    }
};

btnReal.addEventListener("click", (event) => {
    event.preventDefault();

    calculoMoeda({
        name: "Dolar",
        value: 5.18,
        currency: "Reais",
        formula: (numericValue, moeda) => {
            return numericValue * moeda;
        },
        symbol: "BRL"
    });
});

btnDolar.addEventListener("click", (event) => {
    event.preventDefault();

    calculoMoeda({
        name: "Real",
        value: 5.18,
        currency: "Dolar",
        formula: (numericValue, moeda) => {
            return numericValue / moeda;
        },
        symbol: "USD"
    });
});

btnEuro.addEventListener("click", (event) => {
    event.preventDefault();

    calculoMoeda({
        name: "Euro",
        value: 5.17,
        currency: "Euro",
        formula: (numericValue, moeda) => {
            return numericValue / moeda;
        },
        symbol: "EUR"
    });
});
