const kursDaten = {
    ip: {
        titel: "Informatikprojekt 1/2",
        kurse: [
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Projekt", "Klausur", "SoSe", "IP1"],
                name: "IP1 – Grafikspiele mit 5Code",
                dozent: "Prof. Dr.-Ing. M.Sc. Markus Dahm",
                beschreibungLang: `
                    Im Rahmen des Projekts können Sie selbst ausgedachte Spiele in 5Code mit der Grafik-Konsole bauen.
                    Die Ergebnisse sollen weiterverwendet werden und sowohl im Praktikum als auch auf der 5Code-Webseite
                    angeboten werden.

                    Wichtige Informationen:
                    • Termine: Donnerstags, 13 Uhr
                    • Ort: 04.2.001
                    • Plätze: Für 1 - 9 Teilnehmende
                    • Erstes Treffen: 16.04., 13 Uhr
                    • Semester: Jedes SoSe
                    • Zeugnistitel: Grafik-Spiele mit Java
                    • Bedingungen: Alle Ergebnisse des Projekts können für die Weiterentwicklung der Lehre und von 5Code
                    verwendet und weitergegeben werden. Bitte geben Sie im Motivationsschreiben an, mit welchem
                    Betriebssystem Sie arbeiten (Windows, Mac, Linux).`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Projekt", "IP1"],
                name: "Parallax Scrolling",
                dozent: "Prof. Dr. Manfred Wojciechowski",
                beschreibungLang: `
                    Gemeinsam im Projektteam sollen die Grundlagen des „Parallax Scrolling“ 
                    erarbeitet, sowie geeignete Frameworks ermittelt werden. Ein vom Projektteam 
                    festgelegtes Thema soll anschließend auf dieser technischen Basis kreativ umgesetzt werden. 
                    Das Projekt schließt mit einer Dokumentation und Präsentation der Ergebnisse ab.

                    Wichtige Informationen:
                    • Termine: Montags, 15 Uhr
                    • Ort: 04.2.016
                    • Plätze: Keine Beschränkung
                    • Erstes Treffen: 31.03.
                    • Semester: Jedes SoSe
                    • Zeugnistitel: IP1 "Parallax Scrolling"
                    • Bedingungen: bestandene Klausur von Web Programmierung`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Projekt", "IP2"],
                name: "CampusNow: Orientierung im Uni-Alltag",
                dozent: "Prof. Dr. Dennis Müller, Christopher Antes",
                beschreibungLang: `
                    Fürs ZDD (Zentrum für Digitalisierung und Digitalität) entwickeln wir ein 
                    web-basiertes Display um die aktuell und zukünftig laufenden Kurse und Veranstaltungen 
                    anzuzeigen. Sie lernen die Grundlagen der Webentwicklung in einem praktischen Projekt einzusetzen. 
                    Am Ende steht ein vollwertiges Display-System welches im ZDD ausgestellt wird um zukünftigen Studenten den Weg zu weisen.
                    Termin flexibel

                    Wichtige Informationen:
                    • Termine: n Absprache im Team entweder Dienstags oder Freitags
                    • Ort: 11.3.002 (ZDD)
                    • Plätze: Für 5 - 8 Teilnehmende
                    • Erstes Treffen: 14.04.2026, 15:00 Uhr
                    • Semester: SoSe 2026
                    • Zeugnistitel: Konzeption und Implementierung einer webbasierten Kurs- und Vorlesungsübersicht
                    • Bedingungen: Die in diesem Projekt entwickelte Software soll in zukünftigen Projekte wiederverwendet und 
                    erweitert werden. Ich erkläre mich damit einverstanden das die HSD die von mir entwickelte Software entsprechend 
                    zum Betrieb des ZDD und der Lehre einsetzt, vervielfältigt, verändert und weiterbetreibt und weiterentwickelt.`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Projekt", "IP1", "IP2"],
                name: "Einstieg in die Spieleentwicklung mit der GODOT-Engine",
                dozent: "Prof. Dr. Dennis Müller, mit Christopher Antes",
                beschreibungLang: `
                    Wir entwickeln unser eigenes HSD-Spiel mit der GODOT-Engine.
                    Wir möchten ein eigenes Spiel mit der GODOT Open Source Engine 
                    (weiter-)entwickeln. Dabei arbeiten die Teams selbst-organisiert und 
                    eigenverantwortlich, das wöchentliche Projekttreffen dient dem Abgleich 
                    des Fortschritts und der Planung der nächsten Aktivitäten.
                    Bitte geben sie in ihrem Bewerbungsschreiben eventuelle Vorerfahrung 
                    (auch gerne mit anderen Game Development Engines) an.

                    Wichtige Informationen:
                    • Termine: Nach Abstimmung im Team entweder Dienstags oder Freitags vormittags
                    • Ort: 11.3.002 (ZDD)
                    • Plätze: Für 8 - 15 Teilnehmende
                    • Erstes Treffen: Dienstag, 14.04.2026 13:30
                    • Semester: Jedes Semesester
                    • Zeugnistitel: Einstieg in die Spieleentwicklung mit der GODOT-Engine
                    • Bedingungen: Das entwickelte Spiel soll ggf. von zukünftigen Kursen 
                    weiterentwickelt werden können. Daher erklären Sie sich bereit den 
                    Quellcode sowie alle Assets der HSD zur Verfügung zu stellen.`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Projekt", "IP1", "IP2"],
                name: "Repository Mining",
                dozent: "Prof. Dr. rer. nat. Thomas Franz, Björn Salgert, M. Sc.",
                beschreibungLang: `
                    Ziel des Projektes ist es, einen möglichst umfassenden Datensatz von Git-Repositories 
                    zu erstellen. In diesem Semester liegt der Schwerpunkt auf der Visualisierung des 
                    Datensatzes. Hierfür soll ein Crawler entwickelt werden, der beispielsweise Repositories 
                    auf GitHub aufspürt. Zusätzlich sollen für die Repositories möglichst umfassende Informationen 
                    bereitgestellt werden, wie zum Beispiel die Programmiersprache, der Projekttyp, die Größe oder 
                    die Anzahl der Commits. Im letzten Semester wurden bereits Prototypen hierfür entwickelt, die in 
                    diesem Semester weiter ausgebaut werden sollen. Bisher wurden mehrere tausend Repositories verarbeitet 
                    und die Ergebnisse in einer Datenbank gespeichert. In diesem Semester sollen die Ergebnisse visualisiert werden, 
                    dazu soll eine Webanwendung entwickelt werden.

                    Wichtige Informationen:
                    • Termine: Mittwochs 15:00 Uhr
                    • Ort: 04.02.021
                    • Plätze: Für 3 - 5 Teilnehmende
                    • Erstes Treffen: Mittwoch 15.4, 15:00
                    • Semester: SoSe 2026
                    • Zeugnistitel: Repository Mining
                    • Bedingungen: /`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Projekt", "IP1", "IP2"],
                name: "Informatikprojekt - Visualisierung im OOP-Praktikum",
                dozent: "Prof. Dr.-Ing. M.Sc. Markus Dahm",
                beschreibungLang: `
                    Im Praktikum von OOP1 und OOP2 sollen einige Themen visualisiert 
                    werden: Zusätzlich zur Ausgabe auf die Text-Konsole sollen die 
                    Lösungen Ihrer Programmieraufgaben sowohl attraktiv als auch 
                    informativ in der Grafik-Konsole dargestellt werden. Die Motivation 
                    der Lerndenen soll so gesteigert werden.
                    Visualisierte Inhalte
                        OOP1: Einheitliches Konzept für die Visualisierung der OOP1-Praktikums-Ergebnisse
                        OOP2: Visualisierung von Listen, Bäumen und anderen Praktikums-Ergebnissen
                    Welche Inhalte Sie im Projekt bearbeiten, wird zu Beginn besprochen und festgelegt.

                    Randbedingungen
                        Umsetzung in Java
                        Aufbauen auf der 5Code-Grafik-Konsole und/oder AWT/Swing
                        Für OOP2 gibt es in diesem SoSe 2026 eine Reihe von neuen Inhalten (Lambdas, Streaming, AWT/Swing)
                        Die Nutzung soll für das Praktikum sowohl optional sein, als auch mit möglichst wenig zusätzlichem Aufwand machbar sein, sowohl syntaktisch als auch semantisch.
                        Die Aufgabenstellungen für das Praktikum können ggf. an die Visualisierung angepasst werden.
                    Vorgehensweise
                        Projektplanung, wöchentliche Besprechungen, Dokumentation
                        Konzipierung von Visualisierung für ausgewählte Themen, sowohl gestalterisch als auch technisch
                        Aufstellen der Anforderungen mit Priorisierung
                        Konzipierung der Umsetzung
                        Umsetzung in Java, ggf. in AWT/Swift und/oder für die 5Code-Grafik-Konsole
                        Gerne unter Einsatz von KI-Unterstützung und Reflexion der Nützlichkeit
                    Vorkenntnisse
                    Vorkenntnisse in Java-Entwicklung, mindestens OOP1, sind notwendig. 
                    Stellen Sie diese bitte im Motivationsschreiben dar.

                    Wichtige Informationen:
                    • Termine: Donnerstags, 14 Uhr
                    • Ort: Usability-Labor 04.2.001
                    • Plätze: Für 3 - 6 Teilnehmende
                    • Erstes Treffen: Donnerstag, 16.4.2026
                    • Semester: SoSe 2026
                    • Zeugnistitel: Visualisierung von Inhalten des OOP-Praktikums
                    • Bedingungen: Die Ergebnisse dürfen in der Lehre eingesetzt und auch weiterentwickelt werden.`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Projekt", "IP1"],
                name: "IP1: Android Puzzle App",
                dozent: "Prof. Dr. Philipp Krieter",
                beschreibungLang: `
                    Im Rahmen dieses Projekts können Sie eine Puzzle-App konzipieren und umsetzen. Die Art des Puzzles können Sie selbst aussuchen.
                    Dabei erlernen Sie die Grundlagen zur Entwicklung einer Android-Applikation. Gearbeitet wird in Kleingruppen.
                    Genutzt wird die Android SDK, Hardware steht zum Verleih zur Verfügung.
                    Es wird ein sicheres Verständnis der Konzepte aus OOP1 und Belegung von OOP2 erwartet.

                    Wichtige Informationen:
                    • Termine: Mittwochs, 14 Uhr
                    • Ort: Raum 04.2.015
                    • Plätze: Für 3 - 9 Teilnehmende
                    • Erstes Treffen: 15. April 2026, 14 Uhr
                    • Semester: SoSe 2026
                    • Zeugnistitel: Puzzle-App mit Android
                    • Bedingungen: Sicheres Verständnis der Konzepte aus OOP1 und Belegung von OOP2 `,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Projekt", "IP2"],
                name: "Tiny Smart Home Demonstrator",
                dozent: "Prof. Dr. Manfred Wojciechowski, Patrick Pogscheba",
                beschreibungLang: `
                    Wir erstellen mit einfachen Mikrocontrollern und Sensoren in einem Spielzeughaus 
                    einen Smart-Home-Demonstrator zur KI-unterstützten Steuerung von intelligenten Umgebungen 
                    (Smart Spaces). Das Projekt soll auf der Nacht der Wissenschaft im Sept. 2026 vorgestellt werden.
                    Im Forschungsgebiet "Smart Spaces" sollen Benutzer in intelligenten Umgebungen interagieren können. Für die Nacht der Wissenschaft 2026 soll dazu ein mobiler Demonstrator gebaut werden:

                    Spielzeug/Puppenhaus als Basis
                    verschiedene Lichtszenen mit LED-Lichtern
                    Erkennung von Benutzern und deren Aufenthaltsort durch Sensoren (RFID/NFC)
                    AI-Enabling: Einbindung in Homeassistant oder Aufbau eines dedizierten MCP-Servers

                    Interesse/Kenntnisse an/in Programmierung und spielerischem Umgang mit Technik wünschenswert...

                    Wichtige Informationen:
                    • Termine: nach Absprache, Di, 14 Uhr oder Mi 15 Uhr
                    • Ort: Raum 04.2.016
                    • Plätze: Für 3 - 3 Teilnehmende
                    • Erstes Treffen: Di, 14.4. 14 Uhr
                    • Semester: SoSe 2026
                    • Zeugnistitel: AI-enabled Tiny Smart Home Demonstrator
                    • Bedingungen: Das Projekt hat das Ziel, an der Nacht der Wissenschaft gezeigt zu werden. Optimalerweise von der Projektgruppe selbst. `,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Projekt", "IP2"],
                name: "Projekt - Vorlesungstool als VSCode-Plugin",
                dozent: "Prof. Dr.-Ing. M.Sc. Markus Dahm",
                beschreibungLang: `
                    Ziel
                    Seit vielen Jahren wird das Programm 5Board eingesetzt, um Vorlesungen vorzubereiten und durchzuführen sowie um ein Skript zu exportieren.
                    Nun soll dessen Funktionalität überarbeitet, verbessert, ergänzt und als Plugin für die IDE VSCode implementiert werden.
                    Das Plugin soll in der Lehre eingesetzt und auch weiterentwickelt werden.

                    Features
                    Die Features von 5Board, die Sie aus meiner Vorlesung kennen, sind das Vorbild. Außerdem gibt es einige Möglichkeiten der Verbesserung und Ergänzung, gerne aus der Sicht von Studierenden.

                    Tools für formatierten Text, Bilder, Grafik (Rechteck, Ellipse, Linie mit Pfeilen), Freihand-Zeichnung. Ggf. auch Animationen, Ton und Videoplayer.
                    Code-Blöcke für die Programmierung in Java (ggf. auch für andere Sprachen). Editieren sowohl eingebettet im Skript als auch im normalen VSC-Code-Editor mit Synchronisierung
                    Selbstdefinierte Konfigurationen von Tools, Templates und Themes
                    Separate, synchronisierte Ansichten für Lehrende und Studierende, idealerweise für mehrere Beamer
                    Didaktische Reduktion der Elemente des Skripts für die Fokussierung in der Präsentation
                    Reihenfolge der Darstellung als Timeline vordefinierbar und editierbar
                    Speichern in einem neuen Format (z.B. HTML), Lesen von altem Format
                    Optional Handschrift-Erkennung
                    Optional zusätzliche Dienste wie ein Audience Response System
                    Optional KI-Unterstützung für Lehrende
                    Gerne Ergänzungen aus Sicht von Studierenden :-)

                    Vorgehensweise
                    Projektplanung, wöchentliche Besprechungen, Dokumentation
                    Erkundung der Features von 5Board
                    Aufstellen der Anforderungen mit Priorisierung
                    Konzipierung der Umsetzung
                    Umsetzung als VSC-Plugin und Test
                    Gerne unter Einsatz von KI-Unterstützung und Reflexion der Nützlichkeit
                    Vorkenntnisse
                    Vorkenntnisse in Web-Entwicklung sind sehr von Vorteil, da VSC-Plugins als Web-Anwendungen implementiert werden (-> Motivationsschreiben).
                    NUR bei Vorkenntnissen auch als IP2.

                    Wichtige Informationen:
                    • Termine: Donnerstags, 15 Uhr
                    • Ort: Raum Usability-Labor 04.2.001
                    • Plätze: Für 3 - 6 Teilnehmende
                    • Erstes Treffen: Donnerstag, 16.4.26
                    • Semester: SoSe 2026
                    • Zeugnistitel: Konzeption eines Vorlesungstools und Implementierung als VSCode-Plugin
                    • Bedingungen: Die entwickelte Software und die erarbeiteten Konzepte können in der Lehre eingesetzt und weiter entwickelt werden.`,
                modul: "Projekt"
            }
        ]
    },

    mp: {
        titel: "Medienprojekt A/B",
        kurse: [
            {
                bild: "../assets/images/KursBild.png",
                tags: ["MP A", "Projekt"],
                name: "The Witch",
                dozent: "Prof. Dr.-Ing. Thomas Bonse, Prof. Dr. Sina Mostafawy, Prof. Dr. Dennis Hoffmann",
                beschreibungLang: `
                    Ihr seid: Programmier- und Technikbegeisterte, Storyboard- und Kreativspezialist:innen , 3DGrafik- und Animationsexpert:innen, Organisationstalente, Audiofetischist:innen.
                    Wir arbeiten, wie es in einer Firma üblich ist mit Rollenverteilung, Verantwortungsbereiche und Abgabeterminen.

                    Die Installation zeigt am Ende folgendes:
                    Eine virtuelle Handleserin liest in Echtzeit aus der Hand der Besucher:in. Die Hand wird auf einem Tisch ausgestreckt. Eine Kamera erkennt diese und startet die Analyse. Die Handlinien werden ausgewertet und führen zu einer AI-unterstützten Datenbank. Daraus entstehen dann Wahrsagungen, die als Sätze formuliert und per Text2Speech in gesprochene Sätze umgewandelt werden. Diese werden in Echtzeit der 3D generierten Wahrsagerin zugeführt. Sie spricht die Sätze und reagiert interaktiv auf die Besucher:in.

                    Einige der möglichen Softwarepakete:
                    Unity, Unreal - Blender - AI-generierte Inhalte (featuring Dennis Müller) - Imageprocessing - Text2 Speech - Music & Sound Installation
                    Hinweis für BMT PO2025: In diesem Modul gibt es einige wenige Plätze für die Erstellung eines making-of Videos im Rahmen des Basisprojektes.

                    Wichtige Informationen:
                    • Termine: Donnerstags, 14:00 Uhr
                    • Ort: 04.2.026
                    • Plätze: Für 6 - 20 Teilnehmende
                    • Erstes Treffen: 16.04.2026, 14:00 Uhr 04.2.026
                    • Semester: SoSe 2026
                    • Zeugnistitel: Realisierung einer interaktiven VR-Installation
                    • Bedingungen: Ich erfülle die für meinen Studiengang angegebenen formalen Studienvoraussetzungen, um an diesem Modul teilzunehmen.`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["MP A", "Projekt"],
                name: "Projekt(rahmen): Konzept für die organisatorische und technische Umsetzung des 'Synthetic Media Makerspace'",
                dozent: "Prof. Dr. rer. nat. Michael Marmann, Dipl.-Ing. Björn Nilson (für Master TRADY als MDPR)",
                beschreibungLang: `
                    In diesem Projekt geht es um das technisch-organisatorische Konzept und Betreibermodell für den "Synthetic Media Makerspace (im FB M)" im Rahmen des hochschulweiten "Lernen im Makerspace - Projekts" (kurz LiMa) - https://www.hs-duesseldorf.de/lima .
                    Im KickOff werden die Rahmenbedingungen des LiMa-Projektes erläutert - Bsp.: "Wer kann wann was unter welchen Bedingungen an Räumen, Arbeitsplätzen, Equipment, etc. buchen". D.h. es gibt vielfältige Nutzerszenarien, die berücksichtigt werden müssen. Neben der Buchungsthematik bedarf es eines KI-Lizenz-Managements und eines technischen Sharing-Konzeptes von Medien innerhalb des Makerspaces (eigenes VLAN inkl. SSID).

                    Die ersten Sprints (im Rahmen eines agilen Projektmanagement-Ansatzes) werden sich mit der Beschreibung und Definition der einzelnen KI-Arbeitsplätze und der notwendigen KI-Lizenzen befassen. Für den "Synthetic Media Makerspace" sind aktuell folgende KI-Arbeitsplatzthemen vorgesehen:

                    Audio (Podcasts, Sprechertexte, Mehrsprachigkeit, Voice-Cloning, SSML, ...)
                    Video (Educasts, Konzept, Post-Produktion, Content-Produktion für Social Media, ...)
                    Bild und Grafiken (Content-Produktion für unterschiedliche Einsatzbereiche)
                    AR/VR (opt. inkl. Hardware)
                    Web-/App-Entwicklung (u.a. Vibe Coding mit Hosting auf Plesk für Non-Programmer)
                    Text (Konzept, Drehbuch für Lern-Arrangements, Kampagnen-Mgmt, Sprechertexte, ...)
                    Daraus ergibt sich später, wie viele Arbeitsplätze mit welcher HW und SW bzw. KI-Lizenzen benötigt werden.

                    Da Makerspace-Arbeitsplätze fachbereichsübergreifend von allen Studierenden der Hochschule Düsseldorf (unter Berücksichtigung der jeweiligen Voraussetzungen) zugänglich sein sollen, müssen die Arbeitsplätze auch von Nicht-Profis nutzbar sein. Bsp. - ein AR-/VR-Arbeitsplatz muss auch ohne tiefgreifende Programmierkenntnisse im Rahmen der Lehre bzw. individuellen Projekten nutzbar sein.

                    Im Idealfall wird der "Synthetic Media Makerspace" ab dem 01.09.2026 eingerichtet.

                    Wichtige Informationen:
                    • Termine: T.n.V. (voraussichtlich Montags oder Mittwochs)
                    • Ort: 04.3.001 und 04.3.004
                    • Plätze: Für 3 - 6 Teilnehmende, auch für Master TRADY geöffnet
                    • Erstes Treffen: Donnerstag in der zweiten Vorlesungswoche (14h)
                    • Semester: SoSe 2026
                    • Zeugnistitel: Projekt: Synthetic Media Makerspace
                    • Bedingungen: Im Rahmen der Lehrveranstaltung werden diverse Tools zur Unterstützung des agilen Arbeitens genutzt. Diese können auch extern gehostet sein (bspw. Meistertask). Ich stimme zu, auch extern gehostete System für diese Lehrveranstaltung zu nutzen.`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["MP A", "Projekt"],
                name: "Projekt(rahmen): Digital Applications (Synthetic Media Cluster and Makerspace)",
                dozent: "Prof. Dr. rer. nat. Michael Marmann, Dipl.-Ing. Björn Nilson (für Master TRADY als MDPR)",
                beschreibungLang: `
                    In diesem Projekt konzipieren und entwickeln wir einen neuen interaktiven Webbereich für das Skill-Cluster "Synthetic Media" im neuen Studiengang B.A. CSIM und für den "Synthetic Media Makerspace" um. Geplant ist die Umsetzung mit Drupal (CMS 2.0).

                    In diesem Projekt werden wir einen neuen interaktiven Webauftritt für das Skill Cluster "Synthetic Media" https://medien.hs-duesseldorf.de/studium/studiengaenge/bcsim/studieninhalt-aufbau und den "Synthetic Media Makerspace im FBM" auf Basis von Drupal (gehostet unter Plesk mit Login über MFA) konzipieren und umsetzen.

                    Die Rahmenbedingungen des Makerspaces werden im KickOff erläutert. Hierzu gehören u.a. folgende Kriterien bzw. Menüpunkte:

                    unterschiedliche Personengruppen und Rollen
                    Ansprechpersonen, Kontakt, Kontaktformular (mit optionalen und verpflichtenden Feldern)
                    Unterseiten für Lehrveranstaltungen
                    Darstellung und interaktive Informationsbereitstellung zum Makerspace-Raum und den einzelnen Arbeitsplätzen (FAQ, vorhandene KI-Lizenzen, ...); einheitliche "Steckbriefe"
                    Prompt-Labor
                    interaktiver Showroom: Abschlussarbeiten, Projekte, Publikationen, etc., die mit Hilfe des Makerspaces erstellt wurden
                    ...
                    Da in dieser Lehrveranstaltung - je nach Anzahl der Teilnehmer:innen - mehrere Teilprojekte mit unterschiedlichen Schwerpunkten entstehen können, sprechen wir daher auch von Projektrahmen. Zur Teilnahme am Projekt ist eine aussagefähige Kurzbewerbung erforderlich.

                    Die Entwicklung der Digitalkompetenz ist bei allen Angeboten ein wichtiges zusätzliches Ziel. Aus diesem Grund werden zur Unterstützung agiler Lernsettings auch cloudbasierte Tools eingesetzt, so z.B. für die Kommunikation und Zusammenarbeit, für das Aufgabenmanagement, für die Wissensrecherche und zur Strukturierung bzw. Erstellung digitaler Inhalte. Um stets aktuell zu bleiben und neue Trends zu berücksichtigen, können die Tools je nach Veranstaltung variieren. Da die Tools in der Regel nicht durch die HSD gehosted werden, gelten in diesem Fall die Datenschutz- und Nutzungsbedingung der jeweiligen Anbieter.

                    Wichtige Informationen:
                    • Termine: jeden Donnerstag 14:00h
                    • Ort: 04.3.001 und 04.3.004
                    • Plätze: Für 3 - 6 Teilnehmende, auch für Master TRADY geöffnet
                    • Erstes Treffen: Donnerstag in der zweiten Vorlesungswoche (14h)
                    • Semester: Jedes SoSe
                    • Zeugnistitel: Projekt: Digital Applications
                    • Bedingungen: Im Rahmen der Lehrveranstaltung werden diverse Tools zur Unterstützung des agilen Arbeitens genutzt. Diese können auch extern gehostet sein (bspw. Meistertask). Ich stimme zu, auch extern gehostete System für diese Lehrveranstaltung zu nutzen.`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["MP A", "Projekt"],
                name: "SCRUM Entwicklungsprojekt myHSD App",
                dozent: "Prof. Dr. rer. nat. Thomas Franz, M. Sc. Björn Salgert",
                beschreibungLang: `
                    In diesem Software-Entwicklungsprojekt wird in mehreren Sprints in Anlehnung an das Framework SCRUM gearbeitet. Projektziel ist die wertorientierte Weiterentwicklung der Mobile App "myHSD" (siehe https://myhsd.hosting.medien.hs-duesseldorf.de) und zugehöriger Services.

                    Aufgaben/Rollen
                    Studierende im BMI übernehmen primär die Rolle Software-Entwickler:in, MMI-Studierende ergänzend die des SCRUM Masters und eines "Proxy-POs". Zu bearbeitende Aufgaben und Rollen sind (grob) nach Bachelor/Master aufgeteilt (abhängig von der Team-Zusammensetzung).

                    Master (ergänzend zu den Aufgaben der Bachelors)
                        Backlog-Verwaltung, -Befüllung, -Ergänzung, -Priorisierung, -Refinement
                        Erstellung und Durchsetzung/Unterstützung der DoR, DoD und von Sprint Goals
                        Moderation von Schätz-Workshops, Reviews, Retros, Sprint plannings
                    Bachelor
                        Anforderungsdetaillierung
                        Aufwandsschätzung
                        Softwarentwicklung
                        Testentwicklung und Testing
                        Integration
                        Dokumentation
                        Deployment
                        Betrieb

                    Wichtige Informationen:
                    • Termine: Donnerstags 14:00 Uhr
                    • Ort: 4.2.017
                    • Plätze: Für 4 - 9 Teilnehmende
                    • Erstes Treffen: 16.4. 14 Uhr, 4.2.017
                    • Semester: Jedes Semester
                    • Zeugnistitel: Agile Entwicklung der mobile app myHSD
                    • Bedingungen: Sämtliche Projekt-Ergebnisse können inkl. Namensnennung für Folgekurse, Publikationen, Wieder- und Weiterverwendung genutzt werden.`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["MP A", "Projekt"],
                name: "Signalverarbeitung mit Audiodateien",
                dozent: "Prof. Dr.-Ing. Stefanie Dederichs",
                beschreibungLang: `
                    Erforscht wird jeweils ein individuelles Thema vorzugsweise im Frequenzbereich von Sprache, Gesang oder Musik. Mit den Teilnehmenden wird gemeinsam die Theorie besprochen und Arbeitspakete vereinbart. Individuelle Aufgaben können den Fokus auf einzelne Wörter, Silben oder Buchstaben, den Klang oder Tonlagen legen, die im Frequenzbereich genauer betrachtet werden.
                    Von Vorteil ist ein Grundverständnis für den Frequenzbereich und Programmierung (BMT/BTB Modul Signalverarbeitung), in beiden Bereichen wird unterstützt. Für die Umsetzung ist Matlab vorgesehen. Es kann zu zweit oder allein gearbeitet werden.


                    Wichtige Informationen:
                    • Termine: nach Vereinbarung
                    • Ort: HSD und online
                    • Plätze: Bis zu 8 Teilnehmende
                    • Erstes Treffen: Fr. 17.04.2026, 09:30 Uhr Kick-off Besprechung
                    • Semester: Jedes Semester
                    • Zeugnistitel: Signalverarbeitung mit Audiodateien
                    • Bedingungen: /`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["MP A", "Projekt"],
                name: "Projekt: Panorama Derendorf",
                dozent: "Prof. Dr. Eng. Univ. of Tsukuba Jens Herder",
                beschreibungLang: `
                    Panoramen werden in Medienpräsentationen erfolgreich eingesetzt. Dabei sind die Techniken vielfältig: Browser, Browser mit Hotspots, Skyboxen im Rendering, Immersive Darstellung (z.B. HMD mit Google Earth und Street View) sowie Videos und 3D Objekten. An Hand des Campus Derendorf werden die verschiedenen Techniken ausprobiert und für Präsentationen und Orientierung zur Verfügung gestellt. Schwerpunkte für dieses Semester sind Neuaufnahme des Campus mit einer Drone, Gebäude (z.B. Gebäude 5), Standalone Viewer für HMDs auf Messen, Entwicklung eines eigenen Players für HMDs (Unity), Info-Tafeln, 3D Audio, Videoplayer für Videos mit Maske, 360 Videos, 3D Objekte, ... Weiterführende Ideen sind die Verwendung der Panoramen in immersiven Anwendungen oder Nutzung für Produktionen im Virtuellen Studio.

                    Ergebnisse des Projektes:

                    https://web.hs-duesseldorf.de/panorama/
                    https://vsvr.medien.hs-duesseldorf.de/productions/panorama/

                    Wichtige Informationen:
                    • Termine: nach Vereinbarung
                    • Ort: 04.3.010
                    • Plätze: Für 1 - 12 Teilnehmende
                    • Erstes Treffen: 16.04.2026 um 14:00 in Raum 04.3.010
                    • Semester: Jedes Semester
                    • Zeugnistitel: Webbasierte und App-basierte Techniken für die Darstellung von Panoramen, inklusive Video und Audio
                    • Bedingungen: /`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["MP A", "Projekt"],
                name: "Project: Intervention in Public Spaces - A VR/AR Project on the Sculptures from Hitler’s ‘Gottbegnadeten List’",
                dozent: "Prof. Dr. Eng. Univ. of Tsukuba Jens Herder",
                beschreibungLang: `
                    Use of VR and AR in contemporary art is a new and exciting emerging field - both providing a high degree of freedom but also expanding the possibilities of immersive technology. In collaboration with internationally active artist Shinpei Takeda, the project explores innovative use of mixed reality both in a traditional art settings like museum and outside like a public art project. His works have centralized around the theme of memory and how to make the memory alive in the present tense. The project will collaborate with a class by Nana Tazuke-Steiniger at the Heinrich-Heine University.
                    BACKGROUND
                    The propaganda exhibitions "Great German Art Exhibition" and "Degenerate Art" were opened in Munich in 1937. The comparison made it clear which works of art were promoted by the Nazi government and which were rejected. In 1944, the Reich Ministry of Public Enlightenment and Propaganda drew up a list of artists particularly favoured by the regime, the so-called "Hitler's God-Gifted List".
                    PROJECT
                    We will implement a public art project surrounding sculptures in the public space in Düsseldorf. We explore how to bring visibility to the invisible memories, and histories still embedded in public spaces and monuments. We will be expanding on “Antimonument-Extended" - a VR program that started in 2023 to “work” with sculptures. For scanning a LiDAR/camera system, AI and advanced techniques like character rigging will be applied.
                    REQUIREMENTS:
                    Programming and design skills for AR and VR, Unity

                    LITERATURE:
                    Herder et al, Mixed Reality Art Experiments - Immersive Access to Collective Memories, ISEA2019, Proceedings, 25th International Symposium on Electronic Art, pp. 334-341, Gwangju, South Korea, June 22-28, 2019. Jens Herder, Mixed Reality Art - Transitions between VR, AR, and Reality, ISSM 2022-23 - 23st International Symposium on Spatial Media, University of Aizu, Japan, 27. January 2023.
                    
                    LINKS:
                    https://vsvr.medien.hs-duesseldorf.de/collaboration/shinpei-takeda/

                    Wichtige Informationen:
                    • Termine: Mondays at 14:00
                    • Ort: 04.3.010
                    • Plätze: Für 2 - 12 Teilnehmende
                    • Erstes Treffen: 13.04.2026 at 14:00
                    • Semester: SoSe 2026
                    • Zeugnistitel: Mixed Reality for Art Installation - Intervention in Public Spaces
                    • Bedingungen: English will be used as the main language`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["MP A", "Projekt"],
                name: "MIREVI Digital Research & Art Project",
                dozent: "Prof. Dr. rer. nat. Christian Geiger, MIREVI-Team",
                beschreibungLang: `
                    Wir unterstützen Künstler:innen und Kreative in aktuellen Projekten im Bereich XR, Human-Robot-Interaction und Digital Art. In enger Zusammenarbeit mit den kreativen Autor:innen co-konzipieren und realisieren wir künstlerische Ideen mit digitalen Technologien wie XR, KI und Robotik. In diesem Semester haben die Teilnehmer:innen die Gelegenheit an ausgewählten F&E-Projekten des MIREVI-Teams teilzunehmen. Für 2026 sind verschiedene Projekte geplant bzw. werden weitergeführt. Mögliche Auswahl laufender Projekte:

                    Oneironautika: Surrealistische Wachträume in VR inszenieren
                    Artificial Life: Installation über Künstliches Leben (Lenia, etc)
                    3D Fraktale als mediale Inszenierung utopischer Architekturen
                    KI-basierte Mixed Reality Installationen wie BildKlangPoet, Lichtblickspiegel, etc
                    Immersive MTI: Entwicklung immersiver Inhalte für Messe, Event, Festival
                    (für weitere Informationen siehe auch www.mirevi.de)

                    Die Herausforderung in diesem Projekt besteht darin, dass wir existierende XR-Projekte bzw. konkrete Ideen zum Teil weiterentwickeln und zur Ausstellungs- bzw. Aufführungsreife bringen wollen bis zum Wintersemester 2026/27. Zum Teil sollen die Ergebnisse auch auf Festivals, wissenschaftliche Konferenzen und Ausstellungen präsentiert werden.

                    Interesse an der Zusammenarbeit mit externen Partnern, flexibler Arbeitseinsatz und hohe Motivation sind ebenfalls erwünscht. Erfahrungen in der Co-Konzeption, Gestaltung und Realisierung wissenschaftlich-kreativer bzw. künstlerischer Arbeiten im Bereich XR sind von Vorteil. Es findet eine flexible Betreuung n. V. statt, ggf. auch online bzw durch Mitarbeiter des jeweiligen Forschungsprojekts.

                    Nachricht, Fragen zum Angebot oder Mitmachen an geiger@hs-duesseldorf.de.

                    Wichtige Informationen:
                    • Termine: Chris Geiger online bzw n. V. (flexible Kontaktzeit, danach freies Arbeiten)
                    • Ort: MIREVI, Ackerstr. 11, 40233 Düsseldorf
                    • Plätze: Für 3 - 6 Teilnehmende
                    • Erstes Treffen: n. V. im SoSe 2026
                    • Semester: Jedes Semester
                    • Zeugnistitel: Mixed Reality und Visualisierung: Digital Research & Art Projekt
                    • Bedingungen: Mit Teilnahme am Kurs erkläre ich mich damit einverstanden, dass mit den Kursergebnissen im Rahmen der Forschungs- oder Aufstellungsarbeit von der MIREVI Arbeitsgruppe weitergearbeitet werden darf. Die Arbeitsgruppe MIREVI darf an den erstellten Inhalten weiter arbeiten, sie verändern, forschen und sie im Forschungskontext ausstellen.`,
                modul: "Projekt"
            }
        ]
    },

    va: {
        titel: "Vertiefung A/C",
        kurse: [
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Vert. A", "Projekt"],
                name: "Interaktive Systeme",
                dozent: "Prof. Dr.-Ing. M.Sc. Markus Dahm",
                beschreibungLang: `
                    Themen der Vorlesung:
                    Programmierung von GUIs - Konzepte und JavaFX
                    Einführung in Kotlin
                    Einführung in die Programmierung von Android-Apps in Kotlin
                    Display-Technologien
                    Input-Technologien
                    Usability Engineering
                    .

                    Mini-Projekt: Android-App konzipieren und implementieren
                    Der praktische Anteil wird in Form eines Mini-Projekts (2,5 CP) durchgeführt.

                    Generelles Thema: NEU: App zur Optimierung des Wahlprozesses im Fachbereich Medien

                    Sie finden sich in Gruppen von ca. 3 Personen zusammen und legen Ihr Thema der App fest.

                    1. Recherche: Sie recherchieren, was es in diesem Thema alles bereits gibt und legen die Ziele und Anforderungen fest, die Ihre App erreichen soll

                    2. Konzept: Sie erstellen ein Konzept, wie sie diese Ziele erreichen möchten

                    3. Umsetzung: Sie setzen die App als Android-App (in Java oder Kotlin) um

                    Im Semester präsentieren alle Gruppen in 3 Terminen die Ergebnisse der drei Arbeitsschritte.

                    Mehr Info und die Termine dazu gibt es dann im Moodle-Kurs nach Beginn der Vorlesungen.

                    Voraussetzungen
                    Die Inhalte von OOP1 und OOP2 sollten beherrscht werden, um die weiterführenden Programmier-Themen verstehen zu können.

                    Wichtige Informationen:
                    • Termine: Donnerstags Vorlesung 10:00-11:45
                    • Ort: 04.1.009
                    • Plätze: Keine Beschränkung
                    • Erstes Treffen: Donnerstag, 16.4.26
                    • Semester: SoSe 2026
                    • Zeugnistitel: Interaktive Systeme
                    • Bedingungen: Die Ergebnisse des Projektanteils können weiter für die Lehre eingesetzt und weiterentwickelt werden.`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Vert. A", "Projekt"],
                name: "BMT 17.F09 / BMI 54: Vertiefung Computergrafik",
                dozent: "Prof. Dr.-Ing. Sina Mostafawy, Leonie Schuberth",
                beschreibungLang: `
                    Es werden weiterführende Themen der Computergrafik, im Speziellen das Raytracing Verfahren, sowie komplexe Kurve und Flächen sowie Realistische Rendering-Methoden behandelt.

                    Wichtige Informationen:
                    • Termine: Vorlesung: Dienstags 14:00 Uhr // Praktikum: Dienstags 8 Uhr
                    • Ort: Vorlesung: 04.2.26 // Praktikum: 04.2.012
                    • Plätze: Für 4 - 40 Teilnehmende
                    • Erstes Treffen: 14.04.26, 14 Uhr (Vorlesung)
                    • Semester: Jedes SoSe
                    • Zeugnistitel: Vertiefung Computergrafik
                    • Bedingungen: /`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Vert. A", "Projekt"],
                name: "D3.1 Einführung Künstliche Intelligenz",
                dozent: "Prof. Dr. Dennis Müller",
                beschreibungLang: `
                    Künstliche Intelligenz ist in aller Munde. Aber was ist das eigentlich und wie können Maschinen lernen? In diesem Kurs erarbeiten wir die mathematischen Grundlagen moderner KI-Verfahren in einer Kombination aus theoretischen Grundlange und praktischen Anwendungsmöglichkeiten.

                    Prüfungsform: Schriftliche Klausur mit semesterbegleitenden Bonusübungen

                    Wichtige Informationen:
                    • Termine: Vorlesung: Mittwochs, 09:15 - 15:00 Uhr (2V, 2Ü, 2P)
                    • Ort: Vorlesung: 04.1.002 und 04.2.012
                    • Plätze: Keine Beschränkung
                    • Erstes Treffen: 02.04.2025, 09:15 Uhr
                    • Semester: Jedes SoSe
                    • Zeugnistitel: Einführung Künstliche Intelligenz
                    • Bedingungen: /`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Vert. A", "Projekt"],
                name: "Software-Architektur",
                dozent: "Prof. Dr. rer. nat. Thomas Franz, B. Salgert",
                beschreibungLang: `
                    In diesem Modul widmen wir uns der Software-Architektur. Dazu vertiefen wir, ausgehend von den Inhalten des Modul Software Engineering, verschiedene Software-Architektur-Themen anhand eines Software-Sytems, welches wir uns selbst zu Beginn auswählen.
                    # Lernziele
                    Software-Architektur-Wissen
                    - Rollenverständnis
                    - Aufgabenverständnis
                    - Ergebnistypen kennen
                    - Herangehensweisen kennen
                    - Herausforderungen kennen

                    Software Architektur Ergebnisse produzieren können
                    - Architekturmuster auswählen
                    - Architekturrelevante Entscheidungen identifizieren und motivieren können
                    - Architekturentscheidungen dokumentieren können
                    - Architekturentscheidungen treffen können
                    - Architektur durch verschiedene Sichten dokumentieren und erläutern können

                    # Prüfung
                    Die Prüfung erfolgt in der Form einer selbstständig erarbeiteten und zu verteidigenden Software-Architektur für ein fiktives Software-System in Kleingruppen.

                    Wichtige Informationen:
                    • Termine: Freitags, 12 Uhr
                    • Ort: 4.1.002
                    • Plätze: Keine Beschränkung
                    • Erstes Treffen: 17.4.
                    • Semester: Jedes SoSe
                    • Zeugnistitel: 
                    • Bedingungen: BMI Kurs Software-Engineering bestanden`,
                modul: "Projekt"
            },
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Vert. A", "Projekt"],
                name: "Mobile Anwendungen",
                dozent: "Prof. Dr. Philipp Krieter",
                beschreibungLang: `
                    Lernziele:
                    Die Studierenden kennen die Grundlagen der mobilen Anwendungsentwicklung und können sie anwenden. Der Kurs vermittelt den Studierenden Kenntnisse und Fähigkeiten im Bereich der Softwareentwicklung für mobile Plattformen. Konkret wird der Kurs am Beispiel der plattformübergreifenden Entwicklung mit dem Flutter Framework arbeiten. Über das Semester wird an einem gemeinsamen Übungsprojekt gearbeitet. Der Fokus liegt auf den Prinzipien des Software-Engineering, die speziell auf die mobile Entwicklung angewendet werden, einschließlich Anforderungen, Design, Implementierung, Testen und Wartung mobiler Anwendungen. Die Studierenden sollen in der Lage sein, eigene mobile Anwendungen zu entwickeln.

                    Lerninhalte:
                    Herausforderungen in der mobilen Softwareentwicklung
                    Überblick zu mobiler Entwicklung und den verschiedenen Plattformen
                    Plattformübergreifende Entwicklung mit dem Flutter Framework
                    Architekturmuster und Design-Patterns für mobile Anwendungen
                    Multithreading und Asynchronität
                    Nutzung von APIs und Bibliotheken
                    Best Practices für mobiles UX- und UI-Design
                    Deployment-Prozesse und Veröffentlichung in App Stores

                    Wichtige Informationen:
                    • Termine: Vorlesung: Dienstags, 10 Uhr
                    • Ort: Raum 04.1.009
                    • Plätze: Keine Beschränkung
                    • Erstes Treffen: 14. April 2026, 10 Uhr
                    • Semester: Jedes SoSe
                    • Zeugnistitel: Mobile Anwendungen
                    • Bedingungen: Es wird ein sicheres Verständnis der Konzepte aus OOP1 und OOP2 erwartet.`,
                modul: "Projekt"
            }
        ]
    },

    vb: {
        titel: "Vertiefung B/C",
        kurse: [
            {
                bild: "../assets/images/KursBild.png",
                tags: ["Medien", "Projekt"],
                name: "Mobile Anwendung",
                dozent: "Prof. Dr. Philipp Krämer",
                beschreibungLang: `
                    Im Rahmen des Projekts können Sie selbst ausgedachte Spiele in 5Code mit der Grafik-Konsole bauen.
                    Die Ergebnisse sollen weiterverwendet werden und sowohl im Praktikum als auch auf der 5Code-Webseite
                    angeboten werden.

                    Wichtige Informationen:
                    • Termine: Donnerstags, 10 Uhr
                    • Ort: 03.1.013
                    • Plätze: Für 8 - 20 Teilnehmende
                    • Erstes Treffen: 16.04., 10 Uhr
                    • Semester: Jedes SoSe
                    • Zeugnistitel: Mobile Anwendungen mit Java
                    • Bedingungen: Alle Ergebnisse des Projekts können für die Weiterentwicklung der Lehre und von 5Code
                    verwendet und weitergegeben werden. Bitte geben Sie im Motivationsschreiben an, mit welchem
                    Betriebssystem Sie arbeiten (Windows, Mac, Linux).`,
                modul: "Projekt"
            }
        ]
    }
};
