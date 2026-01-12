import EditableText from '../../../components/ui/EditableText';

interface PageHeaderProps {
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export default function PageHeader({ 
  formData,
  onInputChange
}: PageHeaderProps) {
  const defaults = {
    headerTitle: 'Berliner Volksbank eG',
    headerSubtitle: 'Festgeldanlage - Antragsformular',
    headerLogo: 'https://static.readdy.ai/image/dce5bbda34541fbf1d1e875f0ce683f2/becbea57ac8145ed45a4d17cc4996f0f.svg'
  };

  const getValue = (field: string) => formData[field] ?? defaults[field as keyof typeof defaults] ?? '';

  return (
    <div className="bg-white border-b-4 border-[#E85D1F] px-[5mm] py-2 print:border-b-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-base font-bold text-gray-900">
             <EditableText 
               value={getValue('headerTitle')} 
               defaultValue={defaults.headerTitle}
               onChange={(val) => onInputChange('headerTitle', val)}
             />
          </h1>
          <p className="text-[10px] text-gray-600 mt-0.5">
             <EditableText 
               value={getValue('headerSubtitle')} 
               defaultValue={defaults.headerSubtitle}
               onChange={(val) => onInputChange('headerSubtitle', val)}
             />
          </p>
        </div>
        <div className="ml-4 relative group">
          <img 
            src={getValue('headerLogo')}
            alt="Logo" 
            className="h-10 w-auto cursor-pointer"
            onClick={() => {
              const newUrl = prompt('Logo URL eingeben:', getValue('headerLogo'));
              if (newUrl) onInputChange('headerLogo', newUrl);
            }}
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center">
            <i className="ri-edit-line text-white text-xs"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
