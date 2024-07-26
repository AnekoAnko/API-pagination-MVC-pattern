import axios from 'axios';

export const paginate = async(req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    const startIndex = (page - 1) * limit
    const endIndex = page * limit;

    const result = {}
    result.posts = (response.data).slice(startIndex, endIndex);
    result.length = (response.data).length

    res.json(result);
}
