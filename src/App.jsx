import {createContext, useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Link, Outlet} from "react-router-dom";
const people = [
   {id: 1, name: "prosper willims", email: "john@example.com", phone: "+23457684728"},
   {id: 2, name: "john doe", email: "john@example.com", phone: "+23457684728"},
   {id: 3, name: "alice emmanuel", email: "john@example.com", phone: "+23457684728"},
];
export const contacts = createContext();
function App({children}) {
   const [Mycontacts, setMycontacts] = useState(people);
   const submitted = (name, email, phone) => {
      // e.preventDefault();
      console.log(name, email, phone);
      const newlist = {id: people.length + 1, name: name, phone: phone, email: email};
      setMycontacts([...people, newlist]);
   };
   return <contacts.Provider value={{Mycontacts, setMycontacts, submitted}}>{<Outlet />}</contacts.Provider>;
}

export default App;
