import React from "react";

const Trainers = () => {
  const trainersData = [
    {
      name: "Mike Tyson",
      role: "Senior Trainer/Coach",
      website: " RingWarriors.pk",
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
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
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
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
      name: "Mike Tyson",
      role: "Senior Trainer",
      website: " RingWarriors.pk",
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
      totalfights: 58,
      KO: 44,
      record: "50-6",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div className="content">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.3/css/all.min.css"
      />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/3 mb-4">
            <a
              href="#custom-modal"
              className="btn-custom mb-4 inline-flex items-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded shadow"
            >
              <i className="mdi mdi-plus"></i> Add Member
            </a>
          </div>
        </div>

        <div className="flex flex-wrap">
          {trainersData.map((trainer, index) => (
            <div key={index} className="w-full lg:w-1/3 px-4 mb-4">
              <div className="card-box bg-white rounded shadow text-center p-6">
                <div className="member-card">
                  <div className="member-thumb mx-auto w-24 h-24 mb-4">
                    <img
                      src={trainer.image}
                      className="rounded-full shadow"
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
                        <h4 className="text-2xl font-bold">
                          {trainer.totalfights}
                        </h4>
                        <p className="text-gray-500">Total Fights</p>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">
                          {trainer.KO}
                        </h4>
                        <p className="text-gray-500">KO's</p>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">
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
    </div>
  );
};

export default Trainers;
