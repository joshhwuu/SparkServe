import React, { useCallback, useState, useEffect, useReducer } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@fontsource/poppins";
import { users } from '../data/userData'


// Experience.propTypes = {
//     imageUrl: PropTypes.any,
//     name: PropTypes.string,
//     pronouns: PropTypes.string,
//     location: PropTypes.string,
//     interests: PropTypes.arrayOf(PropTypes.string),
//     age: PropTypes.number
// };

function ProfilePage() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);

    const swipeButtons = ['rewind', 'no', 'yes', 'save'];

    const processLike = useCallback((data) => {
        generateRandomUser(data);
    }, []);

    const generateRandomUser = useCallback((data) => {
        const randomUser = data[Math.floor(Math.random() * data.length)];
        console.log(randomUser);
        setUser([randomUser])
        setData(data.filter(item => item.id !== randomUser.id));
    }, []);

    useEffect(() => {
        setData(users);
        console.log(users)
        generateRandomUser(users);
    }, []);

    if (data.length === 0) {
        return (
            <div style={{ backgroundColor: '#323C58', width: 430, height: 932, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Lexend', color: 'white' }}>
                <h1>there are no more users in your area</h1>
            </div>
        )
    }

    return (
        <div
            style={{
                backgroundColor: '#E9E9E9',
                height: '1500px',
                width: '430px',
                gap: 30,
                overflow: 'auto',
            }}
        >
            <Carousel useKeyboardArrows={true} showThumbs={false} selectedItem={0}>
                {user?.map((profile, index) => (
                    <div className="slide_profiles" key={index}>
                        <Profile
                            name={profile.first_name}
                            age={profile.age}
                            pronouns={profile.pronouns}
                            interests={profile.skills}
                            location={profile.location}
                            imageUrl={profile.imageUrl}
                        />
                    </div>
                ))}
                {user[0]?.experiences?.map((experience, index) => (
                    <div className="slide_experiences" key={index}>
                        <Experience
                            title={experience.title}
                            subtitle={experience.subtitle}
                            duration={experience.duration}
                            tags={experience.tags}
                            bullet_point={experience.bullet_point}
                            imageUrl={experience.imageUrl}
                        />
                    </div>
                ))}
            </Carousel>
            <div style={{ display: 'flex', gap: '25px', justifyContent:'center', alignItems:'center', marginTop: "10px" }}>
            {swipeButtons.map((image, index) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        key={index}
                        src={require('./../assets/' + image + '.png')}
                        alt={`Button ${index + 1}`}
                        onClick={() => processLike(data)}
                    />
                </div>
            ))}
        </div>
            <LowerMenu skills={user[0]?.skills} aboutMe={user[0]?.bio} openTo={user[0]?.open_to} vibes={user[0]?.vibe} />
        </div>
    );
}

