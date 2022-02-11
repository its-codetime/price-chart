function Card({ cardDetails }) {
  const { name, price, features } = cardDetails;
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {name}
          </h5>
          <h6 className="card-price text-center">
            ${price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {features.map((feature, index) => {
              if (feature.enabled)
                return (
                  <li key={index}>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {feature.description}
                  </li>
                );

              return (
                <li key={index} className="text-muted">
                  <span className="fa-li">
                    <i className="fas fa-times"></i>
                  </span>
                  {feature.description}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <button className="btn btn-primary text-uppercase">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
