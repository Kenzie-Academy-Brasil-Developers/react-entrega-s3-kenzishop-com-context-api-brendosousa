import { createContext, useState, useContext } from "react";

import books from "../../db/db";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products] = useState(books);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
