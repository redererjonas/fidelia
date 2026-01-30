// Kullanıcı veritabanı - Demo amaçlı
export interface Spouse {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  dateOfBirth: string;
  nationality: string;
  idNumber: string;
  taxId: string;
  createdAt: string;
  spouse?: Spouse; // Opsiyonel eş bilgisi
}

export interface Investment {
  id: string;
  userId: string;
  type: 'festgeld' | 'flexgeld' | 'tagesgeld' | 'aktien' | 'anleihen';
  amount: number;
  interestRate: number;
  duration: number; // ay cinsinden
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'pending';
  currentValue: number;
  profit: number;
  bonus?: number; // Opsiyonel bonus (z.B. 360 EUR für Nicolas)
}

// Kullanıcı veritabanı
export const users: User[] = [
  {
    id: 'user-001',
    email: 'demo@demo.com',
    password: 'demo123',
    firstName: 'Max',
    lastName: 'Mustermann',
    phone: '+49 40 334668098',
    address: 'Friedrichstraße 123',
    city: 'Berlin',
    postalCode: '10117',
    country: 'Deutschland',
    dateOfBirth: '15.03.1985',
    nationality: 'Deutsch',
    idNumber: 'DE123456789',
    taxId: '12/345/67890',
    createdAt: '2025-01-15',
  },
  {
    id: 'user-002',
    email: 'bernhardkistler@yahoo.de',
    password: 'Bernhard11031955',
    firstName: 'Bernhard',
    lastName: 'Kistler',
    phone: '+491727537914',
    address: 'Albert-Schweitzer-Str. 14',
    city: 'Kissing',
    postalCode: '86438',
    country: 'Deutschland',
    dateOfBirth: '11.03.1955',
    nationality: 'Deutsch',
    idNumber: 'DE987654321',
    taxId: '98/765/43210',
    createdAt: '2026-01-26',
  },
  {
    id: 'user-003',
    email: 'chmadarlis@hotmail.com',
    password: 'Nicolas40591Madarlis+',
    firstName: 'Nicolas',
    lastName: 'Madarlis',
    phone: '01728812251',
    address: 'Werstener Friedhof Str. 90',
    city: 'Düsseldorf',
    postalCode: '40591',
    country: 'Deutschland',
    dateOfBirth: '26.01.1948',
    nationality: 'Deutsch',
    idNumber: 'DE456789123',
    taxId: '45/678/91230',
    createdAt: '2026-01-28',
    spouse: {
      firstName: 'Evagelia',
      lastName: 'Madarlis',
      dateOfBirth: '30.04.1949',
    },
  },
];

