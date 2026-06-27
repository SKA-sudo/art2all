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

## CURRENT_TASK

PoC 05 – Local Wing Space (Vorbereitung)

## STATUS

✅ GeometryInspector abgeschlossen.

✅ FaceExtractor abgeschlossen.

✅ FaceFilter abgeschlossen.

✅ Semantic Dove Space abgeschlossen.

✅ Primary Dove Axis abgeschlossen.

✅ Transition Region abgeschlossen.

✅ Transition Region Quality abgeschlossen.

Heute wurde noch kein Local Wing Space implementiert.

Stattdessen wurde der Entwicklungsprozess der Engine grundlegend präzisiert.

---

## WICHTIGSTE ERKENNTNIS

Die Art2all-Engine wird nicht von der Geometrie aus entwickelt.

Sie wird vom **kanonischen Zielbild** aus entwickelt.

Das Zielbild ist die Spezifikation der Engine.

Jeder neue PoC beschreibt genau **eine Wahrnehmungsregel** dieses Zielbildes.

Erst danach werden Algorithmus, PoC und Code entwickelt.

---

## CURRENT_HYPOTHESIS

Der Local Wing Space soll nicht einfach eine mathematische Flügelachse beschreiben.

Er soll eine Wahrnehmungsregel des Zielbildes abbilden.

Vor der Implementierung wird daher zuerst analysiert, welche visuelle Eigenschaft des Flügels algorithmisch beschrieben werden soll.

---

## NEXT_ACTION

Analyse des Zielbildes.

Frage:

**Welche Wahrnehmungsregel des Flügels beschreibt der Local Wing Space?**

Erst danach beginnt die Implementierung.

---

## CURRENT_PIPELINE

GLB

↓

GeometryInspector

↓

FaceExtractor

↓

FaceFilter

↓

Semantic Dove Space

↓

Primary Dove Axis

↓

Transition Region

↓

PoC 05 – Local Wing Space (Analyse)

---

## FILES

* DoveModel.jsx
* DoveSpaceBuilder.js
* DebugGesture.jsx

---

## DONE

* GeometryInspector
* FaceExtractor
* FaceFilter
* Semantic Dove Space
* Primary Dove Axis
* Transition Region
* Transition Region Quality

---

## LOCKED

* Guide Shape
* Primary Papers
* Contour Papers
* Fill Papers
* PlacementEngine

---

## SUCCESS_CRITERIA

Der Local Wing Space entsteht aus einer klar definierten Wahrnehmungsregel des Zielbildes.

Er wird erst implementiert, nachdem diese Regel verstanden und als minimaler PoC beschrieben wurde.

28.06.2026
