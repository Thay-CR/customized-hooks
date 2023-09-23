import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm, FormValues, ValidationRules } from '../hooks/form/form'; // Importe o hook e os tipos

export const MyFormComponent: React.FC = () => {
  const initialValues: FormValues = {
    username: '',
    password: '',
  };

  const validationRules: ValidationRules = {
    username: {
      required: true,
    },
    password: {
      required: true,
      minlength: 6,
    },
  };

  const {
    formValues,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useForm(initialValues, validationRules); // Use o hook
console.log(formValues)
  return (
    <View style={{top:160}}>
      <TextInput
        placeholder="Username"
        value={formValues.username}
        onChangeText={(text) => handleChange('username', text)} // Use handleChange para atualizar os valores do formulário
      />
      {errors.username && <Text style={{ color: 'red' }}>{errors.username}</Text>}

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={formValues.password}
        onChangeText={(text) => handleChange('password', text)} // Use handleChange para atualizar os valores do formulário
      />
      {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

      <Button
        title="Enviar"
        onPress={handleSubmit} // Use handleSubmit para lidar com a submissão do formulário
        disabled={isSubmitting}
      />
    </View>
  );
};


