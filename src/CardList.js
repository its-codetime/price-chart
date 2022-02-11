import Card from "./Card";

function CardList({ cards }) {
  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <Card cardDetails={card} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
