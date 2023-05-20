import axios from 'axios';
import queryString from 'query-string';

import { IParams } from '../types';

export const getEndpoint = <Params = IParams>(endPoint: string, params: Params): string => {
  return endPoint + (params ? '?' + queryString.stringify(params) : '');
};

export const fetchData = <T, Params = IParams>(endPoint: string, params: Params): Promise<T> =>
  axios.get(getEndpoint(endPoint, params)).then((res) => res.data);
