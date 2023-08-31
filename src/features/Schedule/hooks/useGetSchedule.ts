import { useQuery } from '@tanstack/react-query';

import { fetchData } from '../../../services';
import { IParams } from '../../../types';

export const useGetSchedule = <Response, Params extends IParams>(
  endPoint: string,
  params: Params,
  queryKey: string[]
) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['flightLeg', ...Object.values(params), ...queryKey],
    queryFn: () => fetchData<Response, Params>(endPoint, { ...params, _: Date.now() }),
    keepPreviousData: false,
    refetchInterval: 10000,
    cacheTime: 0,
  });

  return {
    isLoading,
    isError,
    data,
  };
};
