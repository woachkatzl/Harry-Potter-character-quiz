//Функция, чтобы fetch не завис навечно, в случае, если сервер станет unresponsive

function fetchWithTimeout(url, timeout = 1000) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), timeout)
    )
  ]);
}

export { fetchWithTimeout };