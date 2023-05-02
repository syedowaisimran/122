import { useState } from "react"

function Products(){
const{data,setdata} = useState();
    const api = ('https://fakestoreapi.com/products/1')
    axios.get(api).then((res)=>{
        console.log(...res.data)
        setdata(res.data)
    }).then((err)=>{
        console.log(err)
    })
    return (
        <>
        {

            data.map((e, i) => (
                <div>
                    <p>
                        {e.body}

                    </p>
                </div>
            ))
        }

        </>
    )

}
 export default Products