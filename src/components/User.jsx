import React, { useCallback, useState } from "react";
import {
  StyledUser,
  InputContainer,
  Input,
  Label,
  LabelForRadio,
  Radio,
  Form
} from "./userStyle";
import api from "../app/api";

export const User = () => {
  const [isFormError, setIsFormError] = useState(false);

  const handleSubmitForm = useCallback(event => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      setIsFormError(true);
      return;
    }

    setIsFormError(false);
    const formData = new FormData(event.target);
    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      gender: formData.get("gender")
    };

    api
      .put("/profile", data)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <StyledUser>
      <Form
        action=""
        method="get"
        onSubmit={handleSubmitForm}
        noValidate
        isFormError={isFormError}
      >
        <InputContainer>
          <Label htmlFor="lastname">Nom * : </Label>
          <Input type="text" name="last_name" id="lastname" required />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="firstname">Prénom * : </Label>
          <Input type="text" name="first_name" id="firstname" required />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="sexe">Sexe * : </Label>
          <Radio>
            <Input type="radio" value={"man"} name="gender" id="man" required />
            <LabelForRadio htmlFor="man">Homme</LabelForRadio>
          </Radio>
          <Radio>
            <Input type="radio" value={"woman"} name="gender" id="woman" />
            <LabelForRadio htmlFor="woman">Femme</LabelForRadio>
          </Radio>
          <Radio>
            <Input type="radio" value={"other"} name="gender" id="other" />
            <LabelForRadio htmlFor="other">Non-binaire</LabelForRadio>
          </Radio>
          <Label />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">Email : </Label>
          <Input type="email" name="email" id="email" />
        </InputContainer>
        <InputContainer>
          <Input type="submit" value="Submit!" />
        </InputContainer>
      </Form>
    </StyledUser>
  );
};