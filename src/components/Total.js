import React from "react";

// connect

import { connect } from "react-redux";

// action creators

import * as actionCreators from "../state/actionCreators";

export const Total = props => {
  const { car, shop } = props;

  return (
    <div className="content">
      <h4>
        Total Amount: $
        {car.price +
          car.features.reduce((acc, id) => {
            return acc + shop.find(shopItem => shopItem.id === id).price;
          }, 0)}
      </h4>
    </div>
  );
};

export default connect(state => state)(Total);
