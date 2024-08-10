import React from "react";
import { Link } from "react-router-dom";

const slugger = () => {
  return (
    <div
      className="min-h-screen bg-teal-500 font-thin flex items-center justify-center text-black bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('/media/a7.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="absolute top-0 left-0 w-full z-20">
        <div className=" mx-auto flex items-center justify-between py-4">
          <h1 className="text-2xl font-semibold text-blue-800 hover:text-blue-700 px-4">
            Boxers Hub
          </h1>
          <div className="flex-1 flex justify-end space-x-10 pr-5">
            <Link
              to="/login"
              className="text-lg font-semibold text-blue-800 hover:text-blue-700"
            >
              Profile
            </Link>
            <Link
              to="/pricing"
              className="text-lg font-semibold text-blue-800 hover:text-blue-700"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-lg font-semibold text-blue-800 hover:text-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto py-4">
        <h1 className="text-center font-serif font-bold italic text-2xl py-8">
          Slugger Boxing Style
        </h1>
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <img
            src="/media/1.jpg"
            className="w-450 col-span-1"
            alt="Swarmer Image"
          />
          <p className="text-center text-2xl lg:text-left text-black col-span-2">
            The Slugger. The Power Puncher. When people think of boxers, they
            usually think of the Slugger. The fighter who throws that one big
            punch that knocks an opponent to the ground.
            <br />
            <br />
            Fighters like George Foreman, Sonny Liston, and Vitali Klitschko won
            their belts by mastering the art of the Slugger style. These
            fighters were known for closing on their opponents and unleashing
            their fists in destructive blows.{" "}
          </p>
          <p className="col-span-3 text-2xl text-black mt-4">
            <br />
            But becoming a Slugger type fighter does not come easy. It requires
            a focus on developing absolutely devastating power punches to the
            exclusion of almost all other fundamentals.
            <br />
            <br />
            You will need to build a body that is solid power and the mechanics
            that can release that power all at once.
            <br />
            <br />
            In this focus on fighting styles, we dive into the Slugger, or
            brawler, style.
            <br />
            <br />
            Unlike other styles, the Slugger doesn’t have to worry too much
            about footwork. And because their fights don’t tend to last long,
            most Sluggers don’t focus too heavily on building stamina.
            <br />
            <br />A Slugger needs raw power and the ability to take a hit. The
            Slugger must also be aggressive in the ring, pursuing their
            opponents ready to pounce with power when the moment is right.
            <br />
            <br />
            Let’s take a closer look at what makes up the Slugger style.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="font-bold flex justify-center text-2xl italic font-serif">
            The Slugger Style: What it Looks Like
          </h1>
          <p className="text-center text-2xl lg:text-left text-black col-span-2">
            The Slugger style is not elegant or technical. It does not seek to
            overwhelm opponents with a flurry of well-aimed blows. You will not
            see a Slugger try to wear down an opponent with footwork.
          </p>
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <img
              src="/media/2.jpg"
              className="w-full col-span-1"
              alt="Swarmer Image"
            />

            <p className="text-center text-2xl lg:text-left text-black col-span-2">
              This style relies on brute force, a strong chin, and raw punching
              power. A Slugger throws powerful punches with the goal of knocking
              an opponent out as quickly as possible.
            </p>
            <p className="col-span-3 text-2xl text-black mt-4">
              Fighters who choose the slugging style don’t use a lot of footwork
              and tend not to move around the ring too much. They prefer an
              aggressive attack that puts constant pressure on an opponent.
              They’re going to put in a lot of time on the heavy bag, training
              their body to deliver explosive blows.
              <br />
              <br />
              Due to this aggressive nature and reliance on power, Sluggers
              absolutely commit to their punches. This often leaves them open to
              counter punches and quick jabs from the outside. So Sluggers
              usually develop the ability to take a lot of punishment and still
              keep attacking.
              <br />
              <br />
              There’s a tendency to think of these brawler types as unwilling or
              unable to grasp the finer points of boxing. Why else would they
              choose this type of fighting. But that doesn’t give them enough
              credit. Plenty of smart fighters, fighters who understand the
              nuance of the game, still opt for this style because of its
              benefits
            </p>
          </div>

          <h1 className="font-bold flex justify-center text-2xl italic font-serif">
            The Slugger Fighter: Why Fighters Choose It
          </h1>
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <img
              src="/media/3.jpg"
              className="w-full col-span-1"
              alt="Swarmer"
            />

            <p className="text-center text-2xl lg:text-left text-black col-span-2">
              Just as the out-boxer style usually demands a tall boxer, so too
              does the Slugger demand a particular body type. Sluggers must be
              powerfully built, through either natural strength or a dedicated
              and focused strength-building routine. If a fighter begins with
              this type of build, the brawling style feels like a natural fit.
            </p>
            <p className="col-span-3 text-2xl text-black mt-4">
              A fighter might choose the Slugger fighting style because they
              like the notion of knocking out opponents with raw power.
              Afterall, most people don’t get into this sport with romantic
              visions of winning their fights through decision.
              <br />
              <br />
              Folks might also choose this style because they lack the patience
              to set up more complicated offensive strategies. There is
              something to be said for aggressively pursuing your opponent and
              then releasing a few powerful hits. It is obvious, but effective.
              <br />
              <br />
              Lastly, for fighters who can’t or won’t develop good footwork,
              this is the most effective style. Swarmers and Out-Boxers depend
              on good footwork to get the job done. On the other hand, the only
              thing the brawler really needs to do is keep moving forward.
            </p>
          </div>

          <h1 className="font-bold flex justify-center text-2xl italic font-serif">
            The Slugger Counter: How Should You Defend It
          </h1>
          <p className="text-center text-2xl lg:text-left text-black col-span-2">
            How do you avoid getting taken down by a Slugger? Don’t stand in
            front of one.
            <br />
            <br />
            <h1 className="font-bold flex  text-2xl italic font-serif">
              Avoid the hit
            </h1>
            <br /> The simple truth of a fight with these power punchers is that
            if they solidly connect, you will not last long. But the brawler
            needs to plant their feet and get set up in order to deliver a truly
            devastating blow. This gives savvy opponents time to slip out of
            range to avoid the big hit.
            <br />
            <br />
            If you’re used to dancing around your opponents, like the out-boxer,
            this should be relatively easy. Keep moving, keep jabbing, and keep
            slipping out of range after you make contact.
            <br />
            <br />
            For swarmers, though, this presents more of a challenge. The swarmer
            strategy relies on stepping into the Slugger’s range to deliver a
            barrage of punches. While the swarmer punches, the Slugger can set
            up and unload.
            <br />
            <br />A swarmer will have to learn how to avoid those big shots, or
            improve their footwork and defensive capabilities to protect against
            the big punch. Working the body from the outside could be an
            effective strategy here. .{" "}
          </p>
          <h1 className="font-bold flex  text-2xl italic font-serif">
            Work the body
          </h1>
          <p className="text-center text-2xl lg:text-left text-black col-span-2">
            We know that the entire body generates the power for a punch. It
            begins in the legs, winds through the core, and then enters the fist
            through the shoulder and arms. But if you can break any part of that
            chain, then you can limit the damage a brawler might inflict.
            <br />
            <br />
            Working the body is one way you can interrupt that chain. When a
            fighter’s core gets bruised and battered, they can’t transfer as
            much energy from their legs. And if a brawler can’t use their legs
            and core, their punches will end up being far less powerful.
          </p>
          <h1 className="font-bold flex  text-2xl italic font-serif">
            Counter
          </h1>
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <img
              src="/media/4.jpg"
              className="w-full col-span-1"
              alt="Swarmer"
            />

            <p className="text-center text-2xl lg:text-left text-black col-span-2">
              A Slugger may have pretty good defensive capabilities. They can
              usually block and parry quite well. They also tend to have an
              ability to take punches without being significantly affected.
            </p>
            <p className="col-span-3 text-2xl text-black mt-4">
              At the same time, the aggressive, big swing mentality often sees
              Sluggers fully committing to punches that don’t land cleanly. This
              leaves a fighter open to counters that an opponent can exploit.
              <br />
              <br />
              If you can entice a Slugger to punch when you want, then you will
              have many opportunities to deliver counter blows to great effect.
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

export default slugger;
