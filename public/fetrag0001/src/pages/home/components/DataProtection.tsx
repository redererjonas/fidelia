import EditableText from '../../../components/ui/EditableText';

interface DataProtectionProps {
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export default function DataProtection({ formData, onInputChange }: DataProtectionProps) {
  const defaults = {
    lbl_dataprotection_title: 'Datenschutz und Einwilligungen',
    lbl_privacy1: 'Ich habe die Datenschutzerklärung der Berliner Volksbank eG zur Kenntnis genommen und stimme der Verarbeitung meiner personenbezogenen Daten zu.',
    lbl_privacy2: 'Ich bestätige, dass alle gemachten Angaben wahrheitsgemäß und vollständig sind.',
    lbl_privacy3: 'Ich habe die Allgemeinen Geschäftsbedingungen (AGB) und die Sonderbedingungen für Festgeldanlagen gelesen und akzeptiere diese.',
    lbl_signatures_title: 'Unterschriften',
    lbl_place_date: 'Ort, Datum:',
    lbl_sig_inv1: 'Unterschrift Anleger I:',
    lbl_sig_inv2: 'Unterschrift Anleger II (falls zutreffend):',
    lbl_notice_title: 'Hinweis:',
    lbl_notice_text: 'Dieser Antrag wird erst nach Prüfung durch die Berliner Volksbank eG wirksam. Sie erhalten eine schriftliche Bestätigung über die Eröffnung Ihrer Festgeldanlage. Die Einzahlung des Anlagebetrags erfolgt nach Erhalt der Kontoeröffnungsbestätigung.',
  };

  const getValue = (field: string) => formData[field] ?? defaults[field as keyof typeof defaults] ?? '';

  return (
    <div>
      <h3 className="text-sm font-bold text-gray-900 mb-3 pb-1 border-b-2 border-[#E85D1F]">
         <EditableText value={getValue('lbl_dataprotection_title')} defaultValue={defaults.lbl_dataprotection_title} onChange={(val) => onInputChange('lbl_dataprotection_title', val)} />
      </h3>
      
      <div className="space-y-3 text-[10px] text-gray-700 leading-snug">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="privacy1"
            className="mt-0.5 w-3.5 h-3.5 text-[#E85D1F] border-gray-300 rounded focus:ring-[#E85D1F] cursor-pointer"
          />
          <label htmlFor="privacy1" className="cursor-pointer">
             <EditableText value={getValue('lbl_privacy1')} defaultValue={defaults.lbl_privacy1} onChange={(val) => onInputChange('lbl_privacy1', val)} multiline />
          </label>
        </div>
        
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="privacy2"
            className="mt-0.5 w-3.5 h-3.5 text-[#E85D1F] border-gray-300 rounded focus:ring-[#E85D1F] cursor-pointer"
          />
          <label htmlFor="privacy2" className="cursor-pointer">
             <EditableText value={getValue('lbl_privacy2')} defaultValue={defaults.lbl_privacy2} onChange={(val) => onInputChange('lbl_privacy2', val)} multiline />
          </label>
        </div>
        
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="privacy3"
            className="mt-0.5 w-3.5 h-3.5 text-[#E85D1F] border-gray-300 rounded focus:ring-[#E85D1F] cursor-pointer"
          />
          <label htmlFor="privacy3" className="cursor-pointer">
             <EditableText value={getValue('lbl_privacy3')} defaultValue={defaults.lbl_privacy3} onChange={(val) => onInputChange('lbl_privacy3', val)} multiline />
          </label>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-200">
        <h4 className="text-[11px] font-semibold text-gray-800 mb-3">
           <EditableText value={getValue('lbl_signatures_title')} defaultValue={defaults.lbl_signatures_title} onChange={(val) => onInputChange('lbl_signatures_title', val)} />
        </h4>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-medium text-gray-700 mb-1">
               <EditableText value={getValue('lbl_place_date')} defaultValue={defaults.lbl_place_date} onChange={(val) => onInputChange('lbl_place_date', val)} />
            </label>
            <input
              type="text"
              className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
          <div>
            <label className="block text-[10px] font-medium text-gray-700 mb-1">
               <EditableText value={getValue('lbl_sig_inv1')} defaultValue={defaults.lbl_sig_inv1} onChange={(val) => onInputChange('lbl_sig_inv1', val)} />
            </label>
            <div className="w-full h-12 border-b-2 border-gray-400"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <label className="block text-[10px] font-medium text-gray-700 mb-1">
               <EditableText value={getValue('lbl_place_date')} defaultValue={defaults.lbl_place_date} onChange={(val) => onInputChange('lbl_place_date', val)} />
            </label>
            <input
              type="text"
              className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
          <div>
            <label className="block text-[10px] font-medium text-gray-700 mb-1">
               <EditableText value={getValue('lbl_sig_inv2')} defaultValue={defaults.lbl_sig_inv2} onChange={(val) => onInputChange('lbl_sig_inv2', val)} />
            </label>
            <div className="w-full h-12 border-b-2 border-gray-400"></div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200">
        <p className="text-[9px] text-gray-600 leading-snug">
          <strong>
             <EditableText value={getValue('lbl_notice_title')} defaultValue={defaults.lbl_notice_title} onChange={(val) => onInputChange('lbl_notice_title', val)} />
          </strong>{' '}
          <EditableText value={getValue('lbl_notice_text')} defaultValue={defaults.lbl_notice_text} onChange={(val) => onInputChange('lbl_notice_text', val)} multiline />
        </p>
      </div>
    </div>
  );
}
