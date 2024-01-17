import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const url = 'https://fakestoreapi.com/products';

const Ex4 = (props) => {
  const [products, setProducts] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const getProducts = async () => {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
    const endOffset = offset + props.itemsPerPage;
    const data = products.slice(offset, endOffset);
    setCurrentItem(data);
    const pCount = Math.ceil(products.length / props.itemsPerPage);
    setPageCount(pCount);
  }, [products, offset, props.itemsPerPage]);

  const handler = (e) => {
    console.log('item = ', e.selected);
    const newOffset = e.selected * props.itemsPerPage;
    setOffset(newOffset);
  };

  if (!products || products.length === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3 className="display-3 text-secondary">No Products.. Server error</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        {/* ... (your existing code) */}
        <div className="row">
          <div className="col text-center">
            <h5 className="display-3">
              useEffext Hook
            </h5>
            <p className="text-secondary">
              useEffect is a tool that lets us interact with the outside world but not affect rendering or performance of the component that it's in.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          {
            currentItem && currentItem.map((item, index) => {
              return (
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4" key={index}>
                  <div className="card">
                    <img src={item.image? item.image : '#'} alt="no product" className='img-fluid p-2' />
                    <div className="card-body">
                      <h5 className="text-success text-center">{item.title}</h5>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <b>Price</b> <span className="float-end text-success">&#8377; {item.price}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6 offset-lg-3 offset-xl-3 offset-xxl-3 col-xl-6 col-xxl-6">
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
            ></ReactPaginate>
          </div>
        </div>
      </div>
    );
  }
};

export default Ex4;
