export default function CircularProgress({ rate = 50 }) {
    let progressColor;
  
    switch (true) {
      case parseFloat(rate) >= 70:
        progressColor = "#2da94c";
        break;
      case parseFloat(rate) >= 40:
        progressColor = "#90972c";
        break;
      default:
        progressColor = "#974c2c";
        break;
    }
  
    return (
      <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-gray-900 relative">
        <div
          className="w-[41px] h-[41px] rounded-full flex justify-center items-center"
          style={{
            background: `conic-gradient(${progressColor} 0% ${360 * rate * 0.01}deg, rgba(255, 255, 255, 0.1) ${360 * rate * 0.01}deg 360deg)`,
          }}
        >
          <div className="w-[37px] h-[37px] bg-gray-900 rounded-full flex justify-center items-center text-[12px] text-white">
            {rate}
            <sup>%</sup>
          </div>
        </div>
      </div>
    );
  }
  