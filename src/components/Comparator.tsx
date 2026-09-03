import { UncontrolledComparative } from "@vitessce/comparative";

const datasetUrl = import.meta.env.DATASET_URL;

export const ComparatorTool = () => {
    return (
        <div>
            <UncontrolledComparative
                datasetUrl={datasetUrl}
            />
        </div>
    )
}