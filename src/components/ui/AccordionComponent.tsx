"use client";
import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const AccordionComponent = ({ children }: { children: React.ReactNode }) => {
  const [accState, setAccState] = useState<"open" | "closed">("open");
  return (
    <Accordion.Root
      className="mt-4 bg-dark-500"
      type="single"
      defaultValue="open"
      collapsible
    >
      <Accordion.Item value="open">
        <Accordion.AccordionTrigger
          onClick={() => setAccState(accState === "open" ? "closed" : "open")}
          className="flex items-center py-1 text-[12px] text-light-600"
        >
          <ChevronDown
            size={12}
            className={`inline mx-[2px] text-light-600 transition-all ${
              accState === "closed" && "-rotate-90"
            }`}
          />
          TEXT CHANNELS
        </Accordion.AccordionTrigger>
        <Accordion.AccordionContent>{children}</Accordion.AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default AccordionComponent;
