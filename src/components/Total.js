import React from "react";

// connect

import { connect } from "react-redux";

// action creators

import * as actionCreators from "../state/actionCreators";

export const Total = props => {
  const { car } = props;
  debugger

  return (
    <div className="content">
      <h4>Total Amount: ${car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default connect(state => state)(Total);
