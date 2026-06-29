################################################################
# Art2all –  Perceptual Line Extraction
################################################################


Version: 1.0

Status: Living Document

Autor:
Stephan Kästner
mit Unterstützung von ChatGPT


################################################################
################################################################


# PoC 09 – Perceptual Line Extraction

## Ziel

Dieser PoC untersucht einen neuen wahrnehmungsbasierten Lösungsansatz für die Art2all-Engine.

Ausgangspunkt ist die Hypothese, dass das vorhandene GLB-Modell bereits sämtliche Informationen enthält, die zur Wahrnehmung einer Friedenstaube notwendig sind.

Die Aufgabe der Engine besteht daher nicht darin, neue Strukturen zu erzeugen, sondern die für die menschliche Wahrnehmung wesentlichen Strukturen aus dem vorhandenen 3D-Raumgitter zu extrahieren.

---

# Forschungsfrage

**Welche Linien des vorhandenen 3D-Raumgitters sind notwendig, damit ein Mensch die Friedenstaube unmittelbar erkennt?**

Nicht untersucht wird:

* Anatomie
* Federaufbau
* Mesh-Optimierung
* Rendering

Untersucht wird ausschließlich die Wahrnehmungsstruktur.

---

# Arbeitshypothese

Das GLB enthält zwei unterschiedliche Informationsschichten.

## Geometrische Information

* Vertices
* Edges
* Faces
* Normals
* UVs

Diese Informationen werden für die Darstellung benötigt.

## Wahrnehmungsinformation

Die menschliche Wahrnehmung benötigt nur einen kleinen Teil dieser Informationen.

Ziel des PoC ist es, diese wahrnehmungsrelevante Struktur zu identifizieren.

---

# Grundprinzip

Die Engine konstruiert keine Friedenstaube.

Die Engine reduziert vorhandene Informationen.

Neue Linien werden nicht erzeugt.

Vorhandene Linien werden analysiert, bewertet und gegebenenfalls entfernt.

---

# Forschungsregel

Jede Linie muss ihre Existenz rechtfertigen.

Für jede verbleibende Linie muss beantwortet werden können:

> Welchen Beitrag leistet diese Linie zur Wahrnehmung der Friedenstaube?

---

# Experiment

## Phase 1

Visualisierung des vollständigen Raumgitters.

---

## Phase 2

Systematische Reduktion der vorhandenen Linien.

---

## Phase 3

Beobachtung der visuellen Wirkung.

Es wird untersucht,

* welche Linien zuerst entfallen können,
* welche Linien für die Wahrnehmung unverzichtbar bleiben,
* an welchem Punkt die Friedenstaube nicht mehr eindeutig erkannt wird.

---

# Erfolgskriterien

Der PoC ist erfolgreich, wenn sich zeigt, dass eine deutlich reduzierte Menge räumlicher Linien ausreicht, um die Friedenstaube weiterhin eindeutig wahrzunehmen.

---

# Erwartetes Ergebnis

Der PoC soll die Grundlage für eine neue Generation der Art2all-Engine schaffen.

Nicht durch Konstruktion neuer Strukturen.

Sondern durch die Extraktion der minimalen visuellen Informationsstruktur des vorhandenen 3D-Raumgitters.


# Architektur-Erkenntnis – Relation Engine

## Zentrale Erkenntnis

Während der Diskussion zu PoC 09 wurde eine grundlegende Änderung der Architekturhypothese erkannt.

Bisher wurde angenommen, dass die Engine zunächst eine Menge von Linien (Primary Gesture, Flow Curves usw.) erzeugt und anschließend die Kinderzeichnungen entlang dieser Linien platziert.

Diese Annahme wird durch eine neue Hypothese ersetzt.

---

# Neue Hypothese

Die Engine erzeugt keine Linien.

Die Engine organisiert Beziehungen zwischen den Kinderzeichnungen.

Aus diesen Beziehungen entstehen für die menschliche Wahrnehmung:

* Richtungen
* Krümmungen
* Flow-Linien
* Federstrukturen
* Silhouette
* schließlich die Friedenstaube.

Die wahrgenommenen Linien sind somit kein Eingabedatum der Engine, sondern ein emergentes Ergebnis.

---

# Wachstum der Friedenstaube

Die Engine selbst verändert sich nicht.

Sie besitzt von Beginn an alle Regeln.

Mit zunehmender Anzahl der Kinderzeichnungen verändert sich ausschließlich der Entwicklungszustand der Friedenstaube.

Dabei wachsen gleichzeitig:

* die Organisationsdichte,
* die Detailtiefe,
* die lokale Struktur,
* die visuelle Komplexität.

Die grundlegende Wahrnehmungsstruktur bleibt dabei erhalten.

---

# Harmonisierung

Bei wenigen Kinderzeichnungen übernimmt die Engine einen großen Anteil der Formbildung.

Sie erzeugt mathematisch harmonische Krümmungen und Übergänge, damit trotz geringer Informationsmenge eine friedliche und organische Taube wahrgenommen wird.

Mit zunehmender Anzahl der Kinderzeichnungen reduziert sich diese künstliche Harmonisierung kontinuierlich.

Die Gesamtform entsteht immer stärker aus den Beziehungen der Kinderzeichnungen selbst.

---

# Rolle der Kinderzeichnungen

Kinderzeichnungen werden nicht lediglich auf einer vorhandenen Struktur positioniert.

Jede Kinderzeichnung trägt aktiv zur Entstehung der Gesamtform bei.

Mit wachsender Anzahl verändert sich nicht die Zeichnung selbst, sondern ihre Rolle innerhalb der Gesamtkomposition.

Die Bedeutung eines einzelnen Beitrags entwickelt sich gemeinsam mit der Friedenstaube.

---

# Neue Forschungsfrage

Die zentrale Fragestellung lautet daher nicht mehr:

> Welche Linien müssen konstruiert werden?

Sondern:

> Welche Beziehungen zwischen den Kinderzeichnungen führen dazu, dass das menschliche Gehirn Linien, Flügel und schließlich eine Friedenstaube wahrnimmt?

---

# Vorläufige Bezeichnung

**Relation Engine**

Die Engine organisiert Beziehungen.

Die wahrgenommenen Strukturen entstehen als Ergebnis dieser Beziehungen.
