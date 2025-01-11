/* eslint-disable react/prop-types */
export default function Skills({ icon, name }) {
  return (
    <div className="bg-tertiary h-20 w-20 rounded-lg flex justify-center items-center p-2">
      <img src={icon} alt={name} />
    </div>
  );
}
