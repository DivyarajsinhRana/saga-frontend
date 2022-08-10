import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from './redux/actions/productAction';
const App = () => {
    const state = useSelector((state) => state.product.product)
    console.log('products..???', state);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts());
    }, [])
    return (
        <div>
            {
                state.lenght === 0 ? <div>No record found</div> :
                    <div>
                        {
                            state.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <span>{item.id}</span>{".  "}
                                        <span>{item.title}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}
export default App;