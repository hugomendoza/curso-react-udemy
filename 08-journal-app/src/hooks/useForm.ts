import { useEffect, useMemo, useState } from "react";

interface initialObject {
  email: string;
  password: string;
  displayName?: string;
  index?: any;
}

export const useForm = (initialForm: initialObject, formValidations:any = {}) => {

  const [ formState, setFormState ] = useState(initialForm);
  const [ formValidation, setFormValidation ] = useState({});

  useEffect(() => {
    createValidators();
  }, [ formState ])

  useEffect(() => {
    setFormState(initialForm)
  },[initialForm])

  const isFormValid = useMemo (() => {
    
    for (const formValue of Object.keys ( formValidation)) {
      if ( formValidation[formValue] !== null) return false;
    }

    return true;
  }, [ formValidation ] )
  

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  const createValidators = () => {
    const formChechedValues:any = {}

    for (const formField of Object.keys( formValidations )) {
      const [ fn, errorMessage ] = formValidations[formField];

      formChechedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
    }

    setFormValidation( formChechedValues );
  }

  return {
    ...formState,
    formState, 
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid
  }
}
