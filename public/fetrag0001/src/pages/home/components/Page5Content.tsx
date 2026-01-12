import EditableText from '../../../components/ui/EditableText';

interface Page5ContentProps {
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export default function Page5Content({ formData, onInputChange }: Page5ContentProps) {
  const defaults = {
    p4Section7Title: '7. Anlagebetrag',
    p4Section7Text: 'Der Mindestanlagebetrag beträgt 20.000,00 Euro. Der Anlagebetrag muss direkt auf den Namen des Anlegers lautenden Geldanlagen darf 250.000,00 Euro nicht übersteigen ("Anlagehöchstbetrag"). In Ausnahmefällen kann ein Anlagehöchstbetrag zu einem gesondert zu vereinbarenden Betrag akzeptiert werden. Der Anleger ist verpflichtet, die Herkunft des Anlagebetrages darzulegen und zu erklären, aus welchen Quellen er den Anlagebetrag bezogen hat.',
    p4Section8Title: '8. Preise',
    p4Section8Text: 'Der Anlagevertrag ist kostenfrei.',
    p5Section9Title: '9. Schutz der Anlage - Einlagensicherungseinrichtung',
    p5Section9Text: 'Anlagen bei der Anlagebank unterliegen ausschließlich der Einlagensicherung, der die Anlagebank angehört.\n\nFür diese Anlage gilt die Einlagensicherung gemäß der Richtlinie 2014/49/EU des Europäischen Parlaments und des Rates vom 16. April 2014 über Einlagensicherungssysteme – Neufassung (Amtsblatt der Europäischen Union Nr. L 173 vom 12. Juni 2014). Geschützt sind pro Kunde und Kreditinstitut Einlagen bis zu einem Betrag von mindestens 100.000 Euro. Bei Gemeinschaftskonten – zum Beispiel bei Ehegatten – erhöht sich der Schutz auf 200.000 Euro. Zusätzlich sind 90 % der Verbindlichkeiten aus Wertpapiergeschäften bis zu einem Höchstbetrag von 500.000 Euro abgesichert.\n\nDie gesetzliche Einlagensicherung schützt Sicht-, Termin- und Spareinlagen (z. B. Guthaben auf Girokonten, Sparkonten, Tagesgeldkonten und Festgeldkonten). Der Einlagenschutz umfasst neben sämtlichen Einlagearten auch auf den Namen lautende Sparbriefe sowie Namensschuldverschreibungen.',
    p5Section10Title: '(10) Widerrufsbelehrung',
    p5Section10Subtitle: 'Widerrufsbelehrung bei außerhalb von Geschäftsräumen oder im Fernabsatz geschlossenen Verträgen über Finanzdienstleistungen',
    p5Section10Intro: 'Nach Unterzeichnung des Antrages gilt die folgende Widerrufsbelehrung:',
    p5WiderrufsrechtTitle: 'Widerrufsrecht:',
    p5WiderrufsrechtText: 'Sie können Ihre Vertragserklärung innerhalb von 14 Tagen ohne Angabe von Gründen mittels einer eindeutigen Erklärung widerrufen. Die Frist beginnt nach Erhalt dieser Belehrung auf einem dauerhaften Datenträger, jedoch nicht vor Vertragsschluss und auch nicht vor Erfüllung unserer Informationspflichten gemäß Artikel 246b § 2 Abs. 1 in Verbindung mit Artikel 246b § 1 Abs. 1 EGBGB.\n\nZur Wahrung der Widerrufsfrist genügt die rechtzeitige Absendung des Widerrufs, sofern die Erklärung per E-Mail erfolgt.\n\nDer Widerruf ist zu richten an die E-Mail-Adresse: info@solas-anlagen.de',
    p5WiderrufsfolgenTitle: 'Widerrufsfolgen:',
    p5WiderrufsfolgenText: 'Im Falle eines wirksamen Widerrufs sind die beiderseits empfangenen Leistungen zurück zu gewähren.\n\nSie sind zur Zahlung eines Wertersatzes für die bis zum Widerruf erbrachte Dienstleistung verpflichtet, wenn Sie vor Abgabe Ihrer Vertragserklärung auf diese Rechtsfolge hingewiesen wurden und ausdrücklich zugestimmt haben, dass wir vor Ablauf der Widerrufsfrist mit der Ausführung der Dienstleistung beginnen. Dies kann dazu führen, dass Sie die vertraglichen Zahlungsverpflichtungen für den Zeitraum bis zum Widerruf dennoch erfüllen müssen. Ihr Widerrufsrecht erlischt vorzeitig, wenn der Vertrag auf Ihren ausdrücklichen Wunsch hin von beiden Seiten vollständig erfüllt wurde, bevor Sie Ihr Widerrufsrecht ausgeübt haben.\n\nVerpflichtungen zur Erstattung von Zahlungen müssen innerhalb von 30 Tagen erfüllt werden. Die Frist beginnt für Sie mit der Absendung Ihrer Widerrufserklärung, für uns mit deren Empfang.',
    p5BesondereHinweiseTitle: 'Besondere Hinweise:',
    p5BesondereHinweiseText: 'Bei Widerruf dieses Vertrages sind Sie auch an einen mit diesem Vertrag zusammenhängenden Vertrag nicht mehr gebunden, wenn der zusammenhängende Vertrag eine Leistung betrifft, die von uns oder einem Dritten auf Grundlage einer Vereinbarung zwischen uns und dem Dritten erbracht wird.',
    p5SofortigeTitle: 'Besonderer Hinweis zur sofortigen Vertragsausführung:',
    p5SofortigeText: 'Die Bank wird unmittelbar nach Annahme des Vertrages und noch vor Ablauf der Widerrufsfrist mit der Ausführung dieses Vertrages sowie der auf dessen Grundlage abgeschlossenen weiteren Verträge beginnen, sofern der Kunde hierzu seine ausdrückliche Zustimmung erteilt hat. Diese ausdrückliche Zustimmung wird von der Bank eingeholt.',
    p5Section11Title: '(11) ZUSATZBESTIMMUNGEN',
    p5Section11Text: 'Bei Änderung der Daten, die als Grundlage für den Vertrag dienen, ist der Anleger verpflichtet, unverzüglich schriftlich zu benachrichtigen und eine aktuelle bzw. gültige Dokumentation zur Verfügung zu stellen.',
    p5Signature1Place: '',
    p5Signature1Date: '',
    p5Signature2Place: '',
    p5Signature2Date: '',
    p5SignatureAcceptPlace: '',
    p5SignatureAcceptDate: '',
    p5_sig_bg_text: 'Unterschrift',
    p5_sig1_title: 'Unterschrift Anleger I',
    p5_sig2_title: 'Unterschrift Anleger II',
    p5_sig_accept_title: 'Unterschrift Annahme',
    lbl_sig_place: 'Ort:',
    lbl_sig_date: 'Datum:',
  };

  const getValue = (field: string) => formData[field] ?? defaults[field as keyof typeof defaults] ?? '';

  return (
    <div className="text-[9px] leading-relaxed text-gray-800 flex flex-col h-full">
      <div className="grid grid-cols-2 gap-8 flex-1">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Section 7 */}
          <div className="bg-gray-50 p-3 rounded border border-gray-100">
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-2 uppercase tracking-wider border-b border-gray-200 pb-1">
              <EditableText value={getValue('p4Section7Title')} defaultValue={defaults.p4Section7Title} onChange={(v) => onInputChange('p4Section7Title', v)} />
            </h3>
            <p className="text-justify text-[9px] leading-snug">
              <EditableText value={getValue('p4Section7Text')} defaultValue={defaults.p4Section7Text} onChange={(v) => onInputChange('p4Section7Text', v)} multiline />
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-gray-50 p-3 rounded border border-gray-100">
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-2 uppercase tracking-wider border-b border-gray-200 pb-1">
              <EditableText value={getValue('p4Section8Title')} defaultValue={defaults.p4Section8Title} onChange={(v) => onInputChange('p4Section8Title', v)} />
            </h3>
            <p className="text-justify text-[9px] leading-snug">
              <EditableText value={getValue('p4Section8Text')} defaultValue={defaults.p4Section8Text} onChange={(v) => onInputChange('p4Section8Text', v)} multiline />
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-gray-50 p-3 rounded border border-gray-100">
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-2 uppercase tracking-wider border-b border-gray-200 pb-1">
              <EditableText value={getValue('p5Section9Title')} defaultValue={defaults.p5Section9Title} onChange={(v) => onInputChange('p5Section9Title', v)} />
            </h3>
            <p className="text-justify whitespace-pre-line text-[9px] leading-snug">
              <EditableText value={getValue('p5Section9Text')} defaultValue={defaults.p5Section9Text} onChange={(v) => onInputChange('p5Section9Text', v)} multiline />
            </p>
          </div>

          {/* Section 11 */}
          <div className="bg-gray-50 p-3 rounded border border-gray-100">
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-2 uppercase tracking-wider border-b border-gray-200 pb-1">
              <EditableText value={getValue('p5Section11Title')} defaultValue={defaults.p5Section11Title} onChange={(v) => onInputChange('p5Section11Title', v)} />
            </h3>
            <p className="text-justify text-[9px] leading-snug">
              <EditableText value={getValue('p5Section11Text')} defaultValue={defaults.p5Section11Text} onChange={(v) => onInputChange('p5Section11Text', v)} multiline />
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Section 10 */}
          <div className="border border-gray-200 rounded p-4 shadow-sm bg-white">
            <h3 className="font-bold text-[10px] text-gray-900 mb-1 uppercase tracking-wide text-center">
              <EditableText value={getValue('p5Section10Title')} defaultValue={defaults.p5Section10Title} onChange={(v) => onInputChange('p5Section10Title', v)} />
            </h3>
            <p className="text-[8px] italic text-gray-500 mb-3 text-center border-b border-gray-100 pb-2">
              <EditableText value={getValue('p5Section10Subtitle')} defaultValue={defaults.p5Section10Subtitle} onChange={(v) => onInputChange('p5Section10Subtitle', v)} />
            </p>
            <p className="mb-3 font-medium text-[9px]">
              <EditableText value={getValue('p5Section10Intro')} defaultValue={defaults.p5Section10Intro} onChange={(v) => onInputChange('p5Section10Intro', v)} />
            </p>

