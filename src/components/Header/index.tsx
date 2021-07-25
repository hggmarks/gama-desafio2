import React from "react";
import { useHistory } from "react-router";
import Logo from "../../assets/images/logo1.png";
import Cart from "../../assets/images/Bag-icon.png";

const Header: React.FC = () => {
    const history = useHistory();
    function goCart() {
        history.push('/cart')
    }

    return(
        <>
            <header>
                <img src={Logo} alt="Sneake Store Logo" className="icons" id="logo" />

                <button onClick={() => {goCart()}} >
                    <img src={Cart} alt="Sneake Store Logo" className="icons" id="cart" />
                </button> 
            </header>
        </>
    );
}

export default Header;