// Yatırım veritabanı
export const investments: Investment[] = [
  // User-001 Investments (Demo User)
  // Festgeld
  {
    id: 'inv-001',
    userId: 'user-001',
    type: 'festgeld',
    amount: 100000,
    interestRate: 3.2,
    duration: 12,
    startDate: '2025-01-15',
    endDate: '2026-01-15',
    status: 'active',
    currentValue: 103200,
    profit: 3200,
  },
  // Flexgeld
  {
    id: 'inv-002',
    userId: 'user-001',
    type: 'flexgeld',
    amount: 100000,
    interestRate: 2.8,
    duration: 12,
    startDate: '2025-02-01',
    endDate: '2026-02-01',
    status: 'active',
    currentValue: 102800,
    profit: 2800,
  },
  // Tagesgeld
  {
    id: 'inv-003',
    userId: 'user-001',
    type: 'tagesgeld',
    amount: 100000,
    interestRate: 2.5,
    duration: 0, // Tagesgeld için süre yok
    startDate: '2025-03-01',
    endDate: '',
    status: 'active',
    currentValue: 102500,
    profit: 2500,
  },
  // Aktien
  {
    id: 'inv-004',
    userId: 'user-001',
    type: 'aktien',
    amount: 100000,
    interestRate: 8.5, // Ortalama getiri
    duration: 12,
    startDate: '2025-01-01',
    endDate: '2026-01-01',
    status: 'active',
    currentValue: 108500,
    profit: 8500,
  },
  // Anleihen
  {
    id: 'inv-005',
    userId: 'user-001',
    type: 'anleihen',
    amount: 100000,
    interestRate: 4.2,
    duration: 12,
    startDate: '2025-01-20',
    endDate: '2026-01-20',
    status: 'active',
    currentValue: 104200,
    profit: 4200,
  },
  // User-002 Investments (Bernhard Kistler)
  // Festgeld - Aktiv
  {
    id: 'inv-006',
    userId: 'user-002',
    type: 'festgeld',
    amount: 30000,
    interestRate: 3.95,
    duration: 12,
    startDate: '2026-01-26',
    endDate: '2027-01-26',
    status: 'active',
    currentValue: 30000,
    profit: 0,
  },
  // Flexgeld - Keine Investition
  {
    id: 'inv-007',
    userId: 'user-002',
    type: 'flexgeld',
    amount: 0,
    interestRate: 0,
    duration: 0,
    startDate: '',
    endDate: '',
    status: 'pending',
    currentValue: 0,
    profit: 0,
  },
  // Tagesgeld - Keine Investition
  {
    id: 'inv-008',
    userId: 'user-002',
    type: 'tagesgeld',
    amount: 0,
    interestRate: 0,
    duration: 0,
    startDate: '',
    endDate: '',
    status: 'pending',
    currentValue: 0,
    profit: 0,
  },
  // Aktien - Keine Investition
  {
    id: 'inv-009',
    userId: 'user-002',
    type: 'aktien',
    amount: 0,
    interestRate: 0,
    duration: 0,
    startDate: '',
    endDate: '',
    status: 'pending',
    currentValue: 0,
    profit: 0,
  },
  // Anleihen - Keine Investition
  {
    id: 'inv-010',
    userId: 'user-002',
    type: 'anleihen',
    amount: 0,
    interestRate: 0,
    duration: 0,
    startDate: '',
    endDate: '',
    status: 'pending',
    currentValue: 0,
    profit: 0,
  },
  // User-003 Investments (Nicolas & Evagelia Madarlis)
  // Festgeld - Ausstehend/Pending (300.000 EUR, 3.95%, 12 Monate, 720 EUR Bonus)
  // Wartet auf Kapitaleinlage
  {
    id: 'inv-011',
    userId: 'user-003',
    type: 'festgeld',
    amount: 300000,
    interestRate: 3.95,
    duration: 12,
    startDate: '2026-01-28',
    endDate: '2027-01-28',
    status: 'pending',
    currentValue: 0,
    profit: 0,
    bonus: 720,
  },
  // Flexgeld - Keine Investition
  {
    id: 'inv-012',
    userId: 'user-003',
    type: 'flexgeld',
    amount: 0,
    interestRate: 0,
    duration: 0,
    startDate: '',
    endDate: '',
    status: 'pending',
    currentValue: 0,
    profit: 0,
  },
  // Tagesgeld - Keine Investition
  {
    id: 'inv-013',
    userId: 'user-003',
    type: 'tagesgeld',
    amount: 0,
    interestRate: 0,
    duration: 0,
    startDate: '',
    endDate: '',
    status: 'pending',
    currentValue: 0,
    profit: 0,
  },
  // Aktien - Keine Investition
  {
    id: 'inv-014',
    userId: 'user-003',
    type: 'aktien',
    amount: 0,
    interestRate: 0,
    duration: 0,
    startDate: '',
    endDate: '',
    status: 'pending',
    currentValue: 0,
    profit: 0,
  },
  // Anleihen - Keine Investition
  {
    id: 'inv-015',
    userId: 'user-003',
    type: 'anleihen',
    amount: 0,
    interestRate: 0,
    duration: 0,
    startDate: '',
    endDate: '',
    status: 'pending',
    currentValue: 0,
    profit: 0,
  },
];

// Kullanıcı güncelleme fonksiyonu
export const updateUser = (userId: string, updates: Partial<User>): boolean => {
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updates };
    return true;
  }
  return false;
};

// Şifre güncelleme fonksiyonu
export const updatePassword = (userId: string, newPassword: string): boolean => {
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex].password = newPassword;
    return true;
  }
  return false;
};

// Kullanıcı doğrulama
export const authenticateUser = (email: string, password: string): User | null => {
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
};

// Kullanıcı yatırımlarını getir
export const getUserInvestments = (userId: string): Investment[] => {
  return investments.filter(inv => inv.userId === userId);
};

// Toplam portföy değeri
export const getTotalPortfolioValue = (userId: string): number => {
  const userInvestments = getUserInvestments(userId);
  return userInvestments.reduce((total, inv) => total + inv.currentValue, 0);
};

// Toplam kar
export const getTotalProfit = (userId: string): number => {
  const userInvestments = getUserInvestments(userId);
  return userInvestments.reduce((total, inv) => total + inv.profit, 0);
};