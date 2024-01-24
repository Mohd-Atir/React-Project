import React, { useCallback, useEffect, useState } from "react";
import useCurrencyInfo from "../hooks/currencyInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faC, faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

function ExchangeRate({
  currencyOptions = [],
}) {
  const [state, setState] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertAmount] = useState()

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const convert = useCallback (() =>  {
    setConvertAmount(state * currencyInfo[to])
  }, [state, currencyOptions, from, to])

  useEffect(() => {
    convert();
  }, [state, currencyOptions, from, to])

  return (
    <>
      <div className="container">
        <div className="row">
          <select className="bg-black border-0 text-light col-5"
          onChange={(e) => setFrom(e.target.value)}
          value={from}
          >
            {currencyOptions = options}
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="col-7 bg-black border-0 text-light text-end fs-4"
            placeholder="0"
            value={state}
            onChange={(e) => {setState(e.target.value); convert()}}
          />
        </div>
        <div className="row">
          <select className="bg-black border-0 text-light col-5" 
          onChange={(e) => {setTo(e.target.value); convert()}}
          value={to}
          >
          {currencyOptions = options}
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}          
            </select>
          <input
            type="number"
            className="col-7 bg-black border-0 text-light text-end fs-4"
            placeholder="0"
            value={convertedAmount}
            disabled
          />
        </div>
      </div>
      <div className="container bg-dark rounded-bottom mt-3">
        <div className="row">
            <div className="col">
                <div className="d-flex justify-content-between my-2">

                <input
            type="button"
            value="7"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

<input
            type="button"
            value="8"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

<input
            type="button"
            value="9"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

              <button className="btn fs-4 fw-medium  text-info"
                onClick={() => setState("")}>
              <FontAwesomeIcon icon={faC} />
              </button>

                
            </div>
          </div>
            <div className="col-9">
                <div className="d-flex justify-content-between my-2">

                <input
            type="button"
            value="4"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

<input
            type="button"
            value="5"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

<input
            type="button"
            value="6"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

            </div>
          </div>
            <div className="col-9">
                <div className="d-flex justify-content-between my-2">

                <input
            type="button"
            value="1"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

<input
            type="button"
            value="2"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

<input
            type="button"
            value="3"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />
            </div>
          </div>
            <div className="col">
                <div className="d-flex justify-content-between my-2">

                <input
            type="button"
            value="00"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

<input
            type="button"
            value="0"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

<input
            type="button"
            value="."
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

              <button 
              className="btn fs-4 text-info">
                <FontAwesomeIcon icon={faDeleteLeft} 
                onClick={() => setState(state.slice(0, -1))}
                />               
                </button>       
                
            </div>
          </div>
          </div>

        </div>
    </>
  );
}

export default ExchangeRate;
