import AllServiceElement from "../feature/forAllServicePage/AllServiceElement";
import ContentAllServicePage from "../feature/forAllServicePage/ContentAllServicePage";
import useService from "../hooks/useService";

export default function AllServicePage() {
    const { allService } = useService();
    return (
        <div className="flex flex-col gap-20 p-12 items-center">
            <ContentAllServicePage />
            <AllServiceElement allServiceObj={allService} />
        </div>
    );
}
