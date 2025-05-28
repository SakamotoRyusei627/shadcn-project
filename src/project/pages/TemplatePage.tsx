const textSizes = [
  { class: "text-xs", label: "0.75rem (12px)" },
  { class: "text-sm", label: "0.875rem (14px)" },
  { class: "text-base", label: "1rem (16px)" },
  { class: "text-lg", label: "1.125rem (18px)" },
  { class: "text-xl", label: "1.25rem (20px)" },
  { class: "text-2xl", label: "1.5rem (24px)" },
  { class: "text-3xl", label: "1.875rem (30px)" },
  { class: "text-4xl", label: "2.25rem (36px)" },
  { class: "text-5xl", label: "3rem (48px)" },
  { class: "text-6xl", label: "3.75rem (60px)" },
  { class: "text-7xl", label: "4.5rem (72px)" },
  { class: "text-8xl", label: "6rem (96px)" },
  { class: "text-9xl", label: "8rem (128px)" },
];

const colors = [
  { name: "primary", className: "bg-blue-500 text-white" },
  { name: "secondary", className: "bg-gray-500 text-white" },
  { name: "danger", className: "bg-red-500 text-white" },
  { name: "success", className: "bg-green-500 text-white" },
  { name: "warning", className: "bg-yellow-400 text-black" },
];

export function TemplatePage() {
  return (
    <div className="h-screen overflow-y-auto bg-gray-50 p-8 space-y-12">
      {/* Text Sizes */}
      <section>
        <h2 className="text-xl font-bold mb-4">Text Sizes</h2>
        <div className="space-y-4">
          {textSizes.map(({ class: className, label }) => (
            <p
              key={className}
              className={`${className} bg-white p-4 rounded shadow`}
            >
              <span className="font-mono">{className}</span> → {label}
            </p>
          ))}
        </div>
      </section>

      {/* Colors */}
      <section>
        <h2 className="text-xl font-bold mb-4">Color Samples</h2>
        <div className="space-y-4">
          {colors.map(({ name, className }) => (
            <div key={name} className={`rounded px-4 py-2 ${className}`}>
              {name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
