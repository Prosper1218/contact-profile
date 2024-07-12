import React, {useContext, useState} from "react";
import {contacts} from "../App";
import {Link} from "react-router-dom";
//
//
//
//
//
const Home = () => {
   const {Mycontacts, setMycontacts} = useContext(contacts);

   const handledelete = (id) => {
      const newList = Mycontacts.filter((item) => item.id !== id);
      setMycontacts(newList);
   };
   return (
      <div>
         <h1 className="text-2xl font-bold">Contacts</h1>
         <div className="grid justify-center gap-4 text-center grid-cols-2 items-center underline text-sm">
            <Link to={"/"}>Contacts</Link>
            <Link to={"/add"}>Add new contact</Link>
         </div>
         <br />
         <div className="m-auto w-full justify-center items-center space-y-3 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 max-w-[80%] ">
            {Mycontacts.length >= 1
               ? Mycontacts.map((contacts) => {
                    const {name, id, email, phone} = contacts;
                    return (
                       <main key={id} id="" className="flex flex-row  items-top gap-2">
                          <img src="" alt="" className="w-20 h-20 border rounded-lg" />
                          <section className="text-left">
                             <div className="font-bold text-lg">{name}</div>
                             <div className="text-sm ">{email}</div>
                             <div className="text-xs">{phone}</div>
                             <button className="bg-red-500 px-4 rounded-md" onClick={() => handledelete(id)}>
                                delete
                             </button>
                          </section>
                       </main>
                    );
                 })
               : "no contacts yet"}
         </div>
      </div>
   );
};

export default Home;
