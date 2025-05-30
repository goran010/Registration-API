interface AddReservationBtnProps {
  onAddReservation: () => void;
}

export default function AddReservationBtn({
  onAddReservation,
}: AddReservationBtnProps) {
  return (
    <button
      className="
          w-6 h-6
          rounded-full
          bg-blue-900
          text-white
          flex items-center justify-center
          shadow
          z-10
          transition-all duration-200
          hover:scale-110
          hover:bg-blue-900
          transform origin-center
          z-1000
        "
      onClick={(e) => {
        e.stopPropagation();
        onAddReservation();
      }}
      aria-label="Dodaj rezervaciju"
      type="button"
    >
      <span className="text-md leading-none">+</span>
    </button>
  );
}
