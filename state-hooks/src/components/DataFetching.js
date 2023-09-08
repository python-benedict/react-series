import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState('')
    useEffect(()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                setPosts(res.data)
            })
            .catch(err=>{console.log(err)})
    })
  return (
    <div>
        <ul>
            {
                posts.map(okay=>(<li key={okay.id}>{okay.title}</li>))
            }
        </ul>
    </div>
  )
}

export default DataFetching