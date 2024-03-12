import { useContext } from "react";
import BooksContext from "../context/books";

//custon hook
function useBooksContext(){
    return useContext(BooksContext);
  }

  export default useBooksContext;