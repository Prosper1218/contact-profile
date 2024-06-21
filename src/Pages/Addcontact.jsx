import React, {useContext, useRef} from "react";
import {contacts} from "../App";
import {Link, useNavigate} from "react-router-dom";

const Addcontact = () => {
   const formref = useRef("");
   const {submitted} = useContext(contacts);
   const navigate = useNavigate();
   const handlesubmit = (e) => {
      e.preventDefault();
      let name = formref.current.name.value;
      let email = formref.current.email.value;
      let phone = formref.current.phone.value;

      // const newlist = {name, email, phone};
      // setMycontact([...Mycontact, newlist]);
      // console.log(Mycontact);
      if (name && email && phone) {
         submitted(name, email, phone);
         navigate("/");
      } else {
         alert("please make sure the form is filled");
      }
   };

   return (
      <div>
         Addcontact
         <div className="grid justify-center gap-4 text-center grid-cols-2 items-center underline text-sm">
            <Link to={"/"}>Contacts</Link>
            <Link to={"/add"}>Add new contact</Link>
         </div>
         <form action="" onSubmit={handlesubmit} ref={formref} className="max-w-[25rem] flex flex-col m-auto">
            <input type="text" name="name" id="name" placeholder="name" className="border" />
            <input type="text" name="email" id="email" placeholder="email" className="border" />
            <input type="number" name="contact" id="phone" placeholder="phone" className="border" />
            <br />
            <br />
            <button onClick={handlesubmit} className="border" type="submit">
               submit
            </button>
         </form>
      </div>
   );
};

export default Addcontact;
