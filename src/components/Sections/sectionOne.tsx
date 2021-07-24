import React, {useState, useEffect} from "react";
import api from "../../services/api";
import AirJordanPro from "../../assets/images/Jordan.jpg"
import DaybreakSP from "../../assets/images/Nike-Daybreak-SP.jpg"

interface SProduct {
    id: number;
    name: string;
    description: string;
    price: number;
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
                <div className="product-content">
                    <div className="container-img">
                        <img src={AirJordanPro} alt="Imagem Jordans Pro" />
                    </div>

                    <div className="container-text">
                        <h1>Title 1</h1>

                        <div className="description">
                            <p>                                                                                   
                                Embora obscuro - e provavelmente desconhecido para aqueles que participam da cultura hoje - o Jordan Pro Strong 
                                tem uma história que se baseia desde 1998. E depois de um reaparecimen to muito repentino, o modelo deve adicionar
                                Branco e Real à sua lista moderna muito em breve.           
                            </p>

                            <br />

                            <p>
                                Graças à sua semelhança com o Air Jordan 13, o Pro Strong é amplamente considerado como um dos melhores sapatos 
                                da Equipe Jordan de todos os tempos. Couros acolchoados vestem o lado     da mesma forma, embora sua costura seja 
                                mais semelhante às penas do amado logotipo das asas. Sua coloração branca só auxilia nessa conexão, ao mesmo tempo 
                                em que combina com a unidade de renda e a entressola adjacentes.
                            </p>

                            <br />

                            <p>
                                Em outros lugares, o amado azul "Real" destaca não apenas a gravação do perfil, mas também o logotipo ao longo 
                                do vampiro, o texto em cima da língua, e a totalidade da sola. Finaliza do com uma base metálica prateada, este 
                                colorway deve estar atingindo Nike.com e varejistas selecinonados antes do final do ano.                                                                     
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="preview">

            </div>

            <section className="section" id="section-two">
                <div className="container-img" >
                    <img src={DaybreakSP} alt="Imagem Nike Daybreak SP" />
                </div>

                <div className="container-text">
                    <h1>Nike Daybreak SP</h1>

                    <div className="description">
                        <p>
                            Embora não esteja mais na vanguarda da categoria de corrida do Swoosh, o Nike Daybreak continua a emergir em trajes impressionantes e voltados para o estilo de vida. Fazendo uma pausa na experimentação do N.354, o treinador retrô mergulha seu clássico náilon e camurça em uma paleta atraente “Black / Limelight / Off Noir”.
                        </p>

                        <br />

                        <p>
                            Sobreposições de camurça no antepé, ao longo da língua e no calcanhar proporcionam um esquema “Preto” tonal. As bases de náilon leves apresentam um tom ligeiramente mais leve, “Off-Noir”. Os perfis Swooshes e os painéis de salto com a marca “NIKE” também são construídos em camurça, mas oferecem um contraste marcante do “Limelight”. Em outro lugar, “White” se junta à dupla esportiva em toda a língua e entressola. As solas de waffle complementam o retro em “Black”.
                        </p>

                        <br />

                        <p>
                            Os detalhes do lançamento ainda são desconhecidos, mas é provável que este Daybreak seja lançado discretamente no Nike.com até o final do ano. Enquanto isso, aproveite as imagens oficiais da dupla aqui abaixo.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section;
