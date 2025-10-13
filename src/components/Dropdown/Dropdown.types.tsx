export interface DropdownProps {
  disabled?: boolean;
  backgroundColor?: string;
  options: string[];
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}