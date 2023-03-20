import axios from 'axios';

const allProducts = async (state) => {
     const petition = await axios.get('https://localhost:7017/Product/GetProduct')
     state(petition.data)
}

export {
    allProducts
}