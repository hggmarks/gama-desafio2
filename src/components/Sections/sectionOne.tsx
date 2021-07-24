import React from "react";
import AirJordanPro from "../../assets/images/Jordan.jpg"

const SectionOne: React.FC = () => {

    return (
        <>
            <section className="section" id="section-one">

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
            </section>

            <div className="preview">

            </div>
        </>
    );
}

export default SectionOne;
