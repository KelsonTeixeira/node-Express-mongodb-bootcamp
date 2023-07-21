const superagent = require(`superagent`);

const getValues = () => {
  const request1 = superagent.get('https://dog.ceo/api/breeds/image/random');
  const request2 = superagent.get('https://dog.ceo/api/breeds/image/random');
  const request3 = superagent.get('https://dog.ceo/api/breeds/image/random');
  return Promise.all([request1, request2, request3]);
}

const result = async () => {
  try {
    const x = await getValues();
    const imgs = x.map(item => item.body.message);
    console.log(imgs);
  } catch(err) {
    console.log(err);
  }
}

result();