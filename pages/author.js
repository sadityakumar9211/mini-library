//fetching the book data at the build time
import Papa from "papaparse";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

export default function Authors() {
  const commonConfig = { delimiter: ";" };
  const [isLoading, setIsLoading] = useState(true);
  const [CSVData, setCSVData] = useState();


  function compare_to_sort(x, y) {
    if (x.email < y.email) return -1;
    if (x.email > y.email) return 1;
    return 0;
  }
  useEffect(() => {
    Papa.parse(
        "https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/authors.csv",
        {
          ...commonConfig,
          header: true,
          download: true,
          complete: (result) => {
            setCSVData(result.data);
            setIsLoading(false);
          },
        }
      );
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      {
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {CSVData && CSVData.map((data, index) => {
                  return data.email ? (
                    <tr>
                      <th>{index+1}</th>
                      <td>{data.email}</td>
                      <td>{data.firstname + " " + data.lastname}</td>
                    </tr>
                  ) : null;
                })}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
}
