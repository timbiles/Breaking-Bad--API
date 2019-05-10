const request = async url => {
  try {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default request;
