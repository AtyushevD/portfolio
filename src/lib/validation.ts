export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const validateForm = (values: {
  name: string;
  email: string;
  message: string;
}): FormErrors => {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Обязательное поле';
  } else if (values.name.length < 2) {
    errors.name = 'Минимум 2 символа';
  }

  if (!values.email.trim()) {
    errors.email = 'Обязательное поле';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Некорректный email';
  }

  if (!values.message.trim()) {
    errors.message = 'Обязательное поле';
  } else if (values.message.length < 10) {
    errors.message = 'Минимум 10 символов';
  }

  return errors;
};