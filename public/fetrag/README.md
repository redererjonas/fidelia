# Festgeldvertrag - Montante GmbH

## 📋 Projektübersicht

Ein professionelles, vollständig digitales Festgeldvertrag-System für Montante GmbH. Diese Webanwendung ermöglicht es, Festgeldverträge digital auszufüllen, zu bearbeiten, zu speichern und zu drucken.

## ✨ Hauptfunktionen

### 1. **Digitale Formularausfüllung**
- Alle Felder sind direkt im Browser editierbar
- Automatische Validierung der Eingaben
- Intelligente Datumsbeschränkungen (max. 10 Bankarbeitstage)
- Automatische Synchronisierung der Vertragsnummer auf allen Seiten

### 2. **Digitale Unterschrift**
- Canvas-basierte Unterschriftsfelder
- Touch-Unterstützung für Tablets und Smartphones
- Löschfunktion für jede Unterschrift

### 3. **Datenverwaltung**
- Automatische Speicherung (Auto-Save) nach 2 Sekunden
- LocalStorage-basierte Datenpersistenz
- Formular zurücksetzen Funktion
- Beispieldaten-Funktion zum Testen

### 4. **Druck & Export**
- Optimiert für A4-Druck
- PDF-Export über Druckfunktion
- Perfekte Seitenumbrüche
- Professionelles Drucklayout

### 5. **Benutzerfreundliche Navigation**
- Seitenweise Navigation (4 Seiten)
- Kontrollpanel mit allen wichtigen Funktionen
- Responsive Design für verschiedene Bildschirmgrößen

## 🚀 Installation & Nutzung

### Lokale Nutzung:
1. Öffnen Sie die `index.html` Datei in einem modernen Browser (Chrome, Firefox, Safari, Edge)
2. Das System ist sofort einsatzbereit

### Server-Deployment:
Laden Sie alle Dateien auf Ihren Webserver:
- `index.html`
- `styles.css`
- `script.js`
- `print.css`
- `montante_white.svg`

## 📁 Dateistruktur

```
festgeldvertrag/
│
├── index.html          # Hauptdokument mit allen 4 Seiten
├── styles.css          # Hauptstylesheet für Bildschirmansicht
├── script.js           # JavaScript für Interaktivität
├── print.css           # Spezielle Druckstile
├── montante_white.svg  # Firmenlogo
└── README.md          # Diese Datei
```

## 🎯 Funktionen im Detail

### Kontrollpanel-Funktionen:

1. **📄 Yazdır (Drucken)**
   - Öffnet den Druckdialog
   - Alle 4 Seiten werden gedruckt
   - Optimiert für A4-Format

2. **💾 PDF Olarak Kaydet (Als PDF speichern)**
   - Speichert das Dokument als PDF
   - Nutzt die Browser-Druckfunktion
   - Wählen Sie "Als PDF speichern" im Druckdialog

3. **🔄 Formu Sıfırla (Formular zurücksetzen)**
   - Löscht alle eingegebenen Daten
   - Setzt Unterschriften zurück
   - Bestätigung erforderlich

4. **📝 Örnek Veri Doldur (Beispieldaten einfügen)**
   - Fügt Testdaten ein
   - Hilfreich für Tests und Demonstrationen

5. **✅ Formu Doğrula (Formular validieren)**
   - Überprüft alle Pflichtfelder
   - Zeigt fehlende oder fehlerhafte Eingaben
   - Bestätigt vollständige Formulare

## 🔒 Sicherheit & Datenschutz

- **Lokale Speicherung:** Alle Daten werden nur im Browser (LocalStorage) gespeichert
- **Keine Serverübertragung:** Die Anwendung funktioniert vollständig offline
- **Verschlüsselte Übertragung:** Bei Server-Deployment HTTPS verwenden

## 📝 Pflichtfelder

### Seite 1:
- Vertragsnummer
- Alle Checklistenpunkte (informativ)

### Seite 2:
- Kontotyp-Auswahl
- Mindestens 1 Kontoinhaber (Persönliche Daten)
- Festgeldanlage-Details:
  - Laufzeit (3-60 Monate)
  - Zinssatz
  - Anlagesumme (min. 10.000 EUR)
  - Bank
  - Laufzeitbeginn
- Unterschrift(en)

### Seite 3:
- Bestätigung der Bedingungen
- Unterschrift(en)

### Seite 4:
- Nur informativ (Verbraucherinformationen)

## 🌐 Browser-Kompatibilität

- ✅ Chrome (Version 90+)
- ✅ Firefox (Version 88+)
- ✅ Safari (Version 14+)
- ✅ Edge (Version 90+)
- ⚠️ Internet Explorer wird NICHT unterstützt

## 📱 Mobile Unterstützung

- Responsive Design für Tablets und Smartphones
- Touch-Unterstützung für Unterschriften
- Optimierte Navigation für kleine Bildschirme

## 🛠️ Technische Details

### Verwendete Technologien:
- **HTML5:** Semantische Struktur
- **CSS3:** Modernes Styling mit Grid und Flexbox
- **JavaScript (ES6+):** Vanilla JS ohne Abhängigkeiten
- **LocalStorage API:** Datenpersistenz
- **Canvas API:** Digitale Unterschriften

### Besondere Features:
- Auto-Save nach 2 Sekunden Inaktivität
- Echtzeit-Validierung
- Intelligente Datumsbeschränkungen
- Synchronisierte Vertragsnummern
- Druckoptimierung mit CSS @media print

## 📞 Support & Kontakt

**Montante GmbH**
- Adresse: Taunustor 1, 60310 Frankfurt, Deutschland
- E-Mail: info@montante-finance24.eu
- Tel: +49 30 544480513 / +49 30 544480514
- Web: www.montante-finance24.eu

## ⚖️ Rechtliche Hinweise

Dieses System ist für die digitale Erfassung von Festgeldverträgen konzipiert. Die rechtliche Gültigkeit der digital erfassten Verträge sollte mit Ihrer Rechtsabteilung abgestimmt werden.

## 🔄 Updates & Wartung

### Version 1.0 (2026)
- Initiale Version mit allen Grundfunktionen
- 4-seitiges Vertragsformular
- Digitale Unterschriften
- Auto-Save Funktion
- Druckoptimierung

---

**© 2026 Montante GmbH - Alle Rechte vorbehalten**