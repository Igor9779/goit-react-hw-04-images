import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
    key: '39447976-bb9febf941536927394451e56',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12
}

export const fetchPhotos = async (query, page) => {
    const { data } = await axios.get(`?q=${query}&page=${page}`);
    return data;
};