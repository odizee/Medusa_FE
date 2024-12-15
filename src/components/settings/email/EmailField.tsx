import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

interface EmailFieldProps {
  label: string;
  description?: string;
  value: string;
}

export function EmailField({ label, description, value }: EmailFieldProps) {
  return (
    <div>
      <Label className="text-sm font-medium text-gray-700">{label}</Label>
      {description && (
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      )}
      <Input value={value} className="max-w-md mt-2 bg-white" readOnly />
    </div>
  );
}
