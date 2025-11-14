import { CirclePlus, Stethoscope } from 'lucide-react';
import Button from '../Button';

export default function Welcome({user}) {
  // Function to get greeting based on time maybe
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };
  return (
    <div className="flex justify-between items-center bg-blue-500 text-white rounded-xl p-6 shadow-lg">
      <div>
        <h1 className="text-2xl font-bold">
          {getGreeting()}, {user?.name || 'User'}
        </h1>

        <p className="text-sm opacity-90 mt-1">
          Here’s your health overview for today.
        </p>
        <Button
          text="Add Appointment"
          color="bg-white text-blue-500 mt-4 font-semibold"
          icon={<CirclePlus size={18} />}
        />
      </div>
      <div className="mr-5 bg-white/20 p-4 rounded-full">
        <Stethoscope size={40} className="text-white" />
      </div>
    </div>
  );
}
