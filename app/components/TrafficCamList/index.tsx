import { useTrafficCam } from "../../hooks/useTrafficCam";
import Image from "next/image";

export const TrafficCamList = () => {
  const { screenShots, loading } = useTrafficCam();

  const renderTrafficeCamList = () => {
    if (screenShots.length === 0) {
      return <div>There is no traffic cam available</div>;
    }
    return (
      <div className="rounded border-gray-500">
        {screenShots.map((shot: any) => (
          <Image
            width={shot.width}
            height={shot.height}
            key={shot.id}
            src={shot.image_url}
            alt={shot.id}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <h4>Traffic Cam</h4>
      {loading ? <div>Loading...</div> : renderTrafficeCamList()}
    </div>
  );
};
