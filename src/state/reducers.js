import * as types from "./actionTypes";

const initialAdditionalPrice = 0;

const initialCar = {
  price: 26395,
  name: "2019 Ford Mustang",
  image:
    "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  features: []
};

const inititalShop = [
  { id: 1, name: "V-6 engine", price: 1500 },
  { id: 2, name: "Racing detail package", price: 1500 },
  { id: 3, name: "Premium sound system", price: 500 },
  { id: 4, name: "Rear spoiler", price: 250 }
];

export function carReducer(car = initialCar, action) {
  switch (action.type) {
    case types.ADD_FEATURE:
      /// add code
      return {
        ...car,
        features: [...car.features, action.payload.item]
      };
    case types.REMOVE_FEATURE:
      /// add code
      return {
        ...car,
        features: car.features.filter(item => {
          return item.id !== action.payload.item.id;
        })
      };
    default:
      return car;
  }
};

export function shopReducer(shop = inititalShop, action) {
    return shop;
};

export function extrasReducer(extras = initialAdditionalPrice, action) {
    return extras;
}
