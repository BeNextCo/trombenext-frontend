import styled from 'styled-components'

export const StyledUser = styled.div`
  text-align: center;
  width: 400px;
`

export const InputContainer = styled.div`
  display: table-row;
`

export const Input = styled.input`
  display: table-cell;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid lightgrey;
`

export const Label = styled.label`
  display: table-cell;
  margin-bottom: 10px;
  padding-right: 10px;
`

export const LabelForRadio = styled(Label)`
  padding-right: 0px;
`

export const Radio = styled.div`
  display: flex;
  justify-content: center;
  border-color: red;
`

export const Form = styled.form`
  display: table;
  width: 100%;

  & ${Input}:invalid {
    box-shadow: ${props => (props.isFormError ? '0 0 5px 1px red' : 'none')};
  }
`
