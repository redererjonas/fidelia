import { useState } from 'react';
import FormHeader from './components/FormHeader';
import InvestorInfo from './components/InvestorInfo';
import Conditions from './components/Conditions';
import BankDetails from './components/BankDetails';
import Legitimation from './components/Legitimation';
import DataProtection from './components/DataProtection';
import Page3Content from './components/Page3Content';
import Page4Content from './components/Page4Content';
import Page5Content from './components/Page5Content';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';

export default function Home() {
  const [formData, setFormData] = useState<Record<string, string>>({
    contractNumber: '',
    productDescription: '',
    investor1FirstName: '',
    investor1LastName: '',
    investor1Address: '',
    investor1PostalCode: '',
    investor1City: '',
    investor2FirstName: '',
    investor2LastName: '',
    investor2Address: '',
    investor2PostalCode: '',
    investor2City: '',
    phone: '',
    email: '',
    investmentAmount: '',
    duration: '',
    interestRate: '',
    interestPayout: '',
    welcomeBonus: '',
    accountHolder: '',
    bic: '',
    bankName: '',
    iban: '',
    investor1IdType: 'personalausweis',
    investor1IdNumber: '',
    investor1ValidUntil: '',
    investor1IssuingAuthority: '',
    investor1BirthPlace: '',
    investor1BirthDate: '',
    investor1Nationality: '',
    investor2IdType: 'personalausweis',
    investor2IdNumber: '',
    investor2ValidUntil: '',
    investor2IssuingAuthority: '',
    investor2BirthPlace: '',
    investor2BirthDate: '',
    investor2Nationality: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Festgeldanlage_${formData.contractNumber || 'Formular'}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-3 print:py-0 print:bg-white">
      {/* Action Buttons - Hidden on Print */}
      <div className="max-w-[210mm] mx-auto mb-2 print:hidden">
        <div className="flex justify-end gap-2 bg-white p-2 rounded shadow-sm">
          <button
            onClick={handleSave}
            className="px-4 py-1.5 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors font-medium text-xs whitespace-nowrap flex items-center gap-1.5"
          >
            <i className="ri-save-line"></i>
            Speichern
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-1.5 bg-[#E85D1F] text-white rounded hover:bg-[#d14d0f] transition-colors font-medium text-xs whitespace-nowrap flex items-center gap-1.5"
          >
            <i className="ri-printer-line"></i>
            Drucken
          </button>
        </div>
      </div>

      {/* Document Pages */}
      <div className="max-w-[210mm] mx-auto space-y-3 print:space-y-0">
        {/* Page 1 */}
        <div className="bg-white shadow-lg print:shadow-none page-break a4-page">
          <PageHeader formData={formData as any} onInputChange={handleInputChange} />
          <div className="px-[5mm] py-[3mm] flex-1 overflow-hidden flex flex-col justify-between [&>*:last-child]:mb-0">
            <FormHeader formData={formData as any} onInputChange={handleInputChange} />
            <InvestorInfo formData={formData as any} onInputChange={handleInputChange} />
            <Conditions formData={formData as any} onInputChange={handleInputChange} />
            <BankDetails formData={formData as any} onInputChange={handleInputChange} />
          </div>
          <PageFooter pageNumber={1} formData={formData as any} onInputChange={handleInputChange} />
        </div>

        {/* Page 2 */}
        <div className="bg-white shadow-lg print:shadow-none page-break a4-page">
          <PageHeader formData={formData as any} onInputChange={handleInputChange} />
          <div className="px-[5mm] py-[3mm] flex-1 overflow-hidden flex flex-col justify-between [&>*:last-child]:mb-0">
            <Legitimation formData={formData as any} onInputChange={handleInputChange} />
            <DataProtection formData={formData as any} onInputChange={handleInputChange} />
          </div>
          <PageFooter pageNumber={2} formData={formData as any} onInputChange={handleInputChange} />
        </div>

        {/* Page 3 - Vorvertragliche Informationen & Geschäftsbedingungen */}
        <div className="bg-white shadow-lg print:shadow-none page-break a4-page">
          <PageHeader formData={formData as any} onInputChange={handleInputChange} />
          <div className="px-[5mm] py-[3mm] flex-1 overflow-hidden flex flex-col justify-between [&>*:last-child]:mb-0">
            <Page3Content formData={formData} onInputChange={handleInputChange} />
            <Page4Content formData={formData} onInputChange={handleInputChange} />
          </div>
          <PageFooter pageNumber={3} formData={formData as any} onInputChange={handleInputChange} />
        </div>

        {/* Page 4 - Widerrufsbelehrung & Unterschriften */}
        <div className="bg-white shadow-lg print:shadow-none page-break a4-page">
          <PageHeader formData={formData as any} onInputChange={handleInputChange} />
          <div className="px-[5mm] py-[3mm] flex-1 overflow-hidden flex flex-col justify-between [&>*:last-child]:mb-0">
            <Page5Content formData={formData} onInputChange={handleInputChange} />
          </div>
          <PageFooter pageNumber={4} formData={formData as any} onInputChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
}
