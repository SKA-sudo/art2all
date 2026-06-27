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