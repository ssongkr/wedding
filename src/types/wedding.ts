export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export interface WeddingInfo {
  groom: {
    name: string;
    englishName?: string;
    phone?: string;
    father?: string;
    mother?: string;
    fatherPhone?: string;
    motherPhone?: string;
  };
  bride: {
    name: string;
    englishName?: string;
    phone?: string;
    father?: string;
    mother?: string;
    fatherPhone?: string;
    motherPhone?: string;
  };
  date: string;
  time: string;
  venue: {
    name: string;
    hall: string;
    address: string;
    roadAddress: string;
    phone: string;
    mapUrl: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  message?: string;
  gallery?: string[];
  accounts?: {
    groom?: AccountInfo[];
    bride?: AccountInfo[];
  };
}

export interface AccountInfo {
  bank: string;
  accountNumber: string;
  holder: string;
  relation?: string;
}
