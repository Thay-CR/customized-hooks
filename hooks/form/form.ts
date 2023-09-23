import { useState, ChangeEvent } from 'react';

interface FormValues {
  [key: string]: string;
}

interface ValidationRule {
  required?: boolean;
  minlength?: number;
  pattern?: RegExp;
}

type ValidationRules = {
  [key: string]: ValidationRule;
};

interface FormErrors {
  [key: string]: string;
}

interface FormHook {
  formValues: FormValues;
  errors: FormErrors;
  isSubmitting: boolean;
  handleChange: (name: string, value: string) => void;
  handleSubmit: () => void;
}

export const useForm = (
  initialValues: FormValues,
  validationRules: ValidationRules
): FormHook => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (name: string, value: string) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    const validationErrors = validateForm(formValues, validationRules);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Você pode enviar os dados do formulário para o servidor aqui
      // Exemplo: enviarFormulario(formValues);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (values: FormValues, rules: ValidationRules): FormErrors => {
    const errors: FormErrors = {};

    for (const fieldName in rules) {
      const rule = rules[fieldName];
      const value = values[fieldName];

      if (rule.required && !value) {
        errors[fieldName] = 'Campo obrigatório';
      } else if (rule.minlength && value.length < rule.minlength) {
        errors[fieldName] = `Mínimo de ${rule.minlength} caracteres`;
      } else if (rule.pattern && !rule.pattern.test(value)) {
        errors[fieldName] = 'Formato inválido';
      }
    }

    return errors;
  };

  return {
    formValues,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
