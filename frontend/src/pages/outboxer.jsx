import React from "react";
import { Link } from "react-router-dom";
const outboxer = () => {
  return (
    <div                
      className="min-h-screen bg-teal-500 font-thin flex items-center justify-center text-black bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('/media/a6.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="absolute top-0 left-0 w-full z-20">
        <div className=" mx-auto flex items-center justify-between py-4">
          <h1 className="text-2xl font-semibold text-teal-800 hover:text-green-700 px-4">
            Boxers Hub
          </h1>
          <div className="flex-1 flex justify-end space-x-10 pr-5">
            <Link
              to="/login"
              className="text-lg font-semibold text-teal-800 hover:text-green-700"
            >
              Profile
            </Link>
            <Link
              to="/pricing"
              className="text-lg font-semibold text-teal-800 hover:text-green-700"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-lg font-semibold text-teal-800 hover:text-green-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto py-4">
        <h1 className="text-center font-serif font-bold italic text-2xl py-8">
          Out-Boxer Boxing Style
        </h1>
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <img
            src="/media/c1.jpg"
            className="w-full col-span-1"
            alt="Swarmer Image"
          />
          <p className="text-center text-2xl lg:text-left text-black col-span-2">
            A master of this style uses pinpoint jabs to keep their opponent at
            bay, while slipping, ducking, and stepping out of the way of all
            incoming punches. It is graceful and highly technical.
          </p>
          <p className="col-span-3 text-2xl text-black mt-4">
            But not just anyone can utilize this style effectively in the ring.
            <br />
            <br />
            In our latest Focus on Fighting Styles, we will look more closely at
            the Out-Boxer style of fighting.
            <br />
            <br /> Unlike the <u>swarmer style</u>, which almost boxer can learn, the
            Out-Boxer style is limited to taller fighters. The style works most
            effectively when a fighter has the reach advantage over their
            opponent. The Out-Boxer also needs to have <u>great stamina, superior
            footwork,</u> and a solid command of how to move around the ring. Let’s
            take a closer look at the style, to understand why these components
            are so essential.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="font-bold flex justify-center text-2xl italic font-serif">
            The Out-Boxer Style: What it Looks Like
          </h1>
          <p className="text-center text-2xl lg:text-left text-black col-span-2">
            The Out-Boxer will try to maintain distance. They want to fight at
            longer ranges, preferably ranges where they can land punches but
            their opponent cannot.{" "}
          </p>
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <img
              src="/media/c2.jpg"
              className="w-full col-span-1"
              alt="Swarmer Image"
            />

            <p className="text-center text-2xl lg:text-left text-black col-span-2">
              An Out-Boxer has two primary means of managing position. The first
              uses agility and maneuverability to shift away from an opponent.
              The fighter will constantly slip, dodge, and sidestep away,
              forcing an opponent to chase after. This tactic will tend to wear
              an opponent out and leave them open to counters.
            </p>
            <p className="col-span-3 text-2xl text-black mt-4">
              The second method emphasizes the use of the jab and cross to push
              an opponent back or keep them from getting too close. These
              straight punches maximize the Out-Boxer’s range while punishing
              anyone who tries to get in close.
              <br />
              <br /> You will often see an Out-Boxer relying on both techniques
              to maintain separation.
              <br />
              <br /> In either case, the Out-Boxer relies on accurately thrown
              straight punches to the head and body as their main offensive
              output. Other, more powerful punches, like the hook or uppercut,
              would require the Out-Boxer to close in, eliminating their reach
              advantage. For this reason, Out-Boxers tend to have few knockouts
              on their record. They win most fights by decision.
            </p>
          </div>

          <h1 className="font-bold flex justify-center text-2xl italic font-serif">
            The Out-Boxer Fighter: Why Fighters Choose It
          </h1>
          <p className="text-center text-2xl lg:text-left text-black col-span-2">
            Taller boxers will almost always be out-muscled by shorter opponents
            in the same weight class. This is just a function of physiology. For
            any given weight, a shorter boxer can give over more of their mass
            to musculature. This means that a tall boxer will, more often than
            not, lose if they get into a situation where they merely trade
            punches with an opponent.{" "}
          </p>
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <img
              src="/media/c3.jpg"
              className="w-full col-span-1"
              alt="Swarmer"
            />

            <p className="text-center text-2xl lg:text-left text-black col-span-2">
              In order to overcome this strength imbalance, many taller boxers
              choose to keep their opponents at a distance. They trade their
              disadvantage in raw power for an advantage in reach.
            </p>
            <p className="col-span-3 text-2xl text-black mt-4">
              The out-boxer style is attractive for anyone who wants to deliver
              a few, well-placed shots and then dance away rather than close to
              a middle distance and trade blows.
            </p>
          </div>

          <h1 className="font-bold flex justify-center text-2xl italic font-serif">
            The Out-Boxer Counter: How Should You Defend It
          </h1>
          <p className="text-center text-2xl lg:text-left text-black col-span-2">
            If you find yourself in the ring with an Out-Boxer don’t try to hard
            to land blows to the head early on. You’re already going to have to
            work hard to close in. You shouldn’t double your work by trying to
            also punch up.<br/><br/> Instead, <b>focus on the body</b>, which will also happen to
            be the easiest part of your opponent’s body to reach (assuming that
            they are taller than you). Plus, slipping one’s entire torso away
            from an incoming blow is far harder than just slipping the head.<br/><br/>
            More importantly, though, body shots hurt. The pain of multiple
            punches to the core will degrade a fighters ability to use their
            legs. And an Out-Boxer who can’t use their legs, is in trouble.{" "}
          </p>
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <img
              src="/media/c4.jpg"
              className="w-full col-span-1"
              alt="Swarmer"
            />

            <p className="text-center text-2xl lg:text-left text-black col-span-2">
              Remember to <b>avoid the clinch</b>. If you manage to corner your
              opponent, don’t get too aggressive and enter into grappling range.
              A taller boxer has the advantage in the clinch, because they can
              wrap you up and force you to carry their weight.<br/><br/> <b>Medium range</b> will be your friend. You know you are in medium range
              when you are close enough to land your punches, but not so close
              that you can get wrapped up. At this range, your punches will have
              their greatest effect, but your opponent will have a hard time
              being effective with their jabs and crosses.
            </p>
            <p className="col-span-3 text-2xl text-black mt-4">
              Getting INTO medium range, may be easier said than done.
              But when you achieve it, unload before your opponent dances away
              again.
              <br />
              <br />
              <br />
            </p>
          </div>
          <h1>
            --------------------------------------------------------------------------------------------------------------------------------------------
          </h1>
          <br />
          <br />
          <h1 className="flex text-center font-normal">
            Start your training now by becoming our member and get access to our
            exclusive content and live sessions and many more. Visit our Pricing
            plan and start your journey to become a profesional boxer.
          </h1>
          <h1 className="font-sans hover:bg-blue-300 border  border-blue-800 rounded-xl text-pretty font-semibold text-xl flex justify-center text-center">
            For More Details and real life experience and training get our
            premium membership. Download our app 'Boxers Hub' to get mastered in
            different boxing styles. <br /> In case of any query feel free to
            contact us.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default outboxer;
