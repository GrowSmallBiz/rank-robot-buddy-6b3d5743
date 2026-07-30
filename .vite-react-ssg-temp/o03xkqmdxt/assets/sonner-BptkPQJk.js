import { j as jsxDEV } from "../main.mjs";
import { Toaster as Toaster$1 } from "sonner";
import { toast } from "sonner";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxDEV(
    Toaster$1,
    {
      theme: "dark",
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/ui/sonner.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    void 0
  );
};
export {
  Toaster,
  toast
};
