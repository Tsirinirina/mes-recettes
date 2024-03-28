import Loader from "@/components/loader/loader";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <Loader />
      </div>
    </div>
  );
}
