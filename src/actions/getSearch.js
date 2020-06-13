import axios from "axios";

const getSearch = (params) => {
    let url;
    if (params.category) {
        url = `${process.env.REACT_APP_HOST}/data/search/${params.category}.json`;
    } else {
        url = `${process.env.REACT_APP_HOST}/data/articles.json`;
    }

    axios.get(url)
        .then(res => {
            if (params.setResult) {
                params.setResult(res.data);
            }
        })
        .catch(_ => {
            if (params.setResult) {
                params.setResult([]);
            }
        });
}

export default getSearch