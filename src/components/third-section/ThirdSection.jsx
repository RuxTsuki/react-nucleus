import "./thirdsection.css";
import ImgSecuritySvg from "./../../assets/img/seguridad.png";

export const ThirdSection = () => {
  const cardList = [
    {
      description: `
            Nucleus is strongly and impossible to clone`,
      id: "card4",
    },
    {
      description: `We have 2 factor autentification`,
      id: "card5",
    },
    {
      description: `We use an strongly algorithm to encrypt all your data`,
      id: "card6",
    },
  ];

  return (
    <section id="hoSecurity" className="security">
      <div className="security__container">
        <h2 className="security__heading">Nucleus is Safe</h2>

        <div className="security__grid">
          <div className="cards-longth">
            {cardList.map((card) => (
              <div key={card.id} className="cards-longth__card">
                <p className="cards-longth__text">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="security__img">
            <img src={ImgSecuritySvg} alt="nucleus is safely" />
          </div>
        </div>
      </div>
    </section>
  );
};
