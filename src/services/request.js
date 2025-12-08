import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const countryApi =
  import.meta.env.VITE_COUNTRY_URL ||
  "https://restcountries.com/v3.1/all?fields=name,flags,cca2";

export const useCountryFlagAndNames = () => {
  return useQuery({
    queryKey: ["countryData"],
    queryFn: async () => {
      const response = await axios.get(countryApi);
      return response.data;
    },
    onError: (error) => {
      console.error("Error fetching country data:", error);
    },
    staleTime: 1000 * 60 * 60, // optional: cache for 1 hour
  });
};
