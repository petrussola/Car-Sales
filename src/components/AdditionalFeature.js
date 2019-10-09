import React from "react";

const AdditionalFeature = ({addFeature, feature}) => {

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={event => addFeature(feature.id)}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
