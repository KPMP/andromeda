import { UncontrolledComparative, type UncontrolledComparativeProps } from "@vitessce/comparative";

const datasetUrl = import.meta.env.VITE_DATASET_URL;

export const ComparatorTool = () => {
    return (
        <div>
            <UncontrolledComparative
                datasetUrl={datasetUrl}
            />
        </div>
    )
}