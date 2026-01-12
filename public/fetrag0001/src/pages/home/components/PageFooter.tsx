import EditableText from '../../../components/ui/EditableText';

interface PageFooterProps {
  pageNumber: number;
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export default function PageFooter({ 
  pageNumber,
  formData,
  onInputChange
}: PageFooterProps) {
  const defaults = {
    footerAddress: 'Berliner Volksbank eG • Bundesallee 50 • 10715 Berlin',
    footerPhone: 'Tel: +49 30 3063-0',
    footerEmail: 'info@berliner-volksbank.de',
    footerWebsite: 'www.berliner-volksbank.de'
  };

  const getValue = (field: string) => formData[field] ?? defaults[field as keyof typeof defaults] ?? '';

  return (
    <div className="bg-gray-50 border-t border-gray-200 px-[5mm] py-2 print:bg-gray-50">
      <div className="flex items-center justify-between text-[9px] text-gray-600">
        <div className="flex-1 space-y-0.5">
          <div>
             <EditableText 
               value={getValue('footerAddress')} 
               defaultValue={defaults.footerAddress}
               onChange={(val) => onInputChange('footerAddress', val)}
             />
          </div>
          <div className="flex gap-3">
             <EditableText 
               value={getValue('footerPhone')} 
               defaultValue={defaults.footerPhone}
               onChange={(val) => onInputChange('footerPhone', val)}
             />
             <EditableText 
               value={getValue('footerEmail')} 
               defaultValue={defaults.footerEmail}
               onChange={(val) => onInputChange('footerEmail', val)}
             />
             <EditableText 
               value={getValue('footerWebsite')} 
               defaultValue={defaults.footerWebsite}
               onChange={(val) => onInputChange('footerWebsite', val)}
             />
          </div>
        </div>
        <div className="text-right font-medium">
          Seite {pageNumber}
        </div>
      </div>
    </div>
  );
}
