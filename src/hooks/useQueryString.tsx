import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useQueryString = ({
  paramsKey,
  queryInclude,
}: {
  paramsKey: string;
  queryInclude: string;
}) => {
  const params = useSearchParams();
  const newSearchParams = new URLSearchParams(params || undefined);

  const router = useRouter();
  const pathname = usePathname();
  const url = pathname?.includes(queryInclude) ? pathname : `${pathname}/search`;

  const onEventQueryString = (value: string) => {
    newSearchParams.set(paramsKey, value);
    router.push(`${url}?${newSearchParams.toString()}`);
  };

  return onEventQueryString;
};
export default useQueryString;
