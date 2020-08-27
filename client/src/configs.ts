// API CALL TYPE
const TYPE_LOCAL = "LOCAL";
const TYPE_REST = "REST";

// LANGUAGES
const LANG_EN = "en";
const LANG_MALAY = "my";
const LANG_CHINESE = "ch";


// API Domain
const ProductionDomain = process.env.FORM_ENDPOINT;
const PinDomain = process.env.API_ENDPOINT;

// API contexts
// We will pass this to swagger class constractor if we need different base urls
const DEFAULT = "";


// CONFIG DATA (Please change here only)
const configs = {
    delay: 500,
    toastDelay: 5000,
    domain: ProductionDomain,
    pinDomain: PinDomain,
    type: TYPE_LOCAL, // process.env.NODE_ENV === "production" ? TYPE_REST : TYPE_LOCAL,
    context: DEFAULT,
    lang: LANG_EN,
    activateSW: false
};

export default configs;
