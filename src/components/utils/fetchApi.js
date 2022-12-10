import axios from "axios"



export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
const {data} = await axios.get((url), {
    headers: {
        'x-rapidapi-key': '8af211f0d0msh1ba262e8b153bf9p1ab5b9jsnfc7471960232',
        'x-rapidapi-host': 'bayut.p.rapidapi.com'
      }
} )

return data;
}