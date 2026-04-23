import { jsxs, jsx, Fragment } from "react/jsx-runtime";
const SectionHeader = ({
  subtitle,
  title,
  titleHighlight,
  description,
  centered = true,
  className = "",
  children,
  as: HeadingTag = "h2"
}) => {
  const headingClass = HeadingTag === "h3" ? "text-2xl md:text-3xl font-display font-bold text-foreground" : "section-title";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${centered ? "text-center" : ""} mb-10 animate-fade-up ${className}`,
      children: [
        subtitle && /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: subtitle }),
        /* @__PURE__ */ jsxs(HeadingTag, { className: headingClass, children: [
          titleHighlight ? title : title,
          titleHighlight && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-primary italic", children: titleHighlight })
          ] })
        ] }),
        description && /* @__PURE__ */ jsx("p", { className: "section-description mt-4", children: description }),
        children
      ]
    }
  );
};
export {
  SectionHeader as S
};
