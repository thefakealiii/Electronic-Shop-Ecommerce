import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

// Import your images
import img1 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img2 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img3 from '../assets/images/Legrand BZ-250 Power Pack.jpg';
import img4 from '../assets/images/12 Volt 4.5 AMP C04A.jpg';
import img5 from '../assets/images/MaxLite APS-8  350J.jpg';
import img6 from '../assets/images/Westgate ELB-1248 EMERGENCY.jpg';
import img7 from '../assets/images/Nippon America RB7-12.jpg';
import img8 from '../assets/images/Nippon America DVSW-2000.jpg';
import img9 from '../assets/images/Westgate ELB-2048-EXTR....jpg';
import img10 from '../assets/images/Westgate ELB-3048-FLEX.jpg';
import img11 from '../assets/images/Power Sonic PS-12180F2 12V.jpg';
import img12 from '../assets/images/Space Age Electronics.jpg';
import img13 from '../assets/images/APC BX800L-LM Back-UPS.jpg';
import img14 from '../assets/images/Lotus EMBS Empty Surface.jpg';
import img15 from '../assets/images/LS Performance LED UFO High.jpg';
import img16 from '../assets/images/EIKO EEBN08WUA050 8 WATTS.jpg';
import img17 from '../assets/images/Keystone KTSP-10KV-C 10KV.jpg';
import img18 from '../assets/images/Baldor-Reliance Motor.jpg';
import img19 from '../assets/images/Greenheck ICO-30-B5-J1-QD.jpg';
import img20 from '../assets/images/Greenheck CUBE-099-4119GQD.jpg';
import img21 from '../assets/images/TPI Corporation CE30DV 30.jpg';
import img22 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img23 from '../assets/images/TPI Corporation CE12DS 12.jpg';
import img24 from '../assets/images/TPI Corporation CE30B 30.jpg';
import img25 from '../assets/images/Loren Cook GC622 Restroom.jpg';
import img26 from '../assets/images/Loren Cook GC146 Restroom.jpg'; //74$
import img27 from '../assets/images/Leeson Electric 122182 2.jpg';
import img28 from '../assets/images/12512ET3G445T-W22 NEMA.jpg';
import img29 from '../assets/images/Baldor Reliance Motor.jpg';
import img30 from '../assets/images/US Motors H60P2E Severe.jpg';
import img31 from '../assets/images/General Electric Control.jpg';
import img32 from '../assets/images/Profusion LED RTS Remote.jpg';
import img33 from '../assets/images/Schneider Electric.jpg';
import img34 from '../assets/images/Square D 9001SKS43BH2 3.jpg';
import img35 from '../assets/images/Enerlites DWHS-W Humidity.jpg';
import img36 from '../assets/images/Enerlites 17000-F3-W.jpg';
import img37 from '../assets/images/Enerlites 17001-F3-W.jpg';
import img38 from '../assets/images/Enerlites 17003-I 3-Speed.jpg';
import img39 from '../assets/images/One Gang Metal 3 Hole 1 2 Box.jpg';
import img40 from '../assets/images/One Gang Metal 4 Hole.jpg';
import img41 from '../assets/images/One Gang Metal 5 Hole.jpg';
import img42 from '../assets/images/Four Round Metal Box with 5.jpg';
import img43 from '../assets/images/Two Gang Metal with 3.jpg';
import img44 from '../assets/images/Two Gang Metal with 4.jpg';
import img45 from '../assets/images/Two Gang Metal with 5.jpg';
import img46 from '../assets/images/One Gang Metal Box with 3.jpg';
import img47 from '../assets/images/One Gang Metal Box with 4.jpg';
import img48 from '../assets/images/One Gang Metal Box with 5.jpg';
import img49 from '../assets/images/Plastic Weatherproof cover.jpg';
import img50 from '../assets/images/Metal Weatherproof cover 1.jpg';
import img51 from '../assets/images/Metal Weatherproof cover 1-.jpg';
import img52 from '../assets/images/Metal, 1- Gang Extension Ring.jpg';
import img53 from '../assets/images/Westgate GPA3-2 125V 3.jpg';
import img54 from '../assets/images/Westgate GPA6-2 125V 3.jpg';
import img55 from '../assets/images/Westgate GPA8-2 125V 3.jpg';
import img56 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img57 from '../assets/images/General Electric THQB21100.jpg';
import img58 from '../assets/images/E-Mon 4-EM-E20-2083200JKIT.jpg';
import img59 from '../assets/images/Cutler Hammer JS360225A 225.jpg';
import img60 from '../assets/images/General Electric THQP115 15.jpg';
import img61 from '../assets/images/Aclara 78AX900044 KV2c Gen.jpg';
import img62 from '../assets/images/General Electric THQB1115.jpg';
import img63 from '../assets/images/General Electric THQMV100D.jpg';
import img64 from '../assets/images/Lex HBL5269EBK 15A 125V 2P.jpg';
import img65 from '../assets/images/Midwest U065NA1 60A ACD.jpg';






