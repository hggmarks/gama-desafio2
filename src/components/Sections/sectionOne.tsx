import React, {useState, useEffect} from "react";
import api from "../../services/api";
//import AirJordanPro from "../../assets/images/Jordan.jpg"
//import DaybreakSP from "../../assets/images/Nike-Daybreak-SP.jpg"

interface SProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    photo: string;
    bgId: string;
}

let cartItems: SProduct[] = [];

const Section: React.FC = () => {

    const [data, setData] = useState<SProduct[]>([]);
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data);
            }
        );
    }, []);


    

    function AddCart(item: SProduct) {
        cartItems.push(item);
        cartItems = cartItems.sort(
            (item1, item2) => item1.id - item2.id
            );
        console.log(cartItems);
    }
    

    return (
        <>
            <section className="section" id="section-one">
                {
                    data.map(
                        prod => (
                            
                            <div className="product-content" id={prod.bgId} >
                    <div className="container-img">
                        <img src={prod.photo} alt="Imagem Jordans Pro" />
                    </div>

                    <div className="container-text">
                        <h1>{prod.name}</h1>

                        <div className="description">
                            <p>{ prod.description }</p>
                        </div>
                        <div className="cart-options">
                            <p className="product-price">R$ {prod.price}</p>
                            <button onClick={ () => {AddCart(prod)}}> 
                            Adicionar ao Carrinho 
                            </button>
                        </div>
                    </div>
                </div>

                
                        )
                    )
                }
                
            </section>

        </>
    );
}
export {cartItems} ;
export type { SProduct } ;
export default Section;
