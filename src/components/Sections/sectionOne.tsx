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

const Section: React.FC = () => {

    const [data, setData] = useState<SProduct[]>([]);
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data);
            }
        );
    }, []);

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
                        
                    </div>
                </div>

                
                        )
                    )
                }
                
            </section>

        </>
    );
}

export default Section;
