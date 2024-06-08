import React, { Component } from 'react';
import list from "../list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

// ErrorBoundary component to catch errors
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error occurred. Please try again later.</div>;
    }

    return this.props.children;
  }
}

function Books() {
  const filterData = list.filter((data) => data.price === 0);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ErrorBoundary>
      <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div>
            <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
              corporis nulla non suscipit, iure neque earum?
            </p>
          </div>
          <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Card item={item} key={item.id} />
            ))}
            </Slider>
          </div>
        </div>
      </>
    </ErrorBoundary>
  );
}

export default Books;
