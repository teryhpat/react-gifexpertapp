export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=mTzKmudJA96NtsbezI3g83M9sKVzg027&limit=10&q=${encodeURI(category)}`
    const res = await fetch(url);
    const { data } = await res.json();
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}