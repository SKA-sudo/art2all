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

Datum

2026-06-28

PoC 06 abgeschlossen
Ergebnis

Der ursprünglich angenommene globale Wing Flow Field Ansatz wurde verworfen.

Die Analyse der Zielreferenz zeigt, dass der Flügel visuell nicht durch ein einziges Flow Field organisiert wird.

Stattdessen entsteht die Organisation hierarchisch.

Neue Architektur:

Local Wing Space
        │
Wing Root Zone
        │
Wing Finger Curves
        │
Feather Bands
        │
Paper Flow
        │
Paper Placement

Die Wing Finger Curves sind keine anatomischen Finger, sondern abstrakte Leitkurven, welche

Öffnungswinkel
Länge
Krümmung
Silhouette

definieren.

Die Feather Bands erzeugen anschließend die Breite um diese Kurven.

Architekturprinzip

Der Flügel wird nicht über einzelne Paper oder Faces organisiert.

Die Hierarchie lautet:

Wing Pose
      │
Wing Root Zone
      │
Wing Finger Curves
      │
Feather Bands
      │
Paper Flow
      │
Paper Placement

Jede Ebene folgt ausschließlich ihrer direkten Elternstruktur.

Everything follows.

Entwicklungsmethodik bestätigt

Die Entwicklung erfolgt konsequent nach folgendem Ablauf:

Target Image
      │
Visual Perception
      │
Hypothesis
      │
Nature Validation
      │
Algorithm
      │
PoC
      │
Implementation

Natürliche Anatomie wird niemals direkt kopiert.

Sie dient ausschließlich dazu, Wahrnehmungshypothesen zu validieren.

Wichtige Erkenntnis

Während des ersten WingFingerCurveDebug wurde festgestellt:

Die Curves dürfen nicht aus den Mesh-Faces erzeugt werden.

Der aktuelle Builder analysiert lediglich die vorhandene Geometrie.

Für die endgültige Engine muss die Reihenfolge umgekehrt werden.

Richtig:

Wing Root Builder
        │
Wing Finger Curve Builder
        │
Wing Space Projector
        │
Mesh / Faces

Die Engine erzeugt zuerst ihre semantische Struktur und projiziert diese anschließend auf die Oberfläche.

Nicht umgekehrt.

Nächster PoC

PoC 07

Wing Root Builder

Ziel:

mathematische Wing Root Zone
daraus Wing Finger Curves erzeugen
noch ohne Feather Bands
noch ohne Paper
noch ohne Projektion auf das Mesh

Erst wenn diese Struktur visuell überzeugt, beginnt die Projektion auf die Flügeloberfläche.

Fazit

Der heutige Fortschritt bestand nicht in neuem Rendering, sondern in einer wesentlichen Architekturentscheidung.

Die Engine entwickelt sich von einer meshgetriebenen Pipeline zu einer wahrnehmungsgetriebenen, hierarchischen Organisationsstruktur.

Der Fokus bleibt unverändert:

MI + KI = Art2all

Menschliche Wahrnehmung führt.

Der Algorithmus folgt.