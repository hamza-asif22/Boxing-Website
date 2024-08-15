import React from 'react';

const Trainers = () => {
  const trainersData = [
    {
      name: 'Hamza Asif Baig',
      role: 'Founder/CEO',
      website: ' RingWarriors.pk',
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      walletBalance: 2563,
      incomeAmount: 6952,
      transactions: 1125,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        skype: '#',
      },
    },
    {
      name: 'Julie L. Arsenault',
      role: '@Programmer',
      website: 'websitename.com',
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      walletBalance: 8471,
      incomeAmount: 8512,
      transactions: 4751,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        skype: '#',
      },
    },
    {
      name: 'Julie L. Arsenault',
      role: '@Programmer',
      website: 'websitename.com',
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      walletBalance: 8471,
      incomeAmount: 8512,
      transactions: 4751,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        skype: '#',
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
                    <a href="#" className="text-pink-500">{trainer.website}</a>
                  </p>
                  <ul className="social-links list-inline flex justify-center mt-4">
                    <li className="list-inline-item mx-2">
                      <a href={trainer.socialLinks.facebook} title="Facebook" className="text-blue-600">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item mx-2">
                      <a href={trainer.socialLinks.twitter} title="Twitter" className="text-blue-400">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item mx-2">
                      <a href={trainer.socialLinks.skype} title="Skype" className="text-blue-600">
                        <i className="fab fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="mt-4 btn btn-primary bg-blue-500 text-white px-4 py-2 rounded-full"
                  >
                    Message Now
                  </button>
                  <div className="mt-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-2xl font-bold">{trainer.walletBalance}</h4>
                        <p className="text-gray-500">Wallets Balance</p>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">{trainer.incomeAmount}</h4>
                        <p className="text-gray-500">Income amounts</p>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">{trainer.transactions}</h4>
                        <p className="text-gray-500">Total Transactions</p>
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
