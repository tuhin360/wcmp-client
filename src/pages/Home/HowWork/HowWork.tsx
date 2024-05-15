import schedule from "../../../assets/images/home/howWork/schedule.png";
import doorstep from "../../../assets/images/home/howWork/doorstep.png";
import reward from "../../../assets/images/home/howWork/reward.png";

const HowWork = () => {
  return (
    <div className="my-32">
      <h2 className="text-3xl mb-10 md:mb-16 font-bold text-center ">
        HOW WE WORK
      </h2>
      <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col items-center">
          <img
            src={schedule}
            alt="Schedule a Pickup"
            className="mb-2 rounded-md"
            width={100}
            height={90}
          />
          <h4 className="text-center text-xl mt-3">Schedule a Pickup</h4>
          <p className="p-5 ">
            Enter the pickup location, and schedule a pickup. Convenience fee
            applicable. You can also choose to go for the drop off option in
            case you want to drop the donations yourself.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={doorstep}
            alt="Schedule a Pickup"
            className="mb-2"
            width={90}
            height={90}
          />
          <h4 className="text-center text-xl mt-3">Donate at your Doorstep</h4>
          <p className="p-5 ">
            We will come to your doorstep to pick up the donations in the chosen
            slot and deliver them to the NGO where they can be given a new lifes
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={reward}
            alt="Schedule a Pickup"
            className="mb-2"
            width={100}
            height={100}
          />
          <h4 className="text-center text-xl mt-3">Get Rewards</h4>
          <p className="p-5 ">
            Our brand partners provide our donors gifts as a gesture of thanks
            for making a difference. Be ready to get surprised!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
