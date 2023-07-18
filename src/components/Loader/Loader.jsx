import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="rgba(255, 199, 0, 1)"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};
