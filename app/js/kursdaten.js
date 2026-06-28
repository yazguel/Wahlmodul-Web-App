const kursDaten = {
    ip: {
        titel: "Informatikprojekt 1/2",
        kurse: [
            {
                bild: "../assets/images/kotlin-android.png",
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
                bild: "../assets/images/ip2.jpg",
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
                bild: "../assets/images/ip2.jpg",
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
                bild: "../assets/images/ip2.jpg",
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
                bild: "../assets/images/ip2.jpg",
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
                bild: "../assets/images/ip2.jpg",
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
                bild: "../assets/images/ip2.jpg",
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
                bild: "../assets/images/ip2.jpg",
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
                bild: "../assets/images/ip2.jpg",
                tags: ["Projekt", "IP2"],
                name: "Projekt - Vorlesungstool als VSCode-Plugin",
                dozent: "Prof. Dr.-Ing. M.Sc. Markus Dahm",
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
            }
        ]
    },

    mp: {
        titel: "Medienprojekt A/B",
        kurse: [
            {
                bild: "../assets/images/mp1.jpg",
                tags: ["Medien", "Projekt"],
                name: "The Witch",
                dozent: "Prof. Dr.-Ing. Thomas Borse, Prof. Dr. Sina Mostafawy, Prof. Dr. Dennis Hoffmann",
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
                bild: "../assets/images/mp2.jpg",
                tags: ["Medien"],
                name: "Weiteres Medienprojekt",
                dozent: "Prof. Dr. Mustermann",
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
            }
        ]
    },

    ac: {
        titel: "Vertiefung A/C",
        kurse: [
            {
                bild: "../assets/images/ac1.jpg",
                tags: ["Medien", "Projekt"],
                name: "Interaktive Systeme",
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
            }
        ]
    },

    bc: {
        titel: "Vertiefung B/C",
        kurse: [
            {
                bild: "../assets/images/bc1.jpg",
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
