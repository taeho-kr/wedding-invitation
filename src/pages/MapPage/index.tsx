import Typography from "@/components/ui/typography";
import MapImage from "@/assets/images/map.webp";
import { toast } from "sonner";

const address = [
  {
    type: "지번",
    address: "서울 강남구 역삼로 607",
  },
  {
    type: "도로명",
    address: "서울 강남구 대치동 1004-3",
  },
];

export default function MapPage() {
  return (
    <main className="flex flex-col w-full h-full text-left">
      <div
        onClick={() =>
          window.open(
            "https://map.naver.com/p/entry/place/36462628?c=15.52,0,0,0,dh"
          )
        }
      >
        <img
          src={MapImage}
          alt="그랜드힐 컨벤션 오시는길"
          className="w-full aspect-square"
        />
      </div>
      <div className="my-1 mr-2 ml-[auto]">
        <Typography variant="caption1">
          * 사진을 클릭하시면 네이버 지도로 이동합니다.
        </Typography>
      </div>
      <div className="flex flex-col my-4 pl-3">
        <Typography variant="title2">그랜드힐 컨벤션</Typography>
        <Typography variant="body1" className="mb-3">
          사브리나홀(2층)
        </Typography>
        <Typography variant="body1" className="mb-2">
          2025년 10월 25일 토요일 14:30
        </Typography>
        {address.map((item, index) => (
          <div key={index}>
            <Typography variant="caption1" className="mr-2 inline-block w-9">
              {item.type}
            </Typography>
            <Typography variant="body1">{item.address}</Typography>
            <Typography
              variant="body2"
              className="ml-1 text-[var(--focused)]"
              onClick={() => {
                navigator.clipboard.writeText(item.address);
                toast.success(
                  <div className="text-start">
                    {item.address}
                    <br />
                    주소를 복사했습니다.
                  </div>
                );
              }}
            >
              복사
            </Typography>
          </div>
        ))}
        <Typography variant="body2" className="mt-3">
          <strong>삼성역 1번 출구</strong>&nbsp;셔틀버스 2분
          <br />
          <strong>삼성역 2번 출구</strong>&nbsp;도보 5분
        </Typography>
        <Typography variant="body2" className="mt-3">
          800대 수용 가능한 자체 <strong>주차장</strong>에 3시간 무료 주차 가능
        </Typography>
      </div>
    </main>
  );
}
