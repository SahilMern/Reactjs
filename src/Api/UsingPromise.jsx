import { useEffect } from "react"

const UsingPromise = () => {

    useEffect(() => {
        const usingPromise =() =>{
        const res = fetch('https://dummyjson.com/products')
        res.then((res) =>{
            const data = res.json()
            return data
        })
        }
    }, [])
  return (
    <div>UsingPromise</div>
  )
}

export default UsingPromise