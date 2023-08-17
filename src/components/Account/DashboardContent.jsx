function DashboardContent() {
    return ( 
        <div className="tab-pane fade" id="ltn_tab_1_1">
            <div className="ltn__myaccount-tab-content-inner">
                <p>Hello <strong>UserName</strong> (not <strong>UserName</strong>? <small><a href="login.html">Log out</a></small> )</p>
                <p>From your account dashboard you can view your <span>recent orders</span>, manage your <span>shipping and billing addresses</span>, and <span>edit your password and account details</span>.</p>
            </div>
        </div>
     );
}

export default DashboardContent;