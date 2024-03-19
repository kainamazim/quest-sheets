import { getTreasure } from "@/api";
import TreasureCatalogPage from "@/content/(book)/treasure/TreasureCatalogPage";

const TreasureCatalog = async () => {
    const data = await getTreasure();

    return <TreasureCatalogPage {...data} />;
};

export default TreasureCatalog;
