import "./sass/articles.css";
import { useState } from "react";
//import svg as react component
import { motion, AnimatePresence } from "framer-motion";

import { articleTitle, articleContent } from "../Components/articleData";
function Article({ selected }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={selected ? articleContent[selected].label : "empty"}
        id="article-container"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.15 }}
      >
        <div>{articleContent[selected].logo}</div>
        <div>
          <h2>{articleContent[selected].label}</h2>
        </div>
        <div>
          <p>{articleContent[selected].content}</p>
        </div>
        <div>
          <button>READ</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Articles() {
  const [selected, setSelected] = useState(0);
  const handleChange = (e) => {
    if (e != selected) {
      setSelected(e);
      console.log(e);
    }
  };
  return (
    <div className="wrapper" id="articles-container-wrapper">
      <div id="articles-container">
        <div id="articles-left">
          {articleTitle.map((title, index) => {
            return (
              <div
                key={title}
                className="article-list"
                id={selected === index ? "selected" : "unselected"}
                onClick={() => {
                  handleChange(index);
                }}
              >
                {selected === index ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
                {title}
              </div>
            );
          })}
        </div>
        <div id="articles-right">
          <Article selected={selected} />
        </div>
      </div>
    </div>
  );
}