            {/* Widerrufsrecht */}
            <div className="mb-3">
              <h4 className="font-bold text-[9px] text-gray-800 mb-1">
                <EditableText value={getValue('p5WiderrufsrechtTitle')} defaultValue={defaults.p5WiderrufsrechtTitle} onChange={(v) => onInputChange('p5WiderrufsrechtTitle', v)} />
              </h4>
              <p className="text-justify whitespace-pre-line text-[9px] leading-snug text-gray-600">
                <EditableText value={getValue('p5WiderrufsrechtText')} defaultValue={defaults.p5WiderrufsrechtText} onChange={(v) => onInputChange('p5WiderrufsrechtText', v)} multiline />
              </p>
            </div>

            {/* Widerrufsfolgen */}
            <div className="mb-3">
              <h4 className="font-bold text-[9px] text-gray-800 mb-1">
                <EditableText value={getValue('p5WiderrufsfolgenTitle')} defaultValue={defaults.p5WiderrufsfolgenTitle} onChange={(v) => onInputChange('p5WiderrufsfolgenTitle', v)} />
              </h4>
              <p className="text-justify whitespace-pre-line text-[9px] leading-snug text-gray-600">
                <EditableText value={getValue('p5WiderrufsfolgenText')} defaultValue={defaults.p5WiderrufsfolgenText} onChange={(v) => onInputChange('p5WiderrufsfolgenText', v)} multiline />
              </p>
            </div>

            {/* Besondere Hinweise */}
            <div className="mb-3">
              <h4 className="font-bold text-[9px] text-gray-800 mb-1">
                <EditableText value={getValue('p5BesondereHinweiseTitle')} defaultValue={defaults.p5BesondereHinweiseTitle} onChange={(v) => onInputChange('p5BesondereHinweiseTitle', v)} />
              </h4>
              <p className="text-justify text-[9px] leading-snug text-gray-600">
                <EditableText value={getValue('p5BesondereHinweiseText')} defaultValue={defaults.p5BesondereHinweiseText} onChange={(v) => onInputChange('p5BesondereHinweiseText', v)} multiline />
              </p>
            </div>

            {/* Sofortige */}
            <div>
              <h4 className="font-bold text-[9px] text-gray-800 mb-1">
                <EditableText value={getValue('p5SofortigeTitle')} defaultValue={defaults.p5SofortigeTitle} onChange={(v) => onInputChange('p5SofortigeTitle', v)} />
              </h4>
              <p className="text-justify text-[9px] leading-snug text-gray-600">
                <EditableText value={getValue('p5SofortigeText')} defaultValue={defaults.p5SofortigeText} onChange={(v) => onInputChange('p5SofortigeText', v)} multiline />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Section */}
      <div className="mt-8 pt-6 border-t-2 border-gray-800">
        <div className="grid grid-cols-3 gap-8">
          {/* Anleger I */}
          <div className="text-center">
            <div className="h-10 border-b border-gray-900 mb-2 relative">
               <span className="absolute bottom-1 left-0 right-0 text-gray-300 text-[30px] font-signature opacity-30 select-none">
                 <EditableText value={getValue('p5_sig_bg_text')} defaultValue={defaults.p5_sig_bg_text} onChange={(v) => onInputChange('p5_sig_bg_text', v)} />
               </span>
            </div>
            <p className="font-bold text-[9px] text-gray-900 mb-3 uppercase tracking-wider">
               <EditableText value={getValue('p5_sig1_title')} defaultValue={defaults.p5_sig1_title} onChange={(v) => onInputChange('p5_sig1_title', v)} />
            </p>
            <div className="flex gap-4 text-[8px] justify-center">
              <div>
                <span className="text-gray-500 mr-1"><EditableText value={getValue('lbl_sig_place')} defaultValue={defaults.lbl_sig_place} onChange={(v) => onInputChange('lbl_sig_place', v)} /></span>
                <EditableText
                  value={getValue('p5Signature1Place')}
                  defaultValue={defaults.p5Signature1Place}
                  onChange={(v) => onInputChange('p5Signature1Place', v)}
                  className="border-b border-dotted border-gray-400 min-w-[60px] inline-block text-center"
                />
              </div>
              <div>
                <span className="text-gray-500 mr-1"><EditableText value={getValue('lbl_sig_date')} defaultValue={defaults.lbl_sig_date} onChange={(v) => onInputChange('lbl_sig_date', v)} /></span>
                <EditableText
                  value={getValue('p5Signature1Date')}
                  defaultValue={defaults.p5Signature1Date}
                  onChange={(v) => onInputChange('p5Signature1Date', v)}
                  className="border-b border-dotted border-gray-400 min-w-[60px] inline-block text-center"
                />
              </div>
            </div>
          </div>

          {/* Anleger II */}
          <div className="text-center">
            <div className="h-10 border-b border-gray-900 mb-2 relative">
               <span className="absolute bottom-1 left-0 right-0 text-gray-300 text-[30px] font-signature opacity-30 select-none">
                  <EditableText value={getValue('p5_sig_bg_text')} defaultValue={defaults.p5_sig_bg_text} onChange={(v) => onInputChange('p5_sig_bg_text', v)} />
               </span>
            </div>
            <p className="font-bold text-[9px] text-gray-900 mb-3 uppercase tracking-wider">
               <EditableText value={getValue('p5_sig2_title')} defaultValue={defaults.p5_sig2_title} onChange={(v) => onInputChange('p5_sig2_title', v)} />
            </p>
            <div className="flex gap-4 text-[8px] justify-center">
              <div>
                <span className="text-gray-500 mr-1"><EditableText value={getValue('lbl_sig_place')} defaultValue={defaults.lbl_sig_place} onChange={(v) => onInputChange('lbl_sig_place', v)} /></span>
                <EditableText
                  value={getValue('p5Signature2Place')}
                  defaultValue={defaults.p5Signature2Place}
                  onChange={(v) => onInputChange('p5Signature2Place', v)}
                  className="border-b border-dotted border-gray-400 min-w-[60px] inline-block text-center"
                />
              </div>
              <div>
                <span className="text-gray-500 mr-1"><EditableText value={getValue('lbl_sig_date')} defaultValue={defaults.lbl_sig_date} onChange={(v) => onInputChange('lbl_sig_date', v)} /></span>
                <EditableText
                  value={getValue('p5Signature2Date')}
                  defaultValue={defaults.p5Signature2Date}
                  onChange={(v) => onInputChange('p5Signature2Date', v)}
                  className="border-b border-dotted border-gray-400 min-w-[60px] inline-block text-center"
                />
              </div>
            </div>
          </div>

          {/* Annahme */}
          <div className="text-center">
            <div className="h-10 border-b border-gray-900 mb-2 relative">
                <span className="absolute bottom-1 left-0 right-0 text-gray-300 text-[30px] font-signature opacity-30 select-none">
                   <EditableText value={getValue('p5_sig_bg_text')} defaultValue={defaults.p5_sig_bg_text} onChange={(v) => onInputChange('p5_sig_bg_text', v)} />
                </span>
            </div>
            <p className="font-bold text-[9px] text-gray-900 mb-3 uppercase tracking-wider">
               <EditableText value={getValue('p5_sig_accept_title')} defaultValue={defaults.p5_sig_accept_title} onChange={(v) => onInputChange('p5_sig_accept_title', v)} />
            </p>
            <div className="flex gap-4 text-[8px] justify-center">
              <div>
                <span className="text-gray-500 mr-1"><EditableText value={getValue('lbl_sig_place')} defaultValue={defaults.lbl_sig_place} onChange={(v) => onInputChange('lbl_sig_place', v)} /></span>
                <EditableText
                  value={getValue('p5SignatureAcceptPlace')}
                  defaultValue={defaults.p5SignatureAcceptPlace}
                  onChange={(v) => onInputChange('p5SignatureAcceptPlace', v)}
                  className="border-b border-dotted border-gray-400 min-w-[60px] inline-block text-center"
                />
              </div>
              <div>
                <span className="text-gray-500 mr-1"><EditableText value={getValue('lbl_sig_date')} defaultValue={defaults.lbl_sig_date} onChange={(v) => onInputChange('lbl_sig_date', v)} /></span>
                <EditableText
                  value={getValue('p5SignatureAcceptDate')}
                  defaultValue={defaults.p5SignatureAcceptDate}
                  onChange={(v) => onInputChange('p5SignatureAcceptDate', v)}
                  className="border-b border-dotted border-gray-400 min-w-[60px] inline-block text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
