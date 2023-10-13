import logoImage from "../assets/logo/logo.png";

export default function LogoImage({ adjust = "w-20" }) {
    const defaultClass = "raspect-[2/1 ";
    const finalClass = defaultClass + " " + adjust;
    return <img src={logoImage} alt="logo" className={finalClass} />;
}
