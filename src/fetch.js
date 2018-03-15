export const fetchReposByTheStars = () => {
    return fetch('https://api.github.com/search/repositories?q=language:javascript&stars:top')
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
}
