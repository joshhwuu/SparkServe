import * as React from "react";
import photo from "./photo.png"

function ProfilePage() {
  return (
    <div
      style={{
        backgroundColor: '#E9E9E9',
        height: '900px',
        width: '430px',
        gap: 30,
      }}
    >
      <Profile />
    </div>
  );
}

function Profile(props) {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            srcSet={photo}
            className="img"
          />
          <img
            loading="lazy"
            src={photo}
            className="img-2"
          />
          <span className="span">
            <div className="div-3">Louise, 16 </div>
            <div className="div-4">(she/her)</div>
          </span>
          <div className="div-5">
            <span className="span-2">Art Enthusiast</span>
            <span className="span-3">High School Student</span>
            <span className="span-4">Nature Lover</span>
          </div>
          <div className="div-6">📍Vancouver BC</div>
        </div>
      </div>
      <div>
        
      </div>
      <style jsx>{`
        .div {
          display: flex;
          max-width: 430px;
        }
        .div-2 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          display: flex;
          min-height: 665px;
          width: 100%;
          padding: 30px 49px 12px 17px;
        }
        .img {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .img-2 {
          aspect-ratio: 53.6;
          object-fit: contain;
          object-position: center;
          width: 268px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
        }
        .span {
          position: relative;
          align-self: stretch;
          display: flex;
          margin-top: 492px;
          justify-content: space-between;
          gap: 9px;
        }
        .div-3 {
          color: #e9e9e9;
          text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
          flex-grow: 1;
          flex-basis: auto;
          font: 700 40px Lexend, sans-serif;
        }
        .div-4 {
          color: #e9e9e9;
          text-shadow: 0px 5.043px 12.609px rgba(0, 0, 0, 0.5);
          margin: auto 0;
          font: 300 19px Poppins, sans-serif;
        }
        .div-5 {
          position: relative;
          align-self: stretch;
          display: flex;
          margin-top: 13px;
          gap: 10px;
          padding: 0 2px;
        }
        .span-2 {
          color: #fff;
          text-align: center;
          white-space: nowrap;
          justify-content: center;
          border-radius: 16.033px;
          border: 2.256px solid #fff;
          flex-grow: 1;
          padding: 5px 18px;
          font: 500 10px Poppins, sans-serif;
        }
        .span-3 {
          color: #fff;
          text-align: center;
          white-space: nowrap;
          justify-content: center;
          border-radius: 16.033px;
          border: 2.256px solid #fff;
          flex-grow: 1;
          padding: 5px 18px;
          font: 500 10px Poppins, sans-serif;
        }
        .span-4 {
          color: #fff;
          text-align: center;
          white-space: nowrap;
          justify-content: center;
          border-radius: 16.033px;
          border: 2.256px solid #fff;
          flex-grow: 1;
          padding: 5px 18px;
          font: 500 10px Poppins, sans-serif;
        }
        .div-6 {
          position: relative;
          color: #e9e9e9;
          text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
          align-self: stretch;
          margin-top: 11px;
          font: 400 18px Poppins, sans-serif;
        }
      `}</style>
    </>
  );
}

export default ProfilePage;
