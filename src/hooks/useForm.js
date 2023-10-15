import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [fontState, setFontState] = useState(initialForm);


  const onInputChange = ({ target }) => {

    const {name, value} = target
    setFontState({
      ...fontState,
      [name]: value,
    });
  };
  return {
    ...fontState,
    fontState, 
    onInputChange,
  };
};
