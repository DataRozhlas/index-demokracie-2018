var data = [
  ["no", 9.87],
  ["is", 9.58],
  ["se", 9.39],
  ["nz", 9.26],
  ["dk", 9.22],
  ["ie", 9.15],
  ["ca", 9.15],
  ["fi", 9.14],
  ["au", 9.09],
  ["ch", 9.03],

  ["nl", 8.89],
  ["lu", 8.81],
  ["de", 8.68],
  ["gb", 8.53],
  ["uy", 8.38],
  ["at", 8.29],
  ["mu", 8.22],
  ["mt", 8.21],
  ["es", 8.08],
  ["cr", 8.07],

  ["kr", 8.00],
  ["jp", 7.99],
  ["cl", 7.97],
  ["ee", 7.97],
  ["us", 7.96],
  ["cv", 7.88],
  ["pt", 7.84],
  ["bw", 7.81],
  ["fr", 7.80],
  ["il", 7.79],
  ["be", 7.78],
  ["tw", 7.73],
  ["it", 7.71],
  ["cz", 7.69],
  ["cy", 7.59],
  ["si", 7.50],
  ["lt", 7.50],
  ["lv", 7.38],
  ["gr", 7.29],
  ["za", 7.24],
  ["in", 7.23],
  ["tl", 7.19],
  ["tt", 7.16],
  ["sk", 7.10],
  ["pa", 7.05],
  ["bg", 7.03],
  ["ar", 7.02],
  ["jm", 7.02],

  ["sr", 6.98],
  ["br", 6.97],
  ["co", 6.96],
  ["my", 6.88],
  ["ph", 6.71],
  ["pl", 6.67],
  ["gy", 6.67],
  ["ls", 6.64],
  ["gh", 6.63],
  ["hu", 6.63],
  ["pe", 6.60],
  ["hr", 6.57],
  ["do", 6.54],
  ["mn", 6.50],
  ["rs", 6.41],
  ["tn", 6.41],
  ["id", 6.39],
  ["sg", 6.38],
  ["ro", 6.38],
  ["ec", 6.27],
  ["na", 6.25],
  ["py", 6.24],
  ["lk", 6.19],
  ["mx", 6.19],
  ["hk", 6.15],
  ["sn", 6.15],
  ["pg", 6.03],  

  ["al", 5.98],
  ["sv", 5.96],
  ["mk", 5.87],
  ["md", 5.85],
  ["fj", 5.85],
  ["me", 5.74],
  ["bj", 5.74],
  ["bo", 5.70],
  ["ua", 5.69],
  ["hn", 5.63],
  ["zm", 5.61],
  ["gt", 5.60],
  ["bd", 5.57],
  ["ge", 5.50],
  ["mw", 5.49],
  ["tz", 5.41],
  ["ml", 5.41],
  ["lr", 5.35],
  ["bt", 5.30],
  ["mg", 5.22],
  ["ug", 5.20],
  ["np", 5.18],
  ["ke", 5.11],
  ["kg", 5.11],

  ["ma", 4.99],
  ["ba", 4.98],
  ["ht", 4.91],
  ["am", 4.79],
  ["bf", 4.75],
  ["sl", 4.66],
  ["lb", 4.63],
  ["th", 4.63],
  ["ng", 4.44],
  ["we", 4.39],
  ["tr", 4.37],
  ["gm", 4.31],
  ["pk", 4.26],
  ["ci", 4.15],
  ["ir", 4.06],

  ["jo", 3.93],
  ["mz", 3.85],
  ["kw", 3.85],
  ["mm", 3.83],
  ["mr", 3.82],
  ["ne", 3.76],
  ["km", 3.71],
  ["ni", 3.63],
  ["ao", 3.62],
  ["ga", 3.61],
  ["kh", 3.59],
  ["dz", 3.50],
  ["eg", 3.36],
  ["et", 3.35],
  ["rw", 3.35],
  ["cn", 3.32],
  ["cg", 3.31],
  ["cm", 3.28],
  ["qa", 3.19],
  ["zw", 3.16],
  ["ve", 3.16],
  ["gn", 3.14],
  ["by", 3.13],
  ["tg", 3.10],
  ["vn", 3.08],
  ["om", 3.04],
  ["sz", 3.03],
  ["cu", 3.00],
  
  ["af", 2.97],
  ["kz", 2.94],
  ["ru", 2.94],
  ["dj", 2.87],
  ["ae", 2.76],
  ["bh", 2.71],
  ["az", 2.65],
  ["ir", 2.45],
  ["er", 2.37],
  ["la", 2.37],
  ["bi", 2.33],
  ["ly", 2.19],
  ["sd", 2.15],
  ["uz", 2.01],

  ["gw", 1.98],
  ["ye", 1.95],
  ["sa", 1.93],
  ["tj", 1.93],
  ["gq", 1.92],
  ["tm", 1.72],
  ["td", 1.61],
  ["cf", 1.52],
  ["cd", 1.49],
  ["sy", 1.43],
  ["kp", 1.08],
];


