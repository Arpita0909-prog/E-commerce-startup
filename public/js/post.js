const onSubmitHandler = (event) => {
    event.preventDefault();
    const productName = event.target.productName.value;
    const obj = { productName: productName };

    axios.post('http://localhost:3000'+"/products", obj).then((result) => {
        console.log('value returned from post request '+ result.data.value);
    })
}