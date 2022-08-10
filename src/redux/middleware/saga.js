import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { get_products } from '../actions/actionType'
import { setProducts } from '../actions/productAction'

function* getProducts () {
    try {
        const response = yield axios.get('https://fakestoreapi.com/products')
        yield put(setProducts(response.data))
    }
    catch (e) {
        console.log('erroor',e);
    }
}
function* productSaga (){
    yield takeEvery(get_products, getProducts)
}

export default productSaga;