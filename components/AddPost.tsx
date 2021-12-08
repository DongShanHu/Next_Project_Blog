
import * as React from 'react'
import { IPost } from '../types'
 
//set the type IPost on the useState Hook. Then, we use it to handle the form data. Once the form is submitted, we rely on the function savePost to save the data on the array of posts.

type Props={
  savePost:(e:React.FormEvent,formData:IPost)=>void
}
const AddPost:React.FC<Props>=({savePost})=>{
const [formData,setformData]=React.useState<IPost>()

const handleForm=(e:React.FormEvent<HTMLInputElement>):void=>{
  setformData({
    ...formData,
    [e.currentTarget.id]: e.currentTarget.value,
  })
}

  return (
    <form className="Form" onSubmit={(e)=>savePost(e, formData)}>
<div>
  <div className='Form--field'>
  <label htmlFor='name'>Title</label>
<input onChange={handleForm} type="text" id='title'/>
    </div>
    <div className='Form--field'>
          <label htmlFor='body'>Description</label>
          <input onChange={handleForm} type='text' id='body' />
        </div>
</div>
<button className='form_button' disabled={formData===undefined? true:false}>
  Add Post
</button>
    </form>
   
    )
}


export default AddPost
