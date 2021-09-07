import React, { useState, useContext, useEffect } from "react";

import StateProvider, {
  ViewContext,
  RangeContext,
  PriceContext,
  YearlyPaymentContext,
} from "./StateProvider";

function BillingPlan() {
  const [views, setViews] = useContext(ViewContext);
  const [range, setRange] = useContext(RangeContext);
  const [price, setPrice] = useContext(PriceContext);
  const [yearlyPayment, setYearlyPayment] = useContext(YearlyPaymentContext);

  const rangePrices = [
    {
      view: "10k",
      price: 12,
    },
    {
      view: "50k",
      price: 16,
    },
    {
      view: "100k",
      price: 20,
    },
    {
      view: "500k",
      price: 24,
    },
    {
      view: "1m",
      price: 36,
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  function handleUpdate(index) {
    const { view, price } = rangePrices[index];
    setViews(view);
    if (yearlyPayment) {
      setPrice(price * 0.75);
    } else {
      setPrice(price);
    }
  }

  useEffect(() => {
    switch (true) {
      case range < 20:
        handleUpdate(0);
        break;
      case range < 40:
        handleUpdate(1);
        break;
      case range < 60:
        handleUpdate(2);
        break;
      case range < 80:
        handleUpdate(3);
        break;
      case range > 80:
        handleUpdate(4);
        break;

      default:
        break;
    }
  }, [range, yearlyPayment]);

  function updateRange(event) {
    setRange(event.target.value);
  }

  function updatePaymentType() {
    setYearlyPayment(!yearlyPayment);
  }

  return (
    <div className="billing-plan">
      <p>{views} Pageviews</p>
      <input
        type="range"
        min="0"
        max="100"
        name="range"
        id=""
        value={range}
        onChange={updateRange}
      />
      <div className="billing-cost">
        <h1>${price}.00</h1>
        <span>/ month</span>
      </div>
      <div className="billing-type">
        <div>
          <p>Monthly Billing</p>
          <label className="switch">
            <input
              type="checkbox"
              name="yearlyPayment"
              checked={yearlyPayment}
              onChange={updatePaymentType}
            />
            <span className="slider round"></span>
          </label>
          <p>Yearly Billing </p>
        </div>
        <p>{width > 1280 ? "25% off" : "-25%"}</p>
      </div>
    </div>
  );
}

export default BillingPlan;
