import React, {useState} from "react";

const contacts = [
   {id: 1, name: "prosper willims", email: "john@example.com", phone: "+23457684728"},
   {id: 2, name: "john doe", email: "john@example.com", phone: "+23457684728"},
   {id: 3, name: "alice emmanuel", email: "john@example.com", phone: "+23457684728"},
];
const Home = () => {
   const [Mycontacts, setMycontacts] = useState(contacts);

   const handledelete = (id) => {
      const newList = Mycontacts.filter((item) => item.id !== id);
      setMycontacts(newList);
   };
   return (
      <div>
         <h1 className="text-2xl font-bold">Contacts</h1>
         <br />
         <div className="m-auto w-full justify-center items-center space-y-3 flex flex-col ">
            {Mycontacts.length >= 1
               ? Mycontacts.map((contacts) => {
                    const {name, id, email, phone} = contacts;
                    return (
                       <main key={contacts.id} id="" className="flex flex-row  items-top gap-2">
                          <img src="" alt="" className="w-20 h-20 border rounded-lg" />
                          <section className="text-left">
                             <div className="font-bold text-lg">{name}</div>
                             <div className="text-sm ">{email}</div>
                             <div className="text-xs">{phone}</div>
                             <button className="bg-red-500" onClick={() => handledelete(id)}>
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
