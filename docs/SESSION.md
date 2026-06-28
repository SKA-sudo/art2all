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

# SESSION

CURRENT_TASK

PoC 06 – Wing Surface Grid

WICHTIGSTE ERKENNTNIS

Die Analyse des Zielbildes zeigte, dass der Flügel nicht primär durch Flow-Linien oder Federrotation organisiert wird.

Die visuelle Wirkung entsteht durch ein unregelmäßiges Raster aus überlappenden Papierflächen.

Wesentliche Wahrnehmungsmerkmale:

hohe Überlagerungsdichte im Flügelinneren,
kontinuierlich abnehmende Dichte zur Flügelkante,
kontinuierliche Größenzunahme der Papierflächen von innen nach außen,
Federwirkung entsteht erst an der äußeren Flügelkante,
die räumliche Wirkung wird hauptsächlich durch die Oberflächenwölbung erzeugt.
CURRENT_HYPOTHESIS

Vor einem Wing Flow Field muss zunächst das Wing Surface Grid verstanden werden.

Das Raster bildet die Organisationsstruktur des Flügels.

Flow, Orientierung und Papierrotation werden später aus diesem Raster abgeleitet.

NEXT_ACTION

Analyse der Wachstumsregel des Wing Surface Grid.

Frage:

Nach welchen Wahrnehmungsregeln wachsen Rasterdichte, Papiergröße und Überlagerung vom Flügelinneren zur Flügelkante?

Erst danach wird ein minimaler Algorithmus beschrieben.