
import { useEffect, useState } from 'react'
import DisplayBox from './components/DisplayBox'
import useCurrencyInfo from './hooks/CurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const data = useCurrencyInfo(from)
  const convert = () => setConvertedAmount(data[to] * amount)

  const options = Object.keys(useCurrencyInfo("usd"))

  const swap = () => {

    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }


  return (
    <>
      <div className='flex flex-col justify-center gap-5 items-center'>
        <h1 className='text-4xl text-white'>Currency converter</h1>
        <div className='flex flex-col justify-center gap-10 items-center'>

          <DisplayBox
            amount={amount}
            defaultcurrency={from}
            currencyOptions={options}
            onAmountChange={(e) => setAmount(e)}
            onCurrencyChange={(e) => setFrom(e)}
          />
        </div>
        <button className='relative border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
          onClick={swap}>
          SWAP
        </button>
        <div className='flex flex-col justify-center gap-10 items-center'>
          <DisplayBox
            amount={convertedAmount}
            defaultcurrency={to}
            currencyOptions={options}
            onCurrencyChange={(e) => setTo(e)}
            isAmountDisabled={true}
          />

        </div>
        <button className='border-2 border-white rounded-md bg-red-600 text-white px-2 py-0.5' onClick={convert}>convert</button>
      </div>
    </>
  )
}

export default App
