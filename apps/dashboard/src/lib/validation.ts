export const validateRequired = (value: string | undefined | null) => {
  if (!value) {
    return "Это поле необходимо заполнить";
  }

  return null;
};

export const validateEmail = (email: string | null) => {
  if (!email) {
    return "Необходимо ввести email";
  }

  if (!/^\S+@\S+$/.test(email)) {
    return "Некорректный email";
  }

  return null;
};

export const validatePassword = (password: string | null) => {
  if (!password) {
    return "Необходимо ввести пароль";
  }
  if (password.length < 8) {
    return "Пароль должен содержать не менее 8 символов";
  }
  if (password.length > 32) {
    return "Пароль не должен превышать 32 символа";
  }
  if (!/[a-z]/.test(password)) {
    return "Пароль должен содержать хотя бы одну строчную букву";
  }
  if (!/[A-Z]/.test(password)) {
    return "Пароль должен содержать хотя бы одну заглавную букву";
  }
  if (!/\d/.test(password)) {
    return "Пароль должен содержать хотя бы одну цифру";
  }
  return null;
};
