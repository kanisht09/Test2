import React from 'react';
const removeOutline = {
  boxShadow: 'none',
  width: '80%',
};
export default function Login() {
  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-lg-4 col-md-6 col-sm-6'>
          <div className='card shadow'>
            <div className='card-title text-center border-bottom my-4'>
              <h2 className='p-3'>Sign in</h2>
            </div>
            <div className='card-body'>
              <form>
                <div className='d-flex justify-content-center'>
                  <input
                    type='text'
                    className='form-control border border-dark p-2'
                    placeholder='username'
                    id='username'
                    style={removeOutline}
                  />
                </div>
                <div className='d-flex justify-content-center my-4'>
                  <input
                    type='password'
                    placeholder='password'
                    className='form-control border border-dark p-2'
                    id='password'
                    style={removeOutline}
                  />
                </div>
                <div className='d-flex justify-content-center'>
                  <button type='submit' className='btn btn-success w-50'>
                    Login
                  </button>
                </div>
                <div className='d-flex justify-content-center my-4'>
                  <a href='https://www.google.com/'> Forgot Password</a>
                </div>
                <div className='d-flex justify-content-center my-2'>
                  Don't have an account?&nbsp;
                  <a href='https://www.google.com/'>
                    <strong>Sign Up</strong>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
