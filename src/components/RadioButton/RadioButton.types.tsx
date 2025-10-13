export interface RadioButtonProps {
  disabled?: boolean;
  backgroundColor?: string;
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}