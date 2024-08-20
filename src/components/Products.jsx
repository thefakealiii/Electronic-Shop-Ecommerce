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
import img25 from '../assets/images/TPI Corporation CE12DS 12.jpg';
import img26 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img27 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img28 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img29 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img30 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img31 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img32 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img33 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img34 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img35 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img36 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img37 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img38 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img39 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img40 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img41 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img42 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img43 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img44 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img45 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img46 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img47 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img48 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img49 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img50 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img51 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img52 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img53 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img54 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img55 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img56 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img57 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img58 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img59 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img60 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img61 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img62 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img63 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img64 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img65 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img66 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img67 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img68 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img69 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img70 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img71 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img72 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img73 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img74 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img75 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img76 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img77 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img78 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img79 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img80 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img81 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img82 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img83 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img84 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
// Import additional images
import img85 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img86 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img87 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img88 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img89 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img90 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img91 from '../assets/images/IntermaticET8215C-7-Day.jpg';
import img92 from '../assets/images/Lex LT-19P Six-Circuit.jpg';
import img93 from '../assets/images/IntermaticET8215C-7-Day.jpg';






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
