import axios from 'axios';

const searchImages = async (term) =>{
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
        Authorization: 'Client-ID CPZdyPsAa1_XD1CSngS4h2gdnPJtOT8sEZX4Fd-O9VE'
    },
    params:{
       query: term,
    }
});

console.log(response.data.results);
return response.data.results;

}

export default searchImages;