import axios from "axios";

const getArticle = (slug, setArticle) => {
  axios
    .get(`${process.env.REACT_APP_HOST}/data/articles/${slug}.json`)
    .then((res) => {
      if (setArticle) {
        setArticle(res.data);
      }
    });
};

export default getArticle;
