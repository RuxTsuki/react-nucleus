import "./whatisnucleus.css";
import NuclesWhatIsSvg from "./../../assets/img/app_2.svg";

export const WhatIsNucleus = () => {
  const cardList = [
    {
      title: "Easy to use",
      description: `
        Create an account, send your documentation and start to use
        nucleus instantaly.`,
      id: "card1",
    },
    {
      title: "Secure",
      description: `
          You can stay safe we are handler all for you.`,
      id: "card2",
    },
    {
      title: "Fast",
      description: `
          with our technology nucleus is more fast than the average apps.`,
      id: "card3",
    },
  ];

  return (
    <div className="nucleus">
      <h2 id="hoHome" className="nucleus__heading">
        What is Nucleus?
      </h2>
      <div className="nucleus__container">
        <div className="nucleus__grid">
          <div className="nucleus__img">
            <img src={NuclesWhatIsSvg} alt="what is nucleus" />
          </div>

          <div className="cards-longth">
            {cardList.map((card) => (
              <div key={card.id} className="cards-longth__card">
                <h2 className="cards-longth__heading">{card.title}</h2>
                <p className="cards-longth__text">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
