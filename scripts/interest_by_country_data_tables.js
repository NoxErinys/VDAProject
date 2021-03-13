var interestByCountryDataTable = `country_name,avg_interest_2019,avg_interest_2020,change
Russia,21.5,22.0,0.023255813953488372
Singapore,100.0,100.0,0.0
Germany,17.571428571428573,24.571428571428573,0.39837398373983735
France,33.666666666666664,29.0,-0.13861386138613854
Argentina,100.0,45.333333333333336,-0.5466666666666666
India,45.8,42.0,-0.08296943231441042
United States of America,90.02654867256638,92.91397849462365,0.032073092489184274
Italy,25.0,54.0,1.16
Spain,58.0,19.0,-0.6724137931034483
Hong Kong,100.0,100.0,0.0
Ukraine,30.0,20.0,-0.3333333333333333
Mexico,51.5,3.0,-0.941747572815534
Indonesia,3.0,3.0,0.0
United Arab Emirates,100.0,100.0,0.0
Canada,74.76190476190476,79.54838709677419,0.06402301212245738
Brazil,24.0,20.5,-0.14583333333333334
Japan,11.333333333333334,26.166666666666668,1.3088235294117647
New Zealand,17.0,17.0,0.0
Australia,66.0,81.5,0.23484848484848486
United Kingdom,15.416666666666666,35.95,1.3318918918918923
Netherlands,24.5,31.0,0.2653061224489796`

