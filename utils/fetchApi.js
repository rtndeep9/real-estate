import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'eb0df4c97bmsh71b28cb8d58da13p1ad851jsn6e31328d1ec3'
          }
    })

    return data
}