export type SuccessResponse = {
  success: true;
  message?: string;
};

export type ErrorResponse = {
  success: false;
  errors: {
    email?: string;
    password?: string;
    username?: string;
    code ?: string;
  };
};

export type AuthResponse = SuccessResponse | ErrorResponse;
