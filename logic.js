requestAnimationFrame(async () => {
  let req = await fetch('https://www.stromberg-api.de/api/quotes');
  let data = await req.json();
  let index = Math.floor(Math.random()*data.length);

  const id = data[index].id;
  const quote = data[index].quote;
  const name = data[index]?.character?.name || 'Unbekannt';

  const shareData = {
    title: `Zitat #${id}`,
    text: `${quote}\n${name}`,
    url: `http://192.168.178.205:5500/${id}`
  }

  document.querySelector('#id').addEventListener('click', async () => {
    alert(navigator.canShare)
    await navigator.share(shareData)
  });
  document.querySelector('#id').innerHTML = '#' + id;
  document.querySelector('#quote').innerHTML = quote;
  document.querySelector('#name').innerHTML = name;
})

