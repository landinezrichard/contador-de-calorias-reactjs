type CalorieDisplayProps = {
  calories: number;
  text: string;
};

export default function CalorieDisplay({
  calories,
  text,
}: CalorieDisplayProps) {
  return (
    <div className="text-center">
      <span className="text-orange-500 font-black text-6xl">{calories}</span>
      <p className="text-white font-bold">{text}</p>
    </div>
  );
}
