import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import $ from 'jquery';
import backgroundimage from '../../../../assets/img/background-part.png';
import productimage1 from '../../../../assets/img/image-4.png';
import productimage2 from '../../../../assets/img/image-5.png';

var sectionStyle = {
    backgroundImage: 'url(' + backgroundimage + ')'
};


$("[data-toggle=dropdown]").click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    let el = $(this);
    let expanded = el.attr("aria-expanded") || false;
    if (!expanded) {
        $(this).dropdown('toggle');
    }

    el.attr("aria-expanded", !expanded);
})


const Cart = () => {

    return (
        <Dropdown className="nav-item dropdown d-none d-sm-flex">
            <Dropdown.Toggle className="dropdown-toggle btn btn-link active" id="navbarDropdown3" variant="link" >
                <i className="material-icons">local_mall</i>
                <span className="counter-small bg-danger" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-center no-defaults pt-0 overflow-hidden" aria-labelledby="navbarDropdown3">
                <div className="position-relative text-center rounded">
                    <div className="background h-150" style={sectionStyle}></div>
                    <div className="pt-4 pb-5 text-white">
                        <h5 className="font-weight-normal">Your Cart</h5>
                        <p>Checkout your cart items</p>
                        <br />
                    </div>
                </div>
                <div className="row mx-0 top-60 z-2">
                    <div className="col-12 mx-auto">
                        <ul className="list-group list-group-flush bg-white rounded shadow overflow-hidden mb-3">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-auto pr-0 align-self-center">
                                        <figure className="product-image-small mb-0"><img src={productimage1} alt="adminux pro" className="vm" /></figure>
                                    </div>
                                    <div className="col">
                                        <a href="fake_link" className="text-dark mb-1 d-block">Computer</a>
                                        <h6 className="text-success font-weight-normal mb-0">$ 120.00</h6>
                                        <a href className="text-danger">Remove</a>
                                    </div>
                                    <div className="col-auto align-self-center">
                                        <input type="text" className="form-control py-0 form-control-sm w-35" placeholder defaultValue={1} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-auto pr-0 align-self-center">
                                        <figure className="product-image-small mb-0"><img src={productimage2} alt="adminux pro" className="vm" /></figure>
                                    </div>
                                    <div className="col">
                                        <a href="fake_link" className="text-dark mb-1 d-block">Table Fan</a>
                                        <h6 className="text-success font-weight-normal mb-0">$ 120.00</h6>
                                        <a href className="text-danger">Remove</a>
                                    </div>
                                    <div className="col-auto align-self-center">
                                        <input type="text" className="form-control py-0 form-control-sm w-35" placeholder defaultValue={1} />
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item text-center">
                                <a classNam="text-primary" href='#' onClick={e => e.preventDefault()}>+5 more</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Dropdown.Item className="border-top" onClick="e.preventDefault(); e.stopPropagation();">
                    <div className="row">
                        <div className="col-auto">
                            <span className="avatar avatar-30 material-icons text-template-primary">local_activity</span>
                        </div>
                        <div className="col px-0">
                            <div className="form-group mb-0 float-label active">
                                <input type="text" className="form-control form-control-sm" required placeholder="Coupan Code" />
                            </div>
                        </div>
                        <div className="col-auto">
                            <Button variant="primary" size="sm" className="px-0 text-white"><i className="material-icons md-18">arrow_forward</i></Button>
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item className="border-top">
                    <div className="row ">
                        <div className="col-4">
                            <p className="text-secondary mb-1 small">Sub Total</p>
                            <h6 className="mb-0">$540.00</h6>
                        </div>
                        <div className="col-4 px-0 text-center">
                            <p className="text-secondary mb-1 small">Tax</p>
                            <h6 className="mb-0">$40.00</h6>
                        </div>
                        <div className="col-4 text-right">
                            <p className="text-secondary mb-1 small">Discount</p>
                            <h6 className="mb-0">-$100.00</h6>
                        </div>
                    </div>
                </Dropdown.Item >
                <Dropdown.Item className="border-top text-center">
                    <p className="text-secondary my-1">Net Payable</p>
                    <h3 className="mb-0">$400.00</h3>
                    <a href="fake_link" className="btn btn-primary text-white btn-block mt-3"><span>Checkout</span><i className="material-icons md-18">arrow_forward</i></a>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

}

export default Cart;