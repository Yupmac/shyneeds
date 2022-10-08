import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { productData } from '../productCard/productData';
import { LAYOUT } from '../../constants/layout';
import { IoMdHeartEmpty } from 'react-icons/io';

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
};

export const RecommendedBanner = () => {
  return (
    <RecommendedListContainer>
      <RecommendedListTitle>이런 그룹 여행은 어떠세요?</RecommendedListTitle>
      <CarouselSlider {...settings}>
        {productData.map((productData) => {
          return (
            <ProductWrap key={productData.id}>
              <img src={productData.img} alt="product_image" />
              <ProductText>
                <Title>{productData.title}</Title>
                <Content>{productData.content}</Content>
                <Price>{productData.price} 원</Price>
              </ProductText>
              <ProductTag>
                <TagTitle>{productData.tag}</TagTitle>
              </ProductTag>
              <IoMdHeartEmpty size="20px" className="wish-icon" />
            </ProductWrap>
          );
        })}
      </CarouselSlider>
    </RecommendedListContainer>
  );
};

const RecommendedListContainer = styled.div`
  width: ${LAYOUT.SIZE.WIDTH};
  margin: 80px auto;

  .slick-slider {
    margin: 0 -10px;
  }
  .slick-slide {
    padding: 0 7px;
  }
`;

const RecommendedListTitle = styled.h1`
  margin: 0 0 20px;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -1px;
`;

const ProductWrap = styled.div`
  border-radius: 10px;
  border: 1px solid #cccccc;
  overflow: hidden;
  position: relative;

  .wish-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    index: 1;
  }
`;

const ProductText = styled.div`
  padding: 22px;
`;

const Title = styled.p`
  margin: 0 0 16px;
  font-size: 1.18rem;
  font-weight: bold;
`;

const Content = styled.span`
  color: #666666;
  font-size: 1rem;
  line-height: 22px;
`;

const Price = styled.p`
  margin: 20px 0 0;
  font-size: 1.18rem;
  font-weight: bold;
`;

const CarouselSlider = styled(Slider)`
  .slick-next,
  .slick-prev {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
    z-index: 99999;
    top: 52%;
  }
  .slick-next::before,
  .slick-prev::before {
    font-size: 0;
  }
  .slick-prev {
    background: url('/icons/ic-chevron-left-40x40-050.svg') no-repeat;
  }
  .slick-next {
    background: url('/icons/ic-chevron-right-40x40-050.svg') no-repeat;
  }
`;

const ProductTag = styled.div`
  position: absolute;
  bottom: 10rem;
  right: 1.5rem;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  width: 8rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagTitle = styled.p`
  font-size: 0.9rem;
`;
