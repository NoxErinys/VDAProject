var interestByCountryDataTable = `country_name,avg_interest_2019,avg_interest_2020,change
Russia,43.833333333333336,43.857142857142854,5.431830526886326E-4
Sweden,37.0,94.0,1.5405405405405406
Philippines,89.5,100.0,0.11731843575418995
Singapore,59.5,80.33333333333333,0.3501400560224089
Turkey,100.0,100.0,0.0
Germany,30.76923076923077,30.393939393939394,-0.012196969696969706
France,33.05,39.904761904761905,0.20740580649809104
Algeria,100.0,100.0,0.0
Argentina,83.5,72.53846153846153,-0.13127590971902356
Belgium,21.0,56.0,1.6666666666666667
Ecuador,100.0,100.0,0.0
Peru,100.0,100.0,0.0
China,100.0,100.0,0.0
India,49.31707317073171,57.82857142857143,0.17258725448636422
United States,91.2491408934708,92.26997840172787,0.01118736569201079
Nigeria,100.0,100.0,0.0
Italy,78.5,74.25,-0.054140127388535034
Spain,41.714285714285715,40.44444444444444,-0.030441400304414064
Denmark,100.0,97.0,-0.03
Iran,1.0,1.0,0.0
Ireland,39.0,99.0,1.5384615384615385
Morocco,69.0,73.5,0.06521739130434782
Ukraine,44.0,79.66666666666667,0.8106060606060607
Israel,100.0,100.0,0.0
South Korea,100.0,100.0,0.0
Uruguay,100.0,100.0,0.0
Mexico,49.166666666666664,26.25,-0.4661016949152542
Indonesia,22.4,30.428571428571427,0.35841836734693877
Saudi Arabia,48.0,48.0,0.0
Switzerland,25.0,34.0,0.36
United Arab Emirates,100.0,100.0,0.0
Canada,75.0886075949367,75.64084507042253,0.007354477505627135
Kyrgyzstan,100.0,100.0,0.0
Brazil,29.0,44.666666666666664,0.5402298850574712
Japan,36.64705882352941,34.15151515151515,-0.06809669731018056
New Zealand,36.5,53.0,0.4520547945205479
Poland,39.8,37.75,-0.05150753768844214
Australia,60.166666666666664,55.2,-0.08254847645429354
Austria,100.0,100.0,0.0
Egypt,18.0,20.0,0.1111111111111111
Kazakhstan,20.0,5.0,-0.75
South Africa,100.0,100.0,0.0
Colombia,100.0,100.0,0.0
Pakistan,60.5,42.5,-0.2975206611570248
United Kingdom,31.210526315789473,32.62337662337662,0.04526839096822232
Vietnam,62.0,62.0,0.0
Netherlands,40.125,31.5,-0.21495327102803738`

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
GB,United Kingdom
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
IR,Iran
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
KP,North Korea
KR,South Korea
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
RU,Russia
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
US,United States
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