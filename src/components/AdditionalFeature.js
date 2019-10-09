import React from "react";

// connect

import { connect } from "react-redux";

// action creators

import * as actionCreators from "../state/actionCreators";

export const AdditionalFeature = props => {
  const { addFeature, feature } = props;

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={event => addFeature(feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  state => state,
  actionCreators
)(AdditionalFeature);
