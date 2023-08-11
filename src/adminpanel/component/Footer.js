import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="footer text-center pt-3" style={{position: 'fixed', bottom: 0,left: 0}}>
          <p style={{marginLeft: '280px'}}>Copyright © 2023 Designed by Iwebro. All rights reserved.<br />
              Distributed By: <a href="/">Iwebro</a>
          </p>
        </div>
      </div>  
    </>
  )
}

export default Footer;