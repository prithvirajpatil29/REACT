import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

 // 1.mount
  // useEffect(() => {},[])
  // 2. update
  // useEffect(() => {},[dependencies])
  //  3. Unmount
  // useEffect(() => {
  //   return () => {}
  // },[])
const Ex3 = (props) => {
  const [posts, setPosts] = useState([]);
  //pagination states
  const [currentItem, setCurrentItem] = useState([]) // current filter data
  const [itemsoffset, setOffset] = useState(0) /// start index
  const [pageCount, setPageCount] = useState(0)
  const url = 'https://jsonplaceholder.typicode.com/posts'

  // useEffect => api call, intial values
  const getPost = async () => {
    await fetch(url).then(res => res.json()).then((out) =>{setPosts(out)
    console.log(out)
    })
    .catch(err => console.error(err));
  }
  useEffect(() => {
    getPost()
    const endoffSet = itemsoffset + props.itemsPerPage
    const data = posts.slice(itemsoffset, endoffSet);
    setCurrentItem(data);
    const pCount = Math.ceil(posts.length/props.itemsPerPage)
    setPageCount(pCount)
  },[posts])

  // page click handler, e event
  const handler = (e) => {
    console.log('item', e.selected);
    const newOffset = Number(e.selected * props.itemsPerPage) % posts.length
    console.log('newoffset', newOffset)
    setOffset(newOffset)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h5 className="display-3">useEffect Hook</h5>
          <p className="text-secondary">
            useEffect is a tool that lets us interact with the outside world but not affect the rendering or performaces of the component that it's in.
          </p>
          <p className="text-secondary">that gets trigger for componentdidmount, componentdidupdate and componentwillunmount lifecycle</p>
        </div>
      </div>
      <hr />
      <div className="row">
        {
          currentItem && currentItem.map((item, index) => {
            return <div className="col-xs-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" key={index}>
              <div className="card my-2">
                <div className="card-header">
                  {item.id} {item.title}
                </div>
                <div className="card-body">
                  <p className="text-success ">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          })
        }
      </div>
      <div className="row my-3">
        <div className="col-xs-12 col-sm-12 offset-md-3 col-md-4 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
          <ReactPaginate 
            pageCount={pageCount}  
            className='pagination'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            activeClassName='active'
            activeLinkClassName='active'
            onPageChange={handler}
            >

          </ReactPaginate>
        </div>
      </div>
    </div>
  )
}

export default Ex3