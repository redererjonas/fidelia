import EditableText from '../../../components/ui/EditableText';

interface BankDetailsProps {
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export default function BankDetails({ formData, onInputChange }: BankDetailsProps) {
  const defaults = {
    lbl_bank_title: 'Bankverbindung für Zinsauszahlung',
    lbl_account_holder: 'Kontoinhaber:',
    lbl_iban: 'IBAN:',
    lbl_bic: 'BIC:',
    lbl_bank_name: 'Name der Bank:',
  };

  const getValue = (field: string) => formData[field] ?? defaults[field as keyof typeof defaults] ?? '';

  return (
    <div className="mb-3">
      <h3 className="text-xs font-bold text-gray-900 mb-1.5 pb-0.5 border-b-2 border-[#E85D1F]">
         <EditableText value={getValue('lbl_bank_title')} defaultValue={defaults.lbl_bank_title} onChange={(val) => onInputChange('lbl_bank_title', val)} />
      </h3>
      
      <div className="space-y-1.5">
        <div>
          <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
             <EditableText value={getValue('lbl_account_holder')} defaultValue={defaults.lbl_account_holder} onChange={(val) => onInputChange('lbl_account_holder', val)} />
          </label>
          <input
            type="text"
            value={formData.accountHolder}
            onChange={(e) => onInputChange('accountHolder', e.target.value)}
            className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
               <EditableText value={getValue('lbl_iban')} defaultValue={defaults.lbl_iban} onChange={(val) => onInputChange('lbl_iban', val)} />
            </label>
            <input
              type="text"
              value={formData.iban}
              onChange={(e) => onInputChange('iban', e.target.value)}
              className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
          <div>
            <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
               <EditableText value={getValue('lbl_bic')} defaultValue={defaults.lbl_bic} onChange={(val) => onInputChange('lbl_bic', val)} />
            </label>
            <input
              type="text"
              value={formData.bic}
              onChange={(e) => onInputChange('bic', e.target.value)}
              className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
        </div>
        <div>
          <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
             <EditableText value={getValue('lbl_bank_name')} defaultValue={defaults.lbl_bank_name} onChange={(val) => onInputChange('lbl_bank_name', val)} />
          </label>
          <input
            type="text"
            value={formData.bankName}
            onChange={(e) => onInputChange('bankName', e.target.value)}
            className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
          />
        </div>
      </div>
    </div>
  );
}
