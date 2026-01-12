import { useState } from 'react';

export default function BusinessConditions() {
  const [title, setTitle] = useState('Geschäftsbedingungen für Festgeldanlagen');
  const [section1Title, setSection1Title] = useState('1. Festgeld');
  const [section1Content, setSection1Content] = useState('Das Festgeld dient der Anlage eines festen Anlagebetrages über eine fest vereinbarte Laufzeit mit einem festen Zinssatz. Bei dem Festgeld unterliegen sowohl die Berliner Volksbank eG und die Solas Capital GmbH handelnd als eine feste Terminlage, bei dem der Anleger einen festen Zinssatz für die vereinbarte Laufzeit erhält. Die Festgeldverträge dürfen ausschließlich auf eigene Verantwortung abgeschlossen werden, nicht im Auftrag oder in Vertretung eines Dritten und/oder im Verlauf der Geschäftsbeziehung für Dritte genutzt werden.');
  
  const [section2Title, setSection2Title] = useState('2. Zustandekommen des Vertrages');
  const [section2Content, setSection2Content] = useState('Der Vertrag über das Festgeld der Berliner Volksbank eG und der Solas Capital GmbH kommt erst durch Annahme des Antrages nach ordnungsgemäßer eingereichter Antrag des Anlegers nach erfolgreicher durchgeführter Antragserfassung ("Legitimation") zustande. Der Anleger hat hierzu im Voraus zur Legitimation die Kopie des Ausweises zu senden. Nach erfolgreicher Identifikationsverfahren bekommt der Anleger den Antrag zu dem Festgeld zugesandt. Festgeldverträge können auch für Minderjährige eröffnet werden. In diesem Fall müssen sich sowohl der Minderjährige als auch der oder die gesetzlichen Vertreter legitimieren. Bis zur Vollendung des 16. Lebensjahres ist hierbei für den Minderjährigen die Vorlage seiner Geburtsurkunde ausreichend. Mit Vollendung des 18. Lebensjahres wird der Minderjährigen-Festgeldvertrag zu einem Einzelvertrag auf den Namen des ursprünglich Minderjährigen umgewandelt. Dies setzt eine erneute Legitimation voraus. Nach Gutschrift des Einzahlungsbetrages wird die Gutschrift schriftlich bestätigt. Die Ablehnung einer Festgeldanlage ohne Angabe von Gründen ist möglich. In diesem Fall ist der Einzahlungsbetrag unverzüglich an den Auftraggeber zurückzuleiten.');
  
  const [section3Title, setSection3Title] = useState('3. Laufzeit und Verzinsung');
  const [section3Content, setSection3Content] = useState('Der Zinssatz ist für die vereinbarte Laufzeit fest. Laufzeit und Verzinsung werden mit der Gutschrift des Anlagebetrages auf dem Konto. Die Laufzeit des Festgeldvertrages bestimmt sich nach der jeweils mit dem Anleger vereinbarten Laufzeit. Eine hiervon abweichende Verlängerung kann der Anleger schriftlich beantragen, wobei die Verlängerung des Festgeldvertrages erfolgt nach Annahme des Verlängerungsantrags durch die Berliner Volksbank eG und die Solas Capital GmbH. Bei Zahlungen maßgebend ist der Eingang bei der Berliner Volksbank eG oder bei der Solas Capital GmbH. Maßgeblich für das Zinsangebot ist der bei Datum der Kundensignatur bei der Berliner Volksbank eG und der Solas Capital GmbH gültige Zinssatz für Festgeldanlagen. Die Verzinsung endet mit der vereinbarten Laufzeit, also am Fälligkeitstag. Die Erhöhung des Anlagebetrages ist während der Laufzeit nicht möglich.');
  
  const [section4Title, setSection4Title] = useState('4. Vertragsauflösung');
  const [section4Content, setSection4Content] = useState('Die Vertragsauflösung erfolgt durch Ablauf der vereinbarten Laufzeit oder nach außerordentlicher Kündigung aus wichtigem Grund in Textform. Die ordentliche Kündigung während der Laufzeit ist ausgeschlossen. Der Guthabenbetrag wird bei Auflösung auf das angegebene Konto des Anlegers überwiesen.');
  
  const [section5Title, setSection5Title] = useState('5. Steuern und Abgaben');
  const [section5Content, setSection5Content] = useState('Kapitalerträge sind steuerpflichtig. Gemäß den jeweils geltenden gesetzlichen Regelungen führt die Bank den Steuerabzug auf Kapitalerträge (Kapitalertragsteuer sowie ggf. Kirchensteuer) und den Abzug des Solidaritätszuschlags auf die Kapitalerträge an das Finanzamt ab. Eine gegebenenfalls erforderliche ausländische Steuer auf die Bruttozinsen, welche ebenfalls nicht einbehalten wird. Durch Unterschreiben und Übersenden des Antrags auf Festgeldanlage bestätigt der Anleger, dass er in voller Kenntnis der auf ihn anwendbaren steuerlichen Regelungen ist. Der Anleger wird seine Steuerpflichten selbst im Rahmen seiner Steuererklärung vornehmen.');
  
  const [section6Title, setSection6Title] = useState('6. Währung');
  const [section6Content, setSection6Content] = useState('Der Festgeldvertrag wird in Euro geführt.');
  
  const [section7Title, setSection7Title] = useState('7. Anlagebetrag');
  const [section7Content, setSection7Content] = useState('Der Mindestanlagebetrag beträgt 20.000,00 Euro. Der Anlagebetrag muss direkt auf den Namen des Anlegers lautenden Geldanlagen darf 250.000,00 Euro nicht übersteigen ("Anlagehöchstbetrag"). In Ausnahmefällen kann ein Anlagehöchstbetrag zu einem gesondert zu vereinbarenden Betrag akzeptiert werden. Der Anleger ist verpflichtet, die Herkunft des Anlagebetrages darzulegen und zu erklären, aus welchen Quellen er den Anlagebetrag bezogen hat.');

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingSection1Title, setIsEditingSection1Title] = useState(false);
  const [isEditingSection1Content, setIsEditingSection1Content] = useState(false);
  const [isEditingSection2Title, setIsEditingSection2Title] = useState(false);
  const [isEditingSection2Content, setIsEditingSection2Content] = useState(false);
  const [isEditingSection3Title, setIsEditingSection3Title] = useState(false);
  const [isEditingSection3Content, setIsEditingSection3Content] = useState(false);
  const [isEditingSection4Title, setIsEditingSection4Title] = useState(false);
  const [isEditingSection4Content, setIsEditingSection4Content] = useState(false);
  const [isEditingSection5Title, setIsEditingSection5Title] = useState(false);
  const [isEditingSection5Content, setIsEditingSection5Content] = useState(false);
  const [isEditingSection6Title, setIsEditingSection6Title] = useState(false);
  const [isEditingSection6Content, setIsEditingSection6Content] = useState(false);
  const [isEditingSection7Title, setIsEditingSection7Title] = useState(false);
  const [isEditingSection7Content, setIsEditingSection7Content] = useState(false);

  return (
    <div className="space-y-3">
      <div className="text-center mb-3">
        {isEditingTitle ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => setIsEditingTitle(false)}
            className="w-full text-center border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[11px] font-bold"
            autoFocus
          />
        ) : (
          <h2 
            className="text-[11px] font-bold text-gray-900 cursor-pointer hover:bg-gray-50"
            onClick={() => setIsEditingTitle(true)}
          >
            {title}
          </h2>
        )}
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
        <div>
          {isEditingSection1Title ? (
            <input
              type="text"
              value={section1Title}
              onChange={(e) => setSection1Title(e.target.value)}
              onBlur={() => setIsEditingSection1Title(false)}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[10px] font-bold mb-1"
              autoFocus
            />
          ) : (
            <h3 
              className="text-[10px] font-bold text-gray-900 mb-1 cursor-pointer hover:bg-gray-50 border-b border-gray-300 pb-0.5"
              onClick={() => setIsEditingSection1Title(true)}
            >
              {section1Title}
            </h3>
          )}
          {isEditingSection1Content ? (
            <textarea
              value={section1Content}
              onChange={(e) => setSection1Content(e.target.value)}
              onBlur={() => setIsEditingSection1Content(false)}
              className="w-full border border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent p-1 rounded text-[9px]"
              rows={4}
              autoFocus
            />
          ) : (
            <p 
              className="text-[9px] text-gray-700 leading-snug cursor-pointer hover:bg-gray-50 px-1"
              onClick={() => setIsEditingSection1Content(true)}
            >
              {section1Content}
            </p>
          )}
        </div>

        <div>
          {isEditingSection2Title ? (
            <input
              type="text"
              value={section2Title}
              onChange={(e) => setSection2Title(e.target.value)}
              onBlur={() => setIsEditingSection2Title(false)}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[10px] font-bold mb-1"
              autoFocus
            />
          ) : (
            <h3 
              className="text-[10px] font-bold text-gray-900 mb-1 cursor-pointer hover:bg-gray-50 border-b border-gray-300 pb-0.5"
              onClick={() => setIsEditingSection2Title(true)}
            >
              {section2Title}
            </h3>
          )}
          {isEditingSection2Content ? (
            <textarea
              value={section2Content}
              onChange={(e) => setSection2Content(e.target.value)}
              onBlur={() => setIsEditingSection2Content(false)}
              className="w-full border border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent p-1 rounded text-[9px]"
              rows={4}
              autoFocus
            />
          ) : (
            <p 
              className="text-[9px] text-gray-700 leading-snug cursor-pointer hover:bg-gray-50 px-1"
              onClick={() => setIsEditingSection2Content(true)}
            >
              {section2Content}
            </p>
          )}
        </div>

        <div>
          {isEditingSection3Title ? (
            <input
              type="text"
              value={section3Title}
              onChange={(e) => setSection3Title(e.target.value)}
              onBlur={() => setIsEditingSection3Title(false)}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[10px] font-bold mb-1"
              autoFocus
            />
          ) : (
            <h3 
              className="text-[10px] font-bold text-gray-900 mb-1 cursor-pointer hover:bg-gray-50 border-b border-gray-300 pb-0.5"
              onClick={() => setIsEditingSection3Title(true)}
            >
              {section3Title}
            </h3>
          )}
          {isEditingSection3Content ? (
            <textarea
              value={section3Content}
              onChange={(e) => setSection3Content(e.target.value)}
              onBlur={() => setIsEditingSection3Content(false)}
              className="w-full border border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent p-1 rounded text-[9px]"
              rows={4}
              autoFocus
            />
          ) : (
            <p 
              className="text-[9px] text-gray-700 leading-snug cursor-pointer hover:bg-gray-50 px-1"
              onClick={() => setIsEditingSection3Content(true)}
            >
              {section3Content}
            </p>
          )}
        </div>

        <div>
          {isEditingSection4Title ? (
            <input
              type="text"
              value={section4Title}
              onChange={(e) => setSection4Title(e.target.value)}
              onBlur={() => setIsEditingSection4Title(false)}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[10px] font-bold mb-1"
              autoFocus
            />
          ) : (
            <h3 
              className="text-[10px] font-bold text-gray-900 mb-1 cursor-pointer hover:bg-gray-50 border-b border-gray-300 pb-0.5"
              onClick={() => setIsEditingSection4Title(true)}
            >
              {section4Title}
            </h3>
          )}
          {isEditingSection4Content ? (
            <textarea
              value={section4Content}
              onChange={(e) => setSection4Content(e.target.value)}
              onBlur={() => setIsEditingSection4Content(false)}
              className="w-full border border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent p-1 rounded text-[9px]"
              rows={4}
              autoFocus
            />
          ) : (
            <p 
              className="text-[9px] text-gray-700 leading-snug cursor-pointer hover:bg-gray-50 px-1"
              onClick={() => setIsEditingSection4Content(true)}
            >
              {section4Content}
            </p>
          )}
        </div>

        <div>
          {isEditingSection5Title ? (
            <input
              type="text"
              value={section5Title}
              onChange={(e) => setSection5Title(e.target.value)}
              onBlur={() => setIsEditingSection5Title(false)}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[10px] font-bold mb-1"
              autoFocus
            />
          ) : (
            <h3 
              className="text-[10px] font-bold text-gray-900 mb-1 cursor-pointer hover:bg-gray-50 border-b border-gray-300 pb-0.5"
              onClick={() => setIsEditingSection5Title(true)}
            >
              {section5Title}
            </h3>
          )}
          {isEditingSection5Content ? (
            <textarea
              value={section5Content}
              onChange={(e) => setSection5Content(e.target.value)}
              onBlur={() => setIsEditingSection5Content(false)}
              className="w-full border border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent p-1 rounded text-[9px]"
              rows={4}
              autoFocus
            />
          ) : (
            <p 
              className="text-[9px] text-gray-700 leading-snug cursor-pointer hover:bg-gray-50 px-1"
              onClick={() => setIsEditingSection5Content(true)}
            >
              {section5Content}
            </p>
          )}
        </div>

        <div>
          {isEditingSection6Title ? (
            <input
              type="text"
              value={section6Title}
              onChange={(e) => setSection6Title(e.target.value)}
              onBlur={() => setIsEditingSection6Title(false)}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[10px] font-bold mb-1"
              autoFocus
            />
          ) : (
            <h3 
              className="text-[10px] font-bold text-gray-900 mb-1 cursor-pointer hover:bg-gray-50 border-b border-gray-300 pb-0.5"
              onClick={() => setIsEditingSection6Title(true)}
            >
              {section6Title}
            </h3>
          )}
          {isEditingSection6Content ? (
            <textarea
              value={section6Content}
              onChange={(e) => setSection6Content(e.target.value)}
              onBlur={() => setIsEditingSection6Content(false)}
              className="w-full border border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent p-1 rounded text-[9px]"
              rows={2}
              autoFocus
            />
          ) : (
            <p 
              className="text-[9px] text-gray-700 leading-snug cursor-pointer hover:bg-gray-50 px-1"
              onClick={() => setIsEditingSection6Content(true)}
            >
              {section6Content}
            </p>
          )}
        </div>

        <div className="col-span-2">
          {isEditingSection7Title ? (
            <input
              type="text"
              value={section7Title}
              onChange={(e) => setSection7Title(e.target.value)}
              onBlur={() => setIsEditingSection7Title(false)}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[10px] font-bold mb-1"
              autoFocus
            />
          ) : (
            <h3 
              className="text-[10px] font-bold text-gray-900 mb-1 cursor-pointer hover:bg-gray-50 border-b border-gray-300 pb-0.5"
              onClick={() => setIsEditingSection7Title(true)}
            >
              {section7Title}
            </h3>
          )}
          {isEditingSection7Content ? (
            <textarea
              value={section7Content}
              onChange={(e) => setSection7Content(e.target.value)}
              onBlur={() => setIsEditingSection7Content(false)}
              className="w-full border border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent p-1 rounded text-[9px]"
              rows={2}
              autoFocus
            />
          ) : (
            <p 
              className="text-[9px] text-gray-700 leading-snug cursor-pointer hover:bg-gray-50 px-1"
              onClick={() => setIsEditingSection7Content(true)}
            >
              {section7Content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
