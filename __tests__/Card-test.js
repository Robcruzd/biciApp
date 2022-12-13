import React from 'react';
import App from '../App';
import Card from '../app/components/card/Index'
import { render } from '@testing-library/react-native';

let card1, card2, card3, card4, card5;

describe("<Card />", () => {
  beforeEach(() => {
    const props1 = {
      keyId : "1",
      user: {
        "email": "robcruzde@gmail.com",
        "name": "Robinson Delgado",
        "typeCyclist": "amateur",
        "username": "robcruzde"
      },
      "image": "https://images.everydayhealth.com/images/cycling-overview-1440x810.jpg",
      "description":"lorem ipsum",
      isLoggedIn:false,
      premium:false,
      myPublication:false,
      navigation:null
    };

    const props2 = {
        keyId : "1",
        user: {
            "email": "robcruzd@hotmail.com",
            "name": "Robinson Cruz",
            "typeCyclist": "amateur",
            "username": "robcruzd"
        },
        "image": "https://images.everydayhealth.com/images/cycling-overview-1440x810.jpg",
        "description":"lorem ipsum",
        isLoggedIn:true,
        premium:false,
        myPublication:false,
        navigation:null
    };

    const props3 = {
        keyId : "1",
        user: {
          "email": "robcruzd@hotmail.com",
          "name": "Robinson Cruz",
          "typeCyclist": "amateur",
          "username": "robcruzd"
        },
        "image": "https://images.everydayhealth.com/images/cycling-overview-1440x810.jpg",
        "description":"lorem ipsum",
        isLoggedIn:true,
        premium:true,
        myPublication:false,
        navigation:null
      };
    const props4 = {
        keyId : "1",
        user: {
          "email": "robcruzd@hotmail.com",
          "name": "Robinson Cruz",
          "typeCyclist": "amateur",
          "username": "robcruzd"
        },
        "image": "https://images.everydayhealth.com/images/cycling-overview-1440x810.jpg",
        "description":"lorem ipsum",
        isLoggedIn:true,
        premium:false,
        myPublication:true,
        navigation:null
      };

    const props5 = {
        keyId : "1",
        user: undefined,
        "image": "https://images.everydayhealth.com/images/cycling-overview-1440x810.jpg",
        "description":"lorem ipsum",
        isLoggedIn:true,
        premium:true,
        myPublication:true,
        navigation:null
      };

    card1 = render (<Card {...props1} />);
    card2 = render (<Card {...props2} />);
    card3 = render (<Card {...props3} />);
    card4 = render (<Card {...props4} />);
    card5 = render (<Card {...props5} />);
  });

  it("Renderiza correctamente", () => {
    expect(card1).toBeDefined();
    expect(card1.queryByTestId("view-card")).toBeTruthy();
  });

  it("Card sin sesión", () => {
    expect(card1.queryByTestId("view-card")).toBeTruthy();
    expect(card1.queryByTestId("user-info")).toBeTruthy();
    expect(card1.queryByTestId("btn-seguir")).toBeNull();
    expect(card1.queryByTestId("btn-editar")).toBeNull();
    expect(card1.queryByTestId("image")).toBeTruthy();
    expect(card1.queryByTestId("description")).toBeTruthy();
    expect(card1.queryByTestId("card-bottom")).toBeNull();
  })

  it("Card con sesión free en muro", () => {
    expect(card2.queryByTestId("view-card")).toBeTruthy();
    expect(card2.queryByTestId("user-info")).toBeTruthy();
    expect(card2.queryByTestId("btn-seguir")).toBeTruthy();
    expect(card2.queryByTestId("btn-editar")).toBeNull();
    expect(card2.queryByTestId("image")).toBeTruthy();
    expect(card2.queryByTestId("description")).toBeTruthy();
    expect(card2.queryByTestId("card-bottom")).toBeTruthy();
    expect(card2.queryByTestId("btn-like")).toBeTruthy();
    expect(card2.queryByTestId("btns-bottom-premium")).toBeNull();
  })

  it("Card con sesión premium en muro", () => {
    expect(card3.queryByTestId("view-card")).toBeTruthy();
    expect(card3.queryByTestId("user-info")).toBeTruthy();
    expect(card3.queryByTestId("btn-seguir")).toBeTruthy();
    expect(card3.queryByTestId("btn-editar")).toBeNull();
    expect(card3.queryByTestId("image")).toBeTruthy();
    expect(card3.queryByTestId("description")).toBeTruthy();
    expect(card3.queryByTestId("card-bottom")).toBeTruthy();
    expect(card3.queryByTestId("btn-like")).toBeTruthy();
    expect(card3.queryByTestId("btns-bottom-premium")).toBeTruthy();
    expect(card3.queryByTestId("btn-share")).toBeTruthy();
    expect(card3.queryByTestId("btn-comentar")).toBeTruthy();
    expect(card3.queryByTestId("btn-remove")).toBeNull();
  })

  it("Card con sesión free en mis publicaciones", () => {
    expect(card4.queryByTestId("view-card")).toBeNull();
  })

  it("Card con sesión premium en mis publicaciones", () => {
    expect(card5.queryByTestId("view-card")).toBeTruthy();
    expect(card5.queryByTestId("user-info")).toBeNull();
    expect(card5.queryByTestId("btn-seguir")).toBeNull();
    expect(card5.queryByTestId("btn-editar")).toBeTruthy();
    expect(card5.queryByTestId("image")).toBeTruthy();
    expect(card5.queryByTestId("description")).toBeTruthy();
    expect(card5.queryByTestId("card-bottom")).toBeTruthy();
    expect(card5.queryByTestId("btn-like")).toBeTruthy();
    expect(card5.queryByTestId("btns-bottom-premium")).toBeTruthy();
    expect(card5.queryByTestId("btn-share")).toBeTruthy();
    expect(card5.queryByTestId("btn-comentar")).toBeTruthy();
    expect(card5.queryByTestId("btn-remove")).toBeTruthy();
  })

});


