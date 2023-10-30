const images = require.context('/src/imgs', true);
const imageList = images.keys().map(image => images(image));


export default imageList;