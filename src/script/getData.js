import categories from "../data/categories";


export async function getTopHeadlines(category = '', pageSize = 0, page = '') {
  const categoryQ = category ? '&category=' + category : '';
  const pageSizeQ = pageSize ? '&size=' + pageSize : '';
  const pageQ = page ? '&page=' + page : '';
  const response = await fetch(
    `https://newsdata.io/api/1/news?apikey=pub_301138a5ee5443f6926a07a6babe8461bf39d&country=ru&language=ru&${categoryQ}${pageSizeQ}${pageQ}`
  );

  const result = await response.json();
  if (result.status === 'success') {
    result.results.forEach(article => {
      const publishedAtLocal = new Date(article.pubDate).toLocaleDateString();
      article.publishedAtLocal = publishedAtLocal;
    });
    return {
      articles: result.results,
      totalResults: result.totalResults,
      nextPage: result.nextPage,
    };
  } else {
    return { message: result.results.message }
  }
}

export async function getTopHeadlinesInAllCategories(pageSize = 0) {
  let result = [];
  for (const category of categories) {
    const topHeadlines = await getTopHeadlines(category.name, pageSize);
    if (!topHeadlines.message) {
      result = [...result, ...topHeadlines.articles];
    }
  }
  return result;
}

export function saveArticle(article) {
  const savedArticles = getSavedArticles();
  savedArticles.push(article);
  window.localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
}

export function getSavedArticles() {
  return JSON.parse(window.localStorage.getItem('savedArticles')) || []
}
export function removeSavedArticle(id) {
  const savedArticles = getSavedArticles();
  const res = savedArticles.filter((article) => { article.article_id !== id })
  window.localStorage.setItem('savedArticles', JSON.stringify(res));
}

export function isSaved(id) {
  const savedArticles = getSavedArticles();
  const res = savedArticles.some((article) => {
    return article.article_id === id
  })
  return res
}