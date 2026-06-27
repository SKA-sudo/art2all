################################################################
# Art2all – Architecture Document
################################################################


Version: 1.0

Status: Living Document

Letzte Aktualisierung: 26.06.2026

Autor:
Stephan Kästner
mit Unterstützung von ChatGPT


################################################################
################################################################


#   Art2all Engine – Master Architecture v1.0


                     Art2all

                        │

            ┌───────────┴────────────┐

        Foundation              Architecture

            │                        │

            ▼                        ▼

      Story Engine          Rendering Engine

                                     │

                          ┌──────────┴──────────┐

                     Peace Dove          Hall of Peace

                          │

          ┌───────────────┼────────────────┐

      Feather System   Detail System   Animation System

                          │

                    Feather Engine

                          │

        ┌─────────────────┼──────────────────┐

     Region Engine   Layout Engine   Allocation Engine

                          │

                Feather Cell Generator

                          │

                  Paper Renderer (R3F)



# Project Architecture
Beschreibt:

Art2all

│

├── Foundation
├── Backend
├── Frontend
├── Engine
├── Documentation

---

# Rendering Architecture

Beschreibt ausschließlich die Taube.

Peace Dove

│

├── Feather System
│
├── Detail System
│
├── Olive Branch
│
├── Animation System
│
└── Interaction System


## Ebene tiefer

Feather System

│

├── Region Analyzer

├── Feather Layout Engine

├── Placement Generator

├── Orientation Engine

├── Overlap Engine

└── Paper Renderer

---

# Allgemein

Idee
   │
   ▼
Vision
(Was soll der Besucher erleben?)
   │
   ▼
Konzept
(Welches Prinzip erzeugt dieses Erlebnis?)
   │
   ▼
Architektur
(Welche Komponenten brauchen wir?)
   │
   ▼
Implementierung
(Kleine, testbare Schritte)
   │
   ▼
Review
(Sieht es unserem Zielbild ähnlicher?)

---

# Neue Architektur
GLB

↓

Geometry Analysis

↓

Body Regions ⭐

↓

Feather Rows ⭐

↓

Placement Points ⭐

↓

Paper Orientation ⭐

↓

Paper Overlap ⭐

↓

Renderer


# Engine


Geometry Layer

↓

Region Analyzer

↓

Feather Generator

↓

Placement Generator

↓

Paper Renderer

# Zielbild


Peace Dove

├── Feather System (Kinderzeichnungen)
├── Detail System (Augen, Schnabel, Krallen)
├── Symbol System (Olivenzweig)
└── Animation System

->


## Kinderzeichnung

↓

wird Feder

↓

Feder gehört zu einer Federreihe

↓

Federreihe bildet einen Flügel

↓

Flügel bildet die Taube

---

GLB

liefert

- Oberfläche
- Normalen
- Volumen

Guide Shape

liefert

- Anordnung
- Proportion
- Wirkung


Architecture Milestone A1 – Perception Driven Engine
Status

Dieser Meilenstein markiert den Übergang von einer meshorientierten zu einer wahrnehmungsorientierten Engine.

Die GLB-Taube bleibt die geometrische Grundlage des Projekts. Sie definiert Volumen, Oberfläche und Normalen.

Die visuelle Organisation der Papierflächen entsteht jedoch nicht mehr aus der Mesh-Triangulierung, sondern aus einer eigenen semantischen Struktur.

Grundprinzip

Nicht die Geometrie bestimmt die Wirkung.

Die Wahrnehmung bestimmt den Algorithmus.

Die Engine rekonstruiert zunächst die visuell wahrgenommene Form und macht diese anschließend mit Papier sichtbar.

Architektur
GLB
│
├─ Oberfläche
├─ Normalen
└─ Volumen
        │
        ▼
Local Space
        │
        ▼
Gesture Line
        │
        ▼
Semantic Anchor Points
        │
        ▼
Guide Shape
        │
        ▼
Primary Paper Fields
        │
        ▼
Contour Papers
        │
        ▼
Fill Papers
        │
        ▼
Paper Renderer
Aufgaben der einzelnen Ebenen
Local Space

Erzeugt den lokalen Orientierungsraum eines Körperbereichs (z. B. linker Flügel).

Gesture Line

Beschreibt die Hauptrichtung der Form.

Beim linken Flügel:

Körper → Schulter → Flügelspitze

Semantic Anchor Points

Beschreiben die Proportionen der Form.

Nicht Meshpunkte, sondern bedeutungsvolle Orientierungspunkte.

Guide Shape

Erzeugt die unsichtbare Leitform.

Sie organisiert die späteren Papierflächen.

Primary Paper Fields

Die wenigen großen Papierflächen, welche die Form definieren.

Contour Papers

Erzeugen die sichtbare Silhouette.

Obere Flügelkante:
ruhig, elegant, nahezu geschlossen.

Untere Flügelkante:
gestaffelt, rhythmisch, erzeugt den Feder-Eindruck.

Fill Papers

Schließen die Fläche und unterstützen die bereits definierte Form.

Sie erzeugen die Form nicht.

Wichtigste Erkenntnis

Die GLB bestimmt nicht die Gestaltung.

Die GLB liefert ausschließlich die dreidimensionale Oberfläche.

Die Gestaltung entsteht aus einer wahrnehmungsorientierten Leitstruktur.

Entwicklungsregel

Jeder neue Builder folgt demselben Ablauf:

Referenz

↓

Hypothese

↓

Minimaler Builder

↓

Visuelle Debug-Ausgabe

↓

Künstlerische Validierung

↓

Erkenntnis

↓

Nächster Builder

Erst wenn eine Ebene verstanden und validiert ist, wird die nächste implementiert.

Ziel

Art2all soll nicht Papier auf einer Taube verteilen.

Art2all soll eine wahrgenommene Form rekonstruieren und diese Form mit den Zeichnungen der Kinder sichtbar werden lassen.