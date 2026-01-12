import { useState } from 'react';

export default function PreContractualInfo() {
  const [bankName, setBankName] = useState('Berliner Volksbank eG');
  const [bankAddress, setBankAddress] = useState('Schellingstraße 4');
  const [bankCity, setBankCity] = useState('10785 Berlin');
  const [bankCountry, setBankCountry] = useState('Deutschland');
  const [registrationNumber, setRegistrationNumber] = useState('Registernummer: VR 18457 B');
  const [representative, setRepresentative] = useState('Marija Kolak (Präsidentin)');
  const [cooperation, setCooperation] = useState('Solas Capital GmbH');
  const [headquarters, setHeadquarters] = useState('Mühldorfstrasse 8');
  const [headquartersCity, setHeadquartersCity] = useState('81671 München');
  const [headquartersCountry, setHeadquartersCountry] = useState('Deutschland');
  const [contractLanguage, setContractLanguage] = useState('Maßgebliche Sprache für dieses Vertragsverhältnis und die Kommunikation mit dem Kunden während der Laufzeit des Vertrages ist Deutsch.');
  const [jurisdiction, setJurisdiction] = useState('Für diesen Vertrag gilt die europäische Einlagensicherung; Rechtsordnung und Gerichtsstand richten sich nach dem Sitz der Bank.');
  const [salvatoricClause, setSalvatoricClause] = useState('Sollten einzelne Bestimmungen dieses Vertrages ganz oder teilweise unwirksam sein oder werden, so sollen die übrigen Bestimmungen wirksam bleiben. Die Vertragsparteien verpflichten sich, die unwirksamen Bestimmungen durch solche Bestimmungen zu ersetzen, die dem beabsichtigten wirtschaftlichen Zweck am nächsten kommen.');

  const [isEditingBankName, setIsEditingBankName] = useState(false);
  const [isEditingBankAddress, setIsEditingBankAddress] = useState(false);
  const [isEditingBankCity, setIsEditingBankCity] = useState(false);
  const [isEditingBankCountry, setIsEditingBankCountry] = useState(false);
  const [isEditingRegistrationNumber, setIsEditingRegistrationNumber] = useState(false);
  const [isEditingRepresentative, setIsEditingRepresentative] = useState(false);
  const [isEditingCooperation, setIsEditingCooperation] = useState(false);
  const [isEditingHeadquarters, setIsEditingHeadquarters] = useState(false);
  const [isEditingHeadquartersCity, setIsEditingHeadquartersCity] = useState(false);
  const [isEditingHeadquartersCountry, setIsEditingHeadquartersCountry] = useState(false);
  const [isEditingContractLanguage, setIsEditingContractLanguage] = useState(false);
  const [isEditingJurisdiction, setIsEditingJurisdiction] = useState(false);
  const [isEditingSalvatoricClause, setIsEditingSalvatoricClause] = useState(false);

  return (
    <div className="space-y-5">
      <div className="text-center mb-6">
        <h2 className="text-[11px] font-bold text-gray-900 leading-normal">
          Vorvertragliche Informationen bei außerhalb von Geschäftsräumen<br />
          oder im Fernabsatz geschlossenen Verträgen über Finanzdienstleistungen
        </h2>
        <p className="text-[9px] text-gray-600 mt-2">Stand: Januar 2025</p>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-5">
        <div>
          <h3 className="text-[10px] font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
            Name und Anschrift der Bank
          </h3>
          <div className="text-[9px] text-gray-700 space-y-1">
            {isEditingBankName ? (
              <input
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                onBlur={() => setIsEditingBankName(false)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[9px]"
                autoFocus
              />
            ) : (
              <p 
                className="cursor-pointer hover:bg-gray-50 px-1"
                onClick={() => setIsEditingBankName(true)}
              >
                {bankName}
              </p>
            )}
            {isEditingBankAddress ? (
              <input
                type="text"
                value={bankAddress}
                onChange={(e) => setBankAddress(e.target.value)}
                onBlur={() => setIsEditingBankAddress(false)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[9px]"
                autoFocus
              />
            ) : (
              <p 
                className="cursor-pointer hover:bg-gray-50 px-1"
                onClick={() => setIsEditingBankAddress(true)}
              >
                {bankAddress}
              </p>
            )}
            {isEditingBankCity ? (
              <input
                type="text"
                value={bankCity}
                onChange={(e) => setBankCity(e.target.value)}
                onBlur={() => setIsEditingBankCity(false)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[9px]"
                autoFocus
              />
            ) : (
              <p 
                className="cursor-pointer hover:bg-gray-50 px-1"
                onClick={() => setIsEditingBankCity(true)}
              >
                {bankCity}
              </p>
            )}
            {isEditingBankCountry ? (
              <input
                type="text"
                value={bankCountry}
                onChange={(e) => setBankCountry(e.target.value)}
                onBlur={() => setIsEditingBankCountry(false)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[9px]"
                autoFocus
              />
            ) : (
              <p 
                className="cursor-pointer hover:bg-gray-50 px-1"
                onClick={() => setIsEditingBankCountry(true)}
              >
                {bankCountry}
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
            Firmenbuchnummer
          </h3>
          <div className="text-[9px] text-gray-700">
            {isEditingRegistrationNumber ? (
              <input
                type="text"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                onBlur={() => setIsEditingRegistrationNumber(false)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[9px]"
                autoFocus
              />
            ) : (
              <p 
                className="cursor-pointer hover:bg-gray-50 px-1"
                onClick={() => setIsEditingRegistrationNumber(true)}
              >
                {registrationNumber}
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
            Gesetzlich Vertretungsberechtigte der Bank Vorstand
          </h3>
          <div className="text-[9px] text-gray-700">
            {isEditingRepresentative ? (
              <input
                type="text"
                value={representative}
                onChange={(e) => setRepresentative(e.target.value)}
                onBlur={() => setIsEditingRepresentative(false)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[9px]"
                autoFocus
              />
            ) : (
              <p 
                className="cursor-pointer hover:bg-gray-50 px-1"
                onClick={() => setIsEditingRepresentative(true)}
              >
                {representative}
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
            In Kooperation mit
          </h3>
          <div className="text-[9px] text-gray-700">
            {isEditingCooperation ? (
              <input
                type="text"
                value={cooperation}
                onChange={(e) => setCooperation(e.target.value)}
                onBlur={() => setIsEditingCooperation(false)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[9px]"
                autoFocus
              />
            ) : (
              <p 
                className="cursor-pointer hover:bg-gray-50 px-1"
                onClick={() => setIsEditingCooperation(true)}
              >
                {cooperation}
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
            Hauptsitz
          </h3>
          <div className="text-[9px] text-gray-700 space-y-1">
            {isEditingHeadquarters ? (
              <input
                type="text"
                value={headquarters}
                onChange={(e) => setHeadquarters(e.target.value)}
                onBlur={() => setIsEditingHeadquarters(false)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[9px]"
                autoFocus
              />
            ) : (
              <p 
                className="cursor-pointer hover:bg-gray-50 px-1"
                onClick={() => setIsEditingHeadquarters(true)}
              >
                {headquarters}
              </p>
            )}
            {isEditingHeadquartersCity ? (
              <input
                type="text"
                value={headquartersCity}
                onChange={(e) => setHeadquartersCity(e.target.value)}
                onBlur={() => setIsEditingHeadquartersCity(false)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[9px]"
                autoFocus
              />
            ) : (
              <p 
                className="cursor-pointer hover:bg-gray-50 px-1"
                onClick={() => setIsEditingHeadquartersCity(true)}
              >
                {headquartersCity}
              </p>
            )}
            {isEditingHeadquartersCountry ? (
              <input
                type="text"
                value={headquartersCountry}
                onChange={(e) => setHeadquartersCountry(e.target.value)}
                onBlur={() => setIsEditingHeadquartersCountry(false)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent text-[9px]"
                autoFocus
              />
            ) : (
              <p 
                className="cursor-pointer hover:bg-gray-50 px-1"
                onClick={() => setIsEditingHeadquartersCountry(true)}
              >
                {headquartersCountry}
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
            Vertragssprache
          </h3>
          <div className="text-[9px] text-gray-700">
            {isEditingContractLanguage ? (
              <textarea
                value={contractLanguage}
                onChange={(e) => setContractLanguage(e.target.value)}
                onBlur={() => setIsEditingContractLanguage(false)}
                className="w-full border border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent p-1 rounded text-[9px]"
                rows={3}
                autoFocus
              />
            ) : (
              <p 
                className="cursor-pointer hover:bg-gray-50 leading-relaxed px-1"
                onClick={() => setIsEditingContractLanguage(true)}
              >
                {contractLanguage}
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
            Rechtsordnung und Gerichtsstand
          </h3>
          <div className="text-[9px] text-gray-700">
            {isEditingJurisdiction ? (
              <textarea
                value={jurisdiction}
                onChange={(e) => setJurisdiction(e.target.value)}
                onBlur={() => setIsEditingJurisdiction(false)}
                className="w-full border border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent p-1 rounded text-[9px]"
                rows={3}
                autoFocus
              />
            ) : (
              <p 
                className="cursor-pointer hover:bg-gray-50 leading-relaxed px-1"
                onClick={() => setIsEditingJurisdiction(true)}
              >
                {jurisdiction}
              </p>
            )}
          </div>
        </div>

        <div className="col-span-2">
          <h3 className="text-[10px] font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">
            Salvatorische Klausel und Rechtswahl
          </h3>
          <div className="text-[9px] text-gray-700">
            {isEditingSalvatoricClause ? (
              <textarea
                value={salvatoricClause}
                onChange={(e) => setSalvatoricClause(e.target.value)}
                onBlur={() => setIsEditingSalvatoricClause(false)}
                className="w-full border border-gray-300 focus:outline-none focus:border-[#E85D1F] bg-transparent p-1 rounded text-[9px]"
                rows={3}
                autoFocus
              />
            ) : (
              <p 
                className="cursor-pointer hover:bg-gray-50 leading-relaxed px-1"
                onClick={() => setIsEditingSalvatoricClause(true)}
              >
                {salvatoricClause}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
