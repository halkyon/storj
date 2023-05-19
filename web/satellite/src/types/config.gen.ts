// AUTOGENERATED BY configgen.go
// DO NOT EDIT.

import { MemorySize } from '@/types/common';

export class CaptchaConfig {
    login: MultiCaptchaConfig;
    registration: MultiCaptchaConfig;
}

export class FrontendConfig {
    externalAddress: string;
    satelliteName: string;
    satelliteNodeURL: string;
    stripePublicKey: string;
    partneredSatellites: PartneredSatellite[];
    defaultProjectLimit: number;
    generalRequestURL: string;
    projectLimitsIncreaseRequestURL: string;
    gatewayCredentialsRequestURL: string;
    isBetaSatellite: boolean;
    betaSatelliteFeedbackURL: string;
    betaSatelliteSupportURL: string;
    documentationURL: string;
    couponCodeBillingUIEnabled: boolean;
    couponCodeSignupUIEnabled: boolean;
    fileBrowserFlowDisabled: boolean;
    linksharingURL: string;
    pathwayOverviewEnabled: boolean;
    captcha: CaptchaConfig;
    allProjectsDashboard: boolean;
    defaultPaidStorageLimit: MemorySize;
    defaultPaidBandwidthLimit: MemorySize;
    inactivityTimerEnabled: boolean;
    inactivityTimerDuration: number;
    inactivityTimerViewerEnabled: boolean;
    optionalSignupSuccessURL: string;
    homepageURL: string;
    nativeTokenPaymentsEnabled: boolean;
    passwordMinimumLength: number;
    passwordMaximumLength: number;
    abTestingEnabled: boolean;
    pricingPackagesEnabled: boolean;
    newUploadModalEnabled: boolean;
}

export class MultiCaptchaConfig {
    recaptcha: SingleCaptchaConfig;
    hcaptcha: SingleCaptchaConfig;
}

export class PartneredSatellite {
    name: string;
    address: string;
}

export class SingleCaptchaConfig {
    enabled: boolean;
    siteKey: string;
}
