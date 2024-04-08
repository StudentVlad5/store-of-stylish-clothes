import 'modern-normalize';
import theme from 'components/baseStyles/Variables.styled';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  /* font-weight: <weight>; */
  font-style: normal;

  background-color:${theme.colors.fon};
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  transition: .3s ease;
  
  &.scroll {
      max-height: 100vh;
      overflow: hidden;
    }
 }

#root {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

 //-----reset-----
h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

img {
  display:block;
  max-width: 100%;
  height: auto;
}

//-----modal windows-----//
#popup-root {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 45;

    width: 100vw;
    height: 100vh;

    opacity: 1;
    visibility: visible;

    background-color: #0000006b;
    transition: opacity .3s linear 50ms, visibility .3s linear 50ms; 
}

#popup-root.is-hide {
  pointer-events: none;
  opacity: 0;
  visibility: hidden;

  width: 0;
  height: 0;
}

 //-----pagination-----//
.paginate__container {
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 50vw;

  margin: 0 auto;
  padding: 6px 12px;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;
  gap:7px;
  background-color: transparent;


  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
    padding: 8px 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 500px;
  }
}

.paginate__page, .paginate__page--prev, .paginate__page--next, .paginate__page--break {
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  width: 25px;
  height: 25px;

  color:${theme.colors.brown1};

  transition: all .25s ease-in;

  &:hover, &:focus {
    color:${theme.colors.darkGreen};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 35px;
    height: 35px;
  }
}

.paginate__link {
  display: block;
}

.paginate__page--disabled {
  pointer-events: none;
  opacity: 0.5;
}

.paginate__page--active {
  pointer-events: none;
  border: 0.5px solid ${theme.colors.brown1};
  border-radius: 5px;
  padding: 2px;
}

//----- ProductList -----//

.isActive.isImportant.real,
.isActive.isImportant.real + input,
.isActive.isImportant.real + span {
   & span {
    color: ${theme.colors.fon};
    background-color: rgb(119 79 35 / 81%);
    border: 1px solid ${theme.colors.brown4};
   }
}


//-----Swiper-----//

.swiper {
  width: 90%;
  height: 100%;
}

