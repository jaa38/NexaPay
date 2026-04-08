import { useState } from 'react';

export default function useForm({ initialValues, validate }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (field) => (value) => {
    setValues((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      const error = validate(field, value, values);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    const error = validate(field, values[field], values);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const isValid = Object.values(errors).every((e) => !e);

  return {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
  };
}
