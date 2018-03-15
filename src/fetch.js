export const fetchTopReposByLanguage = (language) => {
    return fetch(`https://api.github.com/search/repositories?q=language:${language}&stars:top&per_page=50`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else throw new Error('Error while fetching' + response.statusText);
        })
        .then(data => {
            const repos = data.items.map(item => ({
                name: item.name,
                url: item.html_url,
                stars: item.stargazers_count
            }))
            return repos;
        })
        .catch(err => console.error(err));
};

export const fetchProfileByName = (url) => {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else throw new Error('Error while fetching' + response.statusText);
        })
        .then(data => {
            return data;
        })
        .catch(err => console.error(err));
};
