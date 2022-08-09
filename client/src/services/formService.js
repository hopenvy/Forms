

export const getAll = () => {
    return fetch('https//www.toptal.com/developers/postbin/b/1660058096451-3346833195537', {
        method: 'GET',
    })
        .then(res => res.json())
};