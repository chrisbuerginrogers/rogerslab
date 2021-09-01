// get file id from url on google drive
// @param {object} url
// @returns {string} id
export default function fileIdFrom(url) {
    const stringUrl = url.toString();
    const id = stringUrl.split('/').slice(-2)[0];
    return id;

    /** use the code below if you want to return {object} id
    *  let id = url.href.match(/([a-z0-9_-]{25,})[$/&?]/i); // find a minimum 25 straight chars (w/o a dot in between, etc)
    *  return id[1];
    */
}

// generate url for images from file id
export function getImageURL(image) {
    if (image.startsWith("http") && image.includes("drive.google.com")){
        let id = "";
        const url = new URL(image);
        id = fileIdFrom(url);
        return `https://drive.google.com/uc?id=${id}`;
    }else{
        return image;
    }
}