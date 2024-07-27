import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

// Import your images
import img1 from '../assets/images/usb3.0.jpg';
import img2 from '../assets/images/camera.jpg';
import img3 from '../assets/images/earphone.jpg';
import img4 from '../assets/images/microphone.webp';
import img5 from '../assets/images/wristwatch.jpg';
import img6 from '../assets/images/arduino.jpg';
import img7 from '../assets/images/blackcameralens.jpg';
import img8 from '../assets/images/bluetoothheadsets.avif';
import img9 from '../assets/images/flashmemorypendrive.jpg';
import img10 from '../assets/images/headphoneandheadsetsaccess.jpg';
import img11 from '../assets/images/monoheadsets.jpg';
import img12 from '../assets/images/mouse.avif';
import img13 from '../assets/images/phonecases.avif';
import img14 from '../assets/images/powerbanks.avif';
import img15 from '../assets/images/sdcard.jpg';
import img16 from '../assets/images/wristwatchclock.jpg';
import img17 from '../assets/images/xbox.jpg';
import img18 from '../assets/images/externalusb2.0.jpeg';
import img19 from '../assets/images/tabletradiator.webp';
import img20 from '../assets/images/Dc12Vcoolingfan.webp';
import img21 from '../assets/images/F4plus_notebookcoolingpad.webp';
import img22 from '../assets/images/Cx09tabletcooler.webp';
import img23 from '../assets/images/500Winverter_DC 12V TO AC 220V powersupply.webp';
import img24 from '../assets/images/micronicscyclone.webp';
import img25 from '../assets/images/Oasis600W Gaming.webp';
import img26 from '../assets/images/4GbRam.webp';
import img27 from '../assets/images/usb2.0 external sound card.webp';
import img28 from '../assets/images/externalusbsoundcard.webp';
import img29 from '../assets/images/Quadro K600 1GB 128Bit DDR3 Graphic Card, Best For Gaming.webp';
import img30 from '../assets/images/NVIDIA GEFORCE GT730 2GB GDDR5 GAMING GRAPHIC.webp';
import img31 from '../assets/images/Mini PCIe to PCI Express 16X Riser for Laptop External image.webp';
import img32 from '../assets/images/AMD Radeon R5 340X 2GB DDR3 PCI Express Graphic.webp';
import img33 from '../assets/images/AMD R5240 1GB Graphics Card- DDR3 64bit dx12.webp';
import img34 from '../assets/images/AMD RADEON HD8490 1GB, DDR3, 64BIT, GAMING GRAPHI.webp';
import img35 from '../assets/images/AMD Radeon HD 8570 1GB DDR3 DirectX 12, PCIe x16.webp';
import img36 from '../assets/images/Nvidia Quadro P620 2GB GDDR5 , Graphic Card.webp';
import img37 from '../assets/images/PNY Quadro NVS315 1GB DDR3 DirectX11 best for Gaming.webp';
import img38 from '../assets/images/PREMIUM COOLCOLD Vacuum Portable Laptop Cooler USB.webp';
import img39 from '../assets/images/DL06 Mobile Cooling Fan.webp';
import img40 from '../assets/images/CX09 Tablet Cooler Mobile Cooler Phone Radiator For IPAD.webp';
import img41 from '../assets/images/Best Quality Baseball Men Caps for Casual Use Sun Hats.jpeg';
import img42 from '../assets/images/7-Piece Keyboard Cleaning Brush Earplug Cleaning Kit.jpeg';
import img43 from '../assets/images/Camera Lens Protector Compatible with iPhone 13.webp';
import img44 from '../assets/images/Lens Back Cap Canon DSLR Camera Rear Size- Black.webp';
import img45 from '../assets/images/Computer Keyboard Cleaner Brush 7 In 1 Electronic Kit.webp';
import img46 from '../assets/images/Phone Lens 0.45X Ultra Wide-Angle Macro Lens Phone.webp';
import img47 from '../assets/images/LKPCIGCXM Fish Eye Phone Lens, 0.45X Phone with HD.webp';
import img48 from '../assets/images/Mini Portable Multi-Functional 7 In 1 Cleaning Tool Kit.webp';
import img49 from '../assets/images/1 Piece Love Heart Shape Phone Wipe Cloth Screen Wip.webp';
import img50 from '../assets/images/1Pair Camera Accessories Black & Transparent Lens.webp';
import img51 from '../assets/images/Lens Hood Canon for EF 50mm f 1.8 STM ES-68 - Black.webp';
import img52 from '../assets/images/Tuya WiFi Smart Power Meter Earth Leakage Protector Switch.jpeg';
import img53 from '../assets/images/12-220V LCD Weekly Programmable Electronic Relay.webp'; 
//price 6
import img54 from '../assets/images/MORA 63A VOLTAGE PROTECTION.jpeg'; //price 6
import img55 from '../assets/images/Evoo Branded CHINA Fitting Switch Board.webp'; //price 6
import img56 from '../assets/images/Change Over Switch 40 Amp Single Phase 2 Pole Rotry Type.jpeg'; //price 6
import img57 from '../assets/images/EI41X17 220V AC to 12V 4W transformer 50 herts low.webp'; //price 6
import img58 from '../assets/images/1pcs 0.5mm 10M Insulated copper wire enameled wire lead.webp';
import img59 from '../assets/images/Steel Travel Outdoor Electric Mug Car Charging Electric.webp';
import img60 from '../assets/images/3.3V slash 5V MB102 Breadboard power module plus MB-102 830.webp';
import img61 from '../assets/images/High-Precision Handled RC3563 Battery Tester Internal.webp';
import img62 from '../assets/images/3.3V slash 5V MB102 Breadboard power module plus MB-102 830.webp';
import img63 from '../assets/images/3D Pen Filament Wire for Doodle Pen Refills.webp';
import img65 from '../assets/images/Arduino UNO RFID Starter Kit.webp';
import img66 from '../assets/images/K TYPE STUD TYPE THERMOCOUPLE.webp';
import img67 from '../assets/images/Extension Board with Voltage Ampere Display.webp';
import img68 from '../assets/images/5PCS JST XH2.54 XH 2 3 4 5 6 7 8 9 10 Pin Wire.jpeg';
import img69 from '../assets/images/Best Of Mosquito Light Lamp ( Pack OF 3 ).webp';
import img70 from '../assets/images/Extension Board with USB port High Quality Extension Board.webp';
import img71 from '../assets/images/3W 6V Solar panel regulated 5V USB phone Battery Charger.webp';
import img72 from '../assets/images/Extension Board 5 Ports Power socket AC220V-16A Without.webp';
import img73 from '../assets/images/Extension Board with Voltage Ampere Display.webp';
import img74 from '../assets/images/Extension Board with 2 Universal 3 pin Sockets.webp';
import img75 from '../assets/images/Extension Board with Voltage Ampere Display.webp';
import img76 from '../assets/images/JASCO GENERATOR TITANIUM SERIES LOW NOISE SELF.webp';
import img77 from '../assets/images/LIANLONG LL3500 -3KW Self Start Petrol Generator(40 hours.webp';
import img78 from '../assets/images/LUTIAN Generator - LT3990E -3.5Kva  2.8Kw (280).webp';
import img79 from '../assets/images/JASCO 8 KVA SOUNPROOF CANOPY EPA 3.webp';
import img80 from '../assets/images/2 in 1 Wireless B6 5.0 Adapter Bluetooth Transmitter Receiver.webp';
import img81 from '../assets/images/Car Bluetooth Receiver FM Transmitter Wireless Audio.jpeg';
import img82 from '../assets/images/Bluetooth Receiver Car Kit Handsfree Call 3.5mm Jack TF.jpeg';
import img83 from '../assets/images/FM Transmitter FM Modulator Car Music Receiver MP3 Player.jpeg';
import img84 from '../assets/images/Original TOMZN 63A WIFI TUYA Smartlife Reclosable.jpeg';
import img85 from '../assets/images/EWeLink App 16A Mini Wifi Smart Switch Light On Off.jpeg';
import img86 from '../assets/images/Tomzn 63A Wifi Smart Switch.jpeg';
import img87 from '../assets/images/DC 1000V Solar Mini Circuit Breaker Overload Protection.jpeg';
import img88 from '../assets/images/Solar Panel by Jasco - 180 Watt.webp';
import img89 from '../assets/images/Pak Tech Mppt Plus Hybrid Solar Charger Controller 70.webp';
import img90 from '../assets/images/Diwan DS4.10 MC4 Solar Panel Connector 4-6mm2 1500V DC.webp';
import img91 from '../assets/images/Solar Power Inverter - 1000 Watt - Black.webp';
import img92 from '../assets/images/LED Solar Wall Lamp Outdoor Waterproof Up And Down.jpeg';
import img93 from '../assets/images/72 C0B Solar Lights Outdoor, Wireless Waterproof Solar.webp';






