### Vorstellung des Themas
- Web Performance für den mobilen Endanwender
- Problem: Langsame Ladezeiten bei Smartphone-Anwendern.
- Smartphone nutzung steigt rasant in den letzten Jahren an.


### Motivation

- Webseiten sind oftmals langsam -> schnell mal was nachschlagen wird zur Geduldsprobe (Weißer Bildschirm, Beispiel mit Webpagetest)
- Psychologische Wirking von langsamen Ladezeiten
- Fakten (Nutzer erwartet selbe Zeit wie bei Desktop, Nutzer verlässt Seite bereits nach 3 sek.)
- Verbesserungen von wenigen ms (Google) können bereits merkbaren Unterschied ausmachen

### Projekt

- Grundlage war mein Informatikprojekt; Bidlergallery; Bootstrap -> zeigen von andreaslorer.de/old
- Optimierung von www.andreaslorer.de in Richtung der Performance
- Ziel waren 1000 ms Barriere zu durchbrechen -> Ladezeiten von unter einer Sekunde auf Smartphone und Desktop PC
- Überleitung: -> Warum 1000 ms?

### Grundlagen

- Perceivced Performance
- TCP? Slow Start? RTT?
- Netze (Mythos: Schnelles Internet = Schnelle Ladezeiten)
- Touch Event
- Mobile Netze (Mythos wiederlegen)
- Herunterladen einer 40kB Datei
- Kritischer Rendering-Pfad
- Daraus ergeben sich folgende Optimierungsmaßnahmen:

### Tools

- Webpagetest
- Speedcurve
- Sitespeed.io
- Google Pagespeed Insight
- Whatdoesmysitecost

### Best Practices

- Render Blocking CSS / JS
- CSS Optimieren
- Server Respsonse Zeit
- Caching
- GZIP
- Keep Alive
- Prefetch
- (Domain Sharding) ? 
- Bilder optimieren (Spriting, Progressive Images, Komprimieren)
	- Responsive Images (Picturefill / Polyfill)
	- Adaptive Images

### Workflow ?

- Nodejs
- npm / Bower
- Gulp
- Yeoman

### Ergebnis

- Testen via Webpagetest API und Google-Spreadsheets
- Datenauswertung und Seite mit Diagramme Zeigen

### Weg zu Performance

- Hürden
- Budget

### Ausblick

- LTE (4G)
- HTTP/2.0