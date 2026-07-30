import { j as jsxDEV } from "../main.mjs";
const SectionHeader = ({
  subtitle,
  title,
  titleHighlight,
  description,
  centered = true,
  className = "",
  children,
  as: HeadingTag = "h2",
  styleAs
}) => {
  const visualLevel = styleAs ?? HeadingTag;
  const baseHeadingClass = visualLevel === "h3" ? "text-2xl md:text-3xl font-display font-bold text-foreground" : "section-title";
  const headingClass = visualLevel === "h3" ? baseHeadingClass : `${baseHeadingClass} bg-gradient-heading bg-clip-text text-transparent`;
  const headingText = titleHighlight ? `${title} ${titleHighlight}` : title;
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: `${centered ? "text-center" : ""} mb-10 animate-fade-up ${className}`,
      children: [
        subtitle && /* @__PURE__ */ jsxDEV("p", { className: "section-subtitle", children: subtitle }, void 0, false, {
          fileName: "/dev-server/src/components/services/SectionHeader.tsx",
          lineNumber: 43,
          columnNumber: 20
        }, void 0),
        /* @__PURE__ */ jsxDEV(HeadingTag, { className: headingClass, children: headingText }, void 0, false, {
          fileName: "/dev-server/src/components/services/SectionHeader.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, void 0),
        description && /* @__PURE__ */ jsxDEV("p", { className: "section-description mt-4", children: description }, void 0, false, {
          fileName: "/dev-server/src/components/services/SectionHeader.tsx",
          lineNumber: 50,
          columnNumber: 9
        }, void 0),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/services/SectionHeader.tsx",
      lineNumber: 40,
      columnNumber: 5
    },
    void 0
  );
};
export {
  SectionHeader as S
};
