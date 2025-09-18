import React, { useRef } from "react";
import Card from "./Card";

function Forground() {
const ref=useRef(null);

  const data = [
    {
      desc: "This is a Data given by Programmer.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "greeen" },
    },
    {
      desc: "This is a Data given by Programmer.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "This is a Data given by Programmer.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
     {
      desc: "This is a Data given by Programmer.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "greeen" },
    },
    {
      desc: "This is a Data given by Programmer.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "This is a Data given by Programmer.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index)=>(
        <Card data={item} refrence={ref} />
      ))}
    </div>
  );
}

export default Forground;
