export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?!.*\s).{14,}$/;

// utils/validationMessages.js

export const validationMessages = {
    email: {
      required: "Email is required",
      pattern: "Invalid email address"
    },
    password: {
      required: "Password is required",
      minLength: "Password must be at least 14 characters",
      pattern: "Password must include at least one uppercase letter, one special character, one number, and cannot include spaces"
    }
  };
  