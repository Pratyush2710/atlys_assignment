export interface AuthPageProps {
  onLogin?: (data: AuthFormValues) => void;
}

export interface AuthFormValues {
  username?: string;
  password: string;
  email?: string;
}
