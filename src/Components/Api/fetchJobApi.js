import axios from 'axios';

const base_url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
//const base_url=''

export const fetchJobApi = async (params, page) => {
    try {
        const request = await axios.get(base_url, {params: { markdown: true, page : page, ...params}});
        const { data: response } = request;
        console.log('from api --->', response)
        return response
        
      } catch (error) {
        console.log(error);
        return false;
      }

}

// message: 'Having issue communicating with the server.'