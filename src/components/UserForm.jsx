import React, { useState, useCallback, Fragment } from "react";
import styled from "styled-components";
import Select from "react-select";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: palevioletred;
  margin: 1em;
  padding: 1em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Label = styled.label`
  font-size: 2em;
  font-weight: bold;
  text-decoration: none;
`;

const Input = styled.input`
  border: none;
  font-size: 0.5em;
  margin-left: 20px;
  outline: none;
`;

// const Select = styled.select`
//   font-size: 0.5em;
//   width: 100px;
//   margin-left: 20px;
//   outline: none;
// `;

const StyledSelect = styled(Select)`
  font-size: 0.5em;
  width: 200px;
  margin-left: 20px;
  outline: none;
  font-family: Arial;
  color: "#a9a9a9";
`;

const Button = styled.button`
  font-size: 1em;
  /* margin: 0.5em; */
  padding: 0.25em em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  align-self: flex-end;
  outline: none;
  cursor: pointer;

  /* font-size: 1em;
  height: 100px;
  height: 100px;
  font-family: "IM Fell French Canon";
  box-shadow: 4px -2px 8px 0px black;
  outline: none; */
`;

const UserForm = ({ setErrorMessage }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeFirstName = useCallback(event => {
    setFirstName(event.target.value);
    event.preventDefault();
  }, []);

  const handleChangeLastName = useCallback(event => {
    setLastName(event.target.value);
    event.preventDefault();
  }, []);

  const handleChangeGender = useCallback(selectOption => {
    setGender(selectOption);
  }, []);

  const handleChangeEmail = useCallback(event => {
    setEmail(event.target.value);
    event.preventDefault();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    if (firstName === "" || lastName === "" || gender === "") {
      setErrorMessage("Veuillez remplir les champs Nom, Prénom et Sexe");
      return;
    }
    setErrorMessage("");
    alert("A name was submitted: " + firstName + lastName + gender + email);
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Label>
          Prénom:
          <Input
            placeholder="Prénom"
            type="text"
            value={firstName}
            onChange={handleChangeFirstName}
          />
        </Label>
        <Label>
          Nom:
          <Input
            placeholder="Nom"
            type="text"
            value={lastName}
            onChange={handleChangeLastName}
          />
        </Label>
        <Label style={{ display: "flex", flexDirection: "row" }}>
          Sexe :
          {/* <Select value={gender} onChange={handleChangeGender}>
            <option value="male">Femme</option>
            <option value="lime">Homme</option>
            <option value="coconut">Non binaire</option>
          </Select> */}
          <StyledSelect
            value={gender}
            onChange={handleChangeGender}
            options={[
              { value: "male", label: "Homme" },
              { value: "female", label: "Femme" },
              { value: "other", label: "Non-Binaire" }
            ]}
          />
        </Label>
        <Label>
          Email:
          <Input
            placeholder="Email"
            type="text"
            value={email}
            onChange={handleChangeEmail}
          />
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
    </Fragment>
  );
};

export default UserForm;
