import React from 'react';
import App from '../App';
import Card from '../app/components/card/Index'
import { render, fireEvent, act, waitFor } from '@testing-library/react-native';

let component, card;

describe("<Card />", () => {
  beforeEach(() => {
   global.fetch = jest.fn(() => Promise.resolve({
    json: () =>  Promise.resolve({
      "felipeburbano16": {
        "email": "felipeburbano16@gmail.com",
        "name": "Felipe Burbano",
        "premium": true,
        "typeCyclist": "Profesional",
        "photo": "http://awsassets.panda.org/img/original/mid_258267.jpg",
        "follow": [{
          "username":"fesalaz",
          "email":"fesalaz@gmail.com"
        },
        {
          "username":"robcruzde",
          "email":"fesalaz@gmail.com"
        },
        {
          "username":"felipeburbano16",
          "email":"fesalaz@gmail.com"
        }]
      }
      })
   }));
    card = render (<Card />);
  });

  it("Renderiza correctamente", () => {
    //expect(component).toBeDefined();
    expect(card).toBeDefined();
    expect(card.getByTestId("view-card")).toBeDefined();

  });

it("Renderiza elementos despúes de mock login", () => {
  
   [{
    //key = {index},
    user={"felipeburbano16user"}
   /* image={publication.image},
    description={publication.description},
    isLoggedIn={this.props.user.isLoggedIn},
    premium={this.props.user.premium},
    navigation={this.props.navigation}*/
  }]


  const premium = card.getByTestId("btn-seguir");

 expect(card.getByTestId("card-info1")).toBeDefined();



 expect(card.premium).toBeNull();

});


});


