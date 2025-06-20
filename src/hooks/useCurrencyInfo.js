import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[baseCurrency]))
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
