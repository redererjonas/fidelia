import EditableText from '../../../components/ui/EditableText';

interface LegitimationProps {
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export default function Legitimation({ formData, onInputChange }: LegitimationProps) {
  const defaults = {
    lbl_legit_title: 'Legitimationsprüfung',
    lbl_legit1_title: 'Anleger I',
    lbl_legit2_title: 'Anleger II (optional)',
    lbl_id_type: 'Ausweisart:',
    lbl_id_number: 'Ausweisnummer:',
    lbl_valid_until: 'Gültig bis:',
    lbl_authority: 'Ausstellende Behörde:',
    lbl_birth_place: 'Geburtsort:',
    lbl_birth_date: 'Geburtsdatum:',
    lbl_nationality: 'Staatsangehörigkeit:',
    opt_personalausweis: 'Personalausweis',
    opt_reisepass: 'Reisepass',
  };

  const getValue = (field: string) => formData[field] ?? defaults[field as keyof typeof defaults] ?? '';

  return (
    <div className="mb-4">
      <h3 className="text-sm font-bold text-gray-900 mb-3 pb-1 border-b-2 border-[#E85D1F]">
         <EditableText value={getValue('lbl_legit_title')} defaultValue={defaults.lbl_legit_title} onChange={(val) => onInputChange('lbl_legit_title', val)} />
      </h3>
      
      {/* Anleger I */}
      <div className="mb-4">
        <h4 className="text-[11px] font-semibold text-gray-800 mb-2">
           <EditableText value={getValue('lbl_legit1_title')} defaultValue={defaults.lbl_legit1_title} onChange={(val) => onInputChange('lbl_legit1_title', val)} />
        </h4>
        <div className="space-y-3">
          <div>
            <label className="block text-[10px] font-medium text-gray-700 mb-1">
               <EditableText value={getValue('lbl_id_type')} defaultValue={defaults.lbl_id_type} onChange={(val) => onInputChange('lbl_id_type', val)} />
            </label>
            <select
              value={formData.investor1IdType}
              onChange={(e) => onInputChange('investor1IdType', e.target.value)}
              className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            >
              <option value="personalausweis">{getValue('opt_personalausweis')}</option>
              <option value="reisepass">{getValue('opt_reisepass')}</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                 <EditableText value={getValue('lbl_id_number')} defaultValue={defaults.lbl_id_number} onChange={(val) => onInputChange('lbl_id_number', val)} />
              </label>
              <input
                type="text"
                value={formData.investor1IdNumber}
                onChange={(e) => onInputChange('investor1IdNumber', e.target.value)}
                className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                 <EditableText value={getValue('lbl_valid_until')} defaultValue={defaults.lbl_valid_until} onChange={(val) => onInputChange('lbl_valid_until', val)} />
              </label>
              <input
                type="date"
                value={formData.investor1ValidUntil}
                onChange={(e) => onInputChange('investor1ValidUntil', e.target.value)}
                className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-medium text-gray-700 mb-1">
               <EditableText value={getValue('lbl_authority')} defaultValue={defaults.lbl_authority} onChange={(val) => onInputChange('lbl_authority', val)} />
            </label>
            <input
              type="text"
              value={formData.investor1IssuingAuthority}
              onChange={(e) => onInputChange('investor1IssuingAuthority', e.target.value)}
              className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                 <EditableText value={getValue('lbl_birth_place')} defaultValue={defaults.lbl_birth_place} onChange={(val) => onInputChange('lbl_birth_place', val)} />
              </label>
              <input
                type="text"
                value={formData.investor1BirthPlace}
                onChange={(e) => onInputChange('investor1BirthPlace', e.target.value)}
                className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                 <EditableText value={getValue('lbl_birth_date')} defaultValue={defaults.lbl_birth_date} onChange={(val) => onInputChange('lbl_birth_date', val)} />
              </label>
              <input
                type="date"
                value={formData.investor1BirthDate}
                onChange={(e) => onInputChange('investor1BirthDate', e.target.value)}
                className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                 <EditableText value={getValue('lbl_nationality')} defaultValue={defaults.lbl_nationality} onChange={(val) => onInputChange('lbl_nationality', val)} />
              </label>
              <input
                type="text"
                value={formData.investor1Nationality}
                onChange={(e) => onInputChange('investor1Nationality', e.target.value)}
                className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Anleger II */}
      <div>
        <h4 className="text-[11px] font-semibold text-gray-800 mb-2">
           <EditableText value={getValue('lbl_legit2_title')} defaultValue={defaults.lbl_legit2_title} onChange={(val) => onInputChange('lbl_legit2_title', val)} />
        </h4>
        <div className="space-y-3">
          <div>
            <label className="block text-[10px] font-medium text-gray-700 mb-1">
               <EditableText value={getValue('lbl_id_type')} defaultValue={defaults.lbl_id_type} onChange={(val) => onInputChange('lbl_id_type', val)} />
            </label>
            <select
              value={formData.investor2IdType}
              onChange={(e) => onInputChange('investor2IdType', e.target.value)}
              className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            >
              <option value="personalausweis">{getValue('opt_personalausweis')}</option>
              <option value="reisepass">{getValue('opt_reisepass')}</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                 <EditableText value={getValue('lbl_id_number')} defaultValue={defaults.lbl_id_number} onChange={(val) => onInputChange('lbl_id_number', val)} />
              </label>
              <input
                type="text"
                value={formData.investor2IdNumber}
                onChange={(e) => onInputChange('investor2IdNumber', e.target.value)}
                className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                 <EditableText value={getValue('lbl_valid_until')} defaultValue={defaults.lbl_valid_until} onChange={(val) => onInputChange('lbl_valid_until', val)} />
              </label>
              <input
                type="date"
                value={formData.investor2ValidUntil}
                onChange={(e) => onInputChange('investor2ValidUntil', e.target.value)}
                className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-medium text-gray-700 mb-1">
               <EditableText value={getValue('lbl_authority')} defaultValue={defaults.lbl_authority} onChange={(val) => onInputChange('lbl_authority', val)} />
            </label>
            <input
              type="text"
              value={formData.investor2IssuingAuthority}
              onChange={(e) => onInputChange('investor2IssuingAuthority', e.target.value)}
              className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                 <EditableText value={getValue('lbl_birth_place')} defaultValue={defaults.lbl_birth_place} onChange={(val) => onInputChange('lbl_birth_place', val)} />
              </label>
              <input
                type="text"
                value={formData.investor2BirthPlace}
                onChange={(e) => onInputChange('investor2BirthPlace', e.target.value)}
                className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                 <EditableText value={getValue('lbl_birth_date')} defaultValue={defaults.lbl_birth_date} onChange={(val) => onInputChange('lbl_birth_date', val)} />
              </label>
              <input
                type="date"
                value={formData.investor2BirthDate}
                onChange={(e) => onInputChange('investor2BirthDate', e.target.value)}
                className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                 <EditableText value={getValue('lbl_nationality')} defaultValue={defaults.lbl_nationality} onChange={(val) => onInputChange('lbl_nationality', val)} />
              </label>
              <input
                type="text"
                value={formData.investor2Nationality}
                onChange={(e) => onInputChange('investor2Nationality', e.target.value)}
                className="w-full px-2 py-1 text-[11px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
