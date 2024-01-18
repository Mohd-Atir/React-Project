import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const useCurrency = useCurrencyInfo(from)
  const options = Object.keys(useCurrency)

  const convert = () => {
    setConvertedAmount(amount * useCurrency[to])
  }

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}>
        <div className="d-flex align-items-center justify-content-center bg-black" style={{height: "100vh", backgroundImage: `url("https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      
      }}>
          <div className="d-flex flex-column gap-2 bg-light bg-opacity-25 p-3 rounded-3 border">
            <InputBox
              label="From"
              amount={amount}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              currencyOptions={options}
            />
            <InputBox
              label="To"
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              onAmountChange={(amount) => setAmount(amount)}
              currencyOptions={options}
              amountDisable
            />
            <button className="btn btn-primary">
              Convert {from.toLocaleUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
