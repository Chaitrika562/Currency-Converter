let country_list = {
    "AED" : "ae",
    "AFN" : "af",
    "ALL" : "al", 
    "AMD" : "am",
    "ANG" : "an",
    "AOA" : "ao",
    "AQD" : "aq",
    "ARS" : "ar",
    "AUD" : "au",
    // "AWG" : "aw",
    "AZN" : "aj",
    "BAM" : "ba",
    "BBD" : "bb",
    "BDT" : "bd",
    "BGN" : "bg",
    "BHD" : "bh",
    "BIF" : "by",
    // "BMD" : "bm",
    "BND" : "bx",
    "BOB" : "bl",
    "BRL" : "br",
    "BSD" : "bf",
    "BTN" : "bt",
    "BWP" : "bc",
    "BYN" : "bo",
    "BZD" : "bh",
    "CAD" : "ca",
    "CDF" : "cg",
    "CHF" : "sz",
    "CLP" : "ci",
    "CNY" : "ch",
    "COP" : "co",
    "CRC" : "cs",
    "CUP" : "cu",
    "CVE" : "cv",
    "CZK" : "ez",
    "DJF" : "dj",
    "DKK" : "da",
    "DOP" : "dr",
    "DZD" : "ag",
    "EGP" : "eg",
    "ERN" : "er",
    "ETB" : "et",
    // "EUR" : "fr",
    "FJD" : "fj",
    // "FKP" : "fk",
    // "FOK" : "",
    "GBP" : "uk",
    "GEL" : "gg",
    // "GGP" : "gm",
    "GHS" : "gh",
    "GIP" : "gi",
    "GMD" : "ga",
    "GNF" : "gv",
    "GTQ" : "gt",
    "GYD" : "gy",
    "HKD" : "hk",
    "HNL" : "ho",
    "HRK" : "hr",
    "HTG" : "ha",
    "HUF" : "hu",
    "IDR" : "id",
    "ILS" : "is",
    "INR" : "in",
    "IQD" : "iz",
    "IRR" : "ir",
    "ISK" : "ic",
    "JMD" : "jm",
    "JOD" : "jo",
    "JPY" : "ja",
    "KES" : "ke",
    "KGS" : "kg",
    "KHR" : "cb",
    "KMF" : "cn",
    // "KPW" : "kp",
    "KRW" : "ks",
    "KWD" : "ku",
    // "KYD" : "ky",
    "KZT" : "kz",
    "LAK" : "la",
    "LBP" : "le",
    "LKR" : "ce",
    "LRD" : "li",
    "LSL" : "ls",
    "LTL" : "lt",
    "LVL" : "lg",
    "LYD" : "ly",
    "MAD" : "ma",
    "MDL" : "md",
    "MGA" : "mg",
    "MKD" : "mk",
    "MMK" : "mm",
    "MNT" : "mn",
    "MOP" : "mo",
    "MRO" : "mr",
    "MTL" : "mt",
    "MUR" : "mp",
    "MVR" : "mv",
    "MWK" : "bm",
    "MXN" : "mx",
    "MYR" : "my",
    "MZN" : "mz",
    "NAD" : "wa",
    "NOK" : "bv",
    "XPF" : "nc",
    "NGN" : "ng",
    "NIO" : "ni",
    "NPR" : "np",
    "NZD" : "nz",
    "OMR" : "mu",
    "PAB" : "pm",
    "PEN" : "pe",
    "PGK" : "pp",
    "PHP" : "rp",
    "PKR" : "pk",
    "PLN" : "pl",
    "PYG" : "pa",
    "QAR" : "qa",
    "RON" : "ro",
    "RSD" : "ri",
    "RUB" : "rs",
    "RWF" : "rw",
    "SAR" : "sa",
    "SBD" : "sb",
    "SCR" : "sc",
    "SDG" : "sd",
    "SEK" : "se",
    "SGD" : "sn",
    "SKK" : "sk",
    "SLL" : "sl",
    "SOS" : "so",
    "SRD" : "ns",
    "STD" : "st",
    "SVC" : "sv",
    "SYP" : "sy",
    "SZL" : "sz",
    "THB" : "th",
    "TJS" : "ti",
    "TMT" : "tx",
    "TND" : "tn",
    "TOP" : "to",
    "TRY" : "tu",
    "TTD" : "tt",
    "TWD" : "tw",
    "TZS" : "tz",
    "UAH" : "up",
    "UGX" : "ug",
    "USD" : "us",
    "UYU" : "uy",
    "UZS" : "uz",
    "VEF" : "ve",
    "VND" : "vm",
    "VUV" : "nh",
    "XAF" : "cf",
    "XCD" : "ag",
    "XOF" : "be",
    "YER" : "ym",
    "ZAR" : "sf",
    "ZMK" : "za",
    "ZWD" : "zi"
}
let country_names = {
    "AED" : "United Arab Emirates",
    "AFN" : "Afghanistan",
    "ALL" : "Albania", 
    "AMD" : "Armenia",
    "ANG" : "Netherlands Antilles",
    "AOA" : "Angola",
    // "AQD" : "aq",
    "ARS" : "Argentina",
    "AUD" : "Australia",
    // "AWG" : "Aruba",
    "AZN" : "Azerbaijan",
    "BAM" : "Bosnia and Herzegovina",
    "BBD" : "Barbados",
    "BDT" : "Bangladesh",
    "BGN" : "Bulgaria",
    "BHD" : "Bahrain",
    "BIF" : "Burundi",
    // "BMD" : "Bermuda",
    "BND" : "Brunei",
    "BOB" : "Bolivia",
    "BRL" : "Brazil",
    "BSD" : "Bahamas",
    "BTN" : "Bhutan",
    "BWP" : "Botswana",
    "BYN" : "Belarus",
    "BZD" : "Belize",
    "CAD" : "Canada",
    "CDF" : "Democratic Republic of the Congo",
    "CHF" : "Switzerland",
    "CLP" : "Chile",
    "CNY" : "China",
    "COP" : "Colombia",
    "CRC" : "Costa Rica",
    "CUP" : "Cuba",
    "CVE" : "Cape Verde",
    "CZK" : "Czech Republic",
    "DJF" : "Djibouti",
    "DKK" : "Denmark",
    "DOP" : "Dominican Republic",
    "DZD" : "Algeria",
    "EGP" : "Egypt",
    "ERN" : "Eritrea",
    "ETB" : "Ethiopia",
    // "EUR" : "Eurozone",
    "FJD" : "Fiji",
    // "FKP" : "Falkland Islands",
    // "FOK" : "Faroe Islands",
    "GBP" : "United Kingdom",
    "GEL" : "Georgia",
    // "GGP" : "Guernsey",
    "GHS" : "Ghana",
    "GIP" : "Gibraltar",
    "GMD" : "ga",
    "GNF" : "gv",
    "GTQ" : "gt",
    "GYD" : "gy",
    "HKD" : "hk",
    "HNL" : "ho",
    "HRK" : "hr",
    "HTG" : "ha",
    "HUF" : "hu",
    "IDR" : "id",
    "ILS" : "is",
    "INR" : "in",
    "IQD" : "iz",
    "IRR" : "ir",
    "ISK" : "ic",
    "JMD" : "jm",
    "JOD" : "jo",
    "JPY" : "ja",
    "KES" : "ke",
    "KGS" : "kg",
    "KHR" : "cb",
    "KMF" : "cn",
    // "KPW" : "kp",
    "KRW" : "ks",
    "KWD" : "ku",
    // "KYD" : "ky",
    "KZT" : "kz",
    "LAK" : "la",
    "LBP" : "le",
    "LKR" : "ce",
    "LRD" : "li",
    "LSL" : "ls",
    "LTL" : "lt",
    "LVL" : "lg",
    "LYD" : "ly",
    "MAD" : "ma",
    "MDL" : "md",
    "MGA" : "mg",
    "MKD" : "mk",
    "MMK" : "mm",
    "MNT" : "mn",
    "MOP" : "mo",
    "MRO" : "mr",
    "MTL" : "mt",
    "MUR" : "mp",
    "MVR" : "mv",
    "MWK" : "bm",
    "MXN" : "mx",
    "MYR" : "my",
    "MZN" : "mz",
    "NAD" : "wa",
    "NOK" : "bv",
    "XPF" : "nc",
    "NGN" : "ng",
    "NIO" : "ni",
    "NPR" : "np",
    "NZD" : "nz",
    "OMR" : "mu",
    "PAB" : "pm",
    "PEN" : "pe",
    "PGK" : "pp",
    "PHP" : "rp",
    "PKR" : "pk",
    "PLN" : "pl",
    "PYG" : "pa",
    "QAR" : "qa",
    "RON" : "ro",
    "RSD" : "ri",
    "RUB" : "rs",
    "RWF" : "rw",
    "SAR" : "sa",
    "SBD" : "sb",
    "SCR" : "sc",
    "SDG" : "sd",
    "SEK" : "se",
    "SGD" : "sn",
    "SKK" : "sk",
    "SLL" : "sl",
    "SOS" : "so",
    "SRD" : "ns",
    "STD" : "st",
    "SVC" : "sv",
    "SYP" : "sy",
    "SZL" : "sz",
    "THB" : "th",
    "TJS" : "ti",
    "TMT" : "tx",
    "TND" : "tn",
    "TOP" : "to",
    "TRY" : "tu",
    "TTD" : "tt",
    "TWD" : "tw",
    "TZS" : "tz",
    "UAH" : "up",
    "UGX" : "ug",
    "USD" : "us",
    "UYU" : "uy",
    "UZS" : "uz",
    "VEF" : "ve",
    "VND" : "vm",
    "VUV" : "nh",
    "XAF" : "cf",
    "XCD" : "ag",
    "XOF" : "be",
    "YER" : "ym",
    "ZAR" : "sf",
    "ZMK" : "za",
    "ZWD" : "zi"
}