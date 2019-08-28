import { ClusteringRequest } from './clustering-request';
import { SectionType } from './section-type.enum';
export class ViewLoadData {

    method: string;
    decimalSeparator: string;
    params: Map<string, any>;
    file: Blob;
    constructor() {}
}