const Products = () => {
  const productData = [


    
    {
      id: 1,
      title: "Intermatic ET8215C 7-Day",
      price: 305,
      description: "Intermatic ET8215C 7-Day Astronomic Basic Electronic Control Time Switch",
      category: "accessories",
      image: img1,
      rating: {
        rate: 4.4,
        count: 100
      }
    },
    {
      id: 2,
      title: "Lex LT-19P Six-Circuit",
      price: 874,
      description: "Lex LT-19P Six-Circuit",
      category: "accessories",
      image: img2,
      rating: {
        rate: 4.2,
        count: 80
      }
    },
    {
      id: 3,
      title: "Legrand BZ-250 Power Pack",
      price: 76.95,
      description: "Legrand BZ-250 Power Pack",
      category: "accessories",
      image: img3,
      rating: {
        rate: 4.3,
        count: 90
      }
    },
    {
      id: 4,
      title: "12 Volt 4.5 AMP C04A",
      price: 18.95,
      description: "12 Volt 4.5 AMP C04A",
      category: "accessories",
      image: img4,
      rating: {
        rate: 4.0,
        count: 70
      }
    },
    {
      id: 5,
      title: "MaxLite APS-8  350J",
      price: 30.43,
      description: "MaxLite APS-8  350J",
      category: "accessories",
      image: img5,
      rating: {
        rate: 4.4,
        count: 100
      }
    },
    {
      id: 6,
      title: "Westgate ELB-1248 EMERGENCY",
      price: 116.74,
      description: "Westgate ELB-1248 EMERGENCY",
      category: "accessories",
      image: img6,
      rating: {
        rate: 4.2,
        count: 80
      }
    },
    {
      id: 7,
      title: "Nippon America RB7-12",
      price: 22,
      description: "Nippon America RB7-12",
      category: "accessories",
      image: img7,
      rating: {
        rate: 4.3,
        count: 90
      }
    },
    {
      id: 8,
      title: "Nippon America DVSW-2000",
      price: 17.95,
      description: "Nippon America DVSW-2000",
      category: "accessories",
      image: img8,
      rating: {
        rate: 4.0,
        count: 70
      }
    },
    {
      id: 9,
      title: "Westgate ELB-2048-EXTR...",
      price: 188.74,
      description: "Westgate ELB-2048-EXTR",
      category: "accessories",
      image: img9,
      rating: {
        rate: 4.4,
        count: 100
      }
    },
    {
      id: 10,
      title: "Westgate ELB-3048-FLEX",
      price: 238.74,
      description: "Westgate ELB-3048-FLEX",
      category: "accessories",
      image: img10,
      rating: {
        rate: 4.2,
        count: 80
      }
    },
    {
      id: 11,
      title: "Power Sonic PS-12180F2 12V",
      price: 56.95,
      description: "Power Sonic PS-12180F2 12V",
      category: "accessories",
      image: img11,
      rating: {
        rate: 4.3,
        count: 90
      }
    },
    {
      id: 12,
      title: "Space Age Electronics",
      price: 66.95,
      description: "Space Age Electronics",
      category: "accessories",
      image: img12,
      rating: {
        rate: 4.0,
        count: 70
      }
    },
    {
      id: 13,
      title: "APC BX800L-LM Back-UPS",
      price: 79.95,
      description: "APC BX800L-LM Back-UPS",
      category: "accessories",
      image: img13,
      rating: {
        rate: 4.4,
        count: 100
      }
    },
    {
      id: 14,
      title: "Lotus EMBS Empty Surface",
      price: 23.43,
      description: "Lotus EMBS Empty Surface",
      category: "accessories",
      image: img14,
      rating: {
        rate: 4.2,
        count: 80
      }
    },
    {
      id: 15,
      title: "LS Performance LED UFO High",
      price: 407.53,
      description: "LS Performance LED UFO High",
      category: "accessories",
      image: img15,
      rating: {
        rate: 4.3,
        count: 90
      }
    },
    {
      id: 16,
      title: "EIKO EEBN08WUA050 8 WATTS",
      price: 62.95,
      description: "EIKO EEBN08WUA050 8 WATTS",
      category: "accessories",
      image: img16,
      rating: {
        rate: 4.0,
        count: 70
      }
    },
    {
      id: 17,
      title: "Keystone KTSP-10KV-C 10KV",
      price: 16.95,
      description: "Keystone KTSP-10KV-C 10KV",
      category: "accessories",
      image: img17,
      rating: {
        rate: 4.4,
        count: 100
      }
    },
    {
      id: 18,
      title: "Baldor-Reliance Motor",
      price: 1749,
      description: "Baldor-Reliance Motor",
      category: "accessories",
      image: img18,
      rating: {
        rate: 4.2,
        count: 80
      }
    },
    {
      id: 19,
      title: "Greenheck ICO-30-B5-J1-QD",
      price: 948.95,
      description: "Greenheck ICO-30-B5-J1-QD",
      category: "accessories",
      image: img19,
      rating: {
        rate: 4.3,
        count: 90
      }
    },
    {
      id: 20,
      title: "Greenheck CUBE-099-4119GQD",
      price: 2038.95,
      description: "Greenheck CUBE-099-4119GQD",
      category: "accessories",
      image: img20,
      rating: {
        rate: 4.0,
        count: 70
      }
    },
    {
      id: 21,
      title: "TPI Corporation CE30D 30",
      price: 305,
      description: "TPI Corporation CE30D 30",
      category: "accessories",
      image: img21,
      rating: {
        rate: 4.4,
        count: 100
      }
    },
    {
      id: 22,
      title: "Lex LT-19P Six-Circuit",
      price: 789.12,
      description: "Lex LT-19P Six-Circuit",
      category: "accessories",
      image: img22,
      rating: {
        rate: 4.2,
        count: 80
      }
    },
    {
      id: 23,
      title: "TPI Corporation CE24DS 24",
      price: 629.76,
      description: "TPI Corporation CE24DS 24",
      category: "accessories",
      image: img23,
      rating: {
        rate: 4.3,
        count: 90
      }
    },
    {
      id: 24,
      title: "TPI Corporation CE30B 30",
      price: 6,
      description: "TPI Corporation CE30B 30",
      category: "accessories",
      image: img24,
      rating: {
        rate: 4.0,
        count: 70
      }
    },
    {
      id: 25,
      title: "TPI Corporation CE12DS 12",
      price: 305,
      description: "TPI Corporation CE12DS 12",
      category: "accessories",
      image: img25,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    {
      id: 26,
      title: "Loren Cook GC146 Restroom",
      price: 74,
      description: "Loren Cook GC146 Restroom",
      category: "accessories",
      image: img26,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    {
      id: 27,
      title: "Leeson Electric 122182 2",
      price: 1299.95,
      description: "Leeson Electric 122182 2",
      category: "accessories",
      image: img27,
      rating: {
        rate: 4.4,
        count: 100
      }
    },


    {
      id: 28,
      title: "12512ET3G445T-W22 NEMA",
      price: 16779.95,
      description: "12512ET3G445T-W22 NEMA",
      category: "accessories",
      image: img28,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    {
      id: 29,
      title: "Baldor Reliance Motor",
      price: 6169.95,
      description: "Baldor Reliance Motor",
      category: "accessories",
      image: img29,
      rating: {
        rate: 4.4,
        count: 100
      }
    },


    {
      id: 30,
      title: "US Motors H60P2E Severe",
      price: 7879.95,
      description: "US Motors H60P2E Severe",
      category: "accessories",
      image: img30,
      rating: {
        rate: 4.4,
        count: 100
      }
    },


    {
      id: 31,
      title: "General Electric Control",
      price: 239.95,
      description: "General Electric Control",
      category: "accessories",
      image: img31,
      rating: {
        rate: 4.4,
        count: 100
      }
    },


    {
      id: 32,
      title: "Profusion LED RTS Remote",
      price: 11.95,
      description: "Profusion LED RTS Remote",
      category: "accessories",
      image: img32,
      rating: {
        rate: 4.4,
        count: 100
      }
    },


    {
      id: 33,
      title: "Schneider Electric",
      price: 94.95,
      description: "Schneider Electric",
      category: "accessories",
      image: img33,
      rating: {
        rate: 4.4,
        count: 100
      }
    },


    {
      id: 34,
      title: "Square D 9001SKS43BH2 3",
      price: 149.95,
      description: "Square D 9001SKS43BH2 3",
      category: "accessories",
      image: img34,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 35,
      title: "Enerlites DWHS-W Humidity",
      price: 37.95,
      description: "Enerlites DWHS-W Humidity",
      category: "accessories",
      image: img35,
      rating: {
        rate: 4.4,
        count: 100
      }
    },


    
    {
      id: 36,
      title: "Enerlites 17000-F3-W",
      price: 20.95,
      description: "Enerlites 17000-F3-W",
      category: "accessories",
      image: img36,
      rating: {
        rate: 4.4,
        count: 100
      }
    },


    
    {
      id: 37,
      title: "Enerlites 17001-F3-W",
      price: 15.95,
      description: "Enerlites 17001-F3-W",
      category: "accessories",
      image: img37,
      rating: {
        rate: 4.4,
        count: 100
      }
    },


    
    {
      id: 38,
      title: "Enerlites 17003-I 3-Speed",
      price: 9.95,
      description: "Enerlites 17003-I 3-Speed",
      category: "accessories",
      image: img38,
      rating: {
        rate: 4.4,
        count: 100
      }
    },


    
    {
      id: 39,
      title: "One Gang Metal 3 Hole 1 2 Box",
      price: 3.95,
      description: "One Gang Metal 3 Hole 1 2 Box",
      category: "accessories",
      image: img39,
      rating: {
        rate: 4.4,
        count: 100
      }
    },


    
    {
      id: 40,
      title: "One Gang Metal 4 Hole",
      price: 4.45,
      description: "One Gang Metal 4 Hole",
      category: "accessories",
      image: img40,
      rating: {
        rate: 4.4,
        count: 100
      }
    },


    
    {
      id: 41,
      title: "One Gang Metal 5 Hole",
      price: 6.95,
      description: "One Gang Metal 5 Hole",
      category: "accessories",
      image: img41,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 42,
      title: "Four Round Metal Box with 5",
      price: 5,
      description: "Four Round Metal Box with 5",
      category: "accessories",
      image: img42,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 43,
      title: "Two Gang Metal with 3",
      price: 5.95,
      description: "Two Gang Metal with 3",
      category: "accessories",
      image: img43,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 44,
      title: "Two Gang Metal with 4",
      price: 4.5,
      description: "Two Gang Metal with 4",
      category: "accessories",
      image: img44,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 45,
      title: "Two Gang Metal with 5",
      price: 5,
      description: "Two Gang Metal with 5",
      category: "accessories",
      image: img45,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 46,
      title: "One Gang Metal Box with 3",
      price: 2.7,
      descripion: "One Gang Metal Box with 3",
      category: "accessories",
      image: img46,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 47,
      title: "One Gang Metal Box with 4",
      price: 3,
      description: "One Gang Metal Box with 4",
      category: "accessories",
      image: img47,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 48,
      title: "One Gang Metal Box with 5",
      price: 22,
      description: "One Gang Metal Box with 5",
      category: "accessories",
      image: img48,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 49,
      title: "Plastic Weatherproof cover",
      price: 3.99,
      description: "Plastic Weatherproof cover",
      category: "accessories",
      image: img49,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 50,
      title: "Metal Weatherproof cover 1",
      price: 3.95,
      description: "Metal Weatherproof cover 1",
      category: "accessories",
      image: img50,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 51,
      title: "Metal Weatherproof cover 1-",
      price: 2.30,
      description: "Metal Weatherproof cover 1-",
      category: "accessories",
      image: img51,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 52,
      title: "Metal, 1- Gang Extension Ring",
      price: 4.95,
      description: "Metal, 1- Gang Extension Ring",
      category: "accessories",
      image: img52,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 53,
      title: "Westgate GPA3-2 125V 3",
      price: 3.63,
      description: "Westgate GPA3-2 125V 3",
      category: "accessories",
      image: img53,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 54,
      title: "Westgate GPA6-2 125V 3",
      price: 5.24,
      description: "Westgate GPA6-2 125V 3",
      category: "accessories",
      image: img54,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 55,
      title: "Westgate GPA8-2 125V 3",
      price: 6.67,
      description: "Westgate GPA8-2 125V 3",
      category: "accessories",
      image: img55,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 56,
      title: "Nutone 696N Exhaust Fan",
      price: 29.95,
      description: "Nutone 696N Exhaust Fan",
      category: "accessories",
      image: img56,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 57,
      title: "General Electric THQB21100",
      price: 99.95,
      description: "General Electric THQB21100",
      category: "accessories",
      image: img57,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 58,
      title: "E-Mon 4-EM-E20-2083200JKIT",
      price: 1649.95,
      description: "E-Mon 4-EM-E20-2083200JKIT",
      category: "accessories",
      image: img58,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 59,
      title: "Cutler Hammer JS360225A 225",
      price: 620.95,
      description: "Cutler Hammer JS360225A 225",
      category: "accessories",
      image: img59,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 60,
      title: "General Electric THQP115 15",
      price: 7.95,
      description: "General Electric THQP115 15",
      category: "accessories",
      image: img60,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 61,
      title: "Aclara 78AX900044 KV2c Gen",
      price: 499.95,
      description: "Aclara 78AX900044 KV2c Gen",
      category: "accessories",
      image: img61,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 62,
      title: "General Electric THQB1115",
      price: 12.95,
      description: "General Electric THQB1115",
      category: "accessories",
      image: img62,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 63,
      title: "General Electric THQMV100D",
      price: 360.95,
      description: "General Electric THQMV100D",
      category: "accessories",
      image: img63,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 64,
      title: "Lex HBL5269EBK 15A 125V 2P",
      price: 12.75,
      description: "Lex HBL5269EBK 15A 125V 2P",
      category: "accessories",
      image: img64,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    
    {
      id: 65,
      title: "Midwest U065NA1 60A ACD",
      price: 49.44,
      description: "Midwest U065NA1 60A ACD",
      category: "accessories",
      image: img65,
      rating: {
        rate: 4.4,
        count: 100
      }
    },



    
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
