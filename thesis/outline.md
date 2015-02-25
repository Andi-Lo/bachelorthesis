# Thema: Angewandte Webperformance

## Motivation:

Niemand hat es gerne zu warten. Auch nicht auf eine langsame Webseite. Deshalb lässt Google bereits seit 2010 die Ladezeit einer Seite in ihr \texttt{Page Ranking} mit einfließen.\cite{google2010} (http://googlewebmastercentral.blogspot.de/2010/04/using-site-speed-in-web-search-ranking.html). Aber Google geht sogar noch weiter. So sagt Larry Page, CEO und Mitgründer von Google: "As a product manager, you should know that speed is feature number one"\cite{holzle2010}. 

Die Art auf die wir heutzutage Medien konsumieren, hat einen starken Wandel hinter sich. So stieg allein die Gerätenutzung von Smartphones innerhalb von nur 3 Jahren von 18\% auf 50\% an. 

### Probjektbeschreibung
* Problem beschreiben: Warum ist das Internet vor allem auf Mobile Devices langsam? (Why is ... so ? Why is facebook so... ect.)
	* Steigende Anzahl an Bildern
	* Akzeptanz für Performance
	* Aufwand

* Motivation: Google rankt Performante Seiten höher. First visitors bleiben eher auf der Seite ect... 
* Features?
* Zielgruppe? Fähigkeiten der Nutzer?
* Eingrenzung des Themas: Was wird behandelt und was nicht?
* Zielsetzung?
* Schnell: "First-Render" nach unter 1 Sekunde von einem Deutschen 
Server (Messbarkeit)
* -> "Ist"-Zustand: Firma legt wenig wert auf Performance, da Kunden nichts dafür ausgeben wollen oder es ihm nicht schmackhaft genug gemacht wird.
Punkte dafür finden was dafür Spricht. Negative Aspekte aufgreifen und vorweg nehmen. Arugmente für Performance aufführen.
	* Was wird bereits gemacht? Was werde ich davon umsetzen und was nicht und warum nicht?

### Grundlagen
* Begriffe
* Tools (pro / contra)
* Latenz
* Netze
* Datenvolumen / Datenrate


### Entwicklung
* Was hat die Abteilung bereits Entwickelt?
* Baut es auf etwas Bestehendem auf?
* Was soll am Ende des Projekts rauskommen? (evt überschneidung mit Einleitung)

- - -

Prozess der Suche:
* Auf welche Frage suche ich eine Antwort? -> was gibt es momentan für Methoden und welche davon sind für mich einsetzbar?
*  Was habe ich gefunden? Was ist daran gut / schlecht und was gibt es für alternativen?
* Warum verwende ich XY und nicht AB?

- - -

* Prozess der Validierung:
* Wie überprüfe ich den Erfolg des Projektes? Diagramme? Flow-Charts? Zahlen, Fakten ect...
* Was ist in der Praxis durchsetzbar und was nicht?
* Was ist in diesem Projekt vielleicht möglich aber sonst generell nicht? Wo sind die schranken? 
* Was sind meine Erkentnisse? (neue?)
* Was hat sich zum "Ist"-Zustand geändert und was nicht?
* Ist das Projekt abgeschlossen? Was ist der Stand?

### Zusammenfassung
* Erkentnisse (best-practices): Auflistung aller Performance möglichkeiten (unterteilt in server / client / workflow / programming)


#### Workflow & Programming
1. Performance durch performanten Code
2. Dom Manipulation bei onload vermeiden
3. Loops vermeiden
4. Concatenating von files (Achtung: load and execute order!!)
5. Uglyfy / Minify code
6. Was für Programmcode braucht mehr Leistung als anderer bei selbem Ergebnis? (Stichwort: Eventlistener, Event-Delegation, Event-Bubbling)

#### Server
1. DNS lookups
2. Caching von statischen elementen (beachte: how to override cached files for clients)
3. Server side rendering vs client side (siehe zitate: twitter)

#### Client
1. Critical Render path, 
2. Render blocking javascript, 
3. above the fold
4. Lazy loading
5. Schlaue request? / Ajax loading
6. inline css and scripts vs. External scripts
7. Image format webp / jpg pros (30% kleiner) and cons (nicht supported)
8. (<img srcset="...")
9. Image optimierung (save as.. / save for web)
10. Browser caching, allgemeines caching

#### Best Practices
* Einschränkungen (shared hosts / kein root-Zugang ect.)
* Patterns und antipatterns
* Methoden
* Ausblick (http 2.0, responsive img-Tag)

