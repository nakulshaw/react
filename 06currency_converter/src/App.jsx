import { useState } from 'react'
import './App.css'
import {InputBox} from './components'
import userCurrencyInfo from './hooks/useCurrencyinfo.js'

function App() {
  const [amount,setAmount]=useState(0);
  const [convertedAmount,setConvertedAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");

  const currencyInfo=userCurrencyInfo(from);
  const Options=Object.keys(currencyInfo);

  const swap=()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }
  
  const convert=()=>{setConvertedAmount(amount*currencyInfo[to])};

  return (
    <>
      <div className='flex'>
        <div
        className='w-100 h-screen bg-cover bg-norepeat absolute left-0'
        style={{backgroundImage:"url('https://images.pexels.com/photos/157520/pexels-photo-157520.jpeg')"}}
        ></div>
        <div
            className="w-225 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat absolute right-0"
            style={{
                backgroundImage:"url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=450&fit=crop&h=382.5')",

            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={Options}
                                onAmountChange={(amount)=>setAmount(amount)}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                selectCurrency={from}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={Options}
                                onCurrencyChange={(currency)=>{
                                  setTo(currency)
                                }}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default App
