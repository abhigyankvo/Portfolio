import "./sass/articles.css";
import { useState } from "react";
//import svg as react component
import { ReactComponent as React } from "../svg/React.svg";

function Article() {
  return (
    <div id="article-container">
      <div>
        <React />
      </div>
      <div>
        <h1>Article Title</h1>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab nam
          dolor magnam veniam aliquid illo voluptatum repudiandae labore
          similique rem, unde, animi pariatur? A est odit neque assumenda
          laborum.
        </p>
      </div>
      <div>
        <button>READ</button>
      </div>
    </div>
  );
}

export function Articles() {
  const [article, setArticle] = useState(0);
  const handleChange = (e) => {
    if (e != article) {
      setArticle(e);
      console.log(e);
    }
  };
  return (
    <div id="articles-container-wrapper">
      <div id="articles-container">
        <div id="articles-left">
          <div
            className="article-list"
            id={article == 0 ? "selected" : "unselected"}
            value={0}
            onClick={() => handleChange(0)}
          >
            Node
          </div>
          <div
            className="article-list"
            id={article == 1 ? "selected" : "unselected"}
            value={0}
            onClick={() => handleChange(1)}
          >
            React
          </div>
          <div
            className="article-list"
            id={article == 2 ? "selected" : "unselected"}
            value={0}
            onClick={() => handleChange(2)}
          >
            JavaScript
          </div>
          <div
            className="article-list"
            id={article == 3 ? "selected" : "unselected"}
            value={0}
            onClick={() => handleChange(3)}
          >
            Grpc
          </div>
        </div>
        <div id="articles-right">
          <Article />
        </div>
      </div>
    </div>
  );
}

{
  /* <div id="scene">
        <div id="left-zone">
          <ul class="list">
            <li class="item">
              <input
                type="radio"
                id="radio_The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)"
                name="basic_carousel"
                value="The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)"
                checked="checked"
              />
              <label
                class="label_strawberry"
                for="radio_The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)"
              >
                strawberry
              </label>
              <div class="content content_strawberry">
                <span class="picto"></span>
                <h1>strawberry</h1>
                <p>
                  The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/;
                  Fragaria × ananassa) is a widely grown hybrid species of the
                  genus Fragaria (collectively known as the strawberries)
                </p>
              </div>
            </li>
            <li class="item">
              <input
                type="radio"
                id="radio_A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."
                name="basic_carousel"
                value="A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."
              />
              <label
                class="label_banana"
                for="radio_A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."
              >
                banana
              </label>
              <div class="content content_banana">
                <span class="picto"></span>
                <h1>banana</h1>
                <p>
                  A banana is an edible fruit, botanically a berry, produced by
                  several kinds of large herbaceous flowering plants in the
                  genus Musa.
                </p>
              </div>
            </li>
            <li class="item">
              <input
                type="radio"
                id="radio_The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."
                name="basic_carousel"
                value="The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."
              />
              <label
                class="label_apple"
                for="radio_The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."
              >
                apple
              </label>
              <div class="content content_apple">
                <span class="picto"></span>
                <h1>apple</h1>
                <p>
                  The apple tree (Malus domestica) is a deciduous tree in the
                  rose family best known for its sweet, pomaceous fruit, the
                  apple. It is cultivated worldwide as a fruit tree, and is the
                  most widely grown species in the genus Malus.
                </p>
              </div>
            </li>
            <li class="item">
              <input
                type="radio"
                id="radio_The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."
                name="basic_carousel"
                value="The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."
              />
              <label
                class="label_orange"
                for="radio_The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."
              >
                orange
              </label>
              <div class="content content_orange">
                <span class="picto"></span>
                <h1>orange</h1>
                <p>
                  The orange (specifically, the sweet orange) is the fruit of
                  the citrus species Citrus × sinensis in the family Rutaceae.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div id="middle-border"></div>
        <div id="right-zone"></div>
      </div> */
}
