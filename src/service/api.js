import axios from 'axios';

// export function getImages(value) {
//   const options = {
//     params: {
//       key: '34262951-eeadf584ea4d5f3050a02718a',
//       q: value,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       per_page: 12,
//       page: 1,
//     },
//   };

//   const url = 'https://pixabay.com/api/';

//   return axios.get(url, options);
// }

export const getImages = async value => {
  const url = 'https://pixabay.com/api/';
  const options = {
    params: {
      key: '34262951-eeadf584ea4d5f3050a02718a',
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: 1,
    },
  };

  try {
    const response = await axios.get(url, options);
    // console.log('Response в Api: ', response);
    // console.log('Response.data в api: ', response.data);
    return response.data.hits;
  } catch (error) {
    console.log(error);
  }
};
