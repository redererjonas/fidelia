import EditableText from '../../../components/ui/EditableText';

interface InvestorInfoProps {
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export default function InvestorInfo({ formData, onInputChange }: InvestorInfoProps) {
  const defaults = {
    lbl_investor_main_title: 'Angaben zum Anleger',
    lbl_investor1_title: 'Anleger I',
    lbl_investor2_title: 'Anleger II (optional)',
    lbl_inv1_firstname: 'Vorname:',
    lbl_inv1_lastname: 'Nachname:',
    lbl_inv1_address: 'Straße und Hausnummer:',
    lbl_inv1_zip: 'Postleitzahl:',
    lbl_inv1_city: 'Ort:',
    lbl_inv2_firstname: 'Vorname:',
    lbl_inv2_lastname: 'Nachname:',
    lbl_inv2_address: 'Straße und Hausnummer:',
    lbl_inv2_zip: 'Postleitzahl:',
    lbl_inv2_city: 'Ort:',
    lbl_phone: 'Telefon:',
    lbl_email: 'E-Mail:',
  };

  const getValue = (field: string) => formData[field] ?? defaults[field as keyof typeof defaults] ?? '';

  return (
    <div className="mb-3">
      <h3 className="text-xs font-bold text-gray-900 mb-1.5 pb-0.5 border-b-2 border-[#E85D1F]">
        <EditableText value={getValue('lbl_investor_main_title')} defaultValue={defaults.lbl_investor_main_title} onChange={(val) => onInputChange('lbl_investor_main_title', val)} />
      </h3>
      
      {/* Anleger I */}
      <div className="mb-2">
        <h4 className="text-[10px] font-semibold text-gray-800 mb-1">
          <EditableText value={getValue('lbl_investor1_title')} defaultValue={defaults.lbl_investor1_title} onChange={(val) => onInputChange('lbl_investor1_title', val)} />
        </h4>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
               <EditableText value={getValue('lbl_inv1_firstname')} defaultValue={defaults.lbl_inv1_firstname} onChange={(val) => onInputChange('lbl_inv1_firstname', val)} />
            </label>
            <input
              type="text"
              value={formData.investor1FirstName}
              onChange={(e) => onInputChange('investor1FirstName', e.target.value)}
              className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
          <div>
            <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
               <EditableText value={getValue('lbl_inv1_lastname')} defaultValue={defaults.lbl_inv1_lastname} onChange={(val) => onInputChange('lbl_inv1_lastname', val)} />
            </label>
            <input
              type="text"
              value={formData.investor1LastName}
              onChange={(e) => onInputChange('investor1LastName', e.target.value)}
              className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
        </div>
        <div className="mt-1.5">
          <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
             <EditableText value={getValue('lbl_inv1_address')} defaultValue={defaults.lbl_inv1_address} onChange={(val) => onInputChange('lbl_inv1_address', val)} />
          </label>
          <input
            type="text"
            value={formData.investor1Address}
            onChange={(e) => onInputChange('investor1Address', e.target.value)}
            className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
          />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-1.5">
          <div>
            <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
               <EditableText value={getValue('lbl_inv1_zip')} defaultValue={defaults.lbl_inv1_zip} onChange={(val) => onInputChange('lbl_inv1_zip', val)} />
            </label>
            <input
              type="text"
              value={formData.investor1PostalCode}
              onChange={(e) => onInputChange('investor1PostalCode', e.target.value)}
              className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
               <EditableText value={getValue('lbl_inv1_city')} defaultValue={defaults.lbl_inv1_city} onChange={(val) => onInputChange('lbl_inv1_city', val)} />
            </label>
            <input
              type="text"
              value={formData.investor1City}
              onChange={(e) => onInputChange('investor1City', e.target.value)}
              className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
        </div>
      </div>

      {/* Anleger II */}
      <div className="mb-2">
        <h4 className="text-[10px] font-semibold text-gray-800 mb-1">
          <EditableText value={getValue('lbl_investor2_title')} defaultValue={defaults.lbl_investor2_title} onChange={(val) => onInputChange('lbl_investor2_title', val)} />
        </h4>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
               <EditableText value={getValue('lbl_inv2_firstname')} defaultValue={defaults.lbl_inv2_firstname} onChange={(val) => onInputChange('lbl_inv2_firstname', val)} />
            </label>
            <input
              type="text"
              value={formData.investor2FirstName}
              onChange={(e) => onInputChange('investor2FirstName', e.target.value)}
              className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
          <div>
            <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
               <EditableText value={getValue('lbl_inv2_lastname')} defaultValue={defaults.lbl_inv2_lastname} onChange={(val) => onInputChange('lbl_inv2_lastname', val)} />
            </label>
            <input
              type="text"
              value={formData.investor2LastName}
              onChange={(e) => onInputChange('investor2LastName', e.target.value)}
              className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
        </div>
        <div className="mt-1.5">
          <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
             <EditableText value={getValue('lbl_inv2_address')} defaultValue={defaults.lbl_inv2_address} onChange={(val) => onInputChange('lbl_inv2_address', val)} />
          </label>
          <input
            type="text"
            value={formData.investor2Address}
            onChange={(e) => onInputChange('investor2Address', e.target.value)}
            className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
          />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-1.5">
          <div>
            <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
               <EditableText value={getValue('lbl_inv2_zip')} defaultValue={defaults.lbl_inv2_zip} onChange={(val) => onInputChange('lbl_inv2_zip', val)} />
            </label>
            <input
              type="text"
              value={formData.investor2PostalCode}
              onChange={(e) => onInputChange('investor2PostalCode', e.target.value)}
              className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
               <EditableText value={getValue('lbl_inv2_city')} defaultValue={defaults.lbl_inv2_city} onChange={(val) => onInputChange('lbl_inv2_city', val)} />
            </label>
            <input
              type="text"
              value={formData.investor2City}
              onChange={(e) => onInputChange('investor2City', e.target.value)}
              className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
            />
          </div>
        </div>
      </div>

      {/* Kontaktdaten */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
             <EditableText value={getValue('lbl_phone')} defaultValue={defaults.lbl_phone} onChange={(val) => onInputChange('lbl_phone', val)} />
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => onInputChange('phone', e.target.value)}
            className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
          />
        </div>
        <div>
          <label className="block text-[9px] font-medium text-gray-700 mb-0.5">
             <EditableText value={getValue('lbl_email')} defaultValue={defaults.lbl_email} onChange={(val) => onInputChange('lbl_email', val)} />
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onInputChange('email', e.target.value)}
            className="w-full px-2 py-0.5 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
          />
        </div>
      </div>
    </div>
  );
}
