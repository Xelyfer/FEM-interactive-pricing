import React, { useState, createContext, useEffect } from "react";

export const ViewContext = createContext();
export const PriceContext = createContext();
export const RangeContext = createContext();
export const YearlyPaymentContext = createContext();

export function StateProvider({ children }) {
  const [views, setViews] = useState("100k");
  const [price, setPrice] = useState("16");
  const [range, setRange] = useState("50");
  const [yearlyPayment, setYearlyPayment] = useState(false);

  return (
    <ViewContext.Provider value={[views, setViews]}>
      <PriceContext.Provider value={[price, setPrice]}>
        <RangeContext.Provider value={[range, setRange]}>
          <YearlyPaymentContext.Provider
            value={[yearlyPayment, setYearlyPayment]}
          >
            {children}
          </YearlyPaymentContext.Provider>
        </RangeContext.Provider>
      </PriceContext.Provider>
    </ViewContext.Provider>
  );
}

export default StateProvider;
