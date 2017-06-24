// From https://raw.githubusercontent.com/mledoze/countries/master/countries.json
//
const pairs = [
  [
    "Aruba",
    "Oranjestad"
  ],
  [
    "Afghanistan",
    "Kabul"
  ],
  [
    "Angola",
    "Luanda"
  ],
  [
    "Anguilla",
    "The Valley"
  ],
  [
    "Åland Islands",
    "Mariehamn"
  ],
  [
    "Albania",
    "Tirana"
  ],
  [
    "Andorra",
    "Andorra la Vella"
  ],
  [
    "United Arab Emirates",
    "Abu Dhabi"
  ],
  [
    "Argentina",
    "Buenos Aires"
  ],
  [
    "Armenia",
    "Yerevan"
  ],
  [
    "American Samoa",
    "Pago Pago"
  ],
  [
    "French Southern and Antarctic Lands",
    "Port-aux-Français"
  ],
  [
    "Antigua and Barbuda",
    "Saint John's"
  ],
  [
    "Australia",
    "Canberra"
  ],
  [
    "Austria",
    "Vienna"
  ],
  [
    "Azerbaijan",
    "Baku"
  ],
  [
    "Burundi",
    "Bujumbura"
  ],
  [
    "Belgium",
    "Brussels"
  ],
  [
    "Benin",
    "Porto-Novo"
  ],
  [
    "Burkina Faso",
    "Ouagadougou"
  ],
  [
    "Bangladesh",
    "Dhaka"
  ],
  [
    "Bulgaria",
    "Sofia"
  ],
  [
    "Bahrain",
    "Manama"
  ],
  [
    "Bahamas",
    "Nassau"
  ],
  [
    "Bosnia and Herzegovina",
    "Sarajevo"
  ],
  [
    "Saint Barthélemy",
    "Gustavia"
  ],
  [
    "Belarus",
    "Minsk"
  ],
  [
    "Belize",
    "Belmopan"
  ],
  [
    "Bermuda",
    "Hamilton"
  ],
  [
    "Bolivia",
    "Sucre"
  ],
  [
    "Brazil",
    "Brasília"
  ],
  [
    "Barbados",
    "Bridgetown"
  ],
  [
    "Brunei",
    "Bandar Seri Begawan"
  ],
  [
    "Bhutan",
    "Thimphu"
  ],
  [
    "Botswana",
    "Gaborone"
  ],
  [
    "Central African Republic",
    "Bangui"
  ],
  [
    "Canada",
    "Ottawa"
  ],
  [
    "Cocos (Keeling) Islands",
    "West Island"
  ],
  [
    "Switzerland",
    "Bern"
  ],
  [
    "Chile",
    "Santiago"
  ],
  [
    "China",
    "Beijing"
  ],
  [
    "Ivory Coast",
    "Yamoussoukro"
  ],
  [
    "Cameroon",
    "Yaoundé"
  ],
  [
    "DR Congo",
    "Kinshasa"
  ],
  [
    "Republic of the Congo",
    "Brazzaville"
  ],
  [
    "Cook Islands",
    "Avarua"
  ],
  [
    "Colombia",
    "Bogotá"
  ],
  [
    "Comoros",
    "Moroni"
  ],
  [
    "Cape Verde",
    "Praia"
  ],
  [
    "Costa Rica",
    "San José"
  ],
  [
    "Cuba",
    "Havana"
  ],
  [
    "Curaçao",
    "Willemstad"
  ],
  [
    "Christmas Island",
    "Flying Fish Cove"
  ],
  [
    "Cayman Islands",
    "George Town"
  ],
  [
    "Cyprus",
    "Nicosia"
  ],
  [
    "Czechia",
    "Prague"
  ],
  [
    "Germany",
    "Berlin"
  ],
  [
    "Djibouti",
    "Djibouti"
  ],
  [
    "Dominica",
    "Roseau"
  ],
  [
    "Denmark",
    "Copenhagen"
  ],
  [
    "Dominican Republic",
    "Santo Domingo"
  ],
  [
    "Algeria",
    "Algiers"
  ],
  [
    "Ecuador",
    "Quito"
  ],
  [
    "Egypt",
    "Cairo"
  ],
  [
    "Eritrea",
    "Asmara"
  ],
  [
    "Western Sahara",
    "El Aaiún"
  ],
  [
    "Spain",
    "Madrid"
  ],
  [
    "Estonia",
    "Tallinn"
  ],
  [
    "Ethiopia",
    "Addis Ababa"
  ],
  [
    "Finland",
    "Helsinki"
  ],
  [
    "Fiji",
    "Suva"
  ],
  [
    "Falkland Islands",
    "Stanley"
  ],
  [
    "France",
    "Paris"
  ],
  [
    "Faroe Islands",
    "Tórshavn"
  ],
  [
    "Micronesia",
    "Palikir"
  ],
  [
    "Gabon",
    "Libreville"
  ],
  [
    "United Kingdom",
    "London"
  ],
  [
    "Georgia",
    "Tbilisi"
  ],
  [
    "Guernsey",
    "St. Peter Port"
  ],
  [
    "Ghana",
    "Accra"
  ],
  [
    "Gibraltar",
    "Gibraltar"
  ],
  [
    "Guinea",
    "Conakry"
  ],
  [
    "Guadeloupe",
    "Basse-Terre"
  ],
  [
    "Gambia",
    "Banjul"
  ],
  [
    "Guinea-Bissau",
    "Bissau"
  ],
  [
    "Equatorial Guinea",
    "Malabo"
  ],
  [
    "Greece",
    "Athens"
  ],
  [
    "Grenada",
    "St. George's"
  ],
  [
    "Greenland",
    "Nuuk"
  ],
  [
    "Guatemala",
    "Guatemala City"
  ],
  [
    "French Guiana",
    "Cayenne"
  ],
  [
    "Guam",
    "Hagåtña"
  ],
  [
    "Guyana",
    "Georgetown"
  ],
  [
    "Hong Kong",
    "City of Victoria"
  ],
  [
    "Honduras",
    "Tegucigalpa"
  ],
  [
    "Croatia",
    "Zagreb"
  ],
  [
    "Haiti",
    "Port-au-Prince"
  ],
  [
    "Hungary",
    "Budapest"
  ],
  [
    "Indonesia",
    "Jakarta"
  ],
  [
    "Isle of Man",
    "Douglas"
  ],
  [
    "India",
    "New Delhi"
  ],
  [
    "British Indian Ocean Territory",
    "Diego Garcia"
  ],
  [
    "Ireland",
    "Dublin"
  ],
  [
    "Iran",
    "Tehran"
  ],
  [
    "Iraq",
    "Baghdad"
  ],
  [
    "Iceland",
    "Reykjavik"
  ],
  [
    "Israel",
    "Jerusalem"
  ],
  [
    "Italy",
    "Rome"
  ],
  [
    "Jamaica",
    "Kingston"
  ],
  [
    "Jersey",
    "Saint Helier"
  ],
  [
    "Jordan",
    "Amman"
  ],
  [
    "Japan",
    "Tokyo"
  ],
  [
    "Kazakhstan",
    "Astana"
  ],
  [
    "Kenya",
    "Nairobi"
  ],
  [
    "Kyrgyzstan",
    "Bishkek"
  ],
  [
    "Cambodia",
    "Phnom Penh"
  ],
  [
    "Kiribati",
    "South Tarawa"
  ],
  [
    "Saint Kitts and Nevis",
    "Basseterre"
  ],
  [
    "South Korea",
    "Seoul"
  ],
  [
    "Kosovo",
    "Pristina"
  ],
  [
    "Kuwait",
    "Kuwait City"
  ],
  [
    "Laos",
    "Vientiane"
  ],
  [
    "Lebanon",
    "Beirut"
  ],
  [
    "Liberia",
    "Monrovia"
  ],
  [
    "Libya",
    "Tripoli"
  ],
  [
    "Saint Lucia",
    "Castries"
  ],
  [
    "Liechtenstein",
    "Vaduz"
  ],
  [
    "Sri Lanka",
    "Colombo"
  ],
  [
    "Lesotho",
    "Maseru"
  ],
  [
    "Lithuania",
    "Vilnius"
  ],
  [
    "Luxembourg",
    "Luxembourg"
  ],
  [
    "Latvia",
    "Riga"
  ],
  [
    "Saint Martin",
    "Marigot"
  ],
  [
    "Morocco",
    "Rabat"
  ],
  [
    "Monaco",
    "Monaco"
  ],
  [
    "Moldova",
    "Chișinău"
  ],
  [
    "Madagascar",
    "Antananarivo"
  ],
  [
    "Maldives",
    "Malé"
  ],
  [
    "Mexico",
    "Mexico City"
  ],
  [
    "Marshall Islands",
    "Majuro"
  ],
  [
    "Macedonia",
    "Skopje"
  ],
  [
    "Mali",
    "Bamako"
  ],
  [
    "Malta",
    "Valletta"
  ],
  [
    "Myanmar",
    "Naypyidaw"
  ],
  [
    "Montenegro",
    "Podgorica"
  ],
  [
    "Mongolia",
    "Ulan Bator"
  ],
  [
    "Northern Mariana Islands",
    "Saipan"
  ],
  [
    "Mozambique",
    "Maputo"
  ],
  [
    "Mauritania",
    "Nouakchott"
  ],
  [
    "Montserrat",
    "Plymouth"
  ],
  [
    "Martinique",
    "Fort-de-France"
  ],
  [
    "Mauritius",
    "Port Louis"
  ],
  [
    "Malawi",
    "Lilongwe"
  ],
  [
    "Malaysia",
    "Kuala Lumpur"
  ],
  [
    "Mayotte",
    "Mamoudzou"
  ],
  [
    "Namibia",
    "Windhoek"
  ],
  [
    "New Caledonia",
    "Nouméa"
  ],
  [
    "Niger",
    "Niamey"
  ],
  [
    "Norfolk Island",
    "Kingston"
  ],
  [
    "Nigeria",
    "Abuja"
  ],
  [
    "Nicaragua",
    "Managua"
  ],
  [
    "Niue",
    "Alofi"
  ],
  [
    "Netherlands",
    "Amsterdam"
  ],
  [
    "Norway",
    "Oslo"
  ],
  [
    "Nepal",
    "Kathmandu"
  ],
  [
    "Nauru",
    "Yaren"
  ],
  [
    "New Zealand",
    "Wellington"
  ],
  [
    "Oman",
    "Muscat"
  ],
  [
    "Pakistan",
    "Islamabad"
  ],
  [
    "Panama",
    "Panama City"
  ],
  [
    "Pitcairn Islands",
    "Adamstown"
  ],
  [
    "Peru",
    "Lima"
  ],
  [
    "Philippines",
    "Manila"
  ],
  [
    "Palau",
    "Ngerulmud"
  ],
  [
    "Papua New Guinea",
    "Port Moresby"
  ],
  [
    "Poland",
    "Warsaw"
  ],
  [
    "Puerto Rico",
    "San Juan"
  ],
  [
    "North Korea",
    "Pyongyang"
  ],
  [
    "Portugal",
    "Lisbon"
  ],
  [
    "Paraguay",
    "Asunción"
  ],
  [
    "Palestine",
    "Ramallah"
  ],
  [
    "French Polynesia",
    "Papeetē"
  ],
  [
    "Qatar",
    "Doha"
  ],
  [
    "Réunion",
    "Saint-Denis"
  ],
  [
    "Romania",
    "Bucharest"
  ],
  [
    "Russia",
    "Moscow"
  ],
  [
    "Rwanda",
    "Kigali"
  ],
  [
    "Saudi Arabia",
    "Riyadh"
  ],
  [
    "Sudan",
    "Khartoum"
  ],
  [
    "Senegal",
    "Dakar"
  ],
  [
    "Singapore",
    "Singapore"
  ],
  [
    "South Georgia",
    "King Edward Point"
  ],
  [
    "Svalbard and Jan Mayen",
    "Longyearbyen"
  ],
  [
    "Solomon Islands",
    "Honiara"
  ],
  [
    "Sierra Leone",
    "Freetown"
  ],
  [
    "El Salvador",
    "San Salvador"
  ],
  [
    "San Marino",
    "City of San Marino"
  ],
  [
    "Somalia",
    "Mogadishu"
  ],
  [
    "Saint Pierre and Miquelon",
    "Saint-Pierre"
  ],
  [
    "Serbia",
    "Belgrade"
  ],
  [
    "South Sudan",
    "Juba"
  ],
  [
    "São Tomé and Príncipe",
    "São Tomé"
  ],
  [
    "Suriname",
    "Paramaribo"
  ],
  [
    "Slovakia",
    "Bratislava"
  ],
  [
    "Slovenia",
    "Ljubljana"
  ],
  [
    "Sweden",
    "Stockholm"
  ],
  [
    "Swaziland",
    "Lobamba"
  ],
  [
    "Sint Maarten",
    "Philipsburg"
  ],
  [
    "Seychelles",
    "Victoria"
  ],
  [
    "Syria",
    "Damascus"
  ],
  [
    "Turks and Caicos Islands",
    "Cockburn Town"
  ],
  [
    "Chad",
    "N'Djamena"
  ],
  [
    "Togo",
    "Lomé"
  ],
  [
    "Thailand",
    "Bangkok"
  ],
  [
    "Tajikistan",
    "Dushanbe"
  ],
  [
    "Tokelau",
    "Fakaofo"
  ],
  [
    "Turkmenistan",
    "Ashgabat"
  ],
  [
    "Timor-Leste",
    "Dili"
  ],
  [
    "Tonga",
    "Nuku'alofa"
  ],
  [
    "Trinidad and Tobago",
    "Port of Spain"
  ],
  [
    "Tunisia",
    "Tunis"
  ],
  [
    "Turkey",
    "Ankara"
  ],
  [
    "Tuvalu",
    "Funafuti"
  ],
  [
    "Taiwan",
    "Taipei"
  ],
  [
    "Tanzania",
    "Dodoma"
  ],
  [
    "Uganda",
    "Kampala"
  ],
  [
    "Ukraine",
    "Kiev"
  ],
  [
    "Uruguay",
    "Montevideo"
  ],
  [
    "United States",
    "Washington D.C."
  ],
  [
    "Uzbekistan",
    "Tashkent"
  ],
  [
    "Vatican City",
    "Vatican City"
  ],
  [
    "Saint Vincent and the Grenadines",
    "Kingstown"
  ],
  [
    "Venezuela",
    "Caracas"
  ],
  [
    "British Virgin Islands",
    "Road Town"
  ],
  [
    "United States Virgin Islands",
    "Charlotte Amalie"
  ],
  [
    "Vietnam",
    "Hanoi"
  ],
  [
    "Vanuatu",
    "Port Vila"
  ],
  [
    "Wallis and Futuna",
    "Mata-Utu"
  ],
  [
    "Samoa",
    "Apia"
  ],
  [
    "Yemen",
    "Sana'a"
  ],
  [
    "South Africa",
    "Pretoria"
  ],
  [
    "Zambia",
    "Lusaka"
  ],
  [
    "Zimbabwe",
    "Harare"
  ]
];

const capitalForCountry = (country, capital) => ({question: `What is the capital of ${country}?`, answer: capital})
const countryForCapital = (country, capital) => ({question: `${capital} is the capital of which country?`, answer: country})

const questions = pairs.reduce( (ary, pair) => ary.concat([ capitalForCountry(pair[0], pair[1]), countryForCapital(pair[0], pair[1]) ]), [])

module.exports = questions
