import { CSSProperties } from "react";

export type TApiData = string | null;

export default function ApiData({ data }: { data: TApiData }) {
  const dataStye: CSSProperties = data ? {} : { color: "red" };
  return (
    <>
      <span style={dataStye}>
        {data ? data : "Error getting data from API"}
      </span>
    </>
  );
}
