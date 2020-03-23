import React from "react";

import AddedFeature from "./AddedFeature";

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

import uuid from "uuid";

export const AddedFeatures = props => {
  const { car, shop, removeFeature } = props;
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(itemID => (
            <AddedFeature
              key={uuid()}
              feature={shop.find(shopItem => {
                return shopItem.id === itemID;
              })}
              removeFeature={removeFeature}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(AddedFeatures);
