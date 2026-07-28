export default function ColorsPage() {
    const colors = [
      {
        name: "Brand Primary",
        variable: "bg-brand-primary",
        hex: "#2F4D72",
      },
      {
        name: "Brand Primary Dark",
        variable: "bg-brand-primary-dark",
        hex: "#27405F",
      },
      {
        name: "Brand Accent",
        variable: "bg-brand-accent",
        hex: "#D65B58",
      },
      {
        name: "Brand Accent Hover",
        variable: "bg-brand-accent-hover",
        hex: "#C54C49",
      },
      {
        name: "Brand Secondary",
        variable: "bg-brand-secondary",
        hex: "#0F4D9A",
      },
    ];
  
    return (
      <main className="min-h-screen bg-background p-10">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-4xl font-bold">
            Temporary Dumpster Brand Colors
          </h1>
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {colors.map((color) => (
              <div
                key={color.name}
                className="overflow-hidden rounded-xl border border-gray-200"
              >
                <div className={`h-40 ${color.variable}`} />
  
                <div className="space-y-2 p-4">
                  <h2 className="font-semibold">{color.name}</h2>
  
                  <p className="font-mono text-sm text-gray-500">
                    {color.hex}
                  </p>
  
                  <code className="block rounded bg-gray-100 p-2 text-xs">
                    {color.variable}
                  </code>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-bold">Examples</h2>
  
            <div className="flex flex-wrap gap-4">
              <button className="rounded-lg bg-brand-accent px-6 py-3 font-semibold text-white hover:bg-brand-accent-hover">
                Primary CTA
              </button>
  
              <button className="rounded-lg bg-brand-primary px-6 py-3 font-semibold text-white">
                Secondary Action
              </button>
  
              <button className="rounded-lg bg-brand-secondary px-6 py-3 font-semibold text-white">
                Alternate Action
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }