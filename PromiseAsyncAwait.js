async function queue() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return 23;
  }
  
  function show() {
    queue().then(result => console.log(result));
    // shows 23 after 2 second
  }
  
  show();