import React, { useState } from "react";
import {cartItems, SProduct} from "../../components/Sections/sectionOne";

interface customer {
   fName: string;
   lName: string;
   cep: number;
   street: string;
   hNumber: number;
   neighborhood: string;
   city: string;
   products: SProduct[];
}




const Cart: React.FC = () => {

      const [name, setName] = useState("");
      const [lname, setLname] = useState("");
      const [cep, setCep] = useState("");
      const [street, setStreet] = useState("");
      const [ hNumber, setHNumber ] = useState("");
      const [neighborhood, setNeighborhood] = useState("");
      const [city, setCity] = useState("");

      function setCustomerInfo() {
         const customerData: customer = {
            fName: name,
            lName: lname,
            cep: +cep,
            street: street,
            hNumber: +hNumber,
            neighborhood: neighborhood,
            city: city,
            products: cartItems
         }

         localStorage.setItem('customerInfo', JSON.stringify(customerData));
      }
         

      return(
 
         <>
            <section className="cart-section">

               
               <h1>Painel de Compras</h1>
               <div className="user-info-section">
                  
                  <form>
                     <h2>Endereço</h2> <br/> <br/> 
                     <label>Nome:</label> <br/>
                     <input type="text" placeholder="ex: Hugo" value={name} onChange={e => setName(e.target.value)}></input> <br/>

                     <label>Sobrenome:</label> <br/> 
                     <input type="text" placeholder="ex: Stozin" value={lname} onChange={e => setLname(e.target.value)}></input> <br/>

                     <label>CEP:</label> <br/>
                     <input type="number" placeholder="ex: 3240021" value={cep} onChange={e => setCep(e.target.value)}></input> <br/>

                     <label>Rua:</label> <br/> 
                     <input type="text" placeholder="ex: Bom Conselho" value={street} onChange={e => setStreet(e.target.value)}></input> <br/>

                     <label>N°:</label> <br/> 
                     <input type="number" placeholder="ex: 42" value={hNumber} onChange={e => setHNumber(e.target.value)}></input> <br/>

                     <label>Bairro:</label> <br/> 
                     <input type="text" placeholder="ex: Torre" value={neighborhood} onChange={e => setNeighborhood(e.target.value)}></input> <br/>

                     <label>Cidade:</label> <br/>
                     <input type="text" placeholder="ex: Pernambuco" value={city} onChange={e => setCity(e.target.value)}></input> <br/> <br/>

                     <input className="" type="submit" value="Submit" onClick={() => {setCustomerInfo()}}></input>
                  </form>

                  <div className="product-section">
                     <h2>Lista de Produtos</h2>
                     {
                        cartItems.map(
                           item => (
                              <div className="item-list">
                                 <ul>
                                    <li>{item.name}</li> <br/>
                                 </ul>
                                 
                              </div>
                           )                       
                        )
                     }
                  </div>
               </div>

            </section>
         </>
     );
} 

export default Cart;
