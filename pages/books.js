//fetching the book data at the build time
import Papa from "papaparse";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

export default function books() {
  const commonConfig = { delimiter: ";" };
  const [isLoading, setIsLoading] = useState(true);
  const [CSVData, setCSVData] = useState();

  const [searchText, setSearchText] = useState("");
  const [textType, setTextType] = useState("");

  function parseCSVData() {
    Papa.parse(
      "https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/books.csv",
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
  }

  function compare_to_sort(x, y) {
    if (x.title < y.title) return -1;
    if (x.title > y.title) return 1;
    return 0;
  }
  useEffect(() => {
    parseCSVData();
  }, []);


  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <select
        className="select w-full max-w-xs"
        onChange={(event) => {
          setTextType(event.target.value);
        }}
        value={textType}
      >
        <option selected>
          Search by
        </option>

        <option value="isbn">ISBN</option>

        <option value="email">author email</option>
      </select>
      <input
        type="text"
        placeholder={`search by ${textType}`}
        className="input input-bordered w-full max-w-xs"
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        value={searchText}
        disabled={textType === "email" || textType === "isbn" ? false : true}
      />
      {
        
        <div className="grid grid-cols-3 gap-4">
          {CSVData.filter((data) => {
            if (textType === "" || searchText.trim() == "") {
              return data;
            } else if (textType === "isbn") {
              return data.isbn && data.isbn.includes(searchText.toLowerCase());
            } else if (textType === "email") {
              return (
                data.authors && data.authors.includes(searchText.toLowerCase())
              );
            }
          }).sort(compare_to_sort).map((data) => {
            return data.isbn ? (
              <div className="card" key={data.isbn}>
                <div className="card-body">
                  <h2 className="card-title underline">{data.title}</h2>
                  <h3 className="card-subtitle">ISBN: {data.isbn}</h3>
                  <h3 className="card-subtitle badge badge-lg py-5">
                    {data.authors}
                  </h3>
                  <p className="card-text">{data.description}</p>
                </div>
              </div>
            ) : null;
          })}
        </div>
      }
    </div>
  );
}
