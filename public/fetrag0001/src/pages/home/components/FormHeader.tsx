import EditableText from '../../../components/ui/EditableText';

interface FormHeaderProps {
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export default function FormHeader({ formData, onInputChange }: FormHeaderProps) {
  const defaults = {
    lbl_antrag_title: 'Antrag zur Eröffnung einer Festgeldanlage',
    lbl_antrag_subtitle: 'Bitte füllen Sie alle Felder sorgfältig aus',
    lbl_contract_nr: 'Vertrags-Nr.:',
    lbl_product_desc: 'Produktbezeichnung:',
  };

  const getValue = (field: string) => formData[field] ?? defaults[field as keyof typeof defaults] ?? '';

  return (
    <div className="mb-3">
      <h2 className="text-xs font-bold text-gray-900 mb-1">
        <EditableText 
           value={getValue('lbl_antrag_title')} 
           defaultValue={defaults.lbl_antrag_title}
           onChange={(val) => onInputChange('lbl_antrag_title', val)}
         />
      </h2>
      <p className="text-[9px] text-gray-600 mb-1.5">
        <EditableText 
           value={getValue('lbl_antrag_subtitle')} 
           defaultValue={defaults.lbl_antrag_subtitle}
           onChange={(val) => onInputChange('lbl_antrag_subtitle', val)}
         />
      </p>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-[10px] font-medium text-gray-700 mb-0.5">
            <EditableText 
               value={getValue('lbl_contract_nr')} 
               defaultValue={defaults.lbl_contract_nr}
               onChange={(val) => onInputChange('lbl_contract_nr', val)}
             />
          </label>
          <input
            type="text"
            value={formData.contractNumber}
            onChange={(e) => onInputChange('contractNumber', e.target.value)}
            className="w-full px-2 py-1 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
          />
        </div>
        <div>
          <label className="block text-[10px] font-medium text-gray-700 mb-0.5">
            <EditableText 
               value={getValue('lbl_product_desc')} 
               defaultValue={defaults.lbl_product_desc}
               onChange={(val) => onInputChange('lbl_product_desc', val)}
             />
          </label>
          <input
            type="text"
            value={formData.productDescription}
            onChange={(e) => onInputChange('productDescription', e.target.value)}
            className="w-full px-2 py-1 text-[10px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#E85D1F] focus:border-[#E85D1F]"
          />
        </div>
      </div>
    </div>
  );
}
