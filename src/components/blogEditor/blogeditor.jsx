import React, {useRef , useState} from 'react'
import './blogeditor.css'
import JoditEditor from 'jodit-react';

const Blogeditor = () => {
   const editor = useRef(null);
	const [content, setContent] = useState('');
   return (
      <div className=' container texteditor'>
         <div className=" texteditor__container">
            <form className="texteditor__content">
               <div className="texteditor__contnent-title">
                  <label htmlFor="title">Post Title</label>
                  <input
                     type="text"
                     name="title"
                     id="title"
                     placeholder='Type Here....' required />
               </div>

               <div className="texteditor__contnent-context">
                  <label htmlFor="context">Post Content</label>
                  {/* <textarea name='context'  id='context' rows='30' placeholder='Message' required></textarea> */}
                  <JoditEditor
                     ref={editor}
                     value={content}
                     // config={config}
                     tabIndex={1} // tabIndex of textarea
                     onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                     onChange={newContent => {setContent(newContent) }}
                  />
               </div>

               <div className="texteditor__contnent-category">
                  <label htmlFor="category">Post Category</label>
                  <select id='category' required>
                     <option>Select option..</option>
                     <option value="Programming">Programming</option>
                     <option value="Web Development">Web Development</option>
                     <option value="Software Development">Software Development</option>
                  </select>
               </div>

               <div className="postButton">
                  <button className="btn submitPost">Create  Post</button>
                  <button className="btn btn-primary resetPost">Reset Content</button>
               </div>

            </form>
         </div>
      </div>
   )
}

export default Blogeditor