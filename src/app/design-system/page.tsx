import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const tokens = [
  { name: "grafito", value: "#0a0e1a" },
  { name: "moneyGreen", value: "#4CAF50" },
  { name: "moneyCyan", value: "#00E676" },
  { name: "techWhite", value: "#E8F5E9" },
  { name: "signalRed", value: "#E63946" },
];

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-grafito text-techWhite">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <header className="space-y-3">
          <p className="font-mono text-xs tracking-[0.3em] text-moneyGreen">DESIGN SYSTEM</p>
          <h1 className="text-3xl md:text-4xl font-black">Money Theme · Tokens & Primitives</h1>
          <p className="text-sm text-techWhite/70 font-mono">
            Base palette, buttons, badges y cards. Usa esta página para validar contraste y estados.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {tokens.map((token) => (
              <div key={token.name} className="rounded-lg border border-white/10 p-4 bg-white/5">
                <div className="h-16 rounded-md mb-3" style={{ backgroundColor: token.value }} />
                <p className="font-bold text-sm">{token.name}</p>
                <p className="text-xs font-mono text-techWhite/70">{token.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">Badges</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge tone="success" pulse>Sistema Activo</Badge>
            <Badge tone="alert">Riesgo</Badge>
            <Badge tone="neutral">Neutral</Badge>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">Cards</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((card) => (
              <Card key={card} className="p-6">
                <p className="text-sm text-techWhite/70 font-mono">Card {card}</p>
                <p className="text-lg font-bold mt-2">Hover glow verde</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
