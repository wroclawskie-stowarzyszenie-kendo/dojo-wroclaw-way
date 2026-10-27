import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const DAY_SLOTS = ["Poniedziałek", "Środa"];

const disciplines = [
  {
    kanji: "剣道",
    name: "Kendo",
    color: "crimson",
    text: "Japońska sztuka walki mieczem bambusowym (shinai) w pełnym pancerzu (bogu). Wzmacnia ciało i umysł, buduje pewność siebie — niezależnie od wieku, płci i kondycji.",
    styles: "Kendo, zawody i egzaminy na stopnie",
    days: ["Poniedziałek, 18:30–20:30", "Środa, 18:30–20:30"],
    card: "hover:border-crimson hover:shadow-crimson",
  },
  {
    kanji: "杖道",
    name: "Jodo",
    color: "indigo",
    text: "Walka drewnianym kijem przeciwko partnerowi uzbrojonemu w miecz. Trening rozwija precyzję, dystans, wyczucie momentu i kontrolę ruchu.",
    styles: "ZNKR Jodo i Shinto Muso Ryu Jodo",
    days: ["Poniedziałek, 18:30–20:30"],
    card: "hover:border-indigo hover:shadow-indigo",
  },
  {
    kanji: "居合道",
    name: "Iaido",
    color: "accent",
    text: "Japońska sztuka dobywania miecza. Trening rozwija koncentrację, właściwą postawę, precyzję ruchu i spokój umysłu.",
    styles: "ZNKR Iaido i tradycyjne formy koryu",
    days: ["Środa, 18:30–20:30"],
    card: "hover:border-accent hover:shadow-elegant",
  },
] as const;

const colorText: Record<string, string> = { crimson: "text-crimson", indigo: "text-indigo", accent: "text-accent" };

const trainingDays = [
  { day: "Poniedziałek", entries: [{ name: "Kendo", color: "crimson" }, { name: "Jodo", color: "indigo" }] },
  { day: "Środa", entries: [{ name: "Kendo", color: "crimson" }, { name: "Iaido", color: "accent" }] },
];

const TrainingOverview = ({ showCards = true }: { showCards?: boolean }) => (
  <div className="space-y-16">
    {showCards && (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-crimson/10 text-crimson text-sm font-medium mb-4">
          <Calendar className="w-4 h-4" />
          Sezon 2026/2027
        </div>
        <h3 className="text-3xl md:text-4xl font-zen font-medium text-soft-white">Wybierz swoją drogę</h3>
        <p className="text-muted-foreground mt-3">Dni treningowe w Szkole Podstawowej nr 33, ul. Kolista 17, Wrocław</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 items-stretch">
        {disciplines.map((d) => (
          <Card key={d.name} className={`p-6 bg-card border-border transition-smooth flex flex-col ${d.card}`}>
            <div className="mb-5">
              <p className={`text-3xl font-zen mb-2 ${colorText[d.color]}`}>{d.kanji}</p>
              <h4 className="text-2xl font-zen font-medium text-soft-white">{d.name}</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{d.text}</p>
            <div className="mt-auto space-y-3">
              {DAY_SLOTS.map((slot) =>
                d.days.some((day) => day.startsWith(slot)) ? (
                  <div key={slot} className="flex items-center justify-between gap-4 rounded-lg bg-gradient-subtle border border-border px-4 py-3">
                    <span className="font-medium text-soft-white">{slot}</span>
                    <span className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className={`w-4 h-4 ${colorText[d.color]}`} /> 18:30 – 20:30
                    </span>
                  </div>
                ) : (
                  <div key={slot} aria-hidden className="invisible flex items-center justify-between gap-4 rounded-lg border border-border px-4 py-3">
                    <span>{slot}</span>
                    <span className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" /> 18:30 – 20:30
                    </span>
                  </div>
                )
              )}
              <p className="text-sm text-muted-foreground">{d.styles}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>

    )}
    {/* Calendar */}
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h3 className="text-3xl font-zen font-medium text-soft-white">Kalendarz Treningów</h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Sprawdź aktualne terminy treningów wszystkich dyscyplin. Kalendarz jest na bieżąco aktualizowany o ewentualne zmiany.
        </p>
      </div>
      <Card className="p-6 bg-gradient-subtle border-border">
        <div className="rounded-lg overflow-hidden border border-border shadow-elegant bg-card" style={{ height: "60vh", minHeight: 420 }}>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FWarsaw&bgcolor=%23ffffff&src=Y19iMDgxYTFlNTY3MGY5MDVmZjNlMGVlOGNiODFlOTMyNGFhM2NlOGJhYWYxYjYyODVlM2QyNmVhMDRjYmI2ODgyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23D50000&mode=MONTH&showWeekends=false"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Kalendarz treningów WSK Wrocław"
          ></iframe>
        </div>
      </Card>
    </div>
  </div>
);

export default TrainingOverview;
