const fatchData = async() => {
    const result = await fetch('https://newsapi.org/v2/top-headlines?country=de&apiKey=')
    const data = await result.json()
    console.log('data', data)

    for (let i = 0; i < data.articles.length; i++) {
        createArticle(data.articles[i])
    }
}

fatchData()

const createArticle = (article) => {

    const image = document.createElement('img')
    image.src = article.urlToImage

    const headline = document.createElement('h2')
    headline.innerHTML = article.title

    const content = document.createElement('p')
    content.innerHTML = article.content

    const time = document.createElement('p')
    time.innerHTML = article.publishedAt.split('T')[0]

    const link = document.createElement('a')
    link.href = article.url
    link.innerHTML = "READ MORE"
    link.target = "_blank"

    const container = document.createElement('article')
    const container2 = document.createElement('div')

    container.append(image, headline, content, container2)
    container2.append(time, link)

    document.querySelector('section').appendChild(container)
}