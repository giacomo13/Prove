let book = {
    author:'Giacomo',
    title: 'Volo',
    pages: 13,
  };
  
  let book2 = Object.assign({},book); //creo una copia dell'oggetto
  let book3 = book; //copio il riferimento: se modifico book3, modifico anche book!

  let v = [1,2,3]; 
  let v2 = Array.from(v); //creo una copia dell'array
  let v3 = v; //copio il riferimento all'array: se modifico v3, modifico anche v!

  v3.push(4);
  console.log(v);