const request = async (method, url, body = null) => {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : body,
  };

  const res = await fetch(url, config);

  const { status } = res;

  const data = await res.json();

  return { status, data };
};

export default request;