function Profile({ name, age, pronouns, interests, location, imageUrl }) {
    return (
        <>
            <div className="div">
                <div className="div-2">
                    <img loading="lazy" src={imageUrl} className="img" alt={`profile-${name}`} />
                    <span className="span">
                        <div className="div-3">
                            {name}, {age}
                        </div>
                        <div className="div-4">({pronouns})</div>
                    </span>
                    <div className="div-5">
                        {interests.map((interest, index) => (
                            <span key={index} className="span-interest">
                                {interest}
                            </span>
                        ))}
                    </div>
                    <div className="div-6">{location}</div>
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
          align-self: start;
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
            text-align: left;
        }
        .span-interest {
            color: #fff;
            text-align: center;
            white-space: nowrap;
            justify-content: center;
            border-radius: 16.033px;
            border: 2.256px solid #fff;
            flex-grow: 1;
            padding: 5px 18px;
            font: 500 10px Poppins, sans-serif;
            margin-right: 5px;
        }
      `}</style>
    </>
  );
}

function Experience({ title, subtitle, duration, tags, bullet_point, imageUrl }) {
    return (
        <>
            <div className="div">
                <div className="div-2">
                    <img loading="lazy" src={imageUrl} className="img" alt={`experience-${title}`}/>
                    <div className="div-duration">({duration})</div>
                    <span className="span">
                        <div className="div-experience-title">
                            {title}
                        </div>
                    </span>

                    <div className={"div-5"}>
                        <div className="div-subtitle">
                            {subtitle}
                        </div>
                    </div>


                    <div className="div-5">
                        {tags.map((tag, index) => (
                            <span key={index} className="span-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="div-bullet-point">{bullet_point}</div>
                </div>
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
                    align-self: start;
                    display: flex;
                    margin-top: 472px;
                    justify-content: space-between;
                    gap: 9px;
                }

                .div-experience-title {
                    /* Babysitter */

                    width: 400px;
                    height: 40px;

                    color: #E9E9E9;

                    /* shadow */
                    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

                    /* Inside auto layout */
                    flex: none;
                    order: 0;
                    flex-grow: 0;

                    font: 700 40px Lexend, sans-serif;

                    text-align: left;
                }

                .div-duration {
                    position: absolute;
                    left: 70%;
                    right: 3.95%;
                    top: 8.12%;
                    bottom: 87.37%;
                    max-width: 150px;
                    font: 700 24px Lexend, sans-serif;
                    color: #E9E9E9;
                    text-shadow: 0px 2.41135px 6.02837px rgba(0, 0, 0, 0.5);

                }

                .div-subtitle {
                    /* Freelance */

                    width: 400px;
                    height: 23px;

                    font: 400 15px Poppins, sans-serif;
                    /* identical to box height */

                    color: #FFFFFF;


                    /* Inside auto layout */
                    flex: none;
                    order: 1;
                    flex-grow: 0;
                    text-align: left;

                }

                .duration-img {
                    /* Frame 8 */

                    position: absolute;
                    width: 21px;
                    height: 21px;
                    left: 297px;
                    top: 60px;

                    /* shadow */
                    //filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.5));
                }

                .div-5 {
                    position: relative;
                    align-self: stretch;
                    display: flex;
                    margin-top: 7px;
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

                .div-bullet-point {
                    position: absolute;
                    width: 380px;
                    height: 30px;
                    left: 23px;
                    top: 613px;
                    font: 400 10px Poppins, sans-serif;
                    text-align: left;

                    color: #FFFFFF;

                }

                .span-tag {
                    color: #fff;
                    text-align: center;
                    white-space: nowrap;
                    justify-content: center;
                    border-radius: 16.033px;
                    border: 2.256px solid #fff;
                    flex-grow: 1;
                    padding: 5px 18px;
                    font: 500 10px Poppins, sans-serif;
                    margin-right: 5px;
                }
            `}</style>
        </>
    )
}

function LowerMenu({ skills = [], aboutMe = "", openTo = [], vibes = [] }) {
    return (
        <>
            <div className="lowerMenuContainer">
                <div className="openToTitle">
                    Open To...
                </div>
                <div className="trait-row" style={{ display: 'flex', gap: '10px'}}>
                    {openTo.map((want, index) => (
                        <div key={index} className="trait-box" style={{background: '#323C58', borderRadius: '20px', padding: '10px', maxWidth: '200px', color: 'white'}}>
                            {want}
                        </div>
                    ))}
                </div>
                <div className="openToTitle">
                    About me
                </div>
                <div style={{color: '#353234', fontFamily: '500 10px Poppins, sans-serif', fontSize: '12px', fontWeight: 400, lineHeight: 'normal', textAlign: 'left'}}>
                   {aboutMe}
                </div>
                <div className="openToTitle">
                    Skills
                </div>
                <div className="trait-row" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    {skills.map((skill, index) => (
                        <div key={index} className="trait-box" style={{background: '#353234', borderRadius: '20px', padding: '10px', maxWidth: '200px', color: 'white'}}>
                            {skill}
                        </div>
                    ))}
                </div>
                <div className="openToTitle">
                    I am...
                </div>
                <div className="trait-row" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    {vibes.map((vibe, index) => (
                        <div key={index} className="trait-box" style={{background: '#353234', borderRadius: '20px', padding: '10px', maxWidth: '200px', color: 'white'}}>
                            {vibe}
                        </div>
                    ))}
                </div>
            </div>
            <style jsx> {`
                .trait-row {
                    max-width: 413px
                }
                .lowerMenuContainer {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 0;
                    gap: 10px;

                    position: relative;
                    width: 413px;
                    height: 579px;
                    left: 17px;
                    top: 10px;
                }
                
                .openToTitle {
                    /* Open to... */

                    width: 120px;
                    height: 30px;
                    text-align: left;

                    //font: 400 20px Poppins, sans-serif;

                    font-family: 'Poppins', sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 30px;
                    /* identical to box height */

                    color: #1E1E1E;


                    /* Inside auto layout */
                    flex: none;
                    order: 0;
                    flex-grow: 0;

                }
            `}</style>
        </>
    );
}

export default ProfilePage;
