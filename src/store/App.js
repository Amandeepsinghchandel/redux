import React, { useEffect, useState } from "react";
import {Dispatch} from "react-redux";
import { addItem } from "./cartSlice";

const App = () => {
  //https://fakestoreapi.com/products

  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const dispatch= useDispatch();
  useEffect(() => {
    const apiCall = async () => {
      const apiData = await fetch("https://fakestoreapi.com/products");
      const json = await apiData.json();
      setData(json);
      console.log(json);
    };

    apiCall();
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleAddItem=(item)=>{
    dispatchEvent(addItem(item));
  }

  {
    return data.length == 0 ? (
      <div>data is empty</div>
    ) : (
      <div className="">
        <h1 className="text-4xl font-bold">This is Count Value- {count}</h1>
        <button
          onClick={handleClick}
          className="bg-red-600 px-4 py-2 rounded-lg"
        >
          increase counter
        </button>

        <div className="flex flex-wrap">
          {data.map((item) => (
            <div key={item.id} className=" w-60 m-4 bg-orange-400 text-center">
              <img src={item.image} alt="img" className="w-40 h-40 ml-12" />
              <h2 className="font-semibold">{item.title}</h2>
              <p>{item.description}</p>
              Price- &#8377;{item.price}
              <br></br>

              <button className="bg-red-700 text-white font-semibold px-6 py-2 rounded-xl">Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default App;