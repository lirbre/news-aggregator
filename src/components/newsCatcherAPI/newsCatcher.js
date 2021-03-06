var axios = require("axios").default;

const NewsCatcher = async (subject, lang) => {
    const apiKey = process.env.REACT_APP_NEWSCATCHER_API_KEY;

    var options = {
        method: 'GET',
        url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
        params: {q: subject, lang: lang, sort_by: 'relevancy', page: '1', media: 'True'},
        headers: {
            'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    };

    const res = await axios.request(options)
        .then(function (response) {
                console.log(response.data)
                return (response.data);
            }).catch(function (error) { 
                console.error(error);
        });
    return res;
}

export default NewsCatcher;