Highcharts.chart("graf", {
  chart: {
    type: "bar",
  },
  title: {
    text: "Index demokracie ve vybraných zemích",
  },
  xAxis: {
    categories: ["Norsko", "Kanada", "Německo", "Velká Británie",
      "Rakousko", "Španělsko", "USA", "Izrael", "Itálie", "Česko",
      "Řecko", "Slovensko", "Polsko", "Maďarsko", "Ukrajina", "Turecko", "Čína",
      "Egypt", "Venezuela", "Kuba", "Rusko", "Irán", "Saúdská Arábie", "Sýrie", "Severní Korea"],
  },
  yAxis: {
    max: 10,
    title: {
      text: null,
    },
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  series: [{
    name: "Index demokracie",
    data: [9.87, 9.15, 8.68, 8.53, 8.29, 8.08, 7.96, 7.79, 7.71,
      7.69, 7.29, 7.10, 6.67, 6.63, 5.69, 4.37, 3.36, 3.32, 3.16, 3.00,
      2.94, 2.45, 1.93, 1.43, 1.08],
  }],
});

Highcharts.chart("line", {
  chart: {
    type: "line",
  },
  title: {
    text: "Index demokracie v některých zemích v průběhu let",
  },
  xAxis: {
    categories: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
  },
  yAxis: {
    min: 6,
    max: 10,
    title: {
      text: null,
    },
  },
  credits: {
    enabled: false,
  },
  series: [{
    name: "Česko",
    data: [8.19, 8.19, 8.06, 7.94, 7.94, 7.82, 7.62, 7.69],
  }, {
    name: "Slovensko",
    data: [7.35, 7.35, 7.35, 7.35, 7.29, 7.29, 7.16, 7.10],
  }, {
    name: "Polsko",
    data: [7.12, 7.12, 7.12, 7.47, 7.09, 6.83, 6.67, 6.67],
  }, {
    name: "Maďarsko",
    data: [7.04, 6.96, 6.96, 6.90, 6.84, 6.72, 6.64, 6.63],
  }, {
    name: "USA",
    data: [8.11, 8.11, 8.11, 8.11, 8.05, 7.98, 7.98, 7.96],
  }, {
    name: "Německo",
    data: [8.34, 8.34, 8.31, 8.64, 8.64, 8.63, 8.61, 8.68],
  }, {
    name: "Švédsko",
    data: [9.50, 9.73, 9.73, 9.73, 9.45, 9.39, 9.39, 9.39],
  }],
});

Highcharts.mapChart("container", {
  title: {
    text: null,
  },

  mapNavigation: {
    enabled: true,
  },

  colorAxis: {
    min: 0,
    stops: [
      [0, "#8B0000"],
      [0.5, "#FFFACD"],
      [0.9, "#006400"],
    ],
  },
  credits: {
    text: "Zdroj dat: The Economist Intelligence Unit",
    mapText: "",
    href: "https://www.eiu.com/topic/democracy-index",
  },
  legend: {
    layout: "vertical",
    align: "left",
    verticalAlign: "bottom",
  },
  tooltip: {
    formatter() {
      var countryname;
      switch (this.point.name) {
        case "Norway":
          countryname = "Norsko";
          break;
        case "Iceland":
          countryname = "Island";
          break;
        case "Sweden":
          countryname = "Švédsko";
          break;
        case "New Zealand":
          countryname = "Nový Zéland";
          break;
        case "Denmark":
          countryname = "Dánsko";
          break;
        case "Ireland":
          countryname = "Irsko";
          break;
        case "Canada":
          countryname = "Kanada";
          break;
        case "Australia":
          countryname = "Austrálie";
          break;
        case "Finland":
          countryname = "Finsko";
          break;
        case "Switzerland":
          countryname = "Švýcarsko";
          break;
        case "Netherlands":
          countryname = "Nizozemsko";
          break;
        case "Luxembourg":
          countryname = "Lucembursk";
          break;
        case "Germany":
          countryname = "Německo";
          break;
        case "United Kingdom":
          countryname = "Velká Británie";
          break;
        case "Austria":
          countryname = "Rakousko";
          break;
        case "Mauritius":
          countryname = "Mauricius";
          break;
        case "Spain":
          countryname = "Španělsko";
          break;
        case "South Korea":
          countryname = "Jižní Korea";
          break;
        case "United States of America":
          countryname = "Spojené státy americké";
          break;
        case "Italy":
          countryname = "Itálie";
          break;
        case "Japan":
          countryname = "Japonsko";
          break;
        case "Cape Verde":
          countryname = "Kapverdy";
          break;
        case "Costa Rica":
          countryname = "Kostarika";
          break;
        case "Portugal":
          countryname = "Portugalsko";
          break;
        case "France":
          countryname = "Francie";
          break;
        case "Estonia":
          countryname = "Estonsko";
          break;
        case "Israel":
          countryname = "Izrael";
          break;
        case "Belgium":
          countryname = "Belgie";
          break;
        case "Taiwan":
          countryname = "Tchaj-wan";
          break;
        case "Czech Republic":
          countryname = "Česká republika";
          break;
        case "Lithuania":
          countryname = "Litva";
          break;
        case "Greece":
          countryname = "Řecko";
          break;
        case "Jamaica":
          countryname = "Jamajka";
          break;
        case "Latvia":
          countryname = "Lotyšsko";
          break;
        case "India":
          countryname = "Indie";
          break;
        case "East Timor":
          countryname = "Východní Timor";
          break;
        case "Slovakia":
          countryname = "Slovensko";
          break;
        case "Trinidad and Tobago":
          countryname = "Trinidad a Tobago";
          break;
        case "Bulgaria":
          countryname = "Bulharsko";
          break;
        case "Brazil":
          countryname = "Brazílie";
          break;
        case "Suriname":
          countryname = "Surinam";
          break;
        case "Philippines":
          countryname = "Filipíny";
          break;
        case "Poland":
          countryname = "Polsko";
          break;
        case "Colombia":
          countryname = "Kolumbie";
          break;
        case "Dominican Republic":
          countryname = "Dominikánská republika";
          break;
        case "Hungary":
          countryname = "Maďarsko";
          break;
        case "Croatia":
          countryname = "Chorvatsko";
          break;
        case "Malaysia":
          countryname = "Malajsie";
          break;
        case "Mongolia":
          countryname = "Mongolsko";
          break;
        case "Romania":
          countryname = "Rumunsko";
          break;
        case "El Salvador":
          countryname = "Salvador";
          break;
        case "Republic of Serbia":
          countryname = "Srbsko";
          break;
        case "Mexico":
          countryname = "Mexiko";
          break;
        case "Indonesia":
          countryname = "Indonésie";
          break;
        case "Tunisia":
          countryname = "Tunisko";
          break;
        case "Singapore":
          countryname = "Singapur";
          break;
        case "Namibia":
          countryname = "Namibie";
          break;
        case "Papua New Guinea":
          countryname = "Papua-Nová Guinea";
          break;
        case "Ecuador":
          countryname = "Ekvádor";
          break;
        case "Albania":
          countryname = "Albánie";
          break;
        case "Moldova":
          countryname = "Moldavsko";
          break;
        case "Georgia":
          countryname = "Gruzie";
          break;
        case "Fiji":
          countryname = "Fidži";
          break;
        case "Ukraine":
          countryname = "Ukrajina";
          break;
        case "Montenegro":
          countryname = "Černá Hora";
          break;
        case "Zambia":
          countryname = "Zambie";
          break;
        case "Macedonia":
          countryname = "Makedonie";
          break;
        case "Bolivia":
          countryname = "Bolívie";
          break;
        case "United Republic of Tanzania":
          countryname = "Tanzanie";
          break;
        case "Bangladesh":
          countryname = "Bangladéš";
          break;
        case "Liberia":
          countryname = "Libérie";
          break;
        case "Nepal":
          countryname = "Nepál";
          break;
        case "Kenya":
          countryname = "Keňa";
          break;
        case "Kyrgyzstan":
          countryname = "Kyrgyzstán";
          break;
        case "Madagascar":
          countryname = "Madagaskar";
          break;
        case "Bhutan":
          countryname = "Bhútán";
          break;
        case "Turkey":
          countryname = "Turecko";
          break;
        case "Morocco":
          countryname = "Maroko";
          break;
        case "Bosnia and Herzegovina":
          countryname = "Bosna a Hercegovina";
          break;
        case "Lebanon":
          countryname = "Libanon";
          break;
        case "Nicaragua":
          countryname = "Nikaragua";
          break;
        case "Thailand":
          countryname = "Thajsko";
          break;
        case "West Bank":
          countryname = "Palestina";
          break;
        case "Nigeria":
          countryname = "Nigérie";
          break;
        case "Pakistan":
          countryname = "Pákistán";
          break;
        case "Armenia":
          countryname = "Arménie";
          break;
        case "Iraq":
          countryname = "Irák";
          break;
        case "Gambia":
          countryname = "Gambie";
          break;
        case "Mozambique":
          countryname = "Mosambik";
          break;
        case "Ivory Coast":
          countryname = "Pobřeží slonoviny";
          break;
        case "Jordan":
          countryname = "Jordánsko";
          break;
        case "Kuwait":
          countryname = "Kuvajt";
          break;
        case "Mauritania":
          countryname = "Mauritánie";
          break;
        case "Comoros":
          countryname = "Komory";
          break;
        case "Cambodia":
          countryname = "Kambodža";
          break;
        case "Cameroon":
          countryname = "Kamerun";
          break;
        case "Algeria":
          countryname = "Alžírsko";
          break;
        case "Ethiopia":
          countryname = "Etiopie";
          break;
        case "Cuba":
          countryname = "Kuba";
          break;
        case "Republic of Congo":
          countryname = "Kongo";
          break;
        case "Qatar":
          countryname = "Katar";
          break;
        case "Russia":
          countryname = "Rusko";
          break;
        case "Belarus":
          countryname = "Bělorusko";
          break;
        case "China":
          countryname = "Čína";
          break;
        case "Kazakhstan":
          countryname = "Kazachstán";
          break;
        case "Oman":
          countryname = "Omán";
          break;
        case "Swaziland":
          countryname = "Svazijsko";
          break;
        case "Djibouti":
          countryname = "Džibuti";
          break;
        case "Bahrain":
          countryname = "Bahrajn";
          break;
        case "United Arab Emirates":
          countryname = "Spojené arabské emiráty";
          break;
        case "Azerbaijan":
          countryname = "Azerbajdžán";
          break;
        case "Afghanistan":
          countryname = "Afghánistán";
          break;
        case "Iran":
          countryname = "Irán";
          break;
        case "Libya":
          countryname = "Libye";
          break;
        case "Sudan":
          countryname = "Súdán";
          break;
        case "Yemen":
          countryname = "Jemen";
          break;
        case "Uzbekistan":
          countryname = "Uzbekistán";
          break;
        case "Saudi Arabia":
          countryname = "Saúdská Arábie";
          break;
        case "Tajikistan":
          countryname = "Tádžikistán";
          break;
        case "Equatorial Guinea":
          countryname = "Rovníková Guinea";
          break;
        case "Turkmenistan":
          countryname = "Turkmenistán";
          break;
        case "Democratic Republic of the Congo":
          countryname = "Demokratická republika Kongo";
          break;
        case "Central African Republic":
          countryname = "Středoafrická republika";
          break;
        case "Chad":
          countryname = "Čad";
          break;
        case "Syria":
          countryname = "Sýrie";
          break;
        case "North Korea":
          countryname = "Severní Korea";
          break;
        default:
          countryname = this.point.name;
      }
      return "<b>" + this.series.name + "</b><br>"
                                + "Země: " + countryname + "<br>"
                                + "Index: " + this.point.value.toString().replace(".", ",");
    },
  },
  series: [{
    data,
    mapData: Highcharts.maps["custom/world-palestine"],
    name: "Index demokracie",
    dataLabels: {
      enabled: false,
    },
  }, {
    type: "mapline",
    name: "Separators",
    data: Highcharts.geojson(Highcharts.maps["custom/world-palestine"], "mapline"),
    nullColor: "gray",
    showInLegend: false,
    enableMouseTracking: false,
  }],
});
