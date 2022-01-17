import React from 'react';

const bgimg = {
  background: `linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center`,
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
};

const removeOutline = {
  boxShadow: 'none',
  width: '80%',
};
export default function Register() {
  return (
    <div className='container' style={bgimg}>
      <div className='row justify-content-center mt-5'>
        <div className='col-lg-4 col-md-6 col-sm-6'>
          <div className='card shadow'>
            <div className='card-title text-center border-bottom my-4'>
              <h2 className='p-3'>Sign Up</h2>
            </div>
            <div className='card-body'>
              <form>
                <div className='d-flex justify-content-center'>
                  <input
                    type='text'
                    className='form-control border border-dark p-2 far fa-user'
                    placeholder='Fullname'
                    id='fullname'
                    style={removeOutline}
                  />
                </div>
                <div className='d-flex justify-content-center my-4'>
                  <input
                    type='email'
                    placeholder='Email'
                    className='form-control border border-dark p-2'
                    id='email'
                    style={removeOutline}
                  />
                </div>
                <div className='d-flex justify-content-center my-4'>
                  <input
                    type='password'
                    placeholder='Password'
                    className='form-control border border-dark p-2'
                    id='password'
                    style={removeOutline}
                  />
                </div>
                <div className='d-flex justify-content-center my-2'>
                  By creating an account, I consent to the processing of my
                  personal data in accordance with the
                  <strong> PRIVACY POLICY. </strong>
                </div>
                <div className='d-flex justify-content-center'>
                  <button type='submit' className='btn btn-success w-50'>
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