.swiper-slide {
  height:auto !important;
  text-align: center;
  font-size: 18px;
  background: ${theme.colors.fon};
  padding-top: 30px;
  border-radius: 16px;
  /* margin-right: 30px; */
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide.swiper-slide-active {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  max-height: 500px;
  object-fit: cover;
}

.swiper-button-next::after {
color:${theme.colors.green} !important;
}

.swiper-button-prev::after {
color:${theme.colors.green} !important;
}

.swiper-pagination-bullet-active.swiper-pagination-bullet{

}
.swiper-pagination-bullet {

}
.swiper-button-prev,
.swiper-button-next,
.swiper-pagination-bullet {
  top: var(--swiper-navigation-sides-offset,10px) !important;
  bottom:var(--swiper-navigation-sides-offset,10px) !important;
  /* transform: scale(1.1); */
}


//-----Range-----//
.rc-slider {
    background-color: ${theme.colors.fon} !important;
    border-radius:0 !important;
}

.rc-slider-track {
    background-color: ${theme.colors.brown4} !important;
}

.rc-slider-handle{
  background-color: ${theme.colors.fon} !important;
  border: solid 2px ${theme.colors.brown4} !important;

  &:focus-visible{
    box-shadow: 0 0 0 3px ${theme.colors.brown4} !important;
  }

  &-dragging{
    box-shadow: 0 0 0 5px ${theme.colors.brown4} !important;
  }
}

.rc-slider-disabled{
  background-color:${theme.colors.fon} !important;}


//-----Header-----//
.addHeaderBottom{
  background-color: ${theme.colors.brown1};
}

//-----Select container-----//
.select__value-container {
  width: 280px;
  font-size: ${theme.fontSizes.extrasmall};
  line-height: 1.3;
  padding: 11px 0 12px 14px;
  background: ${theme.colors.blue1};
  color: ${theme.colors.brown2};
  border: none;
  transition: all 0.25s ease-in;
  &:focus,
  &:hover {
    border-color: ${theme.colors.darkGreen};
    color: ${theme.colors.darkGreen};
    outline: none;
  }
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 448px;
    font-size: ${theme.fontSizes.medium};
    padding: 14px 0 13px 32px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 558px;
  }
  &::placeholder {
    text-transform: uppercase;
  }
  &:focus ~ .floating-label,
  &:not([value=""]):not(:focus):invalid ~ .floating-label,
  &:not([value=""]):not(:focus):valid ~ .floating-label {
    top: -15px;
    left: 20px;
    font-size: 11px;
    opacity: 1;
}
}
.select__indicators{
  background: ${theme.colors.blue1};
  color: ${theme.colors.brown2};
  border: none;
  transition: all 0.25s ease-in;
  &:focus,
  &:hover {
    border-color: ${theme.colors.darkGreen};
    color: ${theme.colors.darkGreen};
    outline: none;
  }
}
.select__indicator{
  &>svg{
    width:15px;
    height:15px;
  }
}
.active_label > span::before {
  border-color: ${theme.colors.brown1};
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64'%0Astyle='fill:%235a6b47;'%3E%3Cpath d='M27 55L6 33 9 29 26 41 55 12 59 16z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
}
.select__value-container{
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkGreen};
}
.select__control{
  min-height: auto !important;
}
.select__control>.select__placeholder{
  color: ${theme.colors.darkGreen};
  font-size: ${theme.fontSizes.extrasmall};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.small};
  }

}
.select__control>.select__value-container {
  color: ${theme.colors.darkGreen};
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.extrasmall};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.small};
  }
}
.iNcVkr {
  gap:4px;
}
.osMwo {
  width: 100%;
  border:none !important;
  border-radius: 3px !important;
  overflow:hidden !important;
}
.WEoZy{
  border-radius:0 !important;
}
.css-13cymwt-control {
  border:none !important;
}
.css-1xc3v61-indicatorContainer{
  padding: 0!important;
}
.css-t3ipsp-control {
  min-height: auto !important;
  border-color: ${theme.colors.brown2} !important;
  &:hover, &:focus{
  border-color: ${theme.colors.green2} !important;
  }
}
.css-16xfy0z-control{
  background-color: ${theme.colors.white} !important;
}
.css-15lsz6c-indicatorContainer{
  padding:0 !important;
}
.css-1nmdiq5-menu{
  font-size: ${theme.fontSizes.extrasmall} !important;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.small} !important;
  }
}

//-----Link Folder-----//
.isDisabled {
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  text-decoration: none;
}

.linkFolder.active{
  background-color: ${theme.colors.brown4};
  color: ${theme.colors.fon}
}

.linkFolder.sideBar_menu{
   position: relative;
  padding-left: 10px;
  font-family: ${theme.fonts[0]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
  /* text-transform: uppercase; */
  text-decoration: none;
  color: ${theme.colors.brown2};

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.brown3};
  }

  &::before {
    content: '';
    position: absolute;
    top: 25px;
    left: 0;
    width: 110%;
    height: 0.5px;
    background: ${theme.colors.brown3};

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: 150px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      width: 285px;
    }
  }

  &.active {
    margin-left: 5px;
    font-weight: 500;
    color: ${theme.colors.brown3};
    transform: ${theme.scale[0]};
    transition: ${theme.transition[0]};
    background-color: transparent;

    &::before {
      @media (min-width: ${theme.breakpoints.desktop}) {
        width: 250px;
      }
    }
  }
}

//-----Scrollbar-----//
::-webkit-scrollbar {
    width: 6px;
    border: 0.5px solid white;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.green1};
    background-clip: padding-box;
    border: 0.05em solid #eeeeee;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.green};
  }
    ::-webkit-scrollbar-track {
    background-color: ${theme.colors.fon};
  }
  #style-1::-webkit-scrollbar-track
  {
    -webkit-box-shadow: ${theme.colors.fon};
    background-color: ${theme.colors.fon};
  }
    #style-1::-webkit-scrollbar
  {
    width: 8px;
    background-color:${theme.colors.green};
  }
    #style-1::-webkit-scrollbar-thumb
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: ${theme.colors.green1};
  }
  #style-1::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.green};
  }
`;
