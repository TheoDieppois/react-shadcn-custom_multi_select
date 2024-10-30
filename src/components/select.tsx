"use client";

import { useState } from "react";
import {
  MultiSelector,
  MultiSelectorTrigger,
  MultiSelectorInput,
  MultiSelectorContent,
  MultiSelectorList,
  MultiSelectorItem,
} from "@/components/ui/multi-select";

const options = [
  { label: "Option 1", value: "Option 1" },
  { label: "Option 2", value: "Option 2" },
  { label: "Option 3", value: "Option 3" },
  { label: "Option 4", value: "Option 4" },
];

const Select = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <MultiSelector
      values={value}
      onValuesChange={setValue}
      loop={false}
      className="h-auto max-w-md"
    >
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder="Sélectionner une option" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          {options.map((option, i) => (
            <MultiSelectorItem key={i} value={option.value}>
              {option.label}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  );
};

export default Select;
