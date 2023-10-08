import { defineStore } from 'pinia'
import { ref } from 'vue'

function getSavedArticles() {
  try {
    return JSON.parse(window.localStorage.getItem('savedArticles')) || []
  } catch (error) {
    console.log('ошибка при получении данных из хранилища:', error);
    return []
  }
}

export const useSavedArticlesStore = defineStore('savedArticles', () => {
  const savedArticles = ref(getSavedArticles());

  function saveArticle(article) {
    const saved = getSavedArticles();
    saved.push(article);
    window.localStorage.setItem('savedArticles', JSON.stringify(saved));
    savedArticles.value = saved;
  }

  function removeSavedArticle(id) {

    const res = savedArticles.value.filter((article) => { return article.article_id !== id })
    window.localStorage.setItem('savedArticles', JSON.stringify(res));
    savedArticles.value = res;
  }

  function isSaved(id) {
    const res = savedArticles.value.some((article) => {
      return article.article_id === id
    })
    return res
  }

  return { savedArticles, saveArticle, removeSavedArticle, isSaved }
})