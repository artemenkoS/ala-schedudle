export interface ICity {
  endPoints: {
    schedule: string;
  };
  name: string;
  routeId: string;
}

export interface IParams {
  [key: string]: string | number;
}
