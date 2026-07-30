import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    /**
     * Heading element used for the Radix Accordion Header.
     * Radix defaults to <h3>; pass "h4" when the accordion sits under an
     * H3 category label so the document outline stays H2 > H3 > H4.
     */
    headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
  }
>(({ className, children, headingLevel, ...props }, ref) => {
  const Heading = headingLevel ?? "h3";
  const trigger = (
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  );

  if (!headingLevel) {
    return (
      <AccordionPrimitive.Header className="flex">{trigger}</AccordionPrimitive.Header>
    );
  }

  return (
    <AccordionPrimitive.Header asChild>
      <Heading className="flex">{trigger}</Heading>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    /**
     * forceMount keeps every answer in the rendered/prerendered HTML so
     * crawlers (Googlebot, GPTBot, PerplexityBot) read all FAQ answers,
     * not just the open one. Radix still applies the `hidden` attribute
     * when collapsed, so visual behaviour is unchanged.
     */
    forceMount
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
