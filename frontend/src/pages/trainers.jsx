import React from "react";


const Trainers = () => {
  const trainersData = [
    {
      name: "Mike Tyson",
      role: "Senior Trainer/Coach",
      website: " RingWarriors.pk",
      image: "/media/f12.webp",
      totalfights: 58,
      KO: 44,
      record: "50-6",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Conor Mcgregor",
      role: "Senior Trainer/Coach",
      website: " RingWarriors.pk",
      image: "/media/f13.jpg",
      totalfights: 28,
      KO: 19,
      record: "22-6-0",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "RAY ROBINSON",
      role: "Senior Trainer/Coach",
      website: " RingWarriors.pk",
      image: "/media/f1.webp",
      totalfights: 199,
      KO: 109,
      record: "174-19-6",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Muhammad Ali",
      role: "Senior Trainer/Coach",
      website: " RingWarriors.pk",
      image: "/media/f2.webp",
      totalfights: 61,
      KO: 37,
      record: "56-5",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Joe Louis",
      role: "Senior Trainer",
      website: " RingWarriors.pk",
      image: "/media/f3.webp",
      totalfights: 69,
      KO: 52,
      record: "69-3",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Henry Amstrong",
      role: "Coach",
      website: " RingWarriors.pk",
      image: "/media/f4.webp",
      totalfights: 181,
      KO: 101,
      record: "150-21-10",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Robert0 Duran",
      role: "Coach",
      website: " RingWarriors.pk",
      image: "/media/f5.webp",
      totalfights: 119,
      KO: 70,
      record: "103-16",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Floyd Mayweather, JR",
      role: "Senior Trainer/Coach",
      website: " RingWarriors.pk",
      image: "/media/f6.webp",
      totalfights: 50,
      KO: 27,
      record: "50-0",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Manny Pacquiao",
      role: "Trainer",
      website: " RingWarriors.pk",
      image: "/media/f7.webp",
      totalfights: 72,
      KO: 39,
      record: "62-8-2",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Charley Burley",
      role: "Senior Trainer/Coach",
      website: " RingWarriors.pk",
      image: "/media/f8.webp",
      totalfights: 97,
      KO: 50,
      record: "83-12-2",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Salvador Sanchez",
      role: "Coach",
      website: " RingWarriors.pk",
      image: "/media/f9.webp",
      totalfights: 46,
      KO: 32,
      record: "44-1-1",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Kid Gavilan",
      role: "Senior Trainer",
      website: " RingWarriors.pk",
      image: "/media/f10.webp",
      totalfights: 143,
      KO: 28,
      record: "108-30-5",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Ike Williams",
      role: "Senior Trainer",
      website: " RingWarriors.pk",
      image: "/media/f11.webp",
      totalfights: 158,
      KO: 61,
      record: "127-24-4",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <section  
    className="min-h-screen py-4 bg-no-repeat bg-cover bg-fixed"
      style={{
        backgroundImage: "url('/media/bg1.jpg')",
        backgroundPosition: "center",
      }}
      >
    <div className="content">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.3/css/all.min.css"
      />
      <div className="container mx-auto px-4">
        <h1 className="py-4 text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400  to-red-500 text-2xl"><i>Trainers</i></h1>
        

        <div className="flex flex-wrap">
          {trainersData.map((trainer, index) => (
            <div key={index} className="w-full lg:w-1/3 px-4 mb-4">
              <div className="card-box bg-white rounded shadow text-center p-6">
                <div className="member-card">
                  <div className="member-thumb mx-auto w-20 h-24 mb-4">
                    <img
                      src={trainer.image}
                      className="rounded-lg shadow"
                      alt="profile-image"
                    />
                  </div>
                  <h4 className="text-xl font-semibold">{trainer.name}</h4>
                  <p className="text-gray-500">
                    {trainer.role} <span>|</span>
                    <a href="#" className="text-pink-500">
                      {trainer.website}
                    </a>
                  </p>
                  <ul className="social-links list-inline flex justify-center mt-4">
                  <li className="list-inline-item mx-2">
                      <a
                        href={trainer.socialLinks.facebook}
                        title="FaceBook"
                        className="text-blue-600"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item mx-2">
                      <a
                        href={trainer.socialLinks.Instagram}
                        title="Instagram"
                        className="text-blue-600"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item mx-2">
                      <a
                        href={trainer.socialLinks.twitter}
                        title="Twitter"
                        className="text-blue-600"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                 
                  <div className="mt-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-xl font-bold">
                          {trainer.totalfights}
                        </h4>
                        <p className="text-gray-500">Total Fights</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">
                          {trainer.KO}
                        </h4>
                        <p className="text-gray-500">KO's</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">
                          {trainer.record}
                        </h4>
                        <p className="text-gray-500">Records</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
          <button className="bg-blue-400 py-2 px-2 mr-2 rounded-lg">Add Trainer</button>
          <button className="bg-blue-400 py-2 px-2 ml-2 rounded-lg">Edit Trainer</button>
      </div>
    </div>
    </section>
  );
};

export default Trainers;
