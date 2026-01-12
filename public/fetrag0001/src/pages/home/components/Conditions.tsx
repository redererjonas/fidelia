import EditableText from '../../../components/ui/EditableText';

interface ConditionsProps {
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export default function Conditions({ formData, onInputChange }: ConditionsProps) {
  const defaults = {
    lbl_conditions_title: 'Konditionen der Festgeldanlage',
    lbl_inv_amount: 'Anlagebetrag (EUR):',
    lbl_duration: 'Laufzeit (Monate):',
    lbl_interest_rate: 'Zinssatz (% p.a.):',
    lbl_interest_payout: 'Zinsauszahlung:',
    lbl_bonus: 'Willkommensbonus (falls zutreffend):',
  };

  const getValue = (field: string) => formData[field] ?? defaults[field as keyof typeof defaults] ?? '';

  return (
    <div className="mb-3">
      <h3 className="text-xs font-bold text-gray-900 mb-1.5 pb-0.5 border-b-2 border-[#E85D1F]">
         <EditableText value={getValue('lbl_conditions_title')} defaultValue={defaults.lbl_conditions_title} onChange={(val) => onInputChange('lbl_conditions_title', val)} />
      </h3>
      
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
             <EditableText value={getValue('lbl_inv_amount')} defaultValue={defaults.lbl_inv_amount} onChange={(val) => onInputChange('lbl_inv_amount', val)} />
          </label>
          <input
            type="text"
            value={formData.investmentAmount}
            onChange={(e) => onInputChange('investmentAmount', e.target.value)}
            className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
          />
        </div>
        <div>
          <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
             <EditableText value={getValue('lbl_duration')} defaultValue={defaults.lbl_duration} onChange={(val) => onInputChange('lbl_duration', val)} />
          </label>
          <input
            type="text"
            value={formData.duration}
            onChange={(e) => onInputChange('duration', e.target.value)}
            className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
          />
        </div>
        <div>
          <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
             <EditableText value={getValue('lbl_interest_rate')} defaultValue={defaults.lbl_interest_rate} onChange={(val) => onInputChange('lbl_interest_rate', val)} />
          </label>
          <input
            type="text"
            value={formData.interestRate}
            onChange={(e) => onInputChange('interestRate', e.target.value)}
            className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
          />
        </div>
        <div>
          <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
             <EditableText value={getValue('lbl_interest_payout')} defaultValue={defaults.lbl_interest_payout} onChange={(val) => onInputChange('lbl_interest_payout', val)} />
          </label>
          <select
            value={formData.interestPayout}
            onChange={(e) => onInputChange('interestPayout', e.target.value)}
            className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
          >
            <option value="">Bitte wählen</option>
            <option value="am-ende">Am Ende der Laufzeit</option>
            <option value="jaehrlich">Jährlich</option>
            <option value="monatlich">Monatlich</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
             <EditableText value={getValue('lbl_bonus')} defaultValue={defaults.lbl_bonus} onChange={(val) => onInputChange('lbl_bonus', val)} />
          </label>
          <input
            type="text"
            value={formData.welcomeBonus}
            onChange={(e) => onInputChange('welcomeBonus', e.target.value)}
            className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
          />
        </div>
      </div>
    </div>
  );
}
