import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
];
function ProfilePage() {

    const additionalContent = (
        <div className="additional-content">
            <h2>Additional Element</h2>
            <p>This is an additional element that is not in the images array.</p>
        </div>
    );

    return (
        <div style={{height: '1500px'}}>
            <div className="box">
                <Carousel useKeyboardArrows={true} showThumbs={false}>
                    {images.map((URL, index) => (
                        <div className="slide">
                            <img alt="sample_file" src={URL} key={index}/>
                        </div>
                    ))}
                    {additionalContent}
                </Carousel>
            </div>
        </div>
    );
}

export default ProfilePage;
