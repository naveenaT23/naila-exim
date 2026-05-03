export interface ProductOrigin {
  loc: string;
  types: string;
}

export interface ProductSpec {
  type: string;
  sub: string;
  details: Record<string, string | number>;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  origins: ProductOrigin[];
  image: string;
  description: string;
  specs: ProductSpec[];
}

export const products: Product[] = [
  {
    id: "refined-sugar",
    name: "Refined Sugar",
    category: "Food Products",
    origins: [
      { loc: "Indian Origin", types: "S30, M31, S1 & S2" },
      { loc: "Thailand Origin", types: "ICUMSA 45, 150 (TRR)" },
      { loc: "Brazil Origin", types: "ICUMSA 45, 150" },
    ],
    image: "/refined-sugar.png",
    description: "Premium quality refined white sugar sourced from the finest refineries in India, Thailand, and Brazil. Meeting the highest international standards for purity and granulation.",
    specs: [
      {
        type: "ICUMSA 45",
        sub: "Thailand / TRR",
        details: {
          Origin: "Thailand / TRR",
          ICUMSA: "45 RBU",
          Polarization: "99.80% Min",
          "Ash Content": "0.04% Max",
          Moisture: "0.04% Max",
          Solubility: "100% Free Flowing",
          Radiation: "Normal Certified",
          Granulation: "Fine",
          Colour: "Sparkling White",
        },
      },
      {
        type: "ICUMSA 100",
        sub: "Thailand / TRR",
        details: {
          ICUMSA: "100 RBU",
          Polarization: "99.50% Min",
          "Ash Content": "0.15% Max",
          Moisture: "0.10% Max",
          Solubility: "100% Free Flowing",
          Radiation: "Normal Certified",
          Granulation: "Fine",
          Colour: "Sparkling White",
        },
      },
    ],
  },
  {
    id: "raw-brown-sugar",
    name: "Raw Brown Cane Sugar",
    category: "Food Products",
    origins: [
      { loc: "Indian Origin", types: "S30, M31, S1 & S2" },
      { loc: "Thailand Origin", types: "ICUMSA 1000 – 1500 (TRR)" },
      { loc: "Brazil Origin", types: "VHP 600 – 1200" },
    ],
    image: "/raw-brown-sugar.png",
    description: "Natural raw brown cane sugar with high VHP (Very High Polarization) values, ideal for industrial processing and direct consumption.",
    specs: [
      {
        type: "ICUMSA 1000 – 1500",
        sub: "Thailand / TRR",
        details: {
          Origin: "Thailand / TRR",
          ICUMSA: "1000 – 1500",
          Polarization: "96.00% Min",
          "Ash Content": "0.09% Max",
          Moisture: "0.09% Max",
          Colour: "Brown",
          Solubility: "90% Free Flowing",
          Granulation: "Fine",
          SO2: "20 PPM",
        },
      },
    ],
  },
  {
    id: "yellow-maize",
    name: "Yellow Maize (Corn)",
    category: "Food Products",
    origins: [
      { loc: "Variety", types: "Yellow & White (GMO & Non GMO)" },
      { loc: "Usage", types: "Animal Feed & Human Consumption" },
      { loc: "Shipping", types: "Vessel Loads & Container Loads" },
      { loc: "Origins", types: "Brazil, Argentina, India, Myanmar" },
    ],
    image: "/maize-product.png",
    description: "High-quality yellow corn sourced globally for both animal feed and human consumption. Available in bulk vessel loads and containerized shipments.",
    specs: [
      {
        type: "Yellow Maize",
        sub: "High Protein Feed Grade",
        details: {
          Moisture: "14% Max",
          Admixture: "2% Max",
          "Broken Kernels": "3% Max",
          Damage: "5% Max",
          Protein: "8% Min",
        },
      },
    ],
  },
  {
    id: "cooking-oil",
    name: "Cooking Oil",
    category: "Food Products",
    origins: [
      { loc: "Types", types: "Palm Oil, Sunflower Oil, Soyabean Oil" },
      { loc: "Quality", types: "Crude & Refined" },
      { loc: "Packing", types: "Bulk Vessels, Flexi Tanks, Consumer Packing" },
    ],
    image: "/cooking-oil.png",
    description: "Premium grade edible oils including Palm, Sunflower, and Soyabean oil. Available in both crude and refined forms with flexible packing options from bulk vessels to consumer-ready containers.",
    specs: [
      {
        type: "Refined Palm Oil",
        sub: "CP8 / CP10",
        details: {
          "Free Fatty Acid": "0.1% Max",
          Moisture: "0.1% Max",
          "Iodine Value": "56 - 58 Min",
          Color: "3.0 Red Max",
          "Cloud Point": "8.0 - 10.0°C Max",
        },
      },
    ],
  },
  {
    id: "rice",
    name: "Premium Rice",
    category: "Food Products",
    origins: [
      { loc: "Origin", types: "Indian & Thailand Origin" },
      { loc: "Varieties", types: "Basmati & Non-Basmati" },
      { loc: "Process", types: "Raw, Steam, Par-boiled" },
      { loc: "Shipping", types: "Vessel Loads & Container Loads" },
    ],
    image: "/rice-product.png",
    description: "Exquisite range of Basmati and Non-Basmati rice sourced from India and Thailand. Available in various processing methods and broken percentages to meet global culinary demands.",
    specs: [
      {
        type: "Long Grain Rice",
        sub: "5% / 25% / 100% Broken",
        details: {
          Moisture: "14% Max",
          "Broken Content": "5% / 25% / 100%",
          "Average Length": "6.0 - 8.2 mm",
          Damage: "1% Max",
          Chalky: "5% Max",
        },
      },
    ],
  },
  {
    id: "copper-cathode",
    name: "Copper Cathode",
    category: "Mining and Minerals",
    origins: [
      { loc: "Grade", types: "Grade A (99.99% Purity)" },
      { loc: "Format", types: "Cathode Plates" },
      { loc: "Standard", types: "LME Grade A" },
    ],
    image: "/copper-cathode.png",
    description: "High-purity copper cathodes (99.99%) sourced from premium refineries. Conforming to LME Grade A standards for electrical and industrial applications.",
    specs: [
      {
        type: "Grade A Copper",
        sub: "99.99% Electrolytic",
        details: {
          Purity: "99.99% Min",
          "Surface Condition": "Smooth, Free from defects",
          "Standard Dimensions": "Regular Cathode Plates",
          Export: "Vessel / Container Loads",
        },
      },
    ],
  },
  {
    id: "aluminium-ingots",
    name: "Aluminium Ingots",
    category: "Mining and Minerals",
    origins: [
      { loc: "Purity", types: "99.7% - 99.9%" },
      { loc: "Format", types: "Ingots" },
      { loc: "Supply", types: "Primary & Secondary" },
    ],
    image: "/aluminium-ingots.png",
    description: "Premium aluminium ingots with high purity levels, suitable for casting, rolling, and various industrial fabrication processes.",
    specs: [
      {
        type: "P1020 Grade",
        sub: "Standard Ingot",
        details: {
          Al: "99.7% Min",
          Fe: "0.20% Max",
          Si: "0.10% Max",
          Zn: "0.03% Max",
        },
      },
    ],
  },
  {
    id: "iron-ore-pellets",
    name: "Iron Ore Pellets",
    category: "Mining and Minerals",
    origins: [
      { loc: "Grade", types: "Blast Furnace / DRI Grade" },
      { loc: "Base", types: "Magnetite / Hematite" },
      { loc: "Shipping", types: "Bulk Carrier" },
    ],
    image: "/iron-ore-pellets.png",
    description: "High-grade iron ore pellets with optimal cold crushing strength and tumble index, ideal for steel production in blast furnaces and DRI plants.",
    specs: [
      {
        type: "BF Grade Pellets",
        sub: "High Compression Strength",
        details: {
          Fe: "65% Min",
          SiO2: "2.5% Max",
          Al2O3: "1.5% Max",
          P: "0.05% Max",
        },
      },
    ],
  },
  {
    id: "copper-mulberry",
    name: "Copper Mulberry",
    category: "Mining and Minerals",
    origins: [
      { loc: "Grade", types: "Millberry (99.9% Purity)" },
      { loc: "Form", types: "Copper Wire Scrap" },
      { loc: "Standard", types: "ISRI Code: Millberry" },
    ],
    image: "/copper-mulberry.png",
    description: "Highest quality copper wire scrap, known as Millberry. Clean, uncoated, and unalloyed copper wire, free from any oxidation or insulation, meeting global purity standards.",
    specs: [
      {
        type: "Copper Millberry",
        sub: "Grade A Scrap",
        details: {
          Purity: "99.9% Min",
          "Copper Content": "99.9% Basis",
          Condition: "Clean, Uncoated, No Oxidation",
          "Wire Diameter": "Variety",
        },
      },
    ],
  },
  {
    id: "bauxite-ore",
    name: "Bauxite Ore",
    category: "Mining and Minerals",
    origins: [
      { loc: "Grade", types: "Metallurgical Grade" },
      { loc: "Origins", types: "Guinea / India / Australia" },
    ],
    image: "/bauxite-ore.png",
    description: "High-quality bauxite ore with high alumina and low reactive silica content, ideal for alumina refining and aluminium production.",
    specs: [
      {
        type: "Metallurgical Bauxite",
        sub: "High Alumina",
        details: {
          Al2O3: "45% - 55% Min",
          SiO2: "3% - 5% Max",
          Fe2O3: "15% - 20% Max",
          Moisture: "10% Max",
        },
      },
    ],
  },
  {
    id: "iron-ore",
    name: "Iron Ore",
    category: "Mining and Minerals",
    origins: [
      { loc: "Form", types: "Lumps & Fines" },
      { loc: "Grade", types: "62% Fe / 63.5% Fe / 65% Fe" },
      { loc: "Origin", types: "Brazil / Australia / India" },
    ],
    image: "/iron-ore.png",
    description: "Superior quality iron ore available in lumps and fines with varied iron content to meet diverse smelting requirements.",
    specs: [
      {
        type: "Iron Ore Fines",
        sub: "62% Fe Grade",
        details: {
          Fe: "62% Basis",
          SiO2: "3.5% Max",
          Al2O3: "2.5% Max",
          P: "0.08% Max",
          S: "0.05% Max",
        },
      },
    ],
  },
  {
    id: "diesel",
    name: "Diesel EN590 10PPM",
    category: "Petrol Products",
    origins: [
      { loc: "Standard", types: "Euro 5 / Euro 6 (EN590)" },
      { loc: "Purity", types: "10 PPM Sulphur Content" },
      { loc: "Supply", types: "FOB / CIF / TTO" },
    ],
    image: "/diesel.png",
    description: "Ultra-low sulphur diesel (ULSD) conforming to European EN590 standards. High-performance fuel suitable for modern diesel engines and industrial applications.",
    specs: [
      {
        type: "Diesel EN590",
        sub: "10 PPM Grade",
        details: {
          "Sulphur Content": "10 PPM Max",
          "Cetane Number": "51 Min",
          Density: "820-845 kg/m³",
          "Flash Point": "55°C Min",
        },
      },
    ],
  },
  {
    id: "crude-oil",
    name: "Crude Oil",
    category: "Petrol Products",
    origins: [
      { loc: "Variants", types: "Light Sweet / Heavy Sour" },
      { loc: "Origins", types: "Middle East / Africa / US" },
      { loc: "Trading", types: "Spot / Contract" },
    ],
    image: "/crude-oil.png",
    description: "Global supply of various crude oil grades including Brent, WTI, and Light Sweet Crude. High-yield feedstock for refinery operations.",
    specs: [
      {
        type: "Light Sweet Crude",
        sub: "Benchmark Grade",
        details: {
          "API Gravity": "37° - 42°",
          "Sulphur Content": "0.5% Max",
          BSW: "1% Max",
          Viscosity: "Standard Benchmark Levels",
        },
      },
    ],
  },
  {
    id: "sulphur",
    name: "Industrial Sulphur",
    category: "Petrol Products",
    origins: [
      { loc: "Form", types: "Granular / Lumps" },
      { loc: "Purity", types: "99.5% - 99.8% Bright Yellow" },
      { loc: "Usage", types: "Fertilizers / Chemicals" },
    ],
    image: "/sulphur.png",
    description: "High-purity industrial sulphur, essential for sulphuric acid production and phosphate fertilizer manufacturing.",
    specs: [
      {
        type: "Granular Sulphur",
        sub: "99.5% Purity",
        details: {
          Purity: "99.5% Min",
          Moisture: "0.5% Max",
          Ash: "0.05% Max",
          Color: "Bright Yellow",
        },
      },
    ],
  },
  {
    id: "urea",
    name: "Urea",
    category: "Petrol Products",
    origins: [
      { loc: "Type", types: "Granular / Prilled" },
      { loc: "Nitrogen", types: "46% Nitrogen Content" },
      { loc: "Standard", types: "Technical & Fertilizer Grade" },
    ],
    image: "/urea.png",
    description: "High-nitrogen fertilizer and chemical feedstock. Available in granular and prilled forms for agriculture and industrial use.",
    specs: [
      {
        type: "Granular Urea",
        sub: "46% Nitrogen",
        details: {
          Nitrogen: "46% Min",
          Biuret: "1.0% Max",
          Moisture: "0.5% Max",
          Size: "2.0 - 4.75 mm (90% Min)",
        },
      },
    ],
  },
];
