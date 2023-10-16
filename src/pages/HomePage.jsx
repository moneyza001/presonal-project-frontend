import AtmosPage from "./AtmosPage";
import LandingHomePage from "./LandingHomePage";
import ServicePage from "./ServicePage";

export default function HomePage() {
    return (
        <div>
            <LandingHomePage />
            <ServicePage />
            <AtmosPage />
        </div>
    );
}
