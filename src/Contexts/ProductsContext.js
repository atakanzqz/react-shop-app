import React, { createContext, useState } from 'react';

// 1. Context oluştur
export const ProductsContext = createContext();

// 2. Provider bileşeni tanımla
export const ProductItems = ({ children }) => {
  const [products, setProducts] = useState(
    [
        { id: 1, name: 'Drone', price: 199, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBz6ZuN5NbvxcSPi9cvMsFNrZBll7szyVmXWMTbayRPh7bmXzTxPf6uKfty1DvcEMwQSIPstvuFVNohq0Cs1BLJ5M0HaYski8nuL8L2PbgMqW3fd2aDzt5ag' },
        { id: 2, name: 'Patates Kızartması', price: 299, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTx98Yn0YY8mG9fg0tJ5zhVNk4G1r7aH-YzRSASCi0YgyrInazr7TyQXNs8jIEZdZJiAgymrmrUnUL_0BTLJr2AYWBBbiy4' },
        { id: 3, name: 'Twister Dondurma', price: 99, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSjaR9rmoGfRFQRXzv9aI68K8JiLTEUqQ60zs5kJrWb7tJLVwSGUcSLwBZI_8qlbqCEBp0Iir48tVmFpFl1qr8zMzszq8AKKghObNVUZ4Jvtushj1lHqzoY1FU' },
        { id: 4, name: 'Kıyma', price: 149, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcEfcBS2JzvhlvuJ5Gg8i8lE3DAgrpXx3giv2M8bz094PFeDXViqZ_2LBICLcZiI67LGTYF7UXMfvAUc7p3XXehz2tEu4GcyM9uVcXkPXUw-sKqRfeT5Nr' },
        { id: 5, name: 'Kuru Kiraz', price: 249, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSmTSdM7gApthKz35OQKvwIRx7Iwgn5ifvpPpa2FXdczpCjbStrjd2AbLVeyYLjV5hf9pALbzyS2_TTONejJ4Rc7thwVkwrpieo6tKnLt2YwXrBfI4sMf3Mcw' },
        { id: 6, name: 'Ayakkabı', price: 349, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOwvmBPZX5CJ0tY2ONhGdAd5mTpLcXXdu2tRyEUIpKjJ2EEGcnybuoWN3Vzaw5WUDGt1w&usqp=CAU' },
    ]); // başlangıçta giriş yapılmamış

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
