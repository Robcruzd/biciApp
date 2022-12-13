import React from 'react';
import App from '../App';
import Card from '../app/components/card/Index'
import { render } from '@testing-library/react-native';

let card;

describe("<Card />", () => {
  beforeEach(() => {
    card = render (<Card/>);
  });

  it("Renderiza correctamente", () => {
    //expect(component).toBeDefined();
    expect(card).toBeDefined();
    expect(card.getByTestId("view-card")).toBeDefined();
  });

});


