export interface FormValues {
    [key: string]: string;
  }
  
  interface ValidationRule {
    required?: boolean;
    minlength?: number;
    pattern?: RegExp;
  }
  
  export type ValidationRules = {
    [key: string]: ValidationRule;
  };
  
  export interface FormErrors {
    [key: string]: string;
  }
  
  export interface FormHook {
    formValues: FormValues;
    errors: FormErrors;
    isSubmitting: boolean;
    handleChange: (name: string, value: string) => void;
    handleSubmit: () => void;
  }