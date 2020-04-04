// TODO: add and export your own actions

export function selectMessage(channel) {
  return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then((data) => {
      return {
        type: 'SELECT_MESSAGE',
        payload: data.messages
      };
    })
    .catch((error) => {
      console.log(error, 'error with the fetch !');
    }
    );
}

export function createMessage(channel, content, author) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`
  const body = { content: content, author: author };
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((data) => data.json())
    .then((body) => {
      return {
        type: 'CREATE_MESSAGE',
        payload: body
      };
    });
}
