# AI_START (VERPFLICHTEND)

## 1. FOUNDATION

Lies zuerst vollständig:

* FOUNDATION.md
* SESSION.md

Diese Dokumente haben Vorrang vor allen neuen Ideen.


---

## 2. Zielbild analysieren

Betrachte das kanonische Zielbild.

Vor jedem neuen PoC beantworte zuerst:

> **Welche Wahrnehmungsregel des Zielbildes soll dieser PoC algorithmisch beschreiben?**

Nicht:

> Welchen Builder bauen wir?

Nicht:

> Welchen Code schreiben wir?

---

## 3. Wahrnehmung vor Technik

Die Engine entsteht

**nicht**

* aus Anatomie,
* nicht aus der Mesh-Struktur,
* nicht aus vorhandenen Datenstrukturen.

Sie entsteht aus der visuellen Wahrnehmung des finalen Kunstwerks.

Die GLB liefert ausschließlich die Geometrie.

Die Architektur entsteht aus den Gesetzen der Wahrnehmung.

---

## 4. Vorgehensweise

Immer dieselbe Reihenfolge:

1. Zielbild
2. Wahrnehmungsanalyse
3. Algorithmus
4. Minimaler PoC
5. Validierung
6. Code
7. Commit

Kein Schritt wird übersprungen.

---

## 5. Aktueller Fokus

Arbeite ausschließlich am `CURRENT_TASK`.

Vor jeder Änderung:

* aktuellen Code lesen
* keine neuen Builder
* keine neue Architektur
* bestehende Architektur respektieren
* nur die im SESSION-Dokument genannten Dateien ändern

---

## 6. Wahrnehmungsprinzipien (Art2all)

Bei jedem neuen Algorithmus prüfen:

* Unterstützt er die aufsteigende Gesamtkomposition?
* Unterstützt er den voluminösen Bauch als visuellen Schwerpunkt?
* Unterstützt er den leicht größeren, freundlichen Kopf?
* Unterstützt er die Dominanz der Silhouette?
* Unterstützt er die Organisation der weißen Papierflächen?
* Bringt er die Engine näher an die Wirkung des finalen Zielbildes?

Wenn eine dieser Fragen mit **Nein** beantwortet wird, wird der Algorithmus zuerst überarbeitet.

Erst danach wird Code geschrieben.

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## 


# SESSION – Sprint 07 (Primary Gesture)

## Status

Sprint erfolgreich abgeschlossen.

---

# Ziel

Weiterentwicklung der wahrnehmungsbasierten Flügelarchitektur.

Ausgangspunkt war die Frage, wie sich die innere Organisation des Flügels nicht aus Anatomie oder Mesh, sondern aus der visuellen Wahrnehmung ableiten lässt.

---

# Umgesetzt

✅ Wing Root Zones visualisiert

✅ Wing Finger Curves als Debug implementiert

✅ Fächerstruktur erfolgreich dargestellt

---

# Wichtigste Erkenntnis

Während der Debug-Phase wurde deutlich, dass die Wing Finger Curves nicht den eigentlichen Ursprung des Flügels darstellen.

Ausgehend von eigenen Vogelzeichnungen entstand die Erkenntnis, dass beim Zeichnen zuerst eine einzige übergeordnete Linie entsteht.

Diese Linie bestimmt:

- Haltung
- Flügelschlag
- Dynamik
- Charakter

Erst danach werden Flügel, Volumen und Details aufgebaut.

Diese Linie wurde als **Primary Gesture** definiert.

---

# Neue Wahrnehmungsarchitektur

Primary Gesture
↓
Flow Curve
↓
Wing Outline
↓
Wing Finger Curves
↓
Feather Bands
↓
Paper Placement

---

# Bedeutung der Ebenen

### Primary Gesture

Beschreibt die gesamte Bewegung und Haltung des Flügels.

Sie ist die erste Linie eines künstlerischen Entwurfs.

---

### Flow Curve

Leitet die Hauptbewegung innerhalb des Flügels.

Sie verbindet Primary Gesture mit der eigentlichen Flügelstruktur.

---

### Wing Outline

Beschreibt ausschließlich die äußere Silhouette.

---

### Wing Finger Curves

Interne Leitstruktur des Flügels.

Sie orientieren sich an Flow Curve und Wing Outline.

---

### Feather Bands

Organisieren die späteren Federfelder.

---

### Paper Placement

Platzierung der Kinderzeichnungen innerhalb der Feather Bands.

---

# Künstlerische Erkenntnis

Ein Vogel entsteht beim Zeichnen nicht aus Anatomie oder Konturen.

Der Entwurfsprozess beginnt mit einer Primärgeste.

Aus dieser entstehen:

- Haltung
- Dynamik
- Volumen
- Flügel
- Details

Die Art2all-Engine soll zukünftig dieselbe Reihenfolge verwenden.

---

# Zusätzliche Beobachtung

Während der Diskussion wurde festgestellt, dass ähnliche Organisationsprinzipien auch bei Blattadern, Fledermausflügeln und anderen Naturformen auftreten.

Dies wird derzeit **nicht** als Ziel der Entwicklung verstanden, sondern lediglich als offene Hypothese.

Der Fokus des Projekts bleibt weiterhin ausschließlich die Friedenstaube.

---

# Fazit

Sprint erfolgreich abgeschlossen.

Die größte Erkenntnis war keine Implementierung, sondern die Identifikation der **Primary Gesture** als eigentlichen Ausgangspunkt der wahrnehmungsbasierten Flügelarchitektur.

Diese Erkenntnis wird zukünftig als Grundlage für alle weiteren Flügelalgorithmen verwendet.

---

# Nächster Sprint

PoC 08 – Primary Gesture

Ziel:

- Primary Gesture als Debug visualisieren
- Flow Curve daraus ableiten
- Wing Finger Curves erstmals an Primary Gesture und Flow Curve ausrichten