const Products = () => {
  const productData = [


    {
      id: 52,
      title: "Tuya wifi Energy Meter",
      price: 12,
      description: "Tuya WiFi Smart Power Meter Earth Leakage Protector Switch ",
      category: "accessories",
      image: img52,
      rating: {
        rate: 4.4,
        count: 100
      }
    },
    {
      id: 53,
      title: "LCD Weekly Programmable Relay",
      price: 6,
      description: "12-220V LCD Weekly Programmable Electronic Relay",
      category: "accessories",
      image: img53,
      rating: {
        rate: 4.2,
        count: 80
      }
    },
    {
      id: 54,
      title: "Voltage Protection",
      price: 6,
      description: "MORA 63A VOLTAGE PROTECTION",
      category: "accessories",
      image: img54,
      rating: {
        rate: 4.3,
        count: 90
      }
    },
    {
      id: 55,
      title: "China Fitting Switch Board",
      price: 6,
      description: "Evoo Branded CHINA Fitting Switch Board",
      category: "accessories",
      image: img55,
      rating: {
        rate: 4.0,
        count: 70
      }
    },
    {
      id: 56,
      title: "Change Over Switch",
      price: 6,
      description: "Change Over Switch 40 Amp Single Phase 2 Pole Rotry Type",
      category: "accessories",
      image: img56,
      rating: {
        rate: 4.1,
        count: 75
      }
    },
    {
      id: 57,
      title: "AC to 12V Transformer",
      price: 6,
      description: "EI41X17 220V AC to 12V 4W transformer 50 herts low",
      category: "accessories",
      image: img57,
      rating: {
        rate: 4.3,
        count: 85
      }
    },
    {
      id: 58,
      title: "Insulated Copper Wire",
      price: 2,
      description: "1pcs 0.5mm 10M Insulated copper wire enameled wire lead",
      category: "accessories",
      image: img58,
      rating: {
        rate: 4.4,
        count: 110
      }
    },
    {
      id: 59,
      title: "Electric Mug",
      price: 15,
      description: "Steel Travel Outdoor Electric Mug Car Charging Electric",
      category: "accessories",
      image: img59,
      rating: {
        rate: 4.5,
        count: 120
      }
    },
    {
      id: 60,
      title: "Breadboard Power Module",
      price: 3,
      description: "3.3V/5V MB102 Breadboard power module plus MB-102 830",
      category: "accessories",
      image: img60,
      rating: {
        rate: 4.2,
        count: 60
      }
    },
    {
      id: 61,
      title: "Battery Tester",
      price: 10,
      description: "High-Precision Handled RC3563 Battery Tester Internal",
      category: "accessories",
      image: img61,
      rating: {
        rate: 4.6,
        count: 130
      }
    },
    {
      id: 62,
      title: "Breadboard Power Module",
      price: 3,
      description: "3.3V/5V MB102 Breadboard power module plus MB-102 830",
      category: "accessories",
      image: img62,
      rating: {
        rate: 4.2,
        count: 60
      }
    },
    {
      id: 63,
      title: "3D Pen Filament Wire",
      price: 5,
      description: "3D Pen Filament Wire for Doodle Pen Refills",
      category: "accessories",
      image: img63,
      rating: {
        rate: 4.3,
        count: 100
      }
    },
    
    {
      id: 65,
      title: "Arduino RFID Starter Kit",
      price: 20,
      description: "Arduino UNO RFID Starter Kit",
      category: "accessories",
      image: img65,
      rating: {
        rate: 4.7,
        count: 150
      }
    },
    {
      id: 66,
      title: "Thermocouple",
      price: 7,
      description: "K TYPE STUD TYPE THERMOCOUPLE",
      category: "accessories",
      image: img66,
      rating: {
        rate: 4.3,
        count: 80
      }
    },
    {
      id: 67,
      title: "Extension Board",
      price: 12,
      description: "Extension Board with Voltage Ampere Display",
      category: "accessories",
      image: img67,
      rating: {
        rate: 4.5,
        count: 90
      }
    },
    {
      id: 68,
      title: "JST Pin Wire",
      price: 4,
      description: "5PCS JST XH2.54 XH 2 3 4 5 6 7 8 9 10 Pin Wire",
      category: "accessories",
      image: img68,
      rating: {
        rate: 4.4,
        count: 70
      }
    },
    {
      id: 69,
      title: "Mosquito Light Lamp",
      price: 10,
      description: "Best Of Mosquito Light Lamp (Pack OF 3)",
      category: "accessories",
      image: img69,
      rating: {
        rate: 4.2,
        count: 80
      }
    },
    {
      id: 70,
      title: "Extension Board with USB",
      price: 14,
      description: "Extension Board with USB port High Quality Extension Board",
      category: "accessories",
      image: img70,
      rating: {
        rate: 4.5,
        count: 100
      }
    },
    {
      id: 71,
      title: "Solar Panel Charger",
      price: 8,
      description: "3W 6V Solar panel regulated 5V USB phone Battery Charger",
      category: "accessories",
      image: img71,
      rating: {
        rate: 4.3,
        count: 75
      }
    },
    {
      id: 72,
      title: "Extension Board",
      price: 11,
      description: "Extension Board 5 Ports Power socket AC220V-16A Without",
      category: "accessories",
      image: img72,
      rating: {
        rate: 4.2,
        count: 70
      }
    },
    {
      id: 73,
      title: "Extension Board",
      price: 12,
      description: "Extension Board with Voltage Ampere Display",
      category: "accessories",
      image: img73,
      rating: {
        rate: 4.5,
        count: 90
      }
    },
    {
      id: 74,
      title: "Extension Board",
      price: 10,
      description: "Extension Board with 2 Universal 3 pin Sockets",
      category: "accessories",
      image: img74,
      rating: {
        rate: 4.3,
        count: 80
      }
    },
    {
      id: 75,
      title: "Extension Board",
      price: 12,
      description: "Extension Board with Voltage Ampere Display",
      category: "accessories",
      image: img75,
      rating: {
        rate: 4.5,
        count: 90
      }
    },
    {
      id: 76,
      title: "Low Noise Generator",
      price: 300,
      description: "JASCO GENERATOR TITANIUM SERIES LOW NOISE SELF",
      category: "generators",
      image: img76,
      rating: {
        rate: 4.7,
        count: 50
      }
    },
    {
      id: 77,
      title: "Petrol Generator",
      price: 250,
      description: "LIANLONG LL3500 -3KW Self Start Petrol Generator(40 hours",
      category: "generators",
      image: img77,
      rating: {
        rate: 4.6,
        count: 55
      }
    },
    {
      id: 78,
      title: "LUTIAN Generator",
      price: 280,
      description: "LUTIAN Generator - LT3990E -3.5Kva 2.8Kw (280)",
      category: "generators",
      image: img78,
      rating: {
        rate: 4.5,
        count: 60
      }
    },
    {
      id: 79,
      title: "Soundproof Canopy Generator",
      price: 500,
      description: "JASCO 8 KVA SOUNPROOF CANOPY EPA 3",
      category: "generators",
      image: img79,
      rating: {
        rate: 4.8,
        count: 40
      }
    },
    {
      id: 80,
      title: "Wireless Bluetooth Adapter",
      price: 10,
      description: "2 in 1 Wireless B6 5.0 Adapter Bluetooth Transmitter Receiver",
      category: "accessories",
      image: img80,
      rating: {
        rate: 4.4,
        count: 90
      }
    },
    {
      id: 81,
      title: "Car Bluetooth Receiver",
      price: 8,
      description: "Car Bluetooth Receiver FM Transmitter Wireless Audio",
      category: "accessories",
      image: img81,
      rating: {
        rate: 4.2,
        count: 70
      }
    },
    {
      id: 82,
      title: "Bluetooth Car Kit",
      price: 9,
      description: "Bluetooth Receiver Car Kit Handsfree Call 3.5mm Jack TF",
      category: "accessories",
      image: img82,
      rating: {
        rate: 4.3,
        count: 75
      }
    },
    {
      id: 83,
      title: "FM Transmitter",
      price: 8,
      description: "FM Transmitter FM Modulator Car Music Receiver MP3 Player",
      category: "accessories",
      image: img83,
      rating: {
        rate: 4.1,
        count: 65
      }
    },
    {
      id: 84,
      title: "Smartlife Reclosable",
      price: 18,
      description: "Original TOMZN 63A WIFI TUYA Smartlife Reclosable",
      category: "accessories",
      image: img84,
      rating: {
        rate: 4.6,
        count: 100
      }
    },
    {
      id: 85,
      title: "Mini Wifi Smart Switch",
      price: 7,
      description: "EWeLink App 16A Mini Wifi Smart Switch Light On Off",
      category: "accessories",
      image: img85,
      rating: {
        rate: 4.4,
        count: 90
      }
    },
    {
      id: 86,
      title: "Smart Switch",
      price: 17,
      description: "Tomzn 63A Wifi Smart Switch",
      category: "accessories",
      image: img86,
      rating: {
        rate: 4.5,
        count: 95
      }
    },
    {
      id: 87,
      title: "Solar Mini Circuit Breaker",
      price: 10,
      description: "DC 1000V Solar Mini Circuit Breaker Overload Protection",
      category: "accessories",
      image: img87,
      rating: {
        rate: 4.4,
        count: 85
      }
    },
    {
      id: 88,
      title: "Solar Panel",
      price: 100,
      description: "Solar Panel by Jasco - 180 Watt",
      category: "accessories",
      image: img88,
      rating: {
        rate: 4.7,
        count: 120
      }
    },
    {
      id: 89,
      title: "Hybrid Solar Charger Controller",
      price: 50,
      description: "Pak Tech Mppt Plus Hybrid Solar Charger Controller 70",
      category: "accessories",
      image: img89,
      rating: {
        rate: 4.5,
        count: 110
      }
    },
    {
      id: 90,
      title: "Solar Panel Connector",
      price: 6,
      description: "Diwan DS4.10 MC4 Solar Panel Connector 4-6mm2 1500V DC",
      category: "accessories",
      image: img90,
      rating: {
        rate: 4.3,
        count: 80
      }
    },
    {
      id: 91,
      title: "Solar Power Inverter",
      price: 120,
      description: "Solar Power Inverter - 1000 Watt - Black",
      category: "accessories",
      image: img91,
      rating: {
        rate: 4.6,
        count: 100
      }
    },
    {
      id: 92,
      title: "LED Solar Wall Lamp",
      price: 15,
      description: "LED Solar Wall Lamp Outdoor Waterproof Up And Down",
      category: "accessories",
      image: img92,
      rating: {
        rate: 4.5,
        count: 90
      }
    },

    
    {
      id: 1,
      title: "USB 3.0",
      price: 10.99,
      description: "Fast USB 3.0 storage",
      category: "electronics",
      image: img1,
      rating: {
        rate: 4.5,
        count: 100
      }
    },
    {
      id: 2,
      title: "Digital Camera",
      price: 299.99,
      description: "High-quality digital camera",
      category: "electronics",
      image: img2,
      rating: {
        rate: 4.7,
        count: 150
      }
    },
    {
      id: 3,
      title: "Earphone",
      price: 15.99,
      description: "Comfortable earphones",
      category: "electronics",
      image: img3,
      rating: {
        rate: 4.2,
        count: 200
      }
    },
    {
      id: 4,
      title: "Microphone",
      price: 49.99,
      description: "High-quality microphone",
      category: "electronics",
      image: img4,
      rating: {
        rate: 4.6,
        count: 120
      }
    },
    {
      id: 5,
      title: "Wrist Watch",
      price: 99.99,
      description: "Stylish wrist watch",
      category: "electronics",
      image: img5,
      rating: {
        rate: 4.3,
        count: 180
      }
    },
    {
      id: 6,
      title: "Arduino",
      price: 29.99,
      description: "Arduino for your projects",
      category: "electronics",
      image: img6,
      rating: {
        rate: 4.4,
        count: 140
      }
    },
    {
      id: 7,
      title: "Camera Lens",
      price: 199.99,
      description: "High-quality camera lens",
      category: "electronics",
      image: img7,
      rating: {
        rate: 4.8,
        count: 90
      }
    },
    {
      id: 8,
      title: "Bluetooth Headsets",
      price: 49.99,
      description: "Wireless Bluetooth headsets",
      category: "electronics",
      image: img8,
      rating: {
        rate: 4.5,
        count: 160
      }
    },
    {
      id: 9,
      title: "Flash Drive",
      price: 12.99,
      description: "Reliable flash drive",
      category: "electronics",
      image: img9,
      rating: {
        rate: 4.3,
        count: 130
      }
    },
    {
      id: 10,
      title: "Headsets",
      price: 25.99,
      description: "Comfortable headsets",
      category: "electronics",
      image: img10,
      rating: {
        rate: 4.0,
        count: 200
      }
    },
    {
      id: 11,
      title: "Mono Headsets",
      price: 20.99,
      description: "Mono headsets for clear audio",
      category: "electronics",
      image: img11,
      rating: {
        rate: 4.1,
        count: 150
      }
    },
    {
      id: 12,
      title: "Mouse",
      price: 14.99,
      description: "Ergonomic mouse",
      category: "electronics",
      image: img12,
      rating: {
        rate: 4.4,
        count: 220
      }
    },
    {
      id: 13,
      title: "Phone Cases",
      price: 9.99,
      description: "Protective phone cases",
      category: "electronics",
      image: img13,
      rating: {
        rate: 4.2,
        count: 170
      }
    },
    {
      id: 14,
      title: "Power Banks",
      price: 19.99,
      description: "Portable power banks",
      category: "electronics",
      image: img14,
      rating: {
        rate: 4.5,
        count: 200
      }
    },
    {
      id: 15,
      title: "SD Card",
      price: 8.99,
      description: "High-capacity SD card",
      category: "electronics",
      image: img15,
      rating: {
        rate: 4.6,
        count: 190
      }
    },
    {
      id: 16,
      title: "Watch",
      price: 99.99,
      description: "Elegant wristwatch",
      category: "electronics",
      image: img16,
      rating: {
        rate: 4.7,
        count: 180
      }
    },
    {
      id: 17,
      title: "Xbox",
      price: 399.99,
      description: "Latest Xbox console",
      category: "electronics",
      image: img17,
      rating: {
        rate: 4.8,
        count: 250
      }
    },
    {
      id: 18,
      title: "External USB 2.0",
      price: 15.99,
      description: "External USB 2.0 storage",
      category: "electronics",
      image: img18,
      rating: {
        rate: 4.3,
        count: 100
      }
    },
    {
      id: 19,
      title: "Tablet Radiator",
      price: 25.99,
      description: "Efficient tablet radiator",
      category: "electronics",
      image: img19,
      rating: {
        rate: 4.5,
        count: 140
      }
    },
    {
      id: 20,
      title: "Cooling Fan",
      price: 10.99,
      description: "12V cooling fan",
      category: "electronics",
      image: img20,
      rating: {
        rate: 4.4,
        count: 120
      }
    },
    {
      id: 21,
      title: "Cooling Pad",
      price: 19.99,
      description: "Notebook cooling pad",
      category: "electronics",
      image: img21,
      rating: {
        rate: 4.6,
        count: 150
      }
    },
    {
      id: 22,
      title: "Tablet Cooler",
      price: 22.99,
      description: "Tablet cooler for devices",
      category: "electronics",
      image: img22,
      rating: {
        rate: 4.5,
        count: 130
      }
    },
    {
      id: 23,
      title: "Inverter",
      price: 49.99,
      description: "500W power supply inverter",
      category: "electronics",
      image: img23,
      rating: {
        rate: 4.7,
        count: 110
      }
    },
    {
      id: 24,
      title: "Micronics Cyclone",
      price: 29.99,
      description: "Micronics Cyclone fan",
      category: "electronics",
      image: img24,
      rating: {
        rate: 4.4,
        count: 90
      }
    },
    {
      id: 25,
      title: "Gaming Power Supply",
      price: 79.99,
      description: "600W gaming power supply",
      category: "electronics",
      image: img25,
      rating: {
        rate: 4.8,
        count: 130
      }
    },
    {
      id: 26,
      title: "4GB RAM",
      price: 29.99,
      description: "High-speed 4GB RAM",
      category: "electronics",
      image: img26,
      rating: {
        rate: 4.6,
        count: 160
      }
    },
    {
      id: 27,
      title: "External Sound Card",
      price: 12.99,
      description: "USB 2.0 external sound card",
      category: "electronics",
      image: img27,
      rating: {
        rate: 4.3,
        count: 110
      }
    },
    {
      id: 28,
      title: "USB Sound Card",
      price: 14.99,
      description: "External USB sound card",
      category: "electronics",
      image: img28,
      rating: {
        rate: 4.5,
        count: 90
      }
    },
    {
      id: 29,
      title: "Quadro Graphics Card",
      price: 99.99,
      description: "Quadro K600 graphics card",
      category: "electronics",
      image: img29,
      rating: {
        rate: 4.7,
        count: 140
      }
    },
    {
      id: 30,
      title: "GeForce Graphics Card",
      price: 129.99,
      description: "GeForce GT730 graphics card",
      category: "electronics",
      image: img30,
      rating: {
        rate: 4.6,
        count: 170
      }
    },
    {
      id: 31,
      title: "PCIe Riser",
      price: 25.99,
      description: "Mini PCIe to PCI Express riser",
      category: "electronics",
      image: img31,
      rating: {
        rate: 4.4,
        count: 100
      }
    },
    {
      id: 32,
      title: "Radeon Graphics Card",
      price: 109.99,
      description: "Radeon R5 340X graphics card",
      category: "electronics",
      image: img32,
      rating: {
        rate: 4.5,
        count: 120
      }
    },
    {
      id: 33,
      title: "Radeon R5 240",
      price: 89.99,
      description: "Radeon R5 240 graphics card",
      category: "electronics",
      image: img33,
      rating: {
        rate: 4.4,
        count: 130
      }
    },
    {
      id: 34,
      title: "Radeon HD8490",
      price: 119.99,
      description: "Radeon HD8490 graphics card",
      category: "electronics",
      image: img34,
      rating: {
        rate: 4.7,
        count: 150
      }
    },
    {
      id: 35,
      title: "Radeon HD8570",
      price: 139.99,
      description: "Radeon HD8570 graphics card",
      category: "electronics",
      image: img35,
      rating: {
        rate: 4.6,
        count: 110
      }
    },
    {
      id: 36,
      title: "Quadro P620",
      price: 149.99,
      description: "Quadro P620 graphics card",
      category: "electronics",
      image: img36,
      rating: {
        rate: 4.8,
        count: 120
      }
    },
    {
      id: 37,
      title: "PNY Quadro NVS315",
      price: 99.99,
      description: "PNY Quadro NVS315 graphics card",
      category: "electronics",
      image: img37,
      rating: {
        rate: 4.5,
        count: 140
      }
    },
    {
      id: 38,
      title: "Vacuum Cooler",
      price: 19.99,
      description: "Portable laptop vacuum cooler",
      category: "electronics",
      image: img38,
      rating: {
        rate: 4.4,
        count: 130
      }
    },
    {
      id: 39,
      title: "Mobile Cooling Fan",
      price: 9.99,
      description: "DL06 mobile cooling fan",
      category: "electronics",
      image: img39,
      rating: {
        rate: 4.3,
        count: 90
      }
    },
    {
      id: 40,
      title: "Phone Radiator",
      price: 15.99,
      description: "Tablet cooler and phone radiator",
      category: "electronics",
      image: img40,
      rating: {
        rate: 4.5,
        count: 110
      }
    },
    {
      id: 41,
      title: "Baseball Cap",
      price: 12.99,
      description: "Casual use baseball cap",
      category: "fashion",
      image: img41,
      rating: {
        rate: 4.2,
        count: 150
      }
    },
    {
      id: 42,
      title: "Cleaning Kit",
      price: 7.99,
      description: "Keyboard cleaning kit",
      category: "accessories",
      image: img42,
      rating: {
        rate: 4.3,
        count: 120
      }
    },
    {
      id: 43,
      title: "Lens Protector",
      price: 5.99,
      description: "Lens protector for iPhone 13",
      category: "accessories",
      image: img43,
      rating: {
        rate: 4.4,
        count: 100
      }
    },
    {
      id: 44,
      title: "Lens Cap",
      price: 6.99,
      description: "Lens back cap for Canon DSLR",
      category: "accessories",
      image: img44,
      rating: {
        rate: 4.5,
        count: 80
      }
    },
    {
      id: 45,
      title: "Electronic Cleaning Kit",
      price: 9.99,
      description: "7-in-1 electronic cleaning kit",
      category: "accessories",
      image: img45,
      rating: {
        rate: 4.4,
        count: 110
      }
    },
    {
      id: 46,
      title: "Wide-Angle Lens",
      price: 15.99,
      description: "Wide-angle macro lens for phones",
      category: "accessories",
      image: img46,
      rating: {
        rate: 4.6,
        count: 90
      }
    },
    {
      id: 47,
      title: "Phone Tripod",
      price: 19.99,
      description: "Flexible phone tripod stand",
      category: "accessories",
      image: img47,
      rating: {
        rate: 4.5,
        count: 70
      }
    },
    {
      id: 48,
      title: "Camera Strap",
      price: 7.99,
      description: "Adjustable camera strap",
      category: "accessories",
      image: img48,
      rating: {
        rate: 4.3,
        count: 60
      }
    },
    {
      id: 49,
      title: "Memory Card",
      price: 29.99,
      description: "64GB high-speed memory card",
      category: "accessories",
      image: img49,
      rating: {
        rate: 4.7,
        count: 80
      }
    },
    {
      id: 50,
      title: "Screen Cleaner",
      price: 5.99,
      description: "Screen cleaning kit for devices",
      category: "accessories",
      image: img50,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    {
      id: 51,
      title: "Lens canon",
      price: 5.99,
      description: "Lens Hood Canon for EF 50mm f 1.8 STM ES-68 ",
      category: "accessories",
      image: img51,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

   
    {
      id: 93,
      title: "Solar Lights Outdoor",
      price: 20,
      description: "72 C0B Solar Lights Outdoor, Wireless Waterproof Solar",
      category: "accessories",
      image: img93,
      rating: {
        rate: 4.6,
        count: 95
      }
    }
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(data);
  const dispatch = useDispatch();

  useEffect(() => {
  setTimeout(() => {
    setData(productData);
    setFilter(productData);
    setLoading(false);
  }, 2000);
}, []);


  const Loading = () => (
    <>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
    </>
  );

  const handleAddToCart = (product) => {
    dispatch(addCart(product));
  };

  const ShowProducts = () => (
    <>
      {filter.map((product) => (
        <div className="col-md-3 mb-4" key={product.id}>
          <div className="card h-100 text-center p-4">
            <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
            <div className="card-body">
              <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
              <p className="card-text lead fw-bold">${product.price}</p>
              <button 
                className="btn btn-outline-dark me-2" 
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <Link to={`/products/${product.id}`} className="btn btn-outline-dark">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Electronics</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
