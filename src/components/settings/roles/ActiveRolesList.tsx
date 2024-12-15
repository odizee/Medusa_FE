import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import user_role from "@/assets/roles.svg";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function ActiveRolesList() {
  const [selectedJobType, setSelectedJobType] = useState("super");

  const handleRadioChange = (event: string) => {
    setSelectedJobType(event);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-x-8">
        <div>
          <Label className="text-sm font-medium text-gray-700">
            Active Role
          </Label>
          <p className="text-sm text-gray-500 mt-1 mb-3">
            Select active role available to the user
          </p>
        </div>
        <div className="w-full">
          <RadioGroup onValueChange={handleRadioChange} defaultValue="super">
            <div
              className={`flex justify-between p-4 border ${
                selectedJobType === "super"
                  ? "border-[#D6BBFB] bg-[#F9F5FF]"
                  : "border-gray-200 bg-white"
              } rounded-lg mb-2`}
            >
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={user_role} />
                  <AvatarFallback className="bg-gray-100 text-gray-600"></AvatarFallback>
                </Avatar>
                <div>
                  <p
                    className={`font-medium ${
                      selectedJobType === "super"
                        ? "text-[#53389E]"
                        : "text-gray-900"
                    } text-sm`}
                  >
                    Superadmin
                  </p>
                  <p
                    className={`text-xs ${
                      selectedJobType === "super"
                        ? "text-[#7F56D9]"
                        : "text-gray-500"
                    }
                  `}
                  >
                    Last active 06/2023
                  </p>
                  <div className="mt-3 flex gap-x-3">
                    <p
                      className={`text-xs ${
                        selectedJobType === "super"
                          ? "text-[#7F56D9]"
                          : "text-gray-500"
                      }
                  `}
                    >
                      Set as default
                    </p>
                    <p className="text-[#6941C6] text-xs">Edit</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="super" id="r1" className="mt-1" />
              </div>
            </div>
            <div
              className={`flex justify-between p-4 border ${
                selectedJobType === "dev"
                  ? "border-[#D6BBFB] bg-[#F9F5FF]"
                  : "border-gray-200 bg-white"
              } rounded-lg mb-2`}
            >
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={user_role} />

                  <AvatarFallback className="bg-gray-100 text-gray-600"></AvatarFallback>
                </Avatar>
                <div>
                  <p
                    className={`font-medium ${
                      selectedJobType === "dev"
                        ? "text-[#53389E]"
                        : "text-gray-900"
                    } text-sm`}
                  >
                    Developeradmin
                  </p>
                  <p
                    className={`text-xs ${
                      selectedJobType === "dev"
                        ? "text-[#7F56D9]"
                        : "text-gray-500"
                    }
                  `}
                  >
                    Last active 01/2023
                  </p>
                  <div className="mt-3 flex gap-x-3">
                    <p
                      className={`text-xs ${
                        selectedJobType === "dev"
                          ? "text-[#7F56D9]"
                          : "text-gray-500"
                      }
                  `}
                    >
                      Set as default
                    </p>
                    <p className="text-[#6941C6] text-xs">Edit</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="dev" id="r2" className="mt-1" />
              </div>
            </div>
            <div
              className={`flex justify-between p-4 border ${
                selectedJobType === "support"
                  ? "border-[#D6BBFB] bg-[#F9F5FF]"
                  : "border-gray-200 bg-white"
              } rounded-lg`}
            >
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={user_role} />

                  <AvatarFallback className="bg-gray-100 text-gray-600"></AvatarFallback>
                </Avatar>
                <div>
                  <p
                    className={`font-medium ${
                      selectedJobType === "support"
                        ? "text-[#53389E]"
                        : "text-gray-900"
                    } text-sm`}
                  >
                    Supportadmin
                  </p>
                  <p
                    className={`text-xs ${
                      selectedJobType === "support"
                        ? "text-[#7F56D9]"
                        : "text-gray-500"
                    }
                  `}
                  >
                    Last active 10/2022
                  </p>
                  <div className="mt-3 flex gap-x-3">
                    <p
                      className={`text-xs ${
                        selectedJobType === "support"
                          ? "text-[#7F56D9]"
                          : "text-gray-500"
                      }
                  `}
                    >
                      Set as default
                    </p>
                    <p className="text-[#6941C6] text-xs">Edit</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="support" id="r3" className="mt-1" />
              </div>
            </div>
          </RadioGroup>
          <Button
            variant="outline"
            className="bg-transparent border-none shadow-none text-[#667085] p-0 mt-2"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add role to user
          </Button>
        </div>
        {/* <div className="space-y-4">
        {roles.map((role, index) => (
          <ActiveRoleCard key={index} role={role} />
        ))}

       
      </div> */}
      </div>
    </div>
  );
}
