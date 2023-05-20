export interface IFlight {
  afskey: string;
  airlineIata: string;
  airlineIcao: string;
  airlineImage: string;
  airlineName: string;
  flightNumber: string;
  categoryCode: string;
  flightLeg: string;
  stad: string;
  etad: string;
  atad: string;
  remark: {
    remarkAr: string;
    remarkEn: string;
    remarkFr: string;
    remarkKa: string;
    remarkTr: string;
    remarkRu: string;
    remarkKz: string;
    remarkMk: string;
  };
  gate: string | null;
  carousel: string;
  checkin: string;
  path: {
    origin: {
      originIata: TrustedHTML;
      originIcao: TrustedHTML;
      originAr: TrustedHTML;
      originEn: TrustedHTML;
      originFr: TrustedHTML;
      originKa: TrustedHTML;
      originKz: TrustedHTML;
      originMk: TrustedHTML;
      originRu: TrustedHTML;
      originTr: TrustedHTML;
    };
    destination: {
      destinationIata: TrustedHTML;
      destinationIcao: TrustedHTML;
      destinationAr: TrustedHTML;
      destinationEn: TrustedHTML;
      destinationFr: TrustedHTML;
      destinationKa: TrustedHTML;
      destinationKz: TrustedHTML;
      destinationMk: TrustedHTML;
      destinationRu: TrustedHTML;
      destinationTr: TrustedHTML;
    };
  };
}

export interface ISchedule {
  data: {
    currentTime: string;
    flights: IFlight[];
  };
}

export type ICities = Set<TrustedHTML>;
