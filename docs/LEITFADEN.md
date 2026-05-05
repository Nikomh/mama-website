# Leitfaden: Therapeuten-Website
## Best Practices · Design-Prinzipien · Struktur · Umsetzung

> Dieser Leitfaden gilt für alle Mitglieder des Teams (designer, frontend-dev, content-writer) als verbindliche Referenz. Alle Entscheidungen — Design, Copy, Technik — orientieren sich an diesen Prinzipien.

---

## Inhaltsverzeichnis

1. [Strategie & Grundverständnis](#1-strategie--grundverständnis)
2. [Zielgruppe & Psychologie](#2-zielgruppe--psychologie)
3. [Seitenstruktur & Architektur](#3-seitenstruktur--architektur)
4. [Seitenweise Layouts & Inhalte](#4-seitenweise-layouts--inhalte)
5. [Design-Prinzipien](#5-design-prinzipien)
6. [Typografie](#6-typografie)
7. [Farbpalette](#7-farbpalette)
8. [Bilder & Visuals](#8-bilder--visuals)
9. [Copy & Messaging](#9-copy--messaging)
10. [UX & Conversion](#10-ux--conversion)
11. [Navigation & Orientierung](#11-navigation--orientierung)
12. [Accessibility](#12-accessibility)
13. [Technische Standards](#13-technische-standards)
14. [SEO & lokale Auffindbarkeit](#14-seo--lokale-auffindbarkeit)
15. [Rechtliches (Deutschland)](#15-rechtliches-deutschland)
16. [Qualitätscheckliste](#16-qualitätscheckliste)

---

## 1. Strategie & Grundverständnis

### Das eine Ziel der Website

Eine Therapeuten-Website hat **ein primäres Ziel**: potenzielle Klient:innen dazu zu bringen, Kontakt aufzunehmen. Nicht informieren, nicht beeindrucken, nicht überzeugen — **Kontakt aufnehmen**.

Alles — jede Designentscheidung, jede Formulierung, jede Seitenstruktur — wird an diesem Ziel gemessen.

### Was eine Therapeuten-Website NICHT ist

- Kein akademischer Lebenslauf
- Kein Methodenkatalog für Fachkolleginnen
- Kein allgemeines Informationsportal über psychische Gesundheit
- Kein Hochglanz-Unternehmensauftritt

### Was sie IS

- Ein sicherer erster Berührungspunkt für Menschen in einem oft schwierigen Moment
- Eine Einladung, nicht eine Bewerbung
- Ein Ort, der das Gefühl vermittelt: *Hier werde ich verstanden. Hier bin ich richtig.*

### Positionierung

**Generalistinnen verlieren. Spezialistinnen gewinnen.**

Eine Therapeutin, die "alle Menschen mit allen Problemen" anspricht, wirkt austauschbar. Eine Therapeutin, die klar kommuniziert: "Ich arbeite mit Frauen in der Lebensmitte, die sich in ihrer Rolle verloren fühlen" — die bleibt im Gedächtnis und wird weiterempfohlen.

Die Website muss diese Spezialisierung von der ersten Sekunde an sichtbar machen.

---

## 2. Zielgruppe & Psychologie

### Der Moment des Besuchs

Menschen suchen eine Therapeutin typischerweise in einem Moment von:
- Erschöpfung oder Überwältigung
- Aufgebrachtem Mut ("Ich muss jetzt endlich was tun")
- Unsicherheit ("Bin ich wirklich krank genug dafür?")
- Scham oder Stigma ("Was denken andere, wenn ich in Therapie gehe?")
- Angst vor dem Unbekannten ("Was passiert da eigentlich?")

**Die Website muss auf jeden dieser Zustände eingehen** — nicht durch direkte Ansprache, sondern durch Ton, Bildsprache, Struktur und die spezifischen Informationen, die sie anbietet.

### Häufigste Barrieren (die die Website abbauen muss)

| Barriere | Website-Antwort |
|---|---|
| "Ich bin nicht schlimm genug" | FAQ-Eintrag, hero copy die normalisiert |
| "Ich weiß nicht, was ich sagen soll" | FAQ, "Erstes Gespräch" erklären |
| "Ich weiß nicht, ob wir zusammenpassen" | Video-Intro, authentische About-Seite |
| "Was kostet das?" | Transparente Preisangabe (Pflicht in DE) |
| "Wie lange dauert das?" | Ehrliche Einschätzung in FAQ |
| "Ist das vertraulich?" | Expliziter Hinweis auf Schweigepflicht |
| "Was, wenn ich weine?" | Ton der Website — warm, normalisierend |

### Persona-Denken

Vor dem Schreiben einer einzigen Zeile Copy: eine klare Vorstellung von der **einen idealen Person**, die die Website besucht. Wer ist sie? Was hat sie gerade erlebt? Was hofft sie zu finden? Was hält sie zurück?

---

## 3. Seitenstruktur & Architektur

### Empfohlene Seitenstruktur

```
/                     Startseite
/about                Über mich
/services             Angebote / Wie ich arbeite
/contact              Kontakt / Erstgespräch anfragen
/faq                  Häufige Fragen
/fees                 Kosten & Versicherung        (optional, kann in FAQ)
/blog                 Blog / Ressourcen            (optional, für SEO)
/privacy              Datenschutzerklärung         (Pflicht)
/imprint              Impressum                    (Pflicht in DE)
```

### Navigation (Primary)

**Maximal 5 Punkte** in der Hauptnavigation. Mehr überfordert.

Empfohlene Reihenfolge:
1. Über mich
2. Angebote
3. FAQ
4. Kontakt (als CTA-Button hervorgehoben)

Die **Startseite** erscheint nicht in der Nav — das Logo ist der Home-Link.

### Interne Verlinkung

Jede Seite hat **einen klaren nächsten Schritt**:
- Startseite → Angebote oder Kontakt
- Über mich → Kontakt
- Angebote → Kontakt
- FAQ → Kontakt
- Kontakt → nirgendwo (ist das Ziel)

Kein Dead End. Immer ein "Was jetzt?".

---

## 4. Seitenweise Layouts & Inhalte

### Startseite

Die Startseite ist die wichtigste Seite. Sie muss in 5 Sekunden kommunizieren: wer, für wen, und wie man in Kontakt tritt.

**Sektionsreihenfolge:**

```
┌─────────────────────────────────────┐
│  HERO                               │
│  Bild der Therapeutin + Headline    │
│  die das Kernproblem des Klienten   │
│  anspricht + primärer CTA           │
├─────────────────────────────────────┤
│  VERTRAUEN / SOZIALER BEWEIS        │
│  (optional) kurze Testimonials,     │
│  Logos von Ausbildungen, Zahlen     │
├─────────────────────────────────────┤
│  ANGEBOTE / WIE ICH HELFEN KANN     │
│  3 Karten — kurz, benefit-focused   │
├─────────────────────────────────────┤
│  ÜBER MICH (Vorschau)               │
│  Foto + 2–3 Sätze + Link            │
├─────────────────────────────────────┤
│  PROZESS / WAS PASSIERT             │
│  3 Schritte: Anfrage → Gespräch →   │
│  Therapiebeginn                     │
├─────────────────────────────────────┤
│  CTA-SECTION                        │
│  Abschließende Einladung            │
└─────────────────────────────────────┘
```

**Hero-Sektion im Detail:**

- Linke Seite (60%): Headline + Subtext + CTA-Buttons
- Rechte Seite (40%): Foto der Therapeutin (warm, natürlich, direkter Blick)
- Mobil: Foto unter dem Text oder als Hintergrund mit Overlay
- Headline: max. 8 Wörter, emotional, klientenzentriert
- Subtext: 1–2 Sätze, wer du bist und wem du hilfst
- Primärer CTA: "Erstgespräch anfragen" oder "Schreib mir"
- Sekundärer CTA: "Mehr erfahren" oder "Wie ich arbeite →"

---

### Über mich

Die "Über mich"-Seite wird auf Therapeuten-Websites **überproportional** oft besucht — Menschen wollen die Person kennenlernen, bevor sie Kontakt aufnehmen.

**Struktur:**

```
┌─────────────────────────────────────┐
│  FOTO (groß, authentisch)           │
│  + persönlicher Einstieg            │
│  (was mich zu dieser Arbeit         │
│  gebracht hat — menschlich, nicht   │
│  akademisch)                        │
├─────────────────────────────────────┤
│  MEINE HALTUNG / ANSATZ             │
│  Wie ich arbeite. Was ich glaube.   │
│  Was Klient:innen bei mir erwartet. │
├─────────────────────────────────────┤
│  AUSBILDUNG & QUALIFIKATIONEN       │
│  Kurz. Aufzählungsliste.            │
│  Am Ende der Seite, nicht am        │
│  Anfang.                            │
├─────────────────────────────────────┤
│  CTA: Kontakt aufnehmen             │
└─────────────────────────────────────┘
```

**Wichtig:** Die Qualifikationen kommen ans Ende. Sie bauen Vertrauen ab, nicht auf, wenn sie zu früh kommen — sie signalisieren "ich bin Expertin" statt "ich bin Mensch".

---

### Angebote / Wie ich arbeite

**Nicht als Feature-Liste, sondern als Einladung.**

Für jedes Angebot:
1. **Für wen ist das?** — in der Sprache des Klienten ("Wenn du dich oft erschöpft fühlst und nicht weißt warum...")
2. **Was passiert in den Sitzungen?** — ohne Jargon
3. **Was könnte sich verändern?** — konkrete, realistische Hoffnung
4. **CTA** — "Frag mich dazu"

Maximal 3–4 Angebote. Mehr überfordert und verwässert die Positionierung.

---

### Kontakt

Die Kontaktseite ist der **wertvollste Moment** auf der Website. Sie darf nicht sachlich sein.

**Struktur:**

```
┌─────────────────────────────────────┐
│  EINLEITUNG (warm)                  │
│  "Dieser Schritt braucht Mut.       │
│  Ich freue mich, von dir zu hören." │
├─────────────────────────────────────┤
│  KONTAKTFORMULAR                    │
│  Felder: Vorname, E-Mail,           │
│  (optional: Telefon, Anliegen in    │
│  einem Satz, bevorzugter Kontakt)   │
│  Kein zu langer Fragebogen!         │
├─────────────────────────────────────┤
│  ERWARTUNGEN SETZEN                 │
│  "Ich antworte innerhalb von        │
│  1–2 Werktagen."                    │
│  "Alles bleibt vertraulich."        │
├─────────────────────────────────────┤
│  ALTERNATIVE KONTAKTWEGE            │
│  E-Mail / Telefon (für alle die     │
│  kein Formular wollen)              │
│  Adresse + Karte (wenn Präsenz)     │
└─────────────────────────────────────┘
```

**Formular-Prinzipien:**
- So wenige Felder wie möglich — jedes zusätzliche Feld senkt die Conversion
- Kein Pflichtfeld für Telefon
- Kein Dropdown "Wie haben Sie uns gefunden?" (irritiert)
- Placeholder-Texte, die Anleitung geben: "Kein Druck — was auch immer sich richtig anfühlt."
- Nach dem Absenden: **persönliche Bestätigungsseite** mit einem warmen Satz, nicht nur "Danke für Ihre Nachricht"

---

### FAQ

Nicht als Pflichtseite behandeln — als echtes Conversion-Tool.

**Die 8 wichtigsten FAQ-Themen:**

1. Bin ich "schlimm genug" für Therapie?
2. Was passiert in der ersten Stunde?
3. Wie lange dauert Therapie?
4. Was kostet eine Sitzung? Übernimmt die Krankenkasse das?
5. Ist alles vertraulich?
6. Kann ich auch online kommen?
7. Was, wenn wir nicht zusammenpassen?
8. Ich weiß nicht, was ich sagen soll — ist das okay?

**Format:** `<details>`/`<summary>` HTML-Accordion — zugänglich, platzsparend, keine JS-Abhängigkeit.

---

## 5. Design-Prinzipien

### Das Fundament: Sicherheit durch Design

Design für eine Therapeuten-Website kommuniziert vor allem **eines**: Sicherheit. Jede visuelle Entscheidung wird daran gemessen, ob sie Sicherheit oder Unsicherheit signalisiert.

### Prinzip 1: Raum als Sprache

Weißraum ist nicht "leerer Platz" — er ist **Atemraum**. Enge Layouts fühlen sich klaustrophobisch an. Großzügige Abstände kommunizieren: hier ist Platz für dich.

- Mindest-Padding in Sektionen: `96px` (Desktop), `64px` (Mobil)
- Zeilenabstand Body-Text: `1.7`
- Zeilenabstand Headlines: `1.2`
- Max-Width für Fließtext: `65ch` (ca. 65 Zeichen) — optimale Lesebreite

### Prinzip 2: Organisch statt geometrisch

- **Abgerundete Ecken** überall: Buttons, Karten, Bilder, Inputs. Radius: 8px (klein), 16px (mittel), 24px (groß), 9999px (Buttons/Pills)
- Keine harten Kanten, keine scharfen Kontraste
- Sanfte Übergänge zwischen Sektionen (Farbwechsel, keine harte Linie)

### Prinzip 3: Wärme vor Perfektion

Ein leicht menschliches, imperfektes Element (handgeschriebene Headline, leichte Textur, authentisches Foto) schlägt steril-perfektes Design. Menschen vertrauen Menschen, nicht Marken.

### Prinzip 4: Hierarchie durch Größe und Gewicht

Nicht durch Farbe. Farbe soll Emotion kommunizieren, nicht Struktur. Die Struktur kommt durch Schriftgröße, Gewicht und Position.

### Prinzip 5: Mobile-First, immer

Über 60% der Therapeuten-Suchanfragen kommen vom Smartphone. Mobile ist nicht die "abgespeckte Version" — Mobile ist die **primäre Version**. Desktop ist die Erweiterung.

---

## 6. Typografie

### Schriftpaarung

**Headlines:** Humanistische Serif — vermittelt Wärme, Tiefe, Intellektualität ohne Kälte.

Empfehlungen (Priorität):
- **Lora** — ausgewogen, sehr lesbar, kostenlos (Google Fonts)
- **Cormorant Garamond** — elegant, etwas literarischer
- **Playfair Display** — kräftiger, für mutigere Designs

**Body:** Gut lesbarer Sans-Serif — neutral, warm, kein technischer Charakter.

Empfehlungen:
- **Inter** — modern, excellent legibility
- **DM Sans** — etwas wärmer als Inter
- **Source Sans 3** — bewährt, sehr lesbar

### Größensystem (CSS-Tokens)

| Token | Größe | Verwendung |
|---|---|---|
| `--font-size-xs` | 12px | Labels, Captions |
| `--font-size-sm` | 14px | Nav-Links, Nebentexte |
| `--font-size-base` | 16px | Fließtext (nie kleiner!) |
| `--font-size-lg` | 18px | Lead-Text, wichtige Absätze |
| `--font-size-xl` | 22px | H4, kleine Headings |
| `--font-size-2xl` | 28px | H3 |
| `--font-size-3xl` | 36px | H2 |
| `--font-size-4xl` | 48px | H1 (Desktop) |

**Mobil:** H1 auf 36px reduzieren, H2 auf 28px.

### Typografische Regeln

- Body-Text **nie kleiner als 16px** — Zugänglichkeit, besonders für ältere Zielgruppen
- Zeilenabstand Body: **1.7** — mehr Luft als Standard
- Maximale Zeilenlänge: **65ch** (Fließtext), **45ch** (Lead/Intro-Text)
- Überschriften-Hierarchy strikt einhalten: H1 → H2 → H3, keine Sprünge
- Kein "all caps" für längere Texte — nur für kurze Labels/Tags (max. 3 Wörter)
- Letter-Spacing für Labels: `0.08–0.12em`

---

## 7. Farbpalette

### Philosophie

Farben für Therapie-Websites sollen **Sicherheit, Wärme und Natürlichkeit** kommunizieren.

**Funktioniert:** Erdige Töne, Grüntöne (Natur, Wachstum), warme Neutrals, muted Blautöne
**Vermeiden:** Knallige Primärfarben, Schwarz/Weiß-Kälte, klinisches Reinweiß, aggressive Rottöne

### Empfohlene Paletten-Direktionen

#### Option A: Sage & Warm White (beliebt, zeitlos)
```
Primär:      #6B8F71  (Sage Green)
Akzent:      #C4956A  (Warm Terracotta)
Background:  #FAF8F5  (Warm Off-White)
Surface:     #FFFFFF
Text:        #2D2926  (Warm Black)
```

#### Option B: Dusty Blue & Cream
```
Primär:      #7B9BA6  (Dusty Blue)
Akzent:      #D4A96A  (Golden Sand)
Background:  #F8F6F2  (Cream)
Surface:     #FFFFFF
Text:        #2A2D35
```

#### Option C: Warm Mauve & Beige
```
Primär:      #9B7E8C  (Dusty Rose/Mauve)
Akzent:      #C8A882  (Warm Sand)
Background:  #FBF7F4  (Warm White)
Surface:     #FFFFFF
Text:        #2E2926
```

### Farb-Regeln

- **Nie mehr als 2 Brandfarben** + Neutrals
- **Weißraum dominiert** — Farbe ist Akzent, nicht Grundton
- **Hintergrundsektionen:** abwechselnd `--color-background` und `--color-surface-alt` — nie grelle Farbflächen
- **CTA-Button:** die kräftigste Version der Primärfarbe — immer ausreichend Kontrast auf dem Button-Text
- **Alle Farbpaare auf WCAG AA prüfen** (Tool: webaim.org/resources/contrastchecker)

### Kontrastvorgaben

| Paarung | Mindest-Ratio |
|---|---|
| Fließtext auf Background | 4.5:1 |
| Großer Text (≥18px Bold / ≥24px) | 3:1 |
| UI-Komponenten (Buttons, Inputs) | 3:1 |
| Dekorativ / Hintergrundbilder | keine Anforderung |

---

## 8. Bilder & Visuals

### Das Wichtigste: Echtheit

Kein Bild auf einer Therapeuten-Website zerstört mehr Vertrauen als ein offensichtliches Stock-Foto. Menschen erkennen "echte" Bilder sofort — unterbewusst, aber sicher.

### Das Foto der Therapeutin

**Dieses Foto ist das wichtigste Asset der gesamten Website.**

- Professionell fotografiert, aber **nicht steif** — natürliche, entspannte Haltung
- **Direkter Blickkontakt** zur Kamera (schafft Verbindung)
- Warmes Licht (Tageslicht bevorzugt, kein hartes Studioblitz)
- Authentischer Hintergrund: Praxisraum, Natur, warme Wohnumgebung — kein neutraler Studiohintergrund
- Kleidung: warm, professionell, aber menschlich — keine Kittel, keine übertrieben formelle Kleidung
- **Mehrere Fotos** empfohlen: eines für Hero (halbporträt), eines für About (entspannter, erzählender)

### Atmosphärische Bilder

Ergänzende Bilder, die Stimmung vermitteln:

**Gut:**
- Nahaufnahmen von Pflanzen, Texturen, natürlichem Licht
- Hände (Therapeutin oder Klient — aber keine Handschlag-Symbolik)
- Fenster mit Licht
- Gemütliche Praxisdetails (Kissen, Kerze, Stuhl)
- Natur (Bäume, Wasser, Erde)
- Leerer Stuhl — aber warm und einladend, nicht leer-kalt

**Vermeiden:**
- Zwei sich umarmende Silhouetten
- Hirn-Illustrations
- Puzzle-Teile als Metapher für "Reparatur"
- Weinende Menschen
- Klinische Objekte (Schreibblock + Stift, Couch wie beim Psychiater)
- Gruppenfotos in Workshopsettings (wenn nicht relevant)

### Bildtechnische Standards

- **Format:** WebP (primär) mit JPEG als Fallback
- **Hero-Bild:** 1440×900px, komprimiert auf < 200KB
- **Portrait:** 800×1000px, < 150KB
- **Alt-Texte:** Beschreibend, nicht keyword-stuffed: "Claudia Thonet, Psychotherapeutin, sitzt lächelnd in ihrem Praxisraum in Berlin"

---

## 9. Copy & Messaging

### Das Fundament: Klientenzentrierte Sprache

Jede Formulierung wird durch diesen Test geprüft:

> "Spricht das die Erfahrung des Klienten an — oder meine eigene?"

| Kein (ich-zentriert) | Ja (klientenzentriert) |
|---|---|
| "Mit 15 Jahren Erfahrung biete ich..." | "Wenn du dich seit Monaten erschöpft fühlst..." |
| "Ich arbeite evidenzbasiert nach..." | "In unseren Sitzungen kannst du in deinem Tempo..." |
| "Mein Schwerpunkt liegt auf..." | "Viele meiner Klient:innen kommen, weil..." |
| "Jetzt Termin buchen" | "Schreib mir — unverbindlich" |

### Headline-Typen (was funktioniert)

**Emotional-empathisch** (beste Conversion bei Therapie):
- "Du trägst gerade etwas Schweres."
- "Es darf auch anders sein."
- "Du musst das nicht alleine lösen."

**Problem-Benennung:**
- "Wenn Erschöpfung sich normal anfühlt."
- "Für alle, die funktionieren — und dabei vergessen, wie es ihnen geht."

**Einladung:**
- "Hier ist Raum für das, was du nicht sagst."
- "Ein Ort, wo du nicht stark sein musst."

**Vermeiden:**
- Generisch: "Professionelle psychotherapeutische Begleitung"
- Kalt: "Ihr Spezialist für mentale Gesundheit"
- Überwältigend: Zu viele Adjektive, zu langer Satz

### Mikrocopy (die oft unterschätzten Texte)

Diese kleinen Textstellen haben überproportionalen Einfluss:

- **Formular-Placeholder:** "Was auch immer sich richtig anfühlt — kein Druck."
- **Submit-Button:** "Nachricht senden" > "Formular absenden"
- **Nach dem Absenden:** "Danke, dass du dich gemeldet hast. Das braucht Mut. Ich melde mich bis [Tag]."
- **Datenschutz-Hinweis:** "Deine Daten bleiben sicher. Ich gebe nichts weiter."
- **Nav-CTA:** "Erstgespräch anfragen" > "Termin buchen"

### Ton-Regeln

1. **Du-Form** (außer die Praxis positioniert sich bewusst formeller — dann konsequent Sie)
2. **Kurze Sätze** — max. 20 Wörter im Durchschnitt
3. **Absätze: max. 3 Sätze**
4. **Konkret, nicht abstrakt:** "In den ersten 3 Sitzungen..." statt "In einem ersten Kennenlernen..."
5. **Keine doppelten Negationen:** nicht "nicht unmöglich", sondern "möglich"
6. **Emotionale Wörter erlaubt:** mutig, schwer, leicht, Erleichterung, Sicherheit, Atem

---

## 10. UX & Conversion

### Der Conversion-Funnel

```
AUFMERKSAMKEIT    Google-Suche, Empfehlung, Profil
       ↓
ERSTER EINDRUCK   Hero-Sektion: 3–5 Sekunden Entscheidung
       ↓
VERTRAUEN         About, Foto, Ton — "Passt das zu mir?"
       ↓
ÜBERZEUGUNG       Services, FAQ — "Kann sie mir helfen?"
       ↓
ENTSCHEIDUNG      Contact/CTA — niedrige Hemmschwelle
       ↓
KONTAKT           Formular-Absendung
```

Jede Stufe muss funktionieren. Eine schwache "Erster Eindruck"-Stufe bricht den Funnel unabhängig davon, wie gut die anderen Seiten sind.

### CTA-Platzierung

CTAs erscheinen:
1. **Im Hero** — primärer CTA nach Headline und Subtext
2. **Am Ende jeder Sektion** auf der Startseite
3. **Am Ende jeder Unterseite**
4. **Sticky in der Navigation** (Button-Form, hervorgehoben)

Nie mehr als **zwei CTAs** in einer Sektion — einen primären (ausgefüllt) und einen sekundären (Outline/Ghost).

### Niederschwelligkeit

Jedes Friction-Element kostet Conversions:

| Friction | Lösung |
|---|---|
| Langes Formular | Max. 4 Pflichtfelder |
| Forced Account Creation | Kein Account nötig |
| Sofortiger Rückruf | Async-Erstkontakt per Formular/Mail |
| Unklare nächste Schritte | Bestätigungsseite mit klarem "Was passiert jetzt" |
| Kein Preis sichtbar | Preisinfo transparent (auch in FAQ) |

### Online-Buchung

Wenn möglich: **Online-Terminbuchung direkt auf der Website integrieren**.

Empfohlene Tools für Deutschland:
- **Calendly** — einfachste Integration, weit verbreitet
- **Doctolib** — in DE etabliert, hat eigenes Klientenprofil
- **Jane App** — beliebt bei Psychotherapeutinnen
- **Timify** — deutsches Tool, DSGVO-konform

Wenn keine Online-Buchung möglich: **Reaktionszeit explizit kommunizieren** ("Ich antworte innerhalb von 24–48 Stunden").

---

## 11. Navigation & Orientierung

### Sticky Header

Der Header bleibt beim Scrollen oben sichtbar. Immer. Der CTA-Button ist immer erreichbar.

Technisch: `position: sticky; top: 0;` mit leichtem `backdrop-filter: blur()` für den Glasmorphismus-Effekt wenn Inhalt darunter scrollt.

### Mobile Navigation

- Hamburger-Menü (3 Linien) — Standard und erkennbar
- Beim Öffnen: **Vollbild-Overlay** (nicht kleines Dropdown) — einfacher zu treffen, klarer
- Schließt bei: Klick auf Link, Klick außerhalb, Escape-Taste
- Jeder Nav-Link hat 44px Mindesthöhe (Tap-Target)

### Breadcrumbs

Nicht nötig bei flacher Seitenstruktur (< 3 Ebenen). Weglassen.

### Scroll-Indikator im Hero

Ein dezenter Pfeil oder Animation am unteren Hero-Rand signalisiert: "Es geht weiter". Psychologisch wichtig — viele Besucher scrollen nicht weiter, wenn sie nicht wissen, dass es mehr gibt.

### 404-Seite

Eine freundliche, menschliche 404-Seite mit klarer Rückführung. "Diese Seite gibt es nicht — aber ich bin hier. Hier geht's zur Startseite."

---

## 12. Accessibility

Accessibility ist bei einer Therapeuten-Website **ethisch und rechtlich besonders wichtig**. Klient:innen mit Sehbehinderung, kognitiven Einschränkungen oder motorischen Handicaps sollen die Website problemlos nutzen können.

### WCAG 2.2 AA — die Mindestanforderung

| Kriterium | Anforderung |
|---|---|
| Farbkontrast (normaler Text) | ≥ 4.5:1 |
| Farbkontrast (großer Text) | ≥ 3:1 |
| Farbkontrast (UI-Elemente) | ≥ 3:1 |
| Tap/Click-Ziele | ≥ 44×44px |
| Fokus-Sichtbarkeit | immer sichtbar, nie `outline: none` ohne Alternative |
| Alt-Texte | alle nicht-dekorativen Bilder |
| Überschriften-Hierarchie | H1→H2→H3, keine Sprünge |
| Formular-Labels | jedes Input-Feld hat ein `<label>` |
| Keyboard-Navigation | alles per Tab erreichbar |
| Screenreader | semantisches HTML, ARIA wo nötig |

### Konkrete Umsetzung

```html
<!-- Skip-Link: Pflicht für Keyboard-Nutzer -->
<a class="skip-link" href="#main">Zum Hauptinhalt springen</a>

<!-- Landmark-Regionen: Pflicht -->
<header>, <nav>, <main>, <footer>

<!-- Bilder -->
<img src="foto.jpg" alt="Claudia Thonet, Psychotherapeutin, lächelnd in ihrem Praxisraum">
<img src="deko.jpg" alt="" aria-hidden="true"> <!-- dekorativ -->

<!-- Formular -->
<label for="email">E-Mail-Adresse</label>
<input id="email" type="email" name="email" required autocomplete="email">

<!-- Buttons mit sichtbarem Text -->
<button type="submit">Nachricht senden</button>
<!-- nicht: <button><img src="arrow.svg"></button> -->
```

### Fokus-Styling

```css
/* NIE einfach outline: none setzen */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: 3px;
}
```

### Reduzierte Bewegung respektieren

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 13. Technische Standards

### Performance-Ziele

| Metrik | Ziel |
|---|---|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 90 |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Seitengewicht (ohne Hero-Bild) | < 300KB |

### Bilder optimieren

```html
<!-- WebP mit JPEG-Fallback -->
<picture>
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="..." loading="eager" width="1440" height="900">
</picture>

<!-- Lazy Loading für Below-the-Fold -->
<img src="about.webp" alt="..." loading="lazy" width="800" height="1000">
```

**Immer `width` und `height` angeben** — verhindert Layout Shift (CLS).

### Fonts

**Google Fonts nicht per CDN einbinden** (DSGVO-Problem in Deutschland — IP-Übermittlung an US-Server).

Self-Hosting:
1. Fonts herunterladen (google-webfonts-helper.herokuapp.com)
2. In `src/fonts/` ablegen
3. Per `@font-face` in `tokens.css` einbinden:

```css
@font-face {
  font-family: 'Lora';
  src: url('../fonts/lora-v35-latin-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### HTML-Grundstruktur

```html
<!DOCTYPE html>
<html lang="de">  <!-- "de" für Deutschland! -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seitentitel | Praxisname</title>
  <meta name="description" content="150–160 Zeichen">
  <link rel="canonical" href="https://example.com/seite">
  <link rel="stylesheet" href="/css/main.css">
</head>
```

### CSS-Architektur

```
tokens.css      → Variablen (Farben, Typo, Abstände) — nie hardcoden
base.css        → Reset + globale Basis
components.css  → Wiederverwendbare Komponenten
main.css        → Layout + seitenspezifische Styles
```

**Goldene Regel:** Kein einziger Farbwert, keine einzige Schriftgröße, kein Abstandswert wird hardcodiert. Immer via CSS Custom Property aus `tokens.css`.

### JavaScript

Minimal-Philosophie:
- Navigation Toggle (mobile)
- Smooth Scroll
- Formular-Submit via Fetch API (Formspree)
- Intersection Observer für Scroll-Animationen

Keine jQuery. Kein React. Kein Webpack. Vanilla JS als ES Modules.

### Kontaktformular (Formspree)

```javascript
const response = await fetch('https://formspree.io/f/DEIN_ID', {
  method: 'POST',
  body: new FormData(form),
  headers: { Accept: 'application/json' }
});
```

Alternative: Netlify Forms (wenn auf Netlify gehostet — kein separater Account nötig).

---

## 14. SEO & lokale Auffindbarkeit

### Keyword-Strategie für Therapeutinnen

Menschen suchen nicht nach "Psychotherapie" — sie suchen nach:
- "[Stadt] Therapeutin Angst"
- "Therapie Burnout [Stadt]"
- "Paartherapie [Stadtteil]"
- "Online Therapie deutsch"
- "[Methode] Therapeutin [Stadt]" (z.B. "EMDR Berlin")

**Strategie:** Eine Seite = ein primäres Keyword. Nicht alle Keywords auf der Startseite stopfen.

### On-Page SEO pro Seite

```html
<!-- Startseite -->
<title>Psychotherapie [Stadt] | [Name] — [Spezialisierung]</title>
<meta name="description" content="[Name], Psychotherapeutin in [Stadt]. Spezialisiert auf [Thema]. Jetzt Erstgespräch anfragen — [kurze warmherzige Formulierung].">

<!-- About -->
<title>Über mich | [Name], Psychotherapeutin [Stadt]</title>

<!-- Services -->
<title>Angsttherapie [Stadt] | [Name] — Psychotherapie</title>
```

### Google Business Profile

**Höchste Priorität für lokale Auffindbarkeit.**

Vollständig ausfüllen:
- Kategorie: "Psychotherapeut" oder "Psychologe"
- Öffnungszeiten (auch "nach Vereinbarung")
- Fotos (Praxisraum, Außenansicht)
- Beschreibung mit wichtigen Keywords
- Regelmäßige Posts (einmal pro Monat reicht)

### Strukturierte Daten (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Praxisname",
  "description": "Kurzbeschreibung",
  "url": "https://example.com",
  "telephone": "+49...",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "Berlin",
    "postalCode": "10...",
    "addressCountry": "DE"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "€€"
}
```

### Backlinks aufbauen

- **Psychology Today / Psychotherapeutensuche.de** — wichtigste Branchenverzeichnisse
- **Jameda** — deutsches Arzt-/Therapeuten-Verzeichnis
- **Therapeutenliste.de**, **Therapie.de**
- **Kassenärztliche Vereinigung** — bei Kassenzulassung automatischer Eintrag
- **Google Business Profile** — wichtigster lokaler Trust-Faktor

---

## 15. Rechtliches (Deutschland)

### Pflichtangaben — ohne geht nicht

#### Impressum (§ 5 TMG)

Muss direkt aus jeder Seite erreichbar sein (max. 2 Klicks):

```
Name, Vorname
Berufsbezeichnung (exakt: z.B. "Approbierte Psychologische Psychotherapeutin")
Anschrift der Praxis (kein Postfach)
Telefonnummer
E-Mail-Adresse
Zuständige Aufsichtsbehörde (z.B. Psychotherapeutenkammer Bayern)
Berufsordnung und wo zugänglich
Umsatzsteuer-ID (wenn vorhanden)
```

#### Datenschutzerklärung (DSGVO)

Jedes eingesetzte Tool muss genannt werden:
- Hosting (z.B. Netlify — US-Anbieter → SCCs angeben)
- Kontaktformular (Formspree — US-Anbieter)
- Google Fonts (wenn selbst gehostet: kein Problem)
- Google Analytics / Matomo (wenn verwendet)
- Calendly / Buchungssystem (wenn verwendet)
- Cookies und deren Zweck

**Empfehlung:** Datenschutzerklärung mit einem Generator erstellen (datenschutz-generator.de, e-recht24.de) und regelmäßig aktualisieren.

#### Cookie-Consent (DSGVO)

- **Opt-in**, nicht Opt-out (anders als in UK)
- Kein Cookie darf geladen werden, bevor Zustimmung erteilt wurde
- Google Analytics: braucht explizite Zustimmung
- Session-Cookies (technisch notwendig): keine Zustimmung nötig

Empfohlene Tools: **Klaro** (open source, DSGVO-konform, self-hosted möglich), **CookieYes**

### Google Fonts — DSGVO-Falle

Urteil des LG München (2022): Google Fonts per CDN einzubinden ist DSGVO-widrig — die IP-Adresse des Nutzers wird ohne Einwilligung an Google (USA) übermittelt.

**Lösung:** Fonts self-hosten (s. Abschnitt 13).

### Berufsbezeichnung

Rechtlich geschützte Begriffe — nur wer die Approbation hat, darf sich nennen:
- "Psychologischer Psychotherapeut / Psychologische Psychotherapeutin"
- "Kinder- und Jugendlichenpsychotherapeut"

Ohne Approbation erlaubt (wenn Heilpraktiker):
- "Heilpraktiker für Psychotherapie"
- "Psychologische Beraterin"

Auf der Website die **exakte, korrekte Berufsbezeichnung** verwenden — keine Abkürzungen oder kreativen Umformulierungen.

### Kasseninfo — Transparenz ist Pflicht

Klar kommunizieren:
- Privatpraxis (keine GKV-Abrechnung)
- Kassenzulassung (GKV-Abrechnung möglich)
- Selbstzahler + Kosten pro Sitzung
- Möglichkeit der Kostenerstattung (bei Privatpraxis)

Menschen in psychischer Not sollen nicht erst nach dem Erstgespräch herausfinden, dass sie alles selbst zahlen müssen.

### Kriseninfo (Best Practice, nicht Pflicht)

Footer oder Kontaktseite: Kurzhinweis auf Krisentelefon.

```
In einer akuten Krise: Telefonseelsorge 0800 111 0 111 (kostenlos, 24/7)
```

Dies schützt Klient:innen und zeigt Verantwortungsbewusstsein.

---

## 16. Qualitätscheckliste

Vor dem Launch alle Punkte abhaken:

### Inhalt
- [ ] Alle "TBD"-Platzhalter ersetzt
- [ ] Impressum vollständig und korrekt
- [ ] Datenschutzerklärung aktuell
- [ ] Preise / Kosteninformationen vorhanden
- [ ] Krisenhinweis im Footer
- [ ] Alle Kontaktinformationen korrekt

### Design & UX
- [ ] Echtes Therapeutinnen-Foto (kein Stock-Foto)
- [ ] Alle Bilder optimiert (WebP, korrekte Größen)
- [ ] Alle Bilder haben Alt-Texte
- [ ] Mobile-Ansicht auf 375px getestet (iPhone SE)
- [ ] Tablet-Ansicht auf 768px getestet
- [ ] CTA auf jeder Seite sichtbar

### Accessibility
- [ ] Skip-Link vorhanden und funktioniert
- [ ] Alle Farbkontraste WCAG AA (WebAIM Checker)
- [ ] Keyboard-Navigation vollständig funktioniert
- [ ] Alle Formular-Inputs haben Labels
- [ ] Heading-Hierarchie korrekt (keine Sprünge)
- [ ] Fokus-Styles sichtbar auf allen interaktiven Elementen
- [ ] `lang="de"` im HTML-Tag

### Technik
- [ ] Google Fonts selbst gehostet (nicht CDN)
- [ ] Kein Google Analytics ohne Cookie-Consent
- [ ] Cookie-Consent konfiguriert (wenn nötig)
- [ ] Formular funktioniert (Test-E-Mail)
- [ ] Danke-Seite nach Formular-Absenden
- [ ] HTTPS aktiv
- [ ] 404-Seite vorhanden
- [ ] Lighthouse-Score ≥ 90/90/90

### SEO
- [ ] Jede Seite hat unique `<title>` und `<meta description>`
- [ ] Strukturierte Daten (JSON-LD) in `<head>`
- [ ] Google Business Profile erstellt und ausgefüllt
- [ ] Eintrag bei Psychology Today / Therapeutenliste.de

### Rechtlich
- [ ] Impressum von jeder Seite aus erreichbar (max. 2 Klicks)
- [ ] Datenschutzerklärung verlinkt
- [ ] Berufsbezeichnung exakt korrekt
- [ ] DSGVO-konformes Kontaktformular

---

*Leitfaden erstellt: 2026-05-04 | Projekt: Mama Website | Team: mama-website*
