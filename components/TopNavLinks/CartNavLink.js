import React from 'react';

const bgImg = {
    background: 'url(assets/media/misc/bg-1.jpg)'
}

const CartNavLink = () => (

    <div className="kt-header__topbar-item dropdown">
        <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
			<span className="kt-header__topbar-icon"><i className="flaticon2-shopping-cart-1"></i></span>
		</div>

        <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl">
            <form>

                <div className="kt-mycart">
                    <div className="kt-mycart__head kt-head" style={bgImg}>
                        <div className="kt-mycart__info">
                            <span className="kt-mycart__icon"><i className="flaticon2-shopping-cart-1 kt-font-success"></i></span>
                            <h3 className="kt-mycart__title">My Cart</h3>
                        </div>
                        <div className="kt-mycart__button">
                            <button type="button" className="btn btn-success btn-sm" >2 Items</button>
                        </div>
                    </div> 

                    <div className="kt-mycart__body kt-scroll" data-scroll="true" data-height="245" data-mobile-height="200">
                        <div className="kt-mycart__item">
                            <div className="kt-mycart__container">
                                <div className="kt-mycart__info">
                                    <a href="#" className="kt-mycart__title">
                                        Samsung
                                    </a>
                                    <span className="kt-mycart__desc">
                                        Profile info, Timeline etc
                                    </span>
                                    <div className="kt-mycart__action">
                                        <span className="kt-mycart__price">$ 450</span>
                                        <span className="kt-mycart__text">for</span>
                                        <span className="kt-mycart__quantity">7</span>
                                        <a href="#" className="btn btn-label-success btn-icon">&minus;</a>
                                        <a href="#" className="btn btn-label-success btn-icon">&plus;</a>
									</div>
                                </div>
                                <a href="#" className="kt-mycart__pic">
									<img src="/assets/media/products/product9.jpg" title="" />
								</a>
                            </div>
                        </div>
                    </div>
                    <div className="kt-mycart__footer">
                        <div className="kt-mycart__section">
                            <div className="kt-mycart__subtitel">
                                <span>Sub Total</span>
                                <span>Taxes</span>
                                <span>Total</span>
                            </div>
                            <div className="kt-mycart__prices">
                                <span>$ 840.00</span>
                                <span>$ 72.00</span>
                                <span className="kt-font-brand">$ 912.00</span>
                            </div>
                        </div>
                        <div className="kt-mycart__button kt-align-right">
                            <button type="button" className="btn btn-primary btn-sm">Place Order</button>
                        </div>
					</div>
                </div>
            </form>
        </div>
    </div>

)

export default CartNavLink