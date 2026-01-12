import EditableText from '../../../components/ui/EditableText';

interface Page3ContentProps {
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export default function Page3Content({ formData, onInputChange }: Page3ContentProps) {
  const defaults = {
    p3Title: 'Vorvertragliche Informationen bei außerhalb von Geschäftsräumen oder im Fernabsatz geschlossenen Verträgen über Finanzdienstleistungen',
    p3Stand: 'Stand: Januar 2025',
    p3BankName: 'Berliner Volksbank eG',
    p3BankAddress1: 'Schellingstraße 4',
    p3BankAddress2: '10785 Berlin',
    p3BankCountry: 'Deutschland',
    p3RegisterNum: 'VR 18457 B',
    p3Vorstand: 'Marija Kolak (Präsidentin)',
    p3PartnerName: 'Solas Capital GmbH',
    p3PartnerAddress1: 'Mühldorfstrasse 8',
    p3PartnerAddress2: '81671 München',
    p3PartnerCountry: 'Deutschland',
    p3Vertragssprache: 'Maßgebliche Sprache für dieses Vertragsverhältnis und die Kommunikation mit dem Kunden während der Laufzeit des Vertrages ist Deutsch.',
    p3Rechtsordnung: 'Für diesen Vertrag gilt die europäische Einlagensicherung; Rechtsordnung und Gerichtsstand richten sich nach dem Sitz der Bank.',
    p3Salvatorische: 'Sollten einzelne Bestimmungen dieses Vertrages ganz oder teilweise unwirksam und/oder undurchführbar sein oder werden, so sollen die übrigen Bestimmungen wirksam bleiben. Die Vertragsparteien verpflichten sich, unwirksame und/oder undurchführbare Bestimmungen durch solche Bestimmungen zu ersetzen, die dem beabsichtigten wirtschaftlichen Zweck am nächsten kommen.',
    p3_lbl_bank_name_title: 'Name und Anschrift der Bank',
    p3_lbl_register_title: 'Firmenbuchnummer',
    p3_lbl_register_prefix: 'Registernummer:',
    p3_lbl_vorstand_title: 'Gesetzlich Vertretungsberechtigte',
    p3_lbl_partner_title: 'In Kooperation mit',
    p3_lbl_partner_hq: 'Hauptsitz',
    p3_lbl_lang_title: 'Vertragssprache',
    p3_lbl_law_title: 'Rechtsordnung & Gerichtsstand',
    p3_lbl_salv_title: 'Salvatorische Klausel',
  };

  const getValue = (field: string) => formData[field] ?? defaults[field as keyof typeof defaults] ?? '';

  return (
    <div className="text-[9px] leading-relaxed text-gray-800">
      {/* Title */}
      <div className="text-center mb-4 border-b pb-2 border-gray-200">
        <h2 className="text-[11px] font-bold text-gray-900 uppercase tracking-wide">
          <EditableText
            value={getValue('p3Title')}
            defaultValue={defaults.p3Title}
            onChange={(v) => onInputChange('p3Title', v)}
          />
        </h2>
        <p className="text-[9px] text-gray-500 mt-1 font-medium">
          <EditableText
            value={getValue('p3Stand')}
            defaultValue={defaults.p3Stand}
            onChange={(v) => onInputChange('p3Stand', v)}
          />
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Bank Info */}
          <div className="bg-gray-50 p-2 rounded border border-gray-100">
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-1 uppercase tracking-wider border-b border-gray-200 pb-0.5">
               <EditableText value={getValue('p3_lbl_bank_name_title')} defaultValue={defaults.p3_lbl_bank_name_title} onChange={(val) => onInputChange('p3_lbl_bank_name_title', val)} />
            </h3>
            <div className="space-y-0.5">
              <div className="font-bold"><EditableText value={getValue('p3BankName')} defaultValue={defaults.p3BankName} onChange={(v) => onInputChange('p3BankName', v)} /></div>
              <div><EditableText value={getValue('p3BankAddress1')} defaultValue={defaults.p3BankAddress1} onChange={(v) => onInputChange('p3BankAddress1', v)} /></div>
              <div><EditableText value={getValue('p3BankAddress2')} defaultValue={defaults.p3BankAddress2} onChange={(v) => onInputChange('p3BankAddress2', v)} /></div>
              <div><EditableText value={getValue('p3BankCountry')} defaultValue={defaults.p3BankCountry} onChange={(v) => onInputChange('p3BankCountry', v)} /></div>
            </div>
          </div>

          {/* Register */}
          <div className="bg-gray-50 p-2 rounded border border-gray-100">
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-1 uppercase tracking-wider border-b border-gray-200 pb-0.5">
               <EditableText value={getValue('p3_lbl_register_title')} defaultValue={defaults.p3_lbl_register_title} onChange={(val) => onInputChange('p3_lbl_register_title', val)} />
            </h3>
            <p className="font-medium">
               <span className="mr-1"><EditableText value={getValue('p3_lbl_register_prefix')} defaultValue={defaults.p3_lbl_register_prefix} onChange={(val) => onInputChange('p3_lbl_register_prefix', val)} /></span>
               <span className="font-normal"><EditableText value={getValue('p3RegisterNum')} defaultValue={defaults.p3RegisterNum} onChange={(v) => onInputChange('p3RegisterNum', v)} /></span>
            </p>
          </div>

          {/* Vorstand */}
          <div className="bg-gray-50 p-2 rounded border border-gray-100">
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-1 uppercase tracking-wider border-b border-gray-200 pb-0.5">
               <EditableText value={getValue('p3_lbl_vorstand_title')} defaultValue={defaults.p3_lbl_vorstand_title} onChange={(val) => onInputChange('p3_lbl_vorstand_title', val)} />
            </h3>
            <p className="font-medium"><EditableText value={getValue('p3Vorstand')} defaultValue={defaults.p3Vorstand} onChange={(v) => onInputChange('p3Vorstand', v)} /></p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
           {/* Partner */}
           <div className="bg-gray-50 p-2 rounded border border-gray-100">
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-1 uppercase tracking-wider border-b border-gray-200 pb-0.5">
               <EditableText value={getValue('p3_lbl_partner_title')} defaultValue={defaults.p3_lbl_partner_title} onChange={(val) => onInputChange('p3_lbl_partner_title', val)} />
            </h3>
            <div className="space-y-0.5">
              <div className="font-bold"><EditableText value={getValue('p3PartnerName')} defaultValue={defaults.p3PartnerName} onChange={(v) => onInputChange('p3PartnerName', v)} /></div>
              <p className="text-[8px] text-gray-500 uppercase tracking-widest mt-1 mb-0.5">
                 <EditableText value={getValue('p3_lbl_partner_hq')} defaultValue={defaults.p3_lbl_partner_hq} onChange={(val) => onInputChange('p3_lbl_partner_hq', val)} />
              </p>
              <div><EditableText value={getValue('p3PartnerAddress1')} defaultValue={defaults.p3PartnerAddress1} onChange={(v) => onInputChange('p3PartnerAddress1', v)} /></div>
              <div><EditableText value={getValue('p3PartnerAddress2')} defaultValue={defaults.p3PartnerAddress2} onChange={(v) => onInputChange('p3PartnerAddress2', v)} /></div>
              <div><EditableText value={getValue('p3PartnerCountry')} defaultValue={defaults.p3PartnerCountry} onChange={(v) => onInputChange('p3PartnerCountry', v)} /></div>
            </div>
          </div>

          {/* Vertragssprache */}
          <div className="bg-gray-50 p-2 rounded border border-gray-100">
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-1 uppercase tracking-wider border-b border-gray-200 pb-0.5">
               <EditableText value={getValue('p3_lbl_lang_title')} defaultValue={defaults.p3_lbl_lang_title} onChange={(val) => onInputChange('p3_lbl_lang_title', val)} />
            </h3>
            <p className="text-[9px] text-justify leading-snug">
              <EditableText value={getValue('p3Vertragssprache')} defaultValue={defaults.p3Vertragssprache} onChange={(v) => onInputChange('p3Vertragssprache', v)} multiline />
            </p>
          </div>

          {/* Rechtsordnung */}
          <div className="bg-gray-50 p-2 rounded border border-gray-100">
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-1 uppercase tracking-wider border-b border-gray-200 pb-0.5">
               <EditableText value={getValue('p3_lbl_law_title')} defaultValue={defaults.p3_lbl_law_title} onChange={(val) => onInputChange('p3_lbl_law_title', val)} />
            </h3>
            <p className="text-[9px] text-justify leading-snug">
              <EditableText value={getValue('p3Rechtsordnung')} defaultValue={defaults.p3Rechtsordnung} onChange={(v) => onInputChange('p3Rechtsordnung', v)} multiline />
            </p>
          </div>

          {/* Salvatorische Klausel */}
          <div className="bg-gray-50 p-2 rounded border border-gray-100">
            <h3 className="font-bold text-[9px] text-[#E85D1F] mb-1 uppercase tracking-wider border-b border-gray-200 pb-0.5">
               <EditableText value={getValue('p3_lbl_salv_title')} defaultValue={defaults.p3_lbl_salv_title} onChange={(val) => onInputChange('p3_lbl_salv_title', val)} />
            </h3>
            <p className="text-[9px] text-justify leading-snug">
              <EditableText value={getValue('p3Salvatorische')} defaultValue={defaults.p3Salvatorische} onChange={(v) => onInputChange('p3Salvatorische', v)} multiline />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
