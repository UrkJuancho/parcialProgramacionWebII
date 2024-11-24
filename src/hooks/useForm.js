import { useState } from 'react';

export const useForm = ( initialForm = {}) => {

  const [ formState, setFormState ] = useState(initialForm);
  const [ FormValidation, setFormValidation ] = useState({});

  // useEffect({} => {
  //   createValidators();
  // }, [formState])

  const onInputChange = ({target}) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  }

  const onResetForm = () => {
    setFormState(initialForm);
  }

  const createValidators = () => {
    const formChecked = {};

    for (const formField of Object.keys(FormValidations)){
      const [fn, errorMessage] = FormValidations[formField];

      formCheckedValues[`$(formField)Valid`] = fn (formState[formField]) ? null: errorMessage
    }

    setFormValidation(formCheckedValues);
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}