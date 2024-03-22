import { Loading } from 'notiflix/build/notiflix-loading-aio';
const onLoading = () => {
  return Loading.hourglass( {
    backgroundColor: 'transparent',
    // svgSize: '160px',
    svgColor: '#754f23',
    // messageFontSize: '20px',
  });

};

const onLoaded = () => {
  return Loading.remove();
};

export { onLoading, onLoaded };
