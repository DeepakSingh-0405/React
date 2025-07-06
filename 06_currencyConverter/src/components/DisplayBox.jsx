
export default function DisplayBox({
    amount,
    defaultcurrency = "inr",
    isAmountDisabled = false,
    currencyOptions = [],
    onCurrencyChange,
    onAmountChange

}) {
    return (
        <div className=" bg-amber-50 flex flex-row justify-around items-center p-2.5 rounded-3xl w-xl">
            <input
                className="outline-none bg-transparent p-1"
                type="number"
                placeholder="Amount"
                value={amount}
                disabled={isAmountDisabled}
                onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
            />

            <div>
                <select
                    className="bg-amber-100 p-2 rounded-2xl"
                    value={defaultcurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    )
}