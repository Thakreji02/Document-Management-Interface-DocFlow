import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data,refrence }) {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale: 1.1}} className="relative w-50 h-62 rounded-[30px] bg-zinc-900/90 text-white py-8 px-5 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold w-50">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 px-5 mb-1 text-xs">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".9em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex text-center justify-center`}
          >
            <h3 className="text-sm font-thin">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
