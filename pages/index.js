import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";


export default function Home() {

  const [bookFile, setBookFile] = useState(null)
  const [magazineFile, setMagazineFile] = useState(null)
  const [authorFile, setAuthorFile] = useState(null)

  return (
    <div className="flex flex-col justify-center pt-12 content-center">
      <h1 className="text-lg font-bold text-center">Welcome to Library</h1>
      <h2 className="text-md font-semibold text-center">
        You can browse through the books and magazines
      </h2>
      {/* <h3 className="text-md font-semibold pt-16 px-16">
        Use these to upload files:-{" "}
      </h3>

      <div className="px-12">
        <div className="pt-2">
          <label htmlFor="books">Upload Book data: </label>
          <input id="books" type="file" accept=".csv"/>
          
        </div>

        <div className="pt-2">
          <label htmlFor="magazine">Upload Magazine data: </label>
          <input id="magazine" type="file" accept=".csv" />
         
        </div>

        <div className="pt-2">
          <label htmlFor="author">Upload Author data: </label>
          <input id="author" type="file" accept=".csv" />
        </div>
      </div> */}
    </div>
  );
}
