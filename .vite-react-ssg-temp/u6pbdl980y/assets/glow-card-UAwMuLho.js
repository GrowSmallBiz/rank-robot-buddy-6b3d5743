import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { a as cn } from "../main.mjs";
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
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          // Base styles
          "bg-card border-2 border-border/50",
          rounded,
          "transition-all duration-300",
          // Hover effects
          glowOnHover && "hover:border-primary/50",
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
      }
    );
  }
);
GlowCard.displayName = "GlowCard";
export {
  GlowCard as G
};
