import React, { useState, useCallback, useEffect } from "react";
import {
  StyledUser,
  InputContainer,
  Input,
  Label,
  LabelForRadio,
  Radio,
  Form
} from "./userStyle";

const User = () => {
  const [formData, setFormData] = useState({});
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    console.log("SendData to the API !", formData);
  }, [formData]);

  const stringifyFormData = fd => {
    const data = {};
    for (let key of fd.keys()) {
      data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
  };

  const handleSubmitForm = useCallback(event => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      setIsValid(false);
      console.log("NOT VALID");
      return;
    }

    setIsValid(true);
    const data = new FormData(event.target);
    setFormData(stringifyFormData(data));
  }, []);

  return (
    <StyledUser>
      <Form
        action=""
        method="get"
        onSubmit={handleSubmitForm}
        noValidate
        isValid={isValid}
      >
        <InputContainer>
          <Label htmlFor="lastname">Nom : </Label>
          <Input type="text" name="lastname" id="lastname" required />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="firstname">Prénom : </Label>
          <Input type="text" name="firstname" id="firstname" required />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="sexe">Sexe : </Label>
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

export default User;
