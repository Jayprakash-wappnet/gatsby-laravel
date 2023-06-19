import React from "react";
import axios from "axios";

const ApiData = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("https://www.soulbusinessapp.com/api/v1/get_offers")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.promocode_name}</h3>
              <p>Promocode: {item.promocode}</p>
              <p>Discount Type: {item.discount_type}</p>
              <p>Status: {item.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApiData;
