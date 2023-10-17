import image from "../assets/logo/logo.png";

export default function AtmosPage() {
    return (
        <div className="h-screen w-screen">
            <div>
                <div className="carousel carousel-end rounded-box duration-700 ease-in-out">
                    <div className="carousel-item duration-700 ease-in-out">
                        <img src={image} alt="Drink" />
                    </div>
                    <div className="carousel-item duration-700 ease-in-out">
                        <img src={image} alt="Drink" />
                    </div>
                    <div className="carousel-item duration-700 ease-in-out">
                        <img src={image} alt="Drink" />
                    </div>
                    <div className="carousel-item duration-700 ease-in-out">
                        <img src={image} alt="Drink" />
                    </div>
                    <div className="carousel-item duration-700 ease-in-out">
                        <img src={image} alt="Drink" />
                    </div>
                    <div className="carousel-item duration-700 ease-in-out">
                        <img src={image} alt="Drink" />
                    </div>
                    <div className="carousel-item duration-700 ease-in-out">
                        <img src={image} alt="Drink" />
                    </div>
                </div>
            </div>
        </div>
    );
}
