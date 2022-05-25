const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  if(1=2){}
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
