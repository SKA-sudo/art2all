# AI_START (VERPFLICHTEND)

## 1. FOUNDATION

Lies zuerst vollständig:

* FOUNDATION.md
* SESSION.md

Diese Dokumente haben Vorrang vor allen neuen Ideen.

GLB als Lernmodell.
Beziehungsregeln daraus ableiten.
Prüfen, ob dieselbe Wahrnehmung ohne GLB entsteht.
Wir brauchen also drei Ebenen:

Zusammenarbeit
Entwicklungspartner

Art2all wird von einer einzelnen Person entwickelt.

ChatGPT unterstützt als technischer Entwicklungspartner, ersetzt aber kein Entwicklerteam.

Deshalb müssen alle Vorschläge zu einem Einzelentwickler passen.

Das bedeutet:

kleine, abgeschlossene Sprints
sichtbare Ergebnisse
keine unnötigen Refactorings
keine Aufgaben, die ein Team voraussetzen
pragmatische Lösungen statt theoretischer Perfektion
Rollen

Stephan

Vision
Künstler
Architektur
wissenschaftliche Richtung
Priorisierung
finale Entscheidungen

ChatGPT

Architektur konsequent umsetzen
vorhandene Builder erweitern
Code schreiben
Bugs analysieren
kleine, überprüfbare Entwicklungsschritte liefern

Während eines Sprints gilt:

Die Architektur ist beschlossen. Ich implementiere sie jetzt.

Neue Architektur oder neue Ideen werden nicht während der Implementierung eingeführt.

Wichtigste Regel

Stephan ist kein Entwicklungsteam.

Antworten dürfen niemals davon ausgehen, dass mehrere Entwickler vorhanden sind.

Jede Aufgabe muss so geplant werden, dass sie von einer einzelnen Person mit Unterstützung von ChatGPT umgesetzt werden kann


1. Grundraster
   = räumlicher Orientierungsraum

2. Beziehungsnetz
   = Kinderbilder beeinflussen sich gegenseitig

3. Wahrnehmung
   = daraus erscheint die Taube


Decision:

Art2all is product-driven.

Research is performed only when it directly improves the product or the current sprint.

Priority:
1. Visible product progress
2. Architecture
3. Research only as an enabler

Product First
Every sprint must produce visible progress toward the final Art2all experience. Research is valuable only when it directly enables or improves the current product goal.

---

# Sprint 09.x – Local Dove Space

## Status

Der eigentliche Local Dove Space wurde noch nicht implementiert.

Der Sprint diente überwiegend dazu, den Rendering-Pfad für eigene semantische Debug-Geometrie zu validieren.

## Erkenntnisse

- Eigene THREE-Geometrie kann im selben lokalen Koordinatenraum wie das GLB gerendert werden.
- Eine erste semantische Referenzlinie konnte erfolgreich unabhängig vom GLB dargestellt werden.
- Das bisherige SpaceGridDebug war als erster Debug-Schritt zu komplex und führte zu unnötigem Debugging.
- Zukünftig werden neue Builder grundsätzlich mit einer einzigen primitiven Geometrie (Linie oder Punkt) validiert, bevor komplexere Strukturen aufgebaut werden.

## Aktueller Stand

Verifiziert:

GLB
↓
Eigene semantische Geometrie
↓
Rendering funktioniert

Noch offen:

GLB
↓
Local Dove Space
↓
Primary Dove Axis
↓
Local Wing Space
↓
Primary Gesture

## Nächster Sprint

Ziel ist nicht das komplette Grid.

Schrittweise Aufbau des Local Dove Space:

1. X-Achse
2. Y-Achse
3. Z-Achse
4. Bounding Volume
5. Reduktion auf minimale wahrnehmbare Struktur

Erst danach beginnt die Ableitung der Primary Dove Axis.

## Engineering-Regel

Keine komplexen Debug-Strukturen mehr.

Jeder neue Builder wird zunächst mit genau einer primitiven Geometrie validiert (Linie oder Punkt). Erst nach erfolgreicher visueller Verifikation wird der nächste Baustein ergänzt.

Status:
Sprint begonnen.
Architektur unverändert.
Engineering wird im nächsten Sprint auf Basis der verifizierten Debug-Geometrie fortgesetzt.