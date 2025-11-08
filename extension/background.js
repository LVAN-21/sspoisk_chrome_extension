chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url && tab.url.includes('kinopoisk.ru')) {
    const newUrl = tab.url.replace(
      'https://www.kinopoisk.ru',
      'https://www.sspoisk.ru'
    );

    await chrome.tabs.update(tab.id, { url: newUrl });
  }
});