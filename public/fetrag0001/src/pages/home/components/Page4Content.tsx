import EditableText from '../../../components/ui/EditableText';

interface Page4ContentProps {
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export default function Page4Content({ formData, onInputChange }: Page4ContentProps) {
  const defaults = {
    p4_main_title: 'GESCHÄFTSBEDINGUNGEN FÜR DAS FESTGELD',
    p4Section1Title: '1. Festgeld',
    p4Section1Text: 'Das Festgeld dient der Anlage eines festen Anlagebetrages über eine fest vereinbarte Laufzeit mit einem festen Zinssatz. Bei dem Festgeld unterliegen sowohl die Berliner Volksbank eG und die Solas Capital GmbH handelnd als eine feste Terminlage, bei dem der Anleger einen festen Zinssatz für die vereinbarte Laufzeit erhält. Die Festgeldverträge dürfen ausschließlich auf eigene Verantwortung abgeschlossen werden, nicht im Auftrag oder in Vertretung eines Dritten und/oder im Verlauf der Geschäftsbeziehung für Dritte genutzt werden.',
    p4Section2Title: '2. Zustandekommen des Vertrages',
    p4Section2Text: 'Der Vertrag über das Festgeld der Berliner Volksbank eG und der Solas Capital GmbH kommt erst durch Annahme des Antrages nach ordnungsgemäßer eingereichter Antrag des Anlegers nach erfolgreicher durchgeführter Antragserfassung ("Legitimation") zustande.\n\nDer Anleger hat hierzu im Voraus zur Legitimation die Kopie des Ausweises zu senden. Nach erfolgreicher Identifikationsverfahren bekommt der Anleger den Antrag zu dem Festgeld zugesandt. Festgeldverträge können auch für Minderjährige eröffnet werden. In diesem Fall müssen sich sowohl der Minderjährige als auch der oder die gesetzlichen Vertreter legitimieren. Bis zur Vollendung des 16. Lebensjahres ist hierbei für den Minderjährigen die Vorlage seiner Geburtsurkunde ausreichend. Mit Vollendung des 18. Lebensjahres wird der Minderjährigen-Festgeldvertrag zu einem Einzelvertrag auf den Namen des ursprünglich Minderjährigen umgewandelt. Dies setzt eine erneute Legitimation voraus.\n\nNach Gutschrift des Einzahlungsbetrages wird die Gutschrift schriftlich bestätigt. Die Ablehnung einer Festgeldanlage ohne Angabe von Gründen ist möglich. In diesem Fall ist der Einzahlungsbetrag unverzüglich an den Auftraggeber zurückzuleiten.',
    p4Section3Title: '3. Laufzeit und Verzinsung',
    p4Section3Text: 'Der Zinssatz ist für die vereinbarte Laufzeit fest. Laufzeit und Verzinsung werden mit der Gutschrift des Anlagebetrages auf dem Konto. Die Laufzeit des Festgeldvertrages bestimmt sich nach der jeweils mit dem Anleger vereinbarten Laufzeit. Eine hiervon abweichende Verlängerung kann der Anleger schriftlich beantragen, wobei die Verlängerung des Festgeldvertrages erfolgt nach Annahme des Verlängerungsantrags durch die Berliner Volksbank eG und die Solas Capital GmbH.\n\nBei Zahlungen maßgebend ist der Eingang bei der Berliner Volksbank eG oder bei der Solas Capital GmbH. Maßgeblich für das Zinsangebot ist der bei Datum der Kundensignatur bei der Berliner Volksbank eG und der Solas Capital GmbH gültige Zinssatz für Festgeldanlagen. Die Verzinsung endet mit der vereinbarten Laufzeit, also am Fälligkeitstag. Die Erhöhung des Anlagebetrages ist während der Laufzeit nicht möglich.',
    p4Section4Title: '4. Vertragsauflösung',
    p4Section4Text: 'Die Vertragsauflösung erfolgt durch Ablauf der vereinbarten Laufzeit oder nach außerordentlicher Kündigung aus wichtigem Grund in Textform. Die ordentliche Kündigung während der Laufzeit ist ausgeschlossen. Der Guthabenbetrag wird bei Auflösung auf das angegebene Konto des Anlegers überwiesen.',
    p4Section5Title: '5. Steuern und Abgaben',
    p4Section5Text: 'Kapitalerträge sind steuerpflichtig. Gemäß den jeweils geltenden gesetzlichen Regelungen führt die Bank den Steuerabzug auf Kapitalerträge (Kapitalertragsteuer sowie ggf. Kirchensteuer) und den Abzug des Solidaritätszuschlags auf die Kapitalerträge an das Finanzamt ab. Eine gegebenenfalls erforderliche ausländische Steuer auf die Bruttozinsen, welche ebenfalls nicht einbehalten wird. Durch Unterschreiben und Übersenden des Antrags auf Festgeldanlage bestätigt der Anleger, dass er in voller Kenntnis der auf ihn anwendbaren steuerlichen Regelungen ist. Der Anleger wird seine Steuerpflichten selbst im Rahmen seiner Steuererklärung vornehmen.',
    p4Section6Title: '6. Währung',
    p4Section6Text: 'Der Festgeldvertrag wird in Euro geführt.',
  };

  const getValue = (field: string) => formData[field] ?? defaults[field as keyof typeof defaults] ?? '';

  return (
    <div className="text-[9px] leading-relaxed text-gray-800 border-t-2 border-[#E85D1F] pt-4 mt-4">
      <h2 className="text-[11px] font-bold text-center text-gray-900 mb-4 uppercase tracking-wide">
         <EditableText value={getValue('p4_main_title')} defaultValue={defaults.p4_main_title} onChange={(val) => onInputChange('p4_main_title', val)} />
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-3">
          {/* Section 1 */}
          <div>
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-1 uppercase tracking-wider">
              <EditableText value={getValue('p4Section1Title')} defaultValue={defaults.p4Section1Title} onChange={(v) => onInputChange('p4Section1Title', v)} />
            </h3>
            <p className="text-justify text-[9px] leading-snug">
              <EditableText value={getValue('p4Section1Text')} defaultValue={defaults.p4Section1Text} onChange={(v) => onInputChange('p4Section1Text', v)} multiline />
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-1 uppercase tracking-wider">
              <EditableText value={getValue('p4Section2Title')} defaultValue={defaults.p4Section2Title} onChange={(v) => onInputChange('p4Section2Title', v)} />
            </h3>
            <p className="text-justify whitespace-pre-line text-[9px] leading-snug">
              <EditableText value={getValue('p4Section2Text')} defaultValue={defaults.p4Section2Text} onChange={(v) => onInputChange('p4Section2Text', v)} multiline />
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          {/* Section 3 */}
          <div>
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-1 uppercase tracking-wider">
              <EditableText value={getValue('p4Section3Title')} defaultValue={defaults.p4Section3Title} onChange={(v) => onInputChange('p4Section3Title', v)} />
            </h3>
            <p className="text-justify whitespace-pre-line text-[9px] leading-snug">
              <EditableText value={getValue('p4Section3Text')} defaultValue={defaults.p4Section3Text} onChange={(v) => onInputChange('p4Section3Text', v)} multiline />
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-1 uppercase tracking-wider">
              <EditableText value={getValue('p4Section4Title')} defaultValue={defaults.p4Section4Title} onChange={(v) => onInputChange('p4Section4Title', v)} />
            </h3>
            <p className="text-justify text-[9px] leading-snug">
              <EditableText value={getValue('p4Section4Text')} defaultValue={defaults.p4Section4Text} onChange={(v) => onInputChange('p4Section4Text', v)} multiline />
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-1 uppercase tracking-wider">
              <EditableText value={getValue('p4Section5Title')} defaultValue={defaults.p4Section5Title} onChange={(v) => onInputChange('p4Section5Title', v)} />
            </h3>
            <p className="text-justify text-[9px] leading-snug">
              <EditableText value={getValue('p4Section5Text')} defaultValue={defaults.p4Section5Text} onChange={(v) => onInputChange('p4Section5Text', v)} multiline />
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-1 uppercase tracking-wider">
              <EditableText value={getValue('p4Section6Title')} defaultValue={defaults.p4Section6Title} onChange={(v) => onInputChange('p4Section6Title', v)} />
            </h3>
            <p className="text-justify text-[9px] leading-snug">
              <EditableText value={getValue('p4Section6Text')} defaultValue={defaults.p4Section6Text} onChange={(v) => onInputChange('p4Section6Text', v)} multiline />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
