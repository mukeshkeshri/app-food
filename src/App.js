import { useState,useEffect } from 'react';

import Header from './components/layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';



function App (){


const [data,setData]=useState({});

useEffect(() => {

  fetch("/create")
      .then(response => response.json())
      .then(d => setData({data:d.message}));

}, []);






const callapi = async()=>{
   
   
  const x=fetch("/create",{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
  });

   console.log({data});

  const y= await x;
  console.log(y);
}

const [cartIsShown, setCartIsShown] = useState(false);

const showCartHandler = () => {
    setCartIsShown(true);
  };
   
const hideCartHandler = () => {
    setCartIsShown(false);
};
  
return (
    <CartProvider>
      <h1>.....................</h1>
      
      <h1>{!data.data?"Loading":data.data}</h1>  
    
      <button onClick={callapi}>clickme</button>

       {cartIsShown &&  <Cart onCloseCart={hideCartHandler}/>} 
       <Header onShowCart={showCartHandler} />
       
       <main>
         <Meals/>
       </main> 
                  
    </CartProvider>
  );
  
}

export default App;