var isoCountryCodesDataTable = `Code,Country name
AD,Andorra
AE,United Arab Emirates
AF,Afghanistan
AG,Antigua and Barbuda
AI,Anguilla
AL,Albania
AM,Armenia
AO,Angola
AQ,Antarctica
AR,Argentina
AS,American Samoa
AT,Austria
AU,Australia
AW,Aruba
AX,Åland Islands
AZ,Azerbaijan
BA,Bosnia and Herzegovina
BB,Barbados
BD,Bangladesh
BE,Belgium
BF,Burkina Faso
BG,Bulgaria
BH,Bahrain
BI,Burundi
BJ,Benin
BL,Saint Barthélemy
BM,Bermuda
BN,Brunei Darussalam
BO,Bolivia (Plurinational State of)
BQ,"Bonaire, Sint Eustatius and Saba"
BR,Brazil
BS,Bahamas
BT,Bhutan
BV,Bouvet Island
BW,Botswana
BY,Belarus
BZ,Belize
CA,Canada
CC,Cocos (Keeling) Islands
CD,"Congo, Democratic Republic of the"
CF,Central African Republic
CG,Congo
CH,Switzerland
CI,Côte d'Ivoire
CK,Cook Islands
CL,Chile
CM,Cameroon
CN,China
CO,Colombia
CR,Costa Rica
CU,Cuba
CV,Cabo Verde
CW,Curaçao
CX,Christmas Island
CY,Cyprus
CZ,Czechia
DE,Germany
DJ,Djibouti
DK,Denmark
DM,Dominica
DO,Dominican Republic
DZ,Algeria
EC,Ecuador
EE,Estonia
EG,Egypt
EH,Western Sahara
ER,Eritrea
ES,Spain
ET,Ethiopia
FI,Finland
FJ,Fiji
FK,Falkland Islands (Malvinas)
FM,Micronesia (Federated States of)
FO,Faroe Islands
FR,France
GA,Gabon
GB,United Kingdom of Great Britain and Northern Ireland
GD,Grenada
GE,Georgia
GF,French Guiana
GG,Guernsey
GH,Ghana
GI,Gibraltar
GL,Greenland
GM,Gambia
GN,Guinea
GP,Guadeloupe
GQ,Equatorial Guinea
GR,Greece
GS,South Georgia and the South Sandwich Islands
GT,Guatemala
GU,Guam
GW,Guinea-Bissau
GY,Guyana
HK,Hong Kong
HM,Heard Island and McDonald Islands
HN,Honduras
HR,Croatia
HT,Haiti
HU,Hungary
ID,Indonesia
IE,Ireland
IL,Israel
IM,Isle of Man
IN,India
IO,British Indian Ocean Territory
IQ,Iraq
IR,Iran (Islamic Republic of)
IS,Iceland
IT,Italy
JE,Jersey
JM,Jamaica
JO,Jordan
JP,Japan
KE,Kenya
KG,Kyrgyzstan
KH,Cambodia
KI,Kiribati
KM,Comoros
KN,Saint Kitts and Nevis
KP,Korea (Democratic People's Republic of)
KR,"Korea, Republic of"
KW,Kuwait
KY,Cayman Islands
KZ,Kazakhstan
LA,Lao People's Democratic Republic
LB,Lebanon
LC,Saint Lucia
LI,Liechtenstein
LK,Sri Lanka
LR,Liberia
LS,Lesotho
LT,Lithuania
LU,Luxembourg
LV,Latvia
LY,Libya
MA,Morocco
MC,Monaco
MD,"Moldova, Republic of"
ME,Montenegro
MF,Saint Martin (French part)
MG,Madagascar
MH,Marshall Islands
MK,North Macedonia
ML,Mali
MM,Myanmar
MN,Mongolia
MO,Macao
MP,Northern Mariana Islands
MQ,Martinique
MR,Mauritania
MS,Montserrat
MT,Malta
MU,Mauritius
MV,Maldives
MW,Malawi
MX,Mexico
MY,Malaysia
MZ,Mozambique
NA,Namibia
NC,New Caledonia
NE,Niger
NF,Norfolk Island
NG,Nigeria
NI,Nicaragua
NL,Netherlands
NO,Norway
NP,Nepal
NR,Nauru
NU,Niue
NZ,New Zealand
OM,Oman
PA,Panama
PE,Peru
PF,French Polynesia
PG,Papua New Guinea
PH,Philippines
PK,Pakistan
PL,Poland
PM,Saint Pierre and Miquelon
PN,Pitcairn
PR,Puerto Rico
PS,"Palestine, State of"
PT,Portugal
PW,Palau
PY,Paraguay
QA,Qatar
RE,Réunion
RO,Romania
RS,Serbia
RU,Russian Federation
RW,Rwanda
SA,Saudi Arabia
SB,Solomon Islands
SC,Seychelles
SD,Sudan
SE,Sweden
SG,Singapore
SH,"Saint Helena, Ascension and Tristan da Cunha"
SI,Slovenia
SJ,Svalbard and Jan Mayen
SK,Slovakia
SL,Sierra Leone
SM,San Marino
SN,Senegal
SO,Somalia
SR,Suriname
SS,South Sudan
ST,Sao Tome and Principe
SV,El Salvador
SX,Sint Maarten (Dutch part)
SY,Syrian Arab Republic
SZ,Eswatini
TC,Turks and Caicos Islands
TD,Chad
TF,French Southern Territories
TG,Togo
TH,Thailand
TJ,Tajikistan
TK,Tokelau
TL,Timor-Leste
TM,Turkmenistan
TN,Tunisia
TO,Tonga
TR,Turkey
TT,Trinidad and Tobago
TV,Tuvalu
TW,"Taiwan, Province of China"
TZ,"Tanzania, United Republic of"
UA,Ukraine
UG,Uganda
UM,United States Minor Outlying Islands
US,United States of America
UY,Uruguay
UZ,Uzbekistan
VA,Holy See
VC,Saint Vincent and the Grenadines
VE,Venezuela (Bolivarian Republic of)
VG,Virgin Islands (British)
VI,Virgin Islands (U.S.)
VN,Viet Nam
VU,Vanuatu
WF,Wallis and Futuna
WS,Samoa
YE,Yemen
YT,Mayotte
ZA,South Africa
ZM,Zambia
ZW,Zimbabwe`