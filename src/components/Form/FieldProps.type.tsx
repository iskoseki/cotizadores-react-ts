export type FieldProps = {
  component: any;
  name: string;
  label?: string;
  value?: string;
  type?: string;
  pattern?: RegExp;
  maxLength?: number;
  errorMessage?: string;
  options?: { value: string; label: string }[];
};
