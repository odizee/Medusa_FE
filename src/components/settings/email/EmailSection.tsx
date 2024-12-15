import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
// import { EmailField } from "./EmailField";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";

export default function EmailSection() {
  return (
    <div className="flex flex-col gap-x-8 sm:flex-row">
      <div className="mb-10">
        <Label className="text-sm font-medium text-gray-700">
          Connected email
        </Label>
        <p className="text-sm text-gray-500 mt-1">Select role account</p>
      </div>
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-start space-x-2">
          <RadioGroupItem value="default" id="r1" className="mt-1" />
          <div>
            <Label htmlFor="r1" className="">
              My account email
            </Label>

            <p className="text-xs text-[#667085]">olivia@untitledui.com</p>
          </div>
        </div>
        <div className="flex items-start space-x-2 mt-2">
          <RadioGroupItem value="alt" id="r2" className="mt-1" />
          <div>
            <Label htmlFor="r2" className="">
              An alternative email
            </Label>
            <Input className="max-w-lg mt-2" placeholder="Enter Email" />
          </div>
        </div>
      </RadioGroup>
      {/* <EmailField label="An alternative email" value="billing@untitledui.com" /> */}
    </div>
  );
}
