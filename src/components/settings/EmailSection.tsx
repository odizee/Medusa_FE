import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function EmailSection() {
  return (
    <div className="space-y-4">
      <div>
        <Label>Connected email</Label>
        <p className="text-sm text-muted-foreground">Select role account</p>
        <Input
          value="olivia@untitledui.com"
          className="max-w-md mt-2"
          readOnly
        />
      </div>

      <div>
        <Label>An alternative email</Label>
        <Input
          value="billing@untitledui.com"
          className="max-w-md mt-2"
          readOnly
        />
      </div>
    </div>
  );
}
