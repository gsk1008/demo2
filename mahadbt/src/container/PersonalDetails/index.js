import React from "react";
import style from './PersonalDetails.module.scss';
import Dashboard from "../../component/Dashboard";
import TopSession from "../../component/TopSession";


const PersonalDetails = () => {
    return (
        <>
            <div>
                <TopSession />
            </div>
            <div>
                <div className="row">
                    <div className="col-lg-3">
                        <Dashboard />
                    </div>
                    <div className="col-lg-9">
                        <ul className={style.heaing}>
                            <li><a href="#"><h6>Personal<br /><span style={{ margin: '0px -16px' }}>Information</span><br /><i class="fa-solid fa-user"></i></h6><br /></a></li>
                            <li><a href="#"><h6>Personal<br /><span style={{ margin: '0px -16px' }}>Information</span><br /><i class="fa-solid fa-address-book"></i></h6><br /></a></li>
                            <li><a href="#"><h6>Personal<br /><span style={{ margin: '0px -16px' }}>Information</span><br /><i class="fa-solid fa-circle-info"></i></h6><br /></a></li>
                            <li><a href="#"><h6>Personal<br /><span style={{ margin: '0px -16px' }}>Information</span><br /><i class="fa-solid fa-book"></i></h6><br /></a></li>
                            <li><a href="#"><h6>Personal<br /><span style={{ margin: '0px -16px' }}>Information</span><br /><i class="fa-solid fa-graduation-cap"></i></h6><br /></a></li>
                            <li><a href="#"><h6>Personal<br /><span style={{ margin: '0px -16px' }}>Information</span><br /><i class="fa-solid fa-house-chimney"></i></h6><br /></a></li>
                        </ul>
                        {/* This is the form session */}
                        <div className="card " style={{ width: '90%' }}>

                            <div style={{ width: '20%', position: 'relative' }}>
                                <h5 style={{ background: 'lightblue', padding: '10px', position: 'absolute', top: '-20px', borderRadius: '10px', left: '15px' }}>PersonalDetails</h5>
                            </div>

                            <div className="card-body">
                                <form>
                                    <label style={{ margin: '10px 0px' }}>Aadhaar Number</label><br />
                                    <input type="text" placeholder="xxxxxxxxx" style={{ width: '50%' }} />
                                    <button className="btn btn-danger ms-5">Update Profile as per Aadhaar</button><br />

                                    <label style={{ margin: '10px 0px' }}>Name<span style={{ color: 'red' }}>*</span></label><br />
                                    <input type="text" style={{ width: '50%' }} />

                                    {/* <div className="alert alert-success alert-bs-dismisible">
                                    <h6>Not: if you enter/change the Email Id then verification is mandatory and OTP will send to enteed Email ID.</h6>
                                    <button className="btn-close" ></button>
                                </div>
                                 */}

                                    <div class="alert alert-danger alert-dismissible  fade show mt-4" role="alert" style={{height:'10px' , marginTop:'10px', fontSize:'15px'}}>
                                    <p style={{marginTop:'-10px'}}> <span class="fw-bold">Not :</span> If you enter/change the mail ID then verification is mandatory and OTP will send to enteed Email ID.
                                        <button type="button" class="btn-close " style={{fontSize:"12px", marginTop:'-10px'}} data-bs-dismiss="alert" aria-label="Close"></button>
                                        </p>
                                    </div>

                                    <label  style={{ margin: '10px 0px' }}>Email ID </label><br/>
                                    <input type="emial"  style={{ width:'50%'} }/>
                                    <button className="btn btn-success ms-5" style={{borderRadius:'20px'}}><i class="fa-solid fa-check"></i>  Email ID Verified</button>

                                    <div class="alert alert-danger alert-dismissible  fade show mt-4" role="alert" style={{height:'10px' , marginTop:'10px', fontSize:'15px'}}>
                                    <p style={{marginTop:'-10px'}}> <span class="fw-bold">Not :</span> If you enter/change the mail ID then verification is mandatory and OTP will send to enteed Email ID.
                                        <button type="button" class="btn-close " style={{fontSize:"12px", marginTop:'-10px'}} data-bs-dismiss="alert" aria-label="Close"></button>
                                        </p>
                                    </div>

                                    <label  style={{ margin: '10px 0px' }}>Mobile</label><br/>
                                    <input type="number"  style={{ width:'50%'} }/>
                                    <button className="btn btn-success ms-5" style={{borderRadius:'20px'}}><i class="fa-solid fa-check"></i>  Mobile Number Verified</button>

                                    <div className="row mt-4">
                                        <div className="col-md-4">
                                    <label>Date of Birth (as per Aadhaar)</label>

                                            <input type="date" style={{width:'100%'}}/>
                                        </div>
                                        <div className="col-md-4 ">
                                    <label>Age</label>

                                        <input type="text" style={{width:'100%'}}/>

                                        </div>
                                        <div className="col-md-4">
                                    <label>Gender</label>

                                        <input type="text" style={{width:'100%'}}/>

                                        </div>

                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-md-4">
                                    <label>Application Full Name<span style={{color:'red'}}>*</span></label>

                                            <input type="date" style={{width:'100%'}}/>
                                        </div>
                                        <div className="col-md-4 ">
                                    <label>Present Guardian Mobile No <span style={{color:'red'}}>*</span></label>

                                        <input type="text" style={{width:'100%'}}/>

                                        </div>
                                        <div className="col-md-4">
                                    <label>Mertial Status<span style={{color:'red'}}>*</span></label><br/>

                                        <input type="radio"/>Married<br/>
                                        <input type="radio"/>UnMarried<br/>
                                        <input type="radio"/>Divorcee



                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default PersonalDetails;