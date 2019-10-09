import React from "react";
import AdditionalFeature from "./AdditionalFeature";

// connect

import { connect } from "react-redux";

// action creators

import * as actionCreators from "../state/actionCreators";

export const AdditionalFeatures = props => {
  const { shop, addFeature } = props;
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {shop.length ? (
        <ol type="1">
          {shop.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              addFeature={addFeature}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(AdditionalFeatures);
