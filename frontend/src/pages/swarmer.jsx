import React from "react";

const Swarmer = () => {
  return (
    <div
      className="min-h-screen font-thin flex items-center justify-center text-white bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/media/b7.jpg')" }}
    >
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-center font-serif font-bold italic text-2xl py-4">
          Swarmer Boxing Style
        </h1>
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <img
            src="/media/a1.jpg"
            className="w-full col-span-1"
            alt="Swarmer Image"
          />
          <p className="text-center text-2xl lg:text-left text-red-300 col-span-2">
            A fighter should enter the ring with an overall strategy and
            specific tactics to make that strategy happen. How you box in the
            ring, though, doesn’t just begin from a blank slate. You have to
            understand fighting styles, the kind that you use and the kind that
            your opponent will use.
          </p>
          <p className="col-span-3 text-2xl text-red-300 mt-4">
            The Swarmer may be the most common fighting style out there. If done
            well, it can overcome a lot of physical disadvantages like reach and
            speed. The style also leads to a lot of punches being thrown and a
            lot of contact made. This makes it very effective for scoring points
            in Amateur tournaments, where KOs and knockdowns are rarer.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="font-bold flex justify-center text-2xl italic font-serif">
            The Swarmer Style: What it Looks Like
          </h1>
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <img
              src="/media/a2.jpg"
              className="w-full col-span-1"
              alt="Swarmer Image"
            />

            <p className="text-center text-2xl lg:text-left text-red-300 col-span-2">
              The Swarmer, also known as the Pressure Fighter or the Close-In
              Fighter, prefers to get in close to their opponent and then attack
              with a flurry of blows. They may not hit hard, but they will tend
              to hit fast and often once inside.
            </p>
            <p className="col-span-3 text-2xl text-red-300 mt-4">
              This type of fighter will also tend to throw a variety of punches
              in order to circumvent an opponent’s defenses. This style places a
              premium on good footwork. A Close-In fighter wants to place
              pressure on an opponent. They will advance constantly, shifting to
              the left or right to cut off escape, and shifting back to throw
              off counters. The close-in fighter requires solid footwork (and
              top-level stamina) to move inside the reach of an opponent,
              deliver a series of blows, and step out of danger. The Pressure
              Fighter also has to be more than just comfortable with the clinch.
              This fighter has to know how to use the clinch tactically to
              affect the flow of the match. The clinch can be used to move an
              opponent around the ring, interrupt an opponent’s timing, prevent
              combos, or slow down a fight.
            </p>
          </div>

          <h1 className="font-bold flex justify-center text-2xl italic font-serif">
            The Swarmer Fighter: Why Fighters Choose It
          </h1>
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <img
              src="/media/a3.jpg"
              className="w-full col-span-1"
              alt="Swarmer"
            />

            <p className="text-center text-2xl lg:text-left text-red-300 col-span-2">
              There are a number of reasons that a fighter might choose the
              close-in style. Negate Height Advantages – Shorter boxers often
              choose this style because it can negate the reach advantage of
              taller, longer-limbed opponents.
            </p>
            <p className="col-span-3 text-2xl text-red-300 mt-4">
              Tall fighters often choose to keep opponents at range, striking
              from a distance and then dancing away. Because the Swarmer seeks
              to get inside an opponent’s range, they can eliminate this
              advantage. At close-range, a taller boxer can’t punch as
              effectively, and may also have difficulty defending. Control the
              Fight – More than any other style, the Pressure style focuses on
              creating openings, rather than waiting for openings to appear. A
              Swarmer’s aggressive style also tends to force opponents into a
              reaction mindset. Rather than operate according to their own
              rhythm and strategy, a Swarmer’s opponent may end up on the
              defensive, constantly looking for opportunities to escape to a
              safer distance. Additionally, the Pressure Fighter knows how to
              use the clinch to control the fight. The Swarmer will enter a
              clinch to alter the speed and rhythm of an opponent. They might
              also clinch to physically alter the positions of both fighters
              relative to each other and the ring. Overwhelm Defensive & Outside
              Fighters – Defensive fighters and fighters that prefer to fight
              outside can be overwhelmed by this style. A defensive boxer may
              face difficulty setting up counters if they are under a constant
              barrage (or pinned down against the ropes). Likewise, an outside
              fighter’s tactical advantage disappears when an opponent gets
              inside their range.
            </p>
          </div>

          <h1 className="font-bold flex justify-center text-2xl italic font-serif">
            The Swarmer Counter: How Should You Defend It
          </h1>
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <img
              src="/media/a4.jpg"
              className="w-full col-span-1"
              alt="Swarmer"
            />

            <p className="text-center text-2xl lg:text-left text-red-300 col-span-2">
              The simplest way to defend against a Swarmer is to be a
              Brawler-style fighter. A brawler relies on power and durability to
              take out opponents. They invite their opponents to get close,
              weather the storm, and then smash their opponents with powerful
              strikes.
            </p>
            <p className="col-span-3 text-2xl text-red-300 mt-4">
              While this tactic may be simple, it is not easy if you haven’t
              specifically trained yourself over the years to use the Brawler
              style. If you aren’t a brawler, then learn to use the clinch to
              your advantage. First, you need to push back against a Swarmer’s
              desire to control ring position. Lower your center of gravity and
              set your feet to resist your opponent’s efforts to move you
              around. Second, if your opponent has locked you into a clinch, let
              them carry your weight. This will force them to manage a heavy
              load while also trying to move you around or attack you. Over
              time, you will wear your close-in opponent out (and save your legs
              for later rounds). Speed and footwork will also provide some of
              your best advantages here. Use your speed to maintain distance.
              Use your footwork to keep moving laterally, rather than just
              giving up ground by moving back. Finally, use your fists to punish
              a pressure fighter who wants to enter into your range. Don’t let
              them get close without making them fight their way in. Don’t punch
              hard, but do punch often. The Swarmer fighting style has a lot of
              advantages. It’s a great style to overcome size and speed
              disadvantages. It’s also aggressive. But it can be defeated if
              countered properly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swarmer;
