import { UncontrolledComparative } from "@vitessce/comparative";

interface ControlledComparativeProps {
    datasetUrl: string;
    geneSelection: string[];
    setGeneSelection: Function;
    sampleSetSelection: string[][];
    setSampleSetSelection: Function;
    theme?: string | undefined;
    debugMode?: boolean | undefined;
    logLevel: string;
}

export const ComparatorTool = () => {
    return (
        <div>
            <UncontrolledComparative />
        </div>
    )
}