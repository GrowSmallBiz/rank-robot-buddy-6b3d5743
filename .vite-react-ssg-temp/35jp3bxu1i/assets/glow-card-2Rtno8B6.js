import { j as jsxDEV, c as cn } from "../main.mjs";
import * as React from "react";
const GlowCard = React.forwardRef(
  ({
    className,
    glowOnHover = true,
    glowColor = "rgba(255, 127, 80, 0.3)",
    liftOnHover = true,
    rounded = "rounded-2xl",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        ref,
        className: cn(
          // Base styles — elevated bg for contrast against section backgrounds
          "bg-[hsl(210_45%_18%)] border-2 border-[hsl(188_78%_41%_/_0.25)]",
          rounded,
          "transition-all duration-300",
          // Hover effects
          glowOnHover && "hover:border-[hsl(188_78%_41%_/_0.6)]",
          liftOnHover && "hover:-translate-y-2",
          className
        ),
        style: {
          ...glowOnHover && {
            ["--glow-color"]: glowColor
          }
        },
        onMouseEnter: (e) => {
          var _a;
          if (glowOnHover) {
            e.currentTarget.style.boxShadow = `0 0 30px ${glowColor}`;
          }
          (_a = props.onMouseEnter) == null ? void 0 : _a.call(props, e);
        },
        onMouseLeave: (e) => {
          var _a;
          if (glowOnHover) {
            e.currentTarget.style.boxShadow = "";
          }
          (_a = props.onMouseLeave) == null ? void 0 : _a.call(props, e);
        },
        ...props,
        children
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/ui/glow-card.tsx",
        lineNumber: 31,
        columnNumber: 7
      },
      void 0
    );
  }
);
GlowCard.displayName = "GlowCard";
export {
  GlowCard as G
};
