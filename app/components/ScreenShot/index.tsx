import { useTrafficCam } from "../../hooks/useTrafficCam";
import Image from "next/image";

export const ScreenShot = () => {
  const [screenShots] = useTrafficCam();

  return (
    <div className="">
      <h4>ScreenShot</h4>
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
