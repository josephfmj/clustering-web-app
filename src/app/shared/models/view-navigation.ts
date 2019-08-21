import { ViewNavigationConstants } from './view-navigation-constants';
import { SectionType } from 'src/app/shared/models/section-type.enum';
export class ViewNavigation {

    navigate: Map<SectionType, ViewNavigationConstants>;

    constructor() {
        const methodSection = new ViewNavigationConstants();
        const decimalSection = new ViewNavigationConstants();
        const paramsSection = new ViewNavigationConstants();
        const uploadSection = new ViewNavigationConstants();

        methodSection.buttonNext = SectionType.DECIMAL_OPERATOR_SECTION;
        methodSection.buttonBack = SectionType.DEFAULT;
        methodSection.buttonCurrent = SectionType.CLUSTERING_METHOD_SECTION;

        decimalSection.buttonNext = SectionType.PARAMS_SECTION;
        decimalSection.buttonBack = SectionType.CLUSTERING_METHOD_SECTION;
        decimalSection.buttonCurrent = SectionType.DECIMAL_OPERATOR_SECTION;

        paramsSection.buttonNext = SectionType.UPLOAD_SECTION;
        paramsSection.buttonBack = SectionType.DECIMAL_OPERATOR_SECTION;
        paramsSection.buttonCurrent = SectionType.PARAMS_SECTION;

        uploadSection.buttonNext = SectionType.DEFAULT;
        uploadSection.buttonBack = SectionType.PARAMS_SECTION;
        uploadSection.buttonCurrent = SectionType.UPLOAD_SECTION;

        this.navigate.set(SectionType.CLUSTERING_METHOD_SECTION, methodSection);
        this.navigate.set(SectionType.DECIMAL_OPERATOR_SECTION, decimalSection);
        this.navigate.set(SectionType.PARAMS_SECTION, paramsSection);
        this.navigate.set(SectionType.UPLOAD_SECTION, uploadSection);
    }

